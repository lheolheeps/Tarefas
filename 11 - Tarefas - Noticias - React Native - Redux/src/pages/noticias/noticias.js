import React, { useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, Picker, TouchableHighlight, TouchableOpacity } from 'react-native';
import styles from './style.js';
import Card from './Card';
import NewsApi from "../../services/NewsApi";
import Noticia from "../../services/Noticia";
import Helper from "../../services/helper";
import { connect } from 'react-redux';

async function obterNoticias(props, tipo, busca = undefined) {
    let noticias = [];
    let vazio = false;
    if (tipo === "favoritos") {
        if (props.favoritos.length === 0) {
            vazio = true;
        } else {
            noticias = props.favoritos;
            noticias.sort((a, b) => Helper.sortAscending(a, b, "data"));
        }
        props.dispatch({ type: 'noticias/Atualizar', noticias: noticias, vazio: vazio, busca: undefined, tipo: 'favoritos', primeira: false });
    } else {
        let newsApi = new NewsApi();
        let json = [];
        if (tipo === "pais") {
            json = await newsApi.getHeadlines({ country: busca });
        } else {
            json = await newsApi.getEverything({ q: busca });
        }
        json.articles.forEach(article => {
            let favorito = false;
            props.favoritos.forEach(noticia => {
                if (article.url === noticia.url)
                    favorito = true;
            })
            let noticia = new Noticia(article.author, article.title, article.description, article.url, article.urlToImage, Helper.retiraLetrasDataHora(article.publishedAt), article.content, article.source.name, favorito);
            noticias.push(noticia);
        });
        if (noticias.length === 0)
            vazio = true;
        props.dispatch({ type: 'noticias/Atualizar', noticias: noticias, vazio: vazio, busca: busca, tipo: tipo, primeira: false });
    }
}

function atualizar(props, tipo, busca) {
    obterNoticias(props, tipo, busca);
}

const Noticias = (props) => {

    useEffect(() => {
        if (props.primeira) {
            obterNoticias(props, props.tipo);
        }
    })

    return (
        <View style={{ flex: 1, backgroundColor: "lightgray", paddingTop: 10 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                <TouchableOpacity
                    onPress={() => {
                        atualizar(props, 'pais');
                        props.navigation.setOptions({ headerTitle: 'Noticias por Pais' });
                    }}>
                    <Text style={styles.botao}>Pais</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        atualizar(props, 'pesquisa')
                        props.navigation.setOptions({ headerTitle: 'Pesquisa de Noticias' })
                    }}>
                    <Text style={styles.botao}>Pesquisa</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        atualizar(props, 'favoritos')
                        props.navigation.setOptions({ headerTitle: 'Noticias Favoritas' })
                    }}>
                    <Text style={styles.botao}>Favoritas</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.opcoes}>
                {(props.tipo === "pesquisa") ?
                    (<TextInput value={props.busca} style={styles.input} placeholder="Sua Busca" onChangeText={(text) => { atualizar(props, props.tipo, text) }} />)
                    : (props.tipo === "pais") ?
                        (<Picker selectedValue={props.busca} style={styles.input} itemStyle={{textAlign: "center", fontVariant: ["small-caps"]}} onValueChange={(itemValue) => atualizar(props, props.tipo, itemValue)}>
                            <Picker.Item label="Brásil" value="br" />
                            <Picker.Item label="Estados Unidos" value="us" />
                        </Picker>)
                        :
                        (<Text></Text>)
                }
            </View>
            <View style={styles.opcoes}>
                <Text>{(props.noticias.length === 0) ? (props.vazio) ? "Nenhuma Noticia Encontrada" : "Buscando Noticias" : ""}</Text>
            </View>
            <FlatList contentContainerStyle={styles.noticias}
                data={props.noticias}
                renderItem={(item) => {
                    return <Card key={item.item.url + item.item.favorito} tipo={props.tipo} noticia={item.item} index={item.index} />
                }}
            />
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        noticias: state.NoticiasReducer.noticias,
        favoritos: state.NoticiasReducer.favoritos,
        vazio: state.NoticiasReducer.vazio,
        tipo: state.NoticiasReducer.tipo,
        busca: state.NoticiasReducer.busca,
        primeira: state.NoticiasReducer.primeira,
    }
}

export default connect(mapStateToProps)(Noticias);
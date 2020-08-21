import React, { useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, Picker } from 'react-native';
import styles from './style.js';
import Card from './card';
import NewsApi from "../../services/NewsApi";
import Noticia from "../../services/Noticia";
import Helper from "../../services/helper";
import { connect } from 'react-redux';

async function obterNoticias(props, busca = undefined) {
    let noticias = [];
    let vazio = false;
    if (props.tipo === "favoritos") {
        // noticiaDAO.listar((lista) => {
        //     lista.sort((a, b) => Helper.sortAscending(a, b, "data"));
        //     noticias = lista;
        //     if (noticias.length === 0)
        //         vazio = true;
        //     props.dispatch({ type: 'noticias/Atualizar', noticias: noticias, vazio: vazio, busca: undefined, tipo: props.tipo });
        // });
    } else {
        let newsApi = new NewsApi();
        let json = [];
        if (props.tipo === "pais") {
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
        props.dispatch({ type: 'noticias/Atualizar', noticias: noticias, vazio: vazio, busca: busca, tipo: props.tipo });
    }
}

function buscar(props, busca) {
    obterNoticias(props, busca);
}

const Noticias = (props) => {

    useEffect(() => {
        if (props.mudou) {
            obterNoticias(props);
        }
    })

    return (
        <View style={{ flex: 1, backgroundColor: "lightgray", paddingTop: 10 }}>
            <View style={styles.opcoes}>
                {(props.tipo === "pesquisa") ?
                    (<Textinput
                        value={props.busca}
                        onChangeText={(text) => { buscar(props, text) }}
                    />)
                    : (props.tipo === "pais") ?
                        (<Picker
                            selectedValue={props.busca}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue) => buscar(props, itemValue)}
                        >
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
            <Button onPress={() => props.navigation.navigate('Favoritos')} title="Favoritas"></Button>
        </View>
    );
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps.route.params.headerTitle, state.NoticiasReducer.tipo);
    return {
        noticias: state.NoticiasReducer.noticias,
        favoritos: state.NoticiasReducer.favoritos,
        vazio: state.NoticiasReducer.vazio,
        tipo: ownProps.route.params.headerTitle,
        busca: state.NoticiasReducer.busca,
        mudou: (state.NoticiasReducer.tipo !== ownProps.route.params.headerTitle) ? true : false
    }
}

export default connect(mapStateToProps)(Noticias);
// export default Noticiass;
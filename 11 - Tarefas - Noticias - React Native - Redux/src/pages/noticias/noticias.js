import React, { useEffect } from 'react';
import { View, Text, FlatList, TextInput, Picker, TouchableOpacity } from 'react-native';
import styles from './style.js';
import Card from './Card';
import { connect } from 'react-redux';

function atualizar(props, tipo, busca) {
    props.dispatch({type: 'noticias/Obter', favoritos: props.favoritos, tipo: tipo, busca: busca})
}

const Noticias = (props) => {

    useEffect(() => {
        if (props.primeira) {
            props.dispatch({type: 'noticias/Obter', favoritos: props.favoritos, tipo: props.tipo, busca: undefined})
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
                            <Picker.Item label="Brasil" value="br" />
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
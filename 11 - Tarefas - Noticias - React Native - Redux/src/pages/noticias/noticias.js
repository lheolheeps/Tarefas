import React from 'react';
import { View, Text, FlatList, TextInput, Picker, TouchableOpacity, RefreshControl } from 'react-native';
import styles from './style.js';
import Paises from '../../services/paises';
import Card from './Card';
import { connect } from 'react-redux';
const paises = Paises();
console.log(paises);
const Noticias = (props) => {
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        props.atualizar(props.favoritos, props.tipo);
        setRefreshing(false)
    };

    React.useEffect(() => {
        if (props.primeira)
            props.atualizar(props.favoritos, props.tipo);
    })

    return (
        <View style={{ flex: 1, backgroundColor: "lightgray", paddingTop: 10 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                <TouchableOpacity
                    onPress={() => {
                        props.atualizar(props.favoritos, 'pais');
                        props.navigation.setOptions({ headerTitle: 'Noticias por Pais' });
                    }}>
                    <Text style={styles.botao}>Pais</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        props.atualizar(props.favoritos, 'pesquisa')
                        props.navigation.setOptions({ headerTitle: 'Pesquisa de Noticias' })
                    }}>
                    <Text style={styles.botao}>Pesquisa</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        props.atualizar(props.favoritos, 'favoritos')
                        props.navigation.setOptions({ headerTitle: 'Noticias Favoritas' })
                    }}>
                    <Text style={styles.botao}>Favoritas</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.opcoes}>
                {(props.tipo === "pesquisa") ?
                    (<TextInput value={props.busca} style={styles.input} placeholder="Sua Busca" onChangeText={(text) => { props.atualizar(props.favoritos, props.tipo, text) }} />)
                    : (props.tipo === "pais") ?
                        (<Picker selectedValue={props.busca} style={styles.input} itemStyle={{ textAlign: "center", fontVariant: ["small-caps"] }} onValueChange={(itemValue) => props.atualizar(props.favoritos, props.tipo, itemValue)}>
                            {paises.map((pais) => {
                                return <Picker.Item label={pais.nome} value={pais.sigla} />
                            })}
                        </Picker>)
                        :
                        (<Text></Text>)
                }
            </View>
            <View style={styles.opcoes}>
                <Text>{(props.primeira || props.buscando) ? "Buscando Noticias" : (props.vazio) ? "Nenhuma Noticia Encontrada" : ""}</Text>
            </View>
            <FlatList contentContainerStyle={styles.noticias}
                data={props.noticias}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
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
        buscando: state.NoticiasReducer.buscando,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        atualizar: (favoritos, tipo, busca) => { dispatch({ type: 'noticias/Obter', favoritos: favoritos, tipo: tipo, busca: busca }) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Noticias);
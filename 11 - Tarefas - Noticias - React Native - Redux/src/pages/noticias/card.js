import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import styles from './style.js';
import imgBlank from "../../img/blank.png";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusSquare, faHeart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Helper from "../../services/helper";

const Card = (props) => {
    return (
        <View style={styles.noticia}>
            <Image style={styles.noticiaImg} source={(props.noticia.urlImg === null) ? imgBlank : { uri: props.noticia.urlImg }} />
            <View style={styles.corpo}>
                <Text style={styles.corpoSpan}>Publicado em {Helper.formataDataHora(props.noticia.data)}</Text>
                <Text style={styles.corpoSpan}>{(props.noticia.autor) ? props.noticia.autor + " - " + props.noticia.canal : props.noticia.canal}</Text>
                <Text style={styles.corpoH3}>{props.noticia.titulo}</Text>
                <Text style={styles.corpoP}>{props.noticia.descricao}</Text>
            </View>
            <View style={styles.acoes}>
                <TouchableOpacity style={[styles.acoesLink, { width: 140, borderRightColor: "black", borderRightWidth: 1 }]}
                    onPress={() => {
                        Linking.openURL(props.noticia.url)
                    }}>
                    <FontAwesomeIcon icon={faPlusSquare} />
                    <Text style={{ fontVariant: ["small-caps"] }}>{" Ver Mais"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.acoesLink}
                    onPress={() => {
                        props.dispatch({ type: "noticias/GerenciarFavoritos", noticia: props.noticia, index: props.index });
                    }}>
                    <Text style={{ fontVariant: ["small-caps"] }}>{(props.noticia.favorito) ? "Desfavoritar " : "Favoritar "}</Text>
                    <FontAwesomeIcon icon={faHeart} color={(props.noticia.favorito) ? "red" : "black"} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default connect()(Card);
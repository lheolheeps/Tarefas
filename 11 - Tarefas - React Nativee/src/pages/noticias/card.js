import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style.js';
import imgBlank from "../../img/blank.png";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusSquare, faHeart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

const Card = (props) => {
    return (
        <View style={styles.noticia}>
            <Image style={styles.noticiaImg} source={(props.noticia.urlImg === null) ? imgBlank : {url: props.noticia.urlImg}} />
            <View style={styles.corpo}>
                <Text style={styles.corpoSpan}>Publicado em {props.noticia.dataFormatada()}</Text>
                <Text style={styles.corpoSpan}>{props.noticia.autorMaisCanal()}</Text>
                <Text style={styles.corpoHr}>{props.noticia.titulo}</Text>
                <Text style={styles.corpoP}>{props.noticia.descricao}</Text>
            </View>
        </View>
    );
}

export default connect()(Card);
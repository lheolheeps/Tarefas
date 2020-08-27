import React from 'react';
import { View, Image } from 'react-native';
import foto from '../../img/perfil.png';
import Text from '../Text';
import styles from './style.js';


const Perfil = (props) => {
    return (
        <View style={[styles.header, styles.centralizado, styles.espacosa]}>
            <Image style={styles.imagem} source={foto} />
            <Text style={styles.titulo}>{props.nome}</Text>
        </View>
    );

};

export default Perfil;
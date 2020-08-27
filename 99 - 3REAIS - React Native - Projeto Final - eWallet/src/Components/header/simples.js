import React from 'react';
import { View } from 'react-native';
import Text from '../Text';
import styles from './style.js';


const Header = (props) => {
    return (
        <View style={[styles.header]}>
            <Text style={[styles.titulo, styles.afastado]}>{props.titulo}</Text>
        </View>
    );
};

export default Header;
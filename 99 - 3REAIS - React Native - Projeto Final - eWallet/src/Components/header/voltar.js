import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Text from '../Text';
import styles from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const Header = (props) => {
    const navigation = useNavigation();
    return (
        <View style={[styles.header]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesomeIcon icon={faArrowLeft} color="white" size={20} style={[styles.afastado, {paddingBottom: 50}]}/>
            </TouchableOpacity>
            <Text style={[styles.titulo, styles.afastado]}>{props.titulo}</Text>
        </View>
    );
};

export default Header;
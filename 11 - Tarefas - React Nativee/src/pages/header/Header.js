import React from 'react';
import logo from '../../img/keep.png';
import SvgMenu from "./svgmenu";
import styles from './style.js';
import { Image, Text, View } from 'react-native';

class Header extends React.Component {

    render() {
        return (
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Image style={styles.logoImg} source={logo} />
                </View>
                <View style={styles.menu}>
                    <SvgMenu style={styles.item} />
                    <Text style={[styles.item, styles.smallCaps]}>menu</Text>
                </View>
            </View>
        );
    }
}

export default Header;
import React from 'react';
import styles from './style.js';
import { View, Text, Switch } from 'react-native';
import { connect } from 'react-redux';

const Tarefa = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.tarefa}>
                <Text style={styles.smallCaps} >Entrega até {props.tarefa.data}</Text>
                <Text style={[styles.smallCaps, { width: 205 }]} >{props.tarefa.descricao}</Text>
            </View>
            <View style={styles.tarefa}>
                <Switch
                    trackColor={{ false: "#222", true: "#ddd" }}
                    thumbColor={props.tarefa.situacao ? "#222" : "#aaa"}
                    onValueChange={() => { props.dispatch({ type: 'tarefas/AlterarSituacao', index: props.index }) }}
                    value={props.tarefa.situacao}
                />
            </View>
        </View>
    );
}

export default connect()(Tarefa);
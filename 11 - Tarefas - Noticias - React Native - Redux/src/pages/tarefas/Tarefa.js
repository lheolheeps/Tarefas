import React from 'react';
import styles from './style.js';
import { View, Text, Switch, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Tarefa = (props) => {
    let riscado = props.tarefa.situacao ? { textDecorationLine: "line-through" } : {};
    return (
        <View style={styles.card}>
            <View style={styles.tarefa}>
                <Text style={[styles.smallCaps, riscado]} >Entrega até {props.tarefa.data}</Text>
                <Text style={[styles.smallCaps, { width: 240, }, riscado]} >{props.tarefa.descricao}</Text>
            </View>
            <View style={[styles.tarefa, styles.acoes]}>
                <TouchableOpacity
                    onPress={() => {
                        Alert.alert(
                            "Excluir Tarefa",
                            'Tem certeza que deseja excluir a tarefa "' + props.tarefa.descricao + '"',
                            [
                                { text: "Cancelar" },
                                { text: "OK", onPress: () => props.dispatch({ type: 'tarefas/Remover', index: props.index }) }
                            ],
                            { cancelable: true }
                        )
                    }}>
                    <FontAwesomeIcon icon={faTrash} color="red" style={{ marginBottom: 15 }} />
                </TouchableOpacity>
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
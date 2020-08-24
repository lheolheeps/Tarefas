import React from 'react';
import styles from './style.js';
import { View, Text, FlatList, TextInput, Button, TouchableOpacity,  StyleSheet } from 'react-native';
import Tarefa from "./Tarefa";
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker'

class Tarefas extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "lightgray", paddingTop: 10 }}>
                <FlatList contentContainerStyle={styles.cards}
                    data={this.props.tarefas}
                    renderItem={(item) => {
                        return <Tarefa key={item.item.id + item.item.situacao} tarefa={item.item} index={item.index} />
                    }}
                    ref="tarefas"
                    onContentSizeChange={() => {
                        this.refs.tarefas.scrollToEnd();
                    }}
                />
                <View style={styles.formulario}>
                    <View style={styles.novo}>
                        <TextInput style={styles.input} onChangeText={(text) => { this.props.guardarTitulo(text) }} value={this.props.novo} placeholder="Insira o Titulo" />
                        <DatePicker
                            style={styles.input}
                            date={this.props.data}
                            mode="date"
                            placeholder="Insira a Data"
                            format="DD/MM/YYYY"
                            confirmBtnText="Confirmar"
                            cancelBtnText="Cancelar"
                            customStyles={{
                                dateIcon: {
                                    width: 0,
                                    height: 0,
                                },
                                dateInput: {
                                    marginRight: -10,
                                    borderWidth: 0,
                                    height: 40,
                                }
                            }}
                            onDateChange={(data) => { this.props.guardarData(data) }}
                        />
                    </View>
                    <TouchableOpacity onPress={() => { this.props.adicionar() }}>
                        <Text style={styles.botao}>Adicionar</Text>
                    </TouchableOpacity>
                    {/* <Button onPress={() => { this.props.adicionar() }} title="Adicionar"></Button> */}
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tarefas: state.TarefasReducer.tarefas,
        inicio: state.TarefasReducer.inicio,
        novo: state.TarefasReducer.novo,
        data: state.TarefasReducer.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        adicionar: () => { dispatch({ type: 'tarefas/Adicionar' }) },
        guardarData: (valor) => { dispatch({ type: 'tarefas/GuardarData', data: valor }) },
        guardarTitulo: (valor) => { dispatch({ type: 'tarefas/GuardarTitulo', novo: valor }) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tarefas);
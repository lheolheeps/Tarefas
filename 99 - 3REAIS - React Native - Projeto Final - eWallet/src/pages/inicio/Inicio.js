import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './style.js';
import Header from '../../Components/header/inicio';
import Extrato from './Extrato';

const Inicio = (props) => {
    return (
        <>
            <Header saldo="396,00" />
            <FlatList style={styles.container}
                data={[
                    {
                        id: '1',
                        tipo: 4,
                        nome: "Transferencia Enviada",
                        origem: "Erilane Silva dos Santos",
                        valor: "20,00",
                        data: "20/20/2020"
                    },
                    {
                        id: '2',
                        tipo: 1,
                        nome: "Deposito por boleto",
                        origem: "",
                        valor: "200,00",
                        data: "20/20/2020"
                    },
                    {
                        id: '3',
                        tipo: 2,
                        nome: "Pagamento de Boletos",
                        origem: "Celesc DIstribuidora",
                        valor: "2,00",
                        data: "20/20/2020"
                    },
                    {
                        id: '4',
                        tipo: 3,
                        nome: "Transferencia Recebida",
                        origem: "Erilane Silva dos Santos",
                        valor: "20,00",
                        data: "20/20/2020"
                    },
                    {
                        id: '5',
                        tipo: 4,
                        nome: "Transferencia Enviada",
                        origem: "Erilane Silva dos Santos",
                        valor: "20,00",
                        data: "20/20/2020"
                    },
                    {
                        id: '6',
                        tipo: 1,
                        nome: "Deposito por boleto",
                        origem: "",
                        valor: "200,00",
                        data: "20/20/2020"
                    },
                    {
                        id: '7',
                        tipo: 2,
                        nome: "Pagamento de Boletos",
                        origem: "Celesc DIstribuidora",
                        valor: "2,00",
                        data: "20/20/2020"
                    },
                    {
                        id: '8',
                        tipo: 3,
                        nome: "Transferencia Recebida",
                        origem: "Erilane Silva dos Santos",
                        valor: "20,00",
                        data: "20/20/2020"
                    },
                ]}
                renderItem={({item, index}) => {
                    return <Extrato key={item.id} transacao={item} index={index} />
                }}
            />
        </>
    );

};

export default Inicio;
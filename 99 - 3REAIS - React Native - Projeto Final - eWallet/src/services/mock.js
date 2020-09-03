// Tipos de Transação
// 1 = Deposito
// 2 = Pagamento 
// 3 = Transferencia Recebida
// 4 = Transferencia Enviada
const mock = {
    usuario: {
        nome: "Felipe Assunção'",
        saldo: "20,00",
        foto: "https://felipeassuncao.com/curriculum/images/lheo.png",
    },
    transacoes: [
        {
            id: '1',
            tipo: 1,
            nome: "Deposito Inicial",
            origem: "Pra você iniciar bem por aqui ;)",
            valor: "20,00",
            data: "3/9/2020"
        },
        // {
        //     id: '1',
        //     tipo: 4,
        //     nome: "Transferencia Enviada",
        //     origem: "Ricardo Gonçalves",
        //     valor: "19,90",
        //     data: "3/9/2020"
        // },
        // {
        //     id: '2',
        //     tipo: 3,
        //     nome: "Transferencia Recebida",
        //     origem: "Sergio Segaty",
        //     valor: "200,00",
        //     data: "3/9/2020"
        // },
        // {
        //     id: '3',
        //     tipo: 2,
        //     nome: "Pagamento de Boletos",
        //     origem: "Celesc DIstribuidora",
        //     valor: "2,00",
        //     data: "3/9/2020"
        // },
        // {
        //     id: '4',
        //     tipo: 3,
        //     nome: "Transferencia Recebida",
        //     origem: "Heitor Silveira",
        //     valor: "21,00",
        //     data: "3/9/2020"
        // },
        // {
        //     id: '5',
        //     tipo: 4,
        //     nome: "Transferencia Enviada",
        //     origem: "Andre Aragon",
        //     valor: "20,00",
        //     data: "3/9/2020"
        // },
        // {
        //     id: '6',
        //     tipo: 1,
        //     nome: "Deposito por boleto",
        //     origem: "",
        //     valor: "200,00",
        //     data: "3/9/2020"
        // },
        // {
        //     id: '7',
        //     tipo: 4,
        //     nome: "Transferencia Enviada",
        //     origem: "Claudionor Silva",
        //     valor: "2,00",
        //     data: "3/9/2020"
        // },
        // {
        //     id: '8',
        //     tipo: 3,
        //     nome: "Transferencia Recebida",
        //     origem: "Lucas Martins",
        //     valor: "20,00",
        //     data: "3/9/2020"
        // },
    ],
    pessoas: [
        {
            nome: "Ricardo Gonçalves",
            telefone: "(99) 99999-9999",
        },
        {
            nome: "Lucas Martins",
            telefone: "(88) 88888-8888",
        },
        {
            nome: "Claudionor Silva",
            telefone: "(77) 77777-7777",
        },
        {
            nome: "Sergio Segaty",
            telefone: "(66) 66666-6666",
        },
        {
            nome: "Andre Aragon",
            telefone: "(55) 55555-5555",
        },
        {
            nome: "Heitor Silveira",
            telefone: "(44) 44444-4444",
        },
    ]
}

export default mock;
// var mockTarefas = [
//     {
//         "id": 1,
//         "descricao": "Estudar HTML",
//         "data": "21/07/2020",
//         "situacao": true
//     },
//     {
//         "id": 2,
//         "descricao": "Estudar CSS",
//         "data": "22/07/2020",
//         "situacao": false
//     },
//     {
//         "id": 3,
//         "descricao": "Estudar JS",
//         "data": "23/07/2020",
//         "situacao": false
//     },
//     {
//         "id": 4,
//         "descricao": "Entregar Sprint",
//         "data": "24/07/2020",
//         "situacao": false
//     },
// ];

// var mockTarefas = JSON.parse(window.localStorage.getItem('mock'));

const objTarefaDAO = new TarefaDAO();
const objTarefaController = new TarefaController();
// objTarefaDAO.listar((lista) => objTarefaController.render(lista));
objTarefaController.obterTarefas();
const objCalculadoraView = new CalculadoraView();
objCalculadoraView.incluirEventos();
// objCalculadoraView.testes();
// objTarefaController.testes();
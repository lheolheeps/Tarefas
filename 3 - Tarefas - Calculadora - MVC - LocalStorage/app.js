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

var mockTarefas = JSON.parse(window.localStorage.getItem('mock'));
if(mockTarefas == null){
    mockTarefas = [];
}

const objTarefa = new Tarefa();
const objTarefaController = new TarefaController();
const objTarefaView = new TarefaView();
const objCalculadoraView = new CalculadoraView();
objTarefaController.render();
objTarefaView.incluirEventos();
objCalculadoraView.incluirEventos();
// objCalculadoraView.testes();
// objTarefaController.testes();
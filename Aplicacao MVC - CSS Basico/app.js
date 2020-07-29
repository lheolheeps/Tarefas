const objTarefa = new Tarefa();
const objTarefaController = new TarefaController();
const objTarefaView = new TarefaView();
const objCalculadoraView = new CalculadoraView();
objTarefaController.render();
objTarefaView.incluirEventos();
objCalculadoraView.incluirEventos();
// objCalculadoraView.testes();
// objTarefaController.testes();
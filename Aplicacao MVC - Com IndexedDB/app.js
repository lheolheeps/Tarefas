/** 
 * Controlador da pagina
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class App {

    constructor() {
        this.tarefaController = new TarefaController();
        this.tarefaControllerTest = new TarefaControllerTest();
        this.calculadoraView = new CalculadoraView();
        this.calculadoraViewTest = new CalculadoraViewTest();
        this.tarefaViewTest = new TarefaViewTest();
    }

    run(){
        this.tarefaController.obterTarefas();
        this.calculadoraView.incluirEventos();
    }

    testes(){
        this.calculadoraViewTest.run();
        this.tarefaViewTest.run();
        this.tarefaControllerTest.run();
    }
}

const app = new App();
app.run();
// app.testes();
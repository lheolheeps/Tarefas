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

window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('service-worker.js');
    }
}

const app = new App();
app.run();
// app.testes();

async function obtemNoticias(){
    let array = await fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=c055c4ef28b941ff802f0d8e925ae920");
    console.log(array);
}
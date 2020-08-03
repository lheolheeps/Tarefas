/** 
 * Testes da calculadora flutuante
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class CalculadoraViewTest {

    constructor() {
        this.calculadoraView = new CalculadoraView();
    }

    run() {
        this.testeImprimeResultado();
        this.testeCalcula();
        this.testeImprimeNumero();
        this.testeDelete();
        this.testeLimpar();
    }

    testeImprimeResultado() {
        this.calculadoraView.visor.innerHTML = "1";
        this.calculadoraView.salvo.innerHTML = "";
        this.calculadoraView.imprimeResultado('+');
        console.log(this.calculadoraView.operacao.innerHTML == "+" && this.calculadoraView.salvo.innerHTML == "1" ? "deu boa" : "deu ruim", "imprimeResultado sem salvo");
        this.calculadoraView.visor.innerHTML = "1";
        this.calculadoraView.salvo.innerHTML = "1";
        this.calculadoraView.imprimeResultado('E');
        console.log(this.calculadoraView.visor.innerHTML == "2" ? "deu boa" : "deu ruim", "imprimeResultado com salvo");
    }

    testeCalcula() {
        let flag = true;
        if (2 !== this.calculadoraView.calcula(1, '+', 1)) {
            flag = false;
        }
        if (5 !== this.calculadoraView.calcula(10, '-', 5)) {
            flag = false;
        }
        if (10 !== this.calculadoraView.calcula(100, '/', 10)) {
            flag = false;
        }
        if (9 !== this.calculadoraView.calcula(3, '*', 3)) {
            flag = false;
        }
        console.log(flag ? "deu boa" : "deu ruim", "calcula");
    }

    testeImprimeNumero() {
        this.calculadoraView.visor.innerHTML = "1";
        this.calculadoraView.imprimeNumero('45');
        console.log(this.calculadoraView.visor.innerHTML == "145" ? "deu boa" : "deu ruim", "imprimeNumero");
    }

    testeLimpar() {
        this.calculadoraView.visor.innerHTML = "145"
        this.calculadoraView.limpar();
        console.log(this.calculadoraView.visor.innerHTML == "0" ? "deu boa" : "deu ruim", "limpar");
    }

    testeDelete() {
        this.calculadoraView.visor.innerHTML = "145";
        this.calculadoraView.deleta();
        console.log(this.calculadoraView.visor.innerHTML == "14" ? "deu boa" : "deu ruim", "delete");
    }
}
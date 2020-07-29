/** 
 * View da calculadora flutuante
 * 
 * Adiciona os metodos de interação dos botões
 * 
 * @version 1.0.2
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class CalculadoraView {

    constructor() {
        this.visor = document.getElementById('visor');
        this.salvo = document.getElementById('salvo');
        this.operacao = document.getElementById('operacao');
    }

    /**
     * Inclui os eventos de clique nos botões da calculadora
     */
    incluirEventos() {
        this.limpar();
        document.getElementById('exibeCalculadora').addEventListener("click", () => this.exibeCalculadora());
        document.getElementById('D').addEventListener("click", () => this.deleta());
        document.getElementById('C').addEventListener("click", () => this.limpar());
        let numeros = document.getElementsByClassName('numeros');
        for (let index = 0; index < numeros.length; index++) {
            numeros[index].addEventListener("click", () => this.imprimeNumero(numeros[index].id));
        }
        let operacoes = document.getElementsByClassName('operacoes');
        for (let index = 0; index < operacoes.length; index++) {
            operacoes[index].addEventListener("click", () => this.imprimeResultado(operacoes[index].id));
        }
    }

    /**
     * Prepara e realiza o calculo proposto pelo usuario.
     * 
     * @param {String} operacao 
     */
    imprimeResultado(operacao) {
        if (this.salvo.innerHTML == "") {
            if (operacao != "E") {
                this.operacao.innerHTML = operacao;
                this.salvo.innerHTML = this.visor.innerHTML;
                this.visor.innerHTML = "0";
            }
            return;
        }
        let resultado = this.calcula(+this.salvo.innerHTML, this.operacao.innerHTML, +this.visor.innerHTML);
        if (operacao == "E") {
            this.visor.innerHTML = resultado;
            this.salvo.innerHTML = "";
            this.operacao.innerHTML = "";
        } else {
            this.salvo.innerHTML = resultado;
            this.operacao.innerHTML = operacao;
            this.visor.innerHTML = "0";
        }
    }

    /**
     * Realiza o calculo proposto
     * 
     * @param {Number} a 
     * @param {String} operacao 
     * @param {Number} b 
     */
    calcula(a, operacao, b) {
        switch (operacao) {
            case '*':
                return a * b;
                break;
            case '/':
                return a / b;
                break;
            case '-':
                return a - b;
                break;
            case '+':
                return a + b;
                break;
            default:
                return 0;
                break;
        }
    }

    /**
     * Exibe o numero clicado pelo usuario
     * 
     * @param {Number} numero 
     */
    imprimeNumero(numero) {
        if (!Number.isNaN(parseInt(numero)) && visor.innerHTML == "0") {
            this.visor.innerHTML = numero;
        } else {
            this.visor.innerHTML = this.visor.innerHTML + numero;
        }
    }

    /**
     * Coloca a calculadora no estado inicial
     */
    limpar() {
        this.visor.innerHTML = "0";
        this.salvo.innerHTML = "";
        this.operacao.innerHTML = "";
    }

    /**
     * Apaga o ultimo numero do visor
     */
    deleta() {
        this.visor.innerHTML = this.visor.innerHTML.substring(0, visor.innerHTML.length - 1);

        if (this.visor.innerHTML == "") {
            this.visor.innerHTML = "0";
        }
    }

    /**
     * Controla a exibição da calculadora
     */
    exibeCalculadora() {
        let calculadora = document.getElementById('calculadora');
        if (calculadora.style.display == "none") {
            calculadora.removeAttribute("style");
        } else {
            calculadora.style.display = 'none';
        }
    }

    /* ---------------------------------------------------------------------------------------------------------------------- */

    testes(){
        this.testeImprimeResultado();
        this.testeCalcula();
        this.testeImprimeNumero();
        this.testeDelete();
        this.testeLimpar();
    }
    
    testeImprimeResultado(){
        this.visor.innerHTML = "1";
        this.salvo.innerHTML = "";
        this.imprimeResultado('+');
        console.log(this.operacao.innerHTML == "+" && this.salvo.innerHTML == "1" ? "imprimeResultado sem salvo deu boa" : "imprimeResultado sem salvo deu ruim");
        this.visor.innerHTML = "1";
        this.salvo.innerHTML = "1";
        this.imprimeResultado('E');
        console.log(this.visor.innerHTML == "2" ? "imprimeResultado com salvo deu boa" : "imprimeResultado com salvo deu ruim");
    }

    testeCalcula(){
        let flag = true;
        if(2 !== this.calcula(1,'+',1)){
            flag = false;
        }
        if(5 !== this.calcula(10,'-',5)){
            flag = false;
        }
        if(10 !== this.calcula(100,'/',10)){
            flag = false;
        }
        if(9 !== this.calcula(3,'*',3)){
            flag = false;
        }
        console.log(flag ? "calcula deu boa" : "calcula deu ruim");
    }

    testeImprimeNumero(){
        this.visor.innerHTML = "1";
        this.imprimeNumero('45');
        console.log(this.visor.innerHTML == "145" ? "imprimeNumero deu boa" : "imprimeNumero deu ruim");
    }

    testeLimpar(){
        this.visor.innerHTML = "145"
        this.limpar();
        console.log(this.visor.innerHTML == "0" ? "limpar deu boa" : "limpar deu ruim");
    }

    testeDelete(){
        this.visor.innerHTML = "145";
        this.deleta();
        console.log(this.visor.innerHTML == "14" ? "delete deu boa" : "delete deu ruim");
    }
}
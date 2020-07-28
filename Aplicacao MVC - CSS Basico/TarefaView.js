/** 
 * View da tabela de Tarefas
 * 
 * Adiciona os metodos de interação dos botões
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class TarefaView {

    constructor() {
        this.tarefaController = new TarefaController();
    }

    /**
     * Inclui os eventos de clique nos botões interativos
     */
    incluirEventos() {
        let adicionar = document.getElementById('adicionar');
        adicionar.addEventListener("click", () => this.adicionar());
        let situacoes = document.getElementsByClassName('check');
        for (let index = 0; index < situacoes.length; index++) {
            situacoes[index].addEventListener("click", () => this.checkTarefa(situacoes[index].id.split("-")[1]));
        }
        let menu = document.getElementById('menu');
        menu.addEventListener("click", () => this.menu());
    }

    /**
     * Muda a cor da tarefa checkada e move ela pro final da lista
     * pra informar que a tarefa foi concluida
     * 
     * @param {Number} id 
     */
    checkTarefa(id) {
        const situacao = document.getElementById('situacao-' + id).checked;
        this.tarefaController.alterarSituacao(situacao);
        this.incluirEventos();
        // let tr = document.getElementById("linha-" + id);
        // const tabela = document.getElementById('tarefas');
        // const situacao = document.getElementById('situacao-' + id).checked;
        // tabela.removeChild(tr);
        // if (situacao) {
        //     tr.style.backgroundColor = "#ddd";
        //     tabela.append(tr);
        // } else {
        //     let primeiratr = document.getElementById('tarefas').rows[0];
        //     tr.removeAttribute("style");
        //     tabela.insertBefore(tr, primeiratr);
        // }
    }

    /**
     * Adiciona uma nova tarefa na tabela
     */
    adicionar() {
        const descricao = document.getElementById('novo');
        const data = document.getElementById('data');
        if (descricao.value != "" && data.value != "") {

            this.tarefaController.adicionar(descricao.value, data.value);
            this.incluirEventos();

            descricao.value = "";
            data.value = "";
        }
    }

    /**
     * Mostra e esconde o menu quando no mobile
     */
    menu() {
        let header = document.getElementsByTagName('header')[0];
        if (header.style.height === "auto") {
            header.removeAttribute("style");
        } else {
            header.style.height = "auto";
        }
    }

}
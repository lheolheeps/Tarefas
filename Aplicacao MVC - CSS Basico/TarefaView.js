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
        let deletes = document.getElementsByClassName('excluir');
        for (let index = 0; index < deletes.length; index++) {
            deletes[index].addEventListener("click", () => this.deletar(deletes[index].id.split("-")[1]));
        }
        document.getElementById('menu').addEventListener("click", () => this.menu());
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
        }
    }

    /**
     * Muda a cor da tarefa checkada e move ela pro final da lista
     * pra informar que a tarefa foi concluida
     * 
     * @param {Number} id 
     */
    checkTarefa(id) {
        const situacao = document.getElementById('situacao-' + id).checked;
        this.tarefaController.alterarSituacao(id, situacao);
        this.incluirEventos();
    }

    /**
     * Exclui tarefa da tabela
     */
    deletar(id) {
        if (confirm("Deseja Excluir esta tarefa?")) {
            this.tarefaController.deletar(id);
            this.incluirEventos();
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
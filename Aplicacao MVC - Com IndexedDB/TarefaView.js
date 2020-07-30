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
        this.section = document.getElementsByClassName('lista')[0];
    }

    /**
     * Cria a tag table com cellspacing 0
     * 
     * @returns {HTMLTableElement} tabela
     */
    criarTabela(tarefas) {
        let tabela = document.createElement('table');
        tabela.className = "tabelaLista";
        tabela.setAttribute("cellspacing", 0);
        tabela.append(this.criarCabecalho());
        tabela.append(this.criarConteudo(tarefas));
        tabela.append(this.criarRodape());
        this.section.innerHTML = "";
        this.section.append(tabela);
    }

    /**
     * Cria a tag thead junto ao dados do cabeçalho
     * 
     * @returns {HTMLTableHeaderCellElement} thead
     */
    criarCabecalho() {
        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        th.innerHTML = "Tarefa";
        tr.append(th);
        th = document.createElement('th');
        th.innerHTML = "Entrega";
        tr.append(th);
        th = document.createElement('th');
        th.innerHTML = "Ações";
        tr.append(th);
        thead.append(tr);
        return thead;
    }

    /**
     * Cria a tag tbody junto ao dados do conteudo
     * 
     * @param {Array} tarefas
     * 
     * @returns {HTMLBodyElement} tbody
     */
    criarConteudo(tarefas) {
        let tbody = document.createElement('tbody');
        tbody.id = "tarefas";
        tarefas.forEach(element => {
            let tr = this.criarLinha(element);
            tbody.append(tr);
        }, this);
        return tbody
    }


    /**
     * Cria as linhas do body da tabela Utilizando os dados 
     * recebidos do model Tarefa
     * 
     * @param {Tarefa} tarefa
     * 
     * @returns {HTMLTableRowElement} tr
     */
    criarLinha(tarefa) {
        let tr = document.createElement('tr');
        tr.id = "linha-" + tarefa.id;
        tr.style.backgroundColor = tarefa.situacao ? "#ddd" : "";
        let descricao = document.createElement('td');
        descricao.innerHTML = tarefa.descricao;
        tr.append(descricao);
        let data = document.createElement('td');
        data.innerHTML = tarefa.data;
        tr.append(data);
        let acao = document.createElement('td');
        // let checkbox = document.createElement('input');
        // checkbox.type = "checkbox";
        // checkbox.className = "check";
        // checkbox.checked = tarefa.situacao ? true : false;
        // checkbox.id = "situacao-" + tarefa.id;
        // acao.append(checkbox);
        let icon = document.createElement('span');
        icon.className = 'fas fa-trash';
        let excluir = document.createElement('a');
        excluir.href = '#';
        excluir.className = "excluir";
        excluir.id = "excluir-" + tarefa.id;
        excluir.style = "color: red;";
        excluir.append(icon);
        acao.append(excluir);
        tr.append(acao);
        return tr;
    }

    /**
     * Cria a tag tfoot junto ao formulario de adição de tarefas
     * 
     * @returns {HTMLDocument} tfoot
     */
    criarRodape() {
        let tfoot = document.createElement('tfoot');
        let tr = document.createElement('tr');
        tr.id = "formulario";
        let td = document.createElement('td');
        let input = document.createElement('input');
        input.type = "text"
        input.id = "novo";
        td.append(input);
        tr.append(td);
        td = document.createElement('td');
        input = document.createElement('input');
        input.type = "date"
        input.id = "data";
        td.append(input);
        tr.append(td);
        td = document.createElement('td');
        input = document.createElement('input');
        input.type = "submit"
        input.id = "adicionar";
        input.value = "Adicionar";
        td.append(input);
        tr.append(td);
        tfoot.append(tr);
        return tfoot;
    }

    /**
     * Inclui os eventos de clique nos botões interativos
     */
    incluirEventos(tarefaController) {
        let adicionar = document.getElementById('adicionar');
        adicionar.addEventListener("click", () => tarefaController.adicionar());
        let situacoes = document.getElementsByClassName('check');
        for (let index = 0; index < situacoes.length; index++) {
            situacoes[index].addEventListener("click", () => tarefaController.checkTarefa(situacoes[index].id.split("-")[1]));
        }
        let deletes = document.getElementsByClassName('excluir');
        for (let index = 0; index < deletes.length; index++) {
            deletes[index].addEventListener("click", () => tarefaController.deletar(deletes[index].id.split("-")[1]));
        }
        document.getElementById('menu').addEventListener("click", () => this.menu());
    }

    getForm(){
        return {
            "descricao": document.getElementById('novo').value,
            "data": document.getElementById('data').value
        };
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
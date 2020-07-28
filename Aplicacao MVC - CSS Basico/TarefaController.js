/** 
 * Controlador da tabela de Tarefas
 * 
 * Renderiza a tabela no html
 * 
 * @version 1.0.2
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class TarefaController {

    constructor() {
        this.tarefa = new Tarefa();
        this.section = document.getElementsByClassName('lista')[0];
    }
    
    /**
     * Renderiza a tabela no html
     */
    render() {
        this.section.innerHTML = "";
        let tarefas = this.tarefa.listar();
        let tabela = this.criarTabela();
        tabela.append(this.criarCabecalho());
        tabela.append(this.criarConteudo(tarefas));
        tabela.append(this.criarRodape());
        this.section.append(tabela);
    }

    /**
     * Cria a tag table com cellspacing 0
     * 
     * @returns {HTMLTableElement} tabela
     */
    criarTabela() {
        let tabela = document.createElement('table');
        tabela.className = "tabelaLista";
        tabela.setAttribute("cellspacing", 0);
        return tabela
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
    criarConteudo(tarefas){
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
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.className = "check";
        checkbox.checked = tarefa.situacao ? true : false;
        checkbox.id = "situacao-" + tarefa.id;
        acao.append(checkbox);
        // let icon = document.createElement('span');
        // icon.className = 'fas fa-edit';
        // let editar = document.createElement('a');
        // editar.href = '#';
        // editar.style = "color: blue";
        // editar.append(icon);
        // acao.append(editar);
        // icon = document.createElement('span');
        // icon.className = 'fas fa-check';
        // let check = document.createElement('a');
        // check.href = '#';
        // check.append(icon);
        // acao.append(check);
        // icon = document.createElement('span');
        // icon.className = 'fas fa-trash';
        // let excluir = document.createElement('a');
        // excluir.href = '#';
        // excluir.style = "color: red";
        // excluir.append(icon);
        // acao.append(excluir);
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

    adicionar(descricao, data){
        let tarefa = new Tarefa();
        tarefa.id = mockTarefas.length + 2;
        tarefa.descricao = descricao;
        tarefa.data = Helper.formataData(data);
        tarefa.situacao = false;
        this.tarefa.inserir(tarefa);
        this.render();
    }

    alterarSituacao(descricao, data){
        let tarefa = new Tarefa();
        tarefa.id = mockTarefas.length + 2;
        tarefa.descricao = descricao;
        tarefa.data = Helper.formataData(data);
        tarefa.situacao = false;
        this.tarefa.inserir(tarefa);
        this.render();
    }
}
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
        let tarefas = this.obterTarefas();
        let tabela = this.criarTabela();
        tabela.append(this.criarCabecalho());
        tabela.append(this.criarConteudo(tarefas));
        tabela.append(this.criarRodape());
        this.section.innerHTML = "";
        this.section.append(tabela);
    }

    obterTarefas(){
        return this.tarefa.listar();
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
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.className = "check";
        checkbox.checked = tarefa.situacao ? true : false;
        checkbox.id = "situacao-" + tarefa.id;
        acao.append(checkbox);
        let icon = document.createElement('span');
        // icon.className = 'fas fa-edit';
        // let editar = document.createElement('a');
        // editar.href = '#';
        // editar.style = "color: blue;";
        // editar.append(icon);
        // acao.append(editar);
        // icon = document.createElement('span');
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
     * Adiciona uma tarefa na Lista
     * 
     * @param {String} descricao 
     * @param {String} data 
     * 
     * @returns {Number} id
     */
    adicionar(descricao, data) {
        let tarefa = new Tarefa();
        tarefa.id = mockTarefas.length + 1;
        tarefa.descricao = descricao;
        tarefa.data = Helper.formataData(data);
        tarefa.situacao = false;
        let id = this.tarefa.inserir(tarefa);
        this.render();
        return id;
    }

    /**
     * Altera a situacao de uma tarefa
     * 
     * @param {Number} id 
     * @param {Boolean} situacao
     */
    alterarSituacao(id, situacao) {
        this.tarefa.atualizar(id, situacao);
        this.render();
    }

    deletar(id){
        this.tarefa.excluir(id);
        this.render();
    }

    /* ---------------------------------------------------------------------------------------------------------------------- */

    testes() {
        let dados = this.disponibilizarMock();
        this.testeCriaTabela();
        this.testeCriaRodape();
        this.testeCriaConteudo(dados.mockTarefaTeste);
        this.testeCriaLinha(dados.tarefaTeste);
        this.testeCriaRodape();
        let id = this.testeAdicionar(dados.tarefaTeste);
        this.testeAlteraSituacao(id);
        this.testeDeletar(id);
        this.testeObterTarefas(dados.tarefaTeste);
    }

    testeDeletar(id){
        this.deletar(id);
        let tarefa = this.tarefa.obter(id);
        console.log(tarefa == undefined ? "deletar deu boa" : "deletar deu ruim");
    }

    testeObterTarefas(tarefaTeste){
        let aux = mockTarefas;
        mockTarefas = [];
        console.log(this.obterTarefas().length == 0 ? "obterTarefas vazio deu boa" : "obterTarefas vazio deu ruim");
        this.adicionar(tarefaTeste.descricao, tarefaTeste.data);
        this.adicionar(tarefaTeste.descricao, tarefaTeste.data);
        let tarefas = this.obterTarefas();
        let passou = tarefaTeste.descricao == tarefas[1].descricao && Helper.formataData(tarefaTeste.data) == tarefas[1].data  && false == tarefas[1].situacao; 
        console.log(passou ? "obterTarefas preenchido deu boa" : "obterTarefas preenchido deu ruim");
        mockTarefas = aux;
        this.render();
    }

    testeCriaTabela() {
        let table = '<table class="tabelaLista" cellspacing="0"></table>';
        console.log(table == this.criarTabela().outerHTML ? "criarTabela deu boa" : "criarTabela deu ruim");
    }

    testeCriaRodape() {
        let tfoot = '<tr id="formulario"><td><input type="text" id="novo"></td><td><input type="date" id="data"></td><td><input type="submit" id="adicionar" value="Adicionar"></td></tr>';
        console.log(tfoot == this.criarRodape().innerHTML ? "criarRodape deu boa" : "criarRodape deu ruim");
    }

    testeCriaRodape() {
        let thead = "<tr><th>Tarefa</th><th>Entrega</th><th>Ações</th></tr>";
        console.log(thead == this.criarCabecalho().innerHTML ? "criarCabecalho deu boa" : "criarCabecalho deu ruim");
    }

    testeCriaLinha(tarefaTeste){
        let tr = '<tr id="linha-999" style="background-color: rgb(221, 221, 221);"><td>Tarefa Teste</td><td>2012-12-21</td><td><input type="checkbox" class="check" id="situacao-999"><a href="#" class="excluir" id="excluir-999" style="color: red;"><span class="fas fa-trash"></span></a></td></tr>';
        
        console.log(tr == this.criarLinha(tarefaTeste).outerHTML ? "criarLinha true deu boa" : "criarLinha true deu ruim");
        tarefaTeste.situacao = false;
        tr = '<tr id="linha-999"><td>Tarefa Teste</td><td>2012-12-21</td><td><input type="checkbox" class="check" id="situacao-999"><a href="#" class="excluir" id="excluir-999" style="color: red;"><span class="fas fa-trash"></span></a></td></tr>';
        console.log(tr == this.criarLinha(tarefaTeste).outerHTML ? "criarLinha false deu boa" : "criarLinha false deu ruim");
    }

    testeCriaConteudo(tarefas){
        let tbody = '<tbody id="tarefas"><tr id="linha-1"><td>Tarefa Mockada 1</td><td>21/12/2012</td><td><input type="checkbox" class="check" id="situacao-1"><a href="#" class="excluir" id="excluir-1" style="color: red;"><span class="fas fa-trash"></span></a></td></tr><tr id="linha-2"><td>Tarefa Mockada 2</td><td>21/12/2012</td><td><input type="checkbox" class="check" id="situacao-2"><a href="#" class="excluir" id="excluir-2" style="color: red;"><span class="fas fa-trash"></span></a></td></tr></tbody>';
        console.log(tbody == this.criarConteudo(tarefas).outerHTML ? "criarConteudo deu boa" : "criarConteudo deu ruim");
    }

    testeAdicionar(tarefaTeste){
        let id = this.adicionar(tarefaTeste.descricao, tarefaTeste.data);
        let tarefa = this.tarefa.obter(id);
        let passou = tarefa.descricao == tarefaTeste.descricao && tarefa.data == Helper.formataData(tarefaTeste.data) && tarefa.situacao == false; 
        console.log(passou ? "adicionar deu boa" : "adicionar deu ruim");
        return id;
    }

    testeAlteraSituacao(id){
        this.alterarSituacao(id,true);
        let tarefa = this.tarefa.obter(id);
        console.log(tarefa.situacao ? "alterarSituacao true deu boa" : "alterarSituacao true deu ruim");
        this.alterarSituacao(id,false);
        tarefa = this.tarefa.obter(id);
        console.log(!tarefa.situacao ? "alterarSituacao false deu boa" : "alterarSituacao false deu ruim");
    }

    disponibilizarMock() {
        let mockTarefaTeste = [
            {
                "id": 1,
                "descricao": "Tarefa Mockada 1",
                "data": "21/12/2012",
                "situacao": false
            },
            {
                "id": 2,
                "descricao": "Tarefa Mockada 2",
                "data": "21/12/2012",
                "situacao": false
            }
        ];

        let tarefaTeste = new Tarefa();
        tarefaTeste.id = 999;
        tarefaTeste.descricao = "Tarefa Teste";
        tarefaTeste.data = '2012-12-21';
        tarefaTeste.situacao = true;

        return {'mockTarefaTeste': mockTarefaTeste, 'tarefaTeste': tarefaTeste};
    }
}
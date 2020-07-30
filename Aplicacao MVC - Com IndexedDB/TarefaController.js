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
        this.tarefaDAO = new TarefaDAO();
        this.tarefaView = new TarefaView();
    }

    /**
     * Obtem as tarefas da base
     */

    obterTarefas() {
        this.tarefaDAO.listar((lista) => this.render(lista));
    }

    /**
     * Renderiza a tabela no html
     */
    render(tarefas) {
        tarefas.sort(function (a, b) {
            if (a.situacao > b.situacao) {
                return 1;
            }
            if (a.situacao < b.situacao) {
                return -1;
            }
            return 0;
        });
        this.tarefaView.criarTabela(tarefas);
        this.tarefaView.incluirEventos(this);
    }

    /**
     * Adiciona uma tarefa na Lista
     * 
     * @param {String} descricao 
     * @param {String} data 
     * 
     * @returns {Number} id
     */
    adicionar() {
        let dados = this.tarefaView.getForm();
        let tarefa = new Tarefa();
        tarefa.descricao = dados.descricao;
        tarefa.data = Helper.formataData(dados.data);
        tarefa.situacao = false;
        let id = this.tarefaDAO.inserir(tarefa, () => this.obterTarefas());
        // this.render();
        // return id;
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

    /**
     * Deletar uma tarefa
     * 
     * @param {Number} id 
     */
    deletar(id) {
        this.tarefaDAO.excluir(id, () => this.obterTarefas());
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

    testeDeletar(id) {
        this.deletar(id);
        let tarefa = this.tarefa.obter(id);
        console.log(tarefa == undefined ? "deletar deu boa" : "deletar deu ruim");
    }

    testeObterTarefas(tarefaTeste) {
        let aux = mockTarefas;
        mockTarefas = [];
        console.log(this.obterTarefas().length == 0 ? "obterTarefas vazio deu boa" : "obterTarefas vazio deu ruim");
        this.adicionar(tarefaTeste.descricao, tarefaTeste.data);
        this.adicionar(tarefaTeste.descricao, tarefaTeste.data);
        let tarefas = this.obterTarefas();
        let passou = tarefaTeste.descricao == tarefas[1].descricao && Helper.formataData(tarefaTeste.data) == tarefas[1].data && false == tarefas[1].situacao;
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

    testeCriaLinha(tarefaTeste) {
        let tr = '<tr id="linha-999" style="background-color: rgb(221, 221, 221);"><td>Tarefa Teste</td><td>2012-12-21</td><td><input type="checkbox" class="check" id="situacao-999"><a href="#" class="excluir" id="excluir-999" style="color: red;"><span class="fas fa-trash"></span></a></td></tr>';

        console.log(tr == this.criarLinha(tarefaTeste).outerHTML ? "criarLinha true deu boa" : "criarLinha true deu ruim");
        tarefaTeste.situacao = false;
        tr = '<tr id="linha-999"><td>Tarefa Teste</td><td>2012-12-21</td><td><input type="checkbox" class="check" id="situacao-999"><a href="#" class="excluir" id="excluir-999" style="color: red;"><span class="fas fa-trash"></span></a></td></tr>';
        console.log(tr == this.criarLinha(tarefaTeste).outerHTML ? "criarLinha false deu boa" : "criarLinha false deu ruim");
    }

    testeCriaConteudo(tarefas) {
        let tbody = '<tbody id="tarefas"><tr id="linha-1"><td>Tarefa Mockada 1</td><td>21/12/2012</td><td><input type="checkbox" class="check" id="situacao-1"><a href="#" class="excluir" id="excluir-1" style="color: red;"><span class="fas fa-trash"></span></a></td></tr><tr id="linha-2"><td>Tarefa Mockada 2</td><td>21/12/2012</td><td><input type="checkbox" class="check" id="situacao-2"><a href="#" class="excluir" id="excluir-2" style="color: red;"><span class="fas fa-trash"></span></a></td></tr></tbody>';
        console.log(tbody == this.criarConteudo(tarefas).outerHTML ? "criarConteudo deu boa" : "criarConteudo deu ruim");
    }

    testeAdicionar(tarefaTeste) {
        let id = this.adicionar(tarefaTeste.descricao, tarefaTeste.data);
        let tarefa = this.tarefa.obter(id);
        let passou = tarefa.descricao == tarefaTeste.descricao && tarefa.data == Helper.formataData(tarefaTeste.data) && tarefa.situacao == false;
        console.log(passou ? "adicionar deu boa" : "adicionar deu ruim");
        return id;
    }

    testeAlteraSituacao(id) {
        this.alterarSituacao(id, true);
        let tarefa = this.tarefa.obter(id);
        console.log(tarefa.situacao ? "alterarSituacao true deu boa" : "alterarSituacao true deu ruim");
        this.alterarSituacao(id, false);
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

        return { 'mockTarefaTeste': mockTarefaTeste, 'tarefaTeste': tarefaTeste };
    }
}
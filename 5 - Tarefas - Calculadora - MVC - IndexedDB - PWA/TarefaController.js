/** 
 * Controlador da tabela de Tarefas
 * 
 * Renderiza a tabela no html
 * 
 * @version 1.5.0
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
    adicionar(dados, callback) {
        let tarefa = new Tarefa();
        tarefa.descricao = dados.descricao;
        tarefa.data = Helper.formataData(dados.data);
        tarefa.situacao = false;
        this.tarefaDAO.inserir(tarefa, callback);
    }

    /**
     * Altera a situacao de uma tarefa
     * 
     * @param {Number} id 
     * @param {Boolean} situacao
     */
    alterarSituacao(id, situacao, callback) {
        this.tarefaDAO.obter(id, (tarefa) => {
            tarefa.situacao = situacao;
            this.tarefaDAO.alterar(tarefa, callback);
        });
    }

    /**
     * Deletar uma tarefa
     * 
     * @param {Number} id 
     */
    deletar(id, callback) {
        this.tarefaDAO.excluir(id, callback);
    }

    /**
     * Obter uma tarefa
     * 
     * @param {Number} id 
     */
    obter(id, callback) {
        this.tarefaDAO.obter(id, callback);
    }
}
/** 
 * Modelo da tabela de Tarefas
 * 
 * Manipula os dados das Tarefas
 * 
 * @version 1.0.2
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class Tarefa {

    /**
     * Construtor do Objeto
     * 
     * @param {Number} id 
     * @param {String} descricao 
     * @param {String} data 
     * @param {Boolean} situacao 
     */
    constructor(id, descricao, data, situacao) {
        this.id = id;
        this.descricao = descricao;
        this.data = data;
        this.situacao = situacao;
    }

    /**
     * Obtem todas as tarefas salvas
     * 
     * @returns {Array} tarefas
     */

    async listar() {
        let tarefas = await this.tarefaDAO.listar();
        console.log(tarefas);
        // let tarefas = [];
        tarefas.sort(function (a, b) {
            if (a.situacao > b.situacao) {
                return 1;
            }
            if (a.situacao < b.situacao) {
                return -1;
            }
            return 0;
        });
        return tarefas;
    }

    /**
     * Inserir tarefa na base
     * 
     * @param {Tarefa} tarefa
     * 
     * @returns {Number}
     */
    inserir(tarefa) {
        mockTarefas.push(tarefa);
        window.localStorage.setItem('mock', JSON.stringify(mockTarefas));
        return mockTarefas.length;
    }

    /**
     * Obter tarefa da base
     * 
     * @param {Number} id
     * 
     * @returns {Tarefa} tarefa
     */
    obter(id) {
        const tarefa = mockTarefas.find(element => element.id == id);
        return tarefa;
    }

    /**
     * Atualiza tarefa na base
     * 
     * @param {Tarefa} tarefa
     * 
     * @returns {Boolean}
     */
    atualizar(id, situacao){
        let tarefa = this.obter(id);
        tarefa.situacao = situacao;
        window.localStorage.setItem('mock', JSON.stringify(mockTarefas));
        return true;
    }

    /**
     * Excluir uma tarefa da base
     * 
     * @param {Number} id
     * 
     * @returns {Boolean}
     */
    excluir(id){
        let tarefa = this.obter(id);
        mockTarefas.splice(mockTarefas.indexOf(tarefa), 1);
        window.localStorage.setItem('mock', JSON.stringify(mockTarefas));
    }
}
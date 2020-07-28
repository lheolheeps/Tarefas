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
     * Obtem as tarefas salvas
     * 
     * @returns {Array} tarefas
     */

    listar() {
        let tarefas = [];
        mockTarefas.sort(function (a, b) {
            if (a.situacao > b.situacao) {
                return 1;
            }
            if (a.situacao < b.situacao) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
        console.log(mockTarefas);
        mockTarefas.forEach(element => {
            let tarefa = new Tarefa(element.id, element.descricao, element.data, element.situacao)
            tarefas.push(tarefa);
        });
        return tarefas;
    }

    /**
     * Inserir tarefa na base
     * 
     * @param {Tarefa} tarefa
     * 
     * @returns {boolean}
     */
    inserir(tarefa) {
        mockTarefas.push(tarefa);
        return true;
    }
}
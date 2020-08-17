/** 
 * Modelo da tabela de Tarefas
 * 
 * Manipula os dados das Tarefas
 * 
 * @version 2.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

import Helper from "./helper";

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

    dataFormatada(){
        return Helper.formataData(this.data);
    }
}

export default Tarefa;
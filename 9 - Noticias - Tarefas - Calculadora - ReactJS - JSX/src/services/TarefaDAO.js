import IndexedDB from './IndexedDB';
import Tarefa from './Tarefa';

/** 
 * Controlador de Banco de Dados
 * 
 * @version 1.2.7
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class TarefaDAO {
    conexao;

    constructor() {
        this.conexao = new IndexedDB().conectar();
    }

    /**
     * Inserir tarefa na base
     * 
     * @param {Tarefa} tarefa
     */
    async inserir(tarefa) {
        let transaction = (await this.conexao).transaction("tarefa", "readwrite");
        let objectStore = transaction.objectStore("tarefa");
        let request = objectStore.add(tarefa)
        request.onsuccess = () => {
            tarefa.id = request.result;
            objectStore.put(tarefa, request.result);
        }
    }

    /**
     * Obtem todas as tarefas salvas
     * 
     * @param {Function} callback 
     */
    listar() {
        return new Promise(async (result) => {
            let transaction = (await this.conexao).transaction("tarefa", "readonly");
            let objectStore = transaction.objectStore("tarefa");
            var lista = [];
            objectStore.openCursor().onsuccess = function (event) {
                var cursor = event.target.result;
                if (cursor) {
                    let tarefa = new Tarefa(cursor.value.id, cursor.value.descricao, cursor.value.data, cursor.value.situacao);
                    lista.push(tarefa);
                    cursor.continue();
                } else {
                    result(lista);
                }
            };
        })
    }

    /**
     * Obter uma tarefa da base
     * 
     * @param {Number} id
     * @param {Function} callback 
     */
    async obter(id, callback) {
        let transaction = (await this.conexao).transaction("tarefa", "readonly");
        let objectStore = transaction.objectStore("tarefa");
        objectStore.get(parseInt(id)).onsuccess = (request) => {
            let tarefa = false;
            if (request.target.result !== undefined) {
                tarefa = new Tarefa(request.target.result.id, request.target.result.descricao, request.target.result.data, request.target.result.situacao);
            }
            callback(tarefa);
        }
    }

    /**
     * Alterar uma tarefa da base
     * 
     * @param {Tarefa} tarefa
     */
    async alterar(tarefa) {
        let transaction = (await this.conexao).transaction("tarefa", "readwrite");
        let objectStore = transaction.objectStore("tarefa");
        objectStore.put(tarefa, parseInt(tarefa.id));

    }

    /**
     * Excluir uma tarefa da base
     * 
     * @param {Number} id
     */
    async excluir(id) {
        let transaction = (await this.conexao).transaction("tarefa", "readwrite");
        let objectStore = transaction.objectStore("tarefa");
        objectStore.delete(parseInt(id));
    }

}

export default TarefaDAO;
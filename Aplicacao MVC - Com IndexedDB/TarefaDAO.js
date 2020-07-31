/** 
 * Controlador de Banco de Dados
 * 
 * @version 1.2.7
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class TarefaDAO {
    db;
    dbname = "Tarefas";
    request;
    transaction;
    objectStore;

    /**
     * Conecta com o banco de dados e executa a funcão desejada
     * 
     * @param {Function} callback 
     * @param {String} read 
     */
    conectar(callback, read = "readonly") {
        this.request = window.indexedDB.open(this.dbname, 1);

        this.request.onerror = (event) => console.log("Erro ao abrir o banco de dados. ", event);

        this.request.onupgradeneeded = (event) => {
            console.log("Atualizando banco de dados");
            this.db = event.target.result;
            this.objectStore = this.db.createObjectStore(this.dbname, { autoIncrement: true });
            this.objectStore.createIndex("id", "id", { unique: true });
            this.objectStore.createIndex("descricao", "descricao", { unique: false });
            this.objectStore.createIndex("data", "data", { unique: false });
            this.objectStore.createIndex("situacao", "situacao", { unique: false });
        };

        this.request.onsuccess = (event) => {
            // console.log("Banco de dados aberto com sucesso.");
            this.db = event.target.result;
            this.transaction = this.db.transaction(this.dbname, read);
            this.objectStore = this.transaction.objectStore(this.dbname);
            callback();
        };

    }

    /**
     * Obtem todas as tarefas salvas
     * 
     * @param {Function} callback 
     * 
     * @returns {Array} lista
     */
    listar(callback) {
        this.conectar(() => {
            var lista = [];
            this.objectStore.openCursor().onsuccess = function (event) {
                var cursor = event.target.result;
                if (cursor) {
                    let tarefa = new Tarefa(cursor.key, cursor.value.descricao, cursor.value.data, cursor.value.situacao);
                    lista.push(tarefa);
                    cursor.continue();
                } else {
                    callback(lista);
                }
            };
        });
    }

    /**
     * Inserir tarefa na base
     * 
     * @param {Tarefa} tarefa
     * @param {Function} callback 
     */
    inserir(tarefa, callback) {
        this.conectar(() => {
            let request = this.objectStore.add(tarefa);
            request.onsuccess = () => {
                tarefa.id = request.result;
                this.alterar(tarefa, callback);
            }
        }, "readwrite");
    }

    /**
     * Excluir uma tarefa da base
     * 
     * @param {Number} id
     * @param {Function} callback 
     */
    excluir(id, callback) {
        this.conectar(() => {
            let request = this.objectStore.delete(parseInt(id));
            request.onsuccess = () => {
                if (callback != undefined) {
                    callback();
                }
            }
        }, "readwrite");

    }

    /**
     * Obter uma tarefa da base
     * 
     * @param {Number} id
     * @param {Function} callback 
     */
    obter(id, callback) {
        this.conectar(() => {
            let request = this.objectStore.get(parseInt(id));
            request.onsuccess = () => {
                let tarefa;
                if (request.result != undefined) {
                    tarefa = new Tarefa(request.result.id, request.result.descricao, request.result.data, request.result.situacao);
                }
                callback(tarefa);
            }
        });
    }

    /**
     * Alterar uma tarefa da base
     * 
     * @param {Tarefa} tarefa
     * @param {Function} callback 
     */
    alterar(tarefa, callback) {
        this.conectar(() => {
            let request = this.objectStore.put(tarefa, parseInt(tarefa.id));
            request.onsuccess = (evento) => {
                if (callback != undefined) {
                    callback(evento);
                }
            }
        }, "readwrite");

    }

}
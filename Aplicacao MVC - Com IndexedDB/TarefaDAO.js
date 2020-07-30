/** 
 * Controlador de Banco de Dados
 * 
 * @version 1.0.0
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
            console.log("Banco de dados aberto com sucesso.");
            this.db = event.target.result;
            this.transaction = this.db.transaction(this.dbname, read);
            this.objectStore = this.transaction.objectStore(this.dbname);
            callback();
        };

    }

    /**
     * Obtem todas as tarefas salvas
     * 
     * @returns {Array} lista
     */
    listar(callback) {
        // TO-DO = rever lista no cursor
        this.conectar(() => {
            var lista = [];
            // let request = this.objectStore.getAll();
            // request.onsuccess = function () {
            //     callback(request.result);
            // }
            this.objectStore.openCursor().onsuccess = function (event) {
                var cursor = event.target.result;
                if (cursor) {
                    let tarefa = new Tarefa(cursor.key, cursor.value.descricao, cursor.value.data, cursor.value.situacao);
                    lista.push(tarefa);
                    cursor.continue();
                }
                callback(lista);
            };
        });
    }

    /**
     * Inserir tarefa na base
     * 
     * @param {Tarefa} tarefa
     */
    inserir(tarefa, callback) {
        this.conectar(() => {
            let result = this.objectStore.add(tarefa);
            result.onsuccess = () => {
                callback();
            }
        }, "readwrite");
    }

    /**
     * Excluir uma tarefa da base
     * 
     * @param {Number} id
     */
    excluir(id, callback) {
        this.conectar(() => {
            let result = this.objectStore.delete(parseInt(id));
            result.onsuccess = () => {
                callback();
            }
        }, "readwrite");

    }

}
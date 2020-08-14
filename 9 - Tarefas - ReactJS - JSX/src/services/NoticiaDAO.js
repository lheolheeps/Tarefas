import IndexedDB from './IndexedDB';
import Noticia from './Noticia';

/** 
 * Interação com base de dados das Noticias
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class NoticiaDAO {
    conexao;

    constructor() {
        this.conexao = new IndexedDB().conectar();
    }

    /**
     * Inserir noticia na base
     * 
     * @param {Noticia} noticia
     */
    async inserir(noticia) {
        let transaction = (await this.conexao).transaction("noticia", "readwrite");
        let objectStore = transaction.objectStore("noticia");
        objectStore.add(noticia);
    }

    /**
     * Obter Noticias da base
     * 
     * @param {Function} callback 
     */
    async listar(callback) {
        let transaction = (await this.conexao).transaction("noticia", "readonly");
        let objectStore = transaction.objectStore("noticia");
        var noticias = [];
        objectStore.openCursor().onsuccess = function (event) {
            var cursor = event.target.result;
            if (cursor) {
                let noticia = new Noticia(cursor.value.autor, cursor.value.titulo, cursor.value.descricao, cursor.value.url, cursor.value.urlImg, cursor.value.data, cursor.value.conteudo, cursor.value.canal, true);
                noticias.push(noticia);
                cursor.continue();
            } else {
                callback(noticias);
            }
        };
    }

    /**
     * Obter uma noticia da base
     * 
     * @param {String} url chave do registro
     * @param {Function} callback 
     */
    async obter(url, callback) {
        let transaction = (await this.conexao).transaction("noticia", "readwrite");
        let objectStore = transaction.objectStore("noticia");
        let request = objectStore.get(url);
        request.onsuccess = () => {
            let noticia = false;
            if (request.result !== undefined) {
                noticia = new Noticia(request.result.autor, request.result.titulo, request.result.descricao, request.result.url, request.result.urlImg, request.result.data, request.result.conteudo, request.result.canal, true);
            }
            callback(noticia);
        }
    }

    /**
     * Alterar uma noticia da base
     * 
     * @param {noticia} noticia
     */
    async alterar(noticia) {
        let transaction = (await this.conexao).transaction("noticia", "readwrite");
        let objectStore = transaction.objectStore("noticia");
        objectStore.put(noticia);
    }

    /**
     * Excluir uma tarefa da base
     * 
     * @param {String} url
     */
    async excluir(url) {
        let transaction = (await this.conexao).transaction("noticia", "readwrite");
        let objectStore = transaction.objectStore("noticia");
        objectStore.delete(url);
    }

}

export default NoticiaDAO;
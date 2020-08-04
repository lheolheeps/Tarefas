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
        new IndexedDB().conectar((conexao) => {
            this.conexao = conexao;
            // this.obterNoticias();
        });
    }

    /**
     * Obtem as noticias da api e salva no banco
     */
    async obterNoticias() {
        let url = "https://newsapi.org/v2/top-headlines?pageSize=100&country=br&apiKey=c055c4ef28b941ff802f0d8e925ae920";
        let request = new Request(url);
        let response = await fetch(request);
        if (response.status == 200) {
            let responseJson = await response.json();
            responseJson.articles.forEach(article => {
                this.obter(article.url, (noticia) => {
                    if (!noticia) {
                        let noticia = new Noticia(article.author, article.title, article.description, article.url, article.urlToImage, article.publishedAt.substr(0, 10), article.content, article.source.name, false);
                        this.inserir(noticia);
                    }
                });
            });
        }
    }

    /**
     * Inserir noticia na base
     * 
     * @param {Noticia} noticia
     */
    inserir(noticia) {
        let transaction = this.conexao.transaction("noticia", "readwrite");
        let objectStore = transaction.objectStore("noticia");
        objectStore.add(noticia);
    }

    /**
     * Obter Noticias da base
     * 
     * @param {Function} callback 
     * @param {Boolean} favoritos
     */
    listar(callback, favoritos) {
        new IndexedDB().conectar((conexao) => {
            let transaction = conexao.transaction("noticia", "readonly");
            let objectStore = transaction.objectStore("noticia");
            var lista = [];
            objectStore.openCursor().onsuccess = function (event) {
                var cursor = event.target.result;
                if (cursor) {
                    if (favoritos && !cursor.value.favorito) {
                        cursor.continue();
                    } else {
                        let noticia = new Noticia(cursor.value.autor, cursor.value.titulo, cursor.value.descricao, cursor.value.url, cursor.value.urlImg, cursor.value.data, cursor.value.conteudo, cursor.value.canal, cursor.value.favorito);
                        lista.push(noticia);
                        cursor.continue();
                    }
                } else {
                    callback(lista);
                }
            };
        });
    }

    /**
     * Obter uma noticia da base
     * 
     * @param {String} url
     * @param {Function} callback 
     */
    obter(url, callback) {
        let transaction = this.conexao.transaction("noticia", "readwrite");
        let objectStore = transaction.objectStore("noticia");
        let request = objectStore.get(url);
        request.onsuccess = () => {
            let noticia = false;
            if (request.result != undefined) {
                noticia = new Noticia(request.result.autor, request.result.titulo, request.result.descricao, request.result.url, request.result.urlImg, request.result.data, request.result.conteudo, request.result.canal, request.result.favorito);
            }
            callback(noticia);
        }
    }

    /**
     * Alterar uma noticia da base
     * 
     * @param {noticia} noticia
     */
    alterar(noticia) {
        let transaction = this.conexao.transaction("noticia", "readwrite");
        let objectStore = transaction.objectStore("noticia");
        objectStore.put(noticia);
    }

}
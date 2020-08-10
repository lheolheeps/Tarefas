/** 
 * Controlador de Banco de dados IndexedDB
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class IndexedDB {
    dbname = "Noticias";
    conexao;

    async conectar(callback) {
        let request =  await window.indexedDB.open(this.dbname, 1);

        request.onerror = (event) => console.log("Erro ao abrir o banco de dados. ", event);

        request.onupgradeneeded = (event) => {
            console.log("Atualizando banco de dados");
            this.conexao = event.target.result;
            let noticia = this.conexao.createObjectStore("noticia", { keyPath: "url" });
            noticia.createIndex("autor", "autor", { unique: false });
            noticia.createIndex("titulo", "titulo", { unique: false });
            noticia.createIndex("descricao", "descricao", { unique: false });
            noticia.createIndex("url", "url", { unique: true });
            noticia.createIndex("urlImg", "urlImg", { unique: false });
            noticia.createIndex("data", "data", { unique: false });
            noticia.createIndex("conteudo", "conteudo", { unique: false });
            noticia.createIndex("canal", "canal", { unique: false });
            noticia.createIndex("favorito", "favorito", { unique: false });
        };

        request.onsuccess = (event) => {
            console.log("Banco de dados aberto com sucesso.");
            callback(event.target.result);
        };
    }
}
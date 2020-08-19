/** 
 * Controlador de Banco de dados IndexedDB
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class IndexedDB {
    dbname = "React-9";
    conexao;

    async conectar() {
        return new Promise(async (result) => {
            let request =  await window.indexedDB.open(this.dbname, 1);

            request.onerror = (event) => console.log("Erro ao abrir o banco de dados. ", event);
    
            request.onupgradeneeded = (event) => {
                console.log("Atualizando banco de dados");
                this.conexao = event.target.result;
                this.conexao.createObjectStore("tarefa", { autoIncrement: true });
                this.conexao.createObjectStore("noticia", { keyPath: "url" });
            };
    
            request.onsuccess = (event) => {
                console.log("Banco de dados aberto com sucesso.");
                result(event.target.result);
            };
        })
    }
}

export default IndexedDB;
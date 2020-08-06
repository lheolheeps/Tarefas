/** 
 * Testes do controlador de banco de dados da tabela Noticia
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class NoticiaDAOTest {

    constructor() {
        this.noticiaDAO = new NoticiaDAO();
    }

    run() {
        console.log("- Testes da classe NoticiaDAO");
        this.testeListarRetornaArray();
        this.testeObterRetornaNoticia();
        this.testeObter();
    }

    testeListarRetornaArray() {
        this.noticiaDAO.listar((lista) => {
            console.log(lista instanceof Array ? "deu boa" : "deu ruim", "listar retornar Array");
        });
    }

    testeObterRetornaNoticia(){
        let url = "https://www.infomoney.com.br/economia/taxa-de-desemprego-sobe-para-133-em-junho-mostra-pnad-continua/";
        this.noticiaDAO.obter(url,(noticia) => {
            console.log(noticia instanceof Noticia ? "deu boa" : "deu ruim", "obter retornar Objeto Noticia");
        });
    }

    testeObter(){
        let url = "https://www.infomoney.com.br/economia/taxa-de-desemprego-sobe-para-133-em-junho-mostra-pnad-continua/";
        this.noticiaDAO.obter(url,(noticia) => {
            console.log(noticia.canal == "InfoMoney" && noticia.url == url ? "deu boa" : "deu ruim", "obter");
        });
    }

}
/** 
 * Testes da Interação com API newspi.org
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class NewsApiDAOTest {

    constructor(){
        this.newsApiDAO = new NewsApiDAO();
    }

    run(){
        console.log("- Testes da classe Helper");
        this.testeGeraUrlHeadlines();
        this.testeGeraUrlEverything();
        this.testeGetHeadlinesRetornaArray();
        this.testeGetEverythingRetornaArray();
    }
    
    testeGeraUrlHeadlines(){
        let tipo = "top-headlines";
        let dados = {pageSize: "100", country: "br"};
        let url = this.newsApiDAO.geraUrl(tipo, dados);
        console.log(url == "https://newsapi.org/v2/top-headlines?apiKey=c055c4ef28b941ff802f0d8e925ae920&pageSize=100&country=br" ? "deu boa" : "deu ruim", "geraUrl para Top-Headlines");
    }
    
    testeGeraUrlEverything(){
        let tipo = "everything";
        let dados = {q: "covid", language: "pt"};
        let url = this.newsApiDAO.geraUrl(tipo, dados);
        console.log(url == "https://newsapi.org/v2/everything?apiKey=c055c4ef28b941ff802f0d8e925ae920&q=covid&language=pt" ? "deu boa" : "deu ruim", "geraUrl para Everything");
    }

    async testeGetHeadlinesRetornaArray(){
        let dados = {language: "pt", country: "br"};
        let json = await this.newsApiDAO.getHeadlines(dados);
        console.log(json.articles instanceof Array ? "deu boa" : "deu ruim", "getHeadlines retornar Array");
    }

    async testeGetEverythingRetornaArray(){
        let dados = {q: "covid", language: "pt"};
        let json = await this.newsApiDAO.getEverything(dados);
        console.log(json.articles instanceof Array ? "deu boa" : "deu ruim", "getEverything retornar Array");
    }
}
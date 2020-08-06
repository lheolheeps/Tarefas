/** 
 * Interação com API newspi.org
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 * @see https://newsapi.org/docs
 * 
 */

class NewsApiDAO {

    baseUrl = "https://newsapi.org/v2/";
    apiKey = "c055c4ef28b941ff802f0d8e925ae920";

    /**
     * Obtem as noticias mais quentes do brasil
     * 
     * @see https://newsapi.org/docs/endpoints/top-headlines
     * @param {Object} dados
     * 
     * @returns {Array} responseJson
     */
    async getHeadlines(dados = {}) {
        dados.country = "br";
        let url = this.geraUrl("top-headlines", dados);
        let json = await this.callAPI(url);
        return json;
    }

    /**
     * Obtem as noticias com base num assunto
     * 
     * @see https://newsapi.org/docs/endpoints/everything
     * @param {Object} dados
     * 
     * @returns {Array} json
     */
    async getEverything(dados = {}) {
        dados.language = "pt";
        let url = this.geraUrl("everything", dados);
        let json = await this.callAPI(url);
        return json;
    }

    /**
     * Gera a url da chamada
     * 
     * @param {String} tipo 
     * @param {Object} dados 
     * 
     * @returns {String} url
     */
    geraUrl(tipo, dados){
        let url = this.baseUrl;
        url += tipo;
        url += "?apiKey=" + this.apiKey + "&"; 
        url += (dados != null) ? Helper.objectToString(dados,"&") : '';
        return url;
    }

    /**
     * Realiza a chamada a API
     * 
     * @param {String} url 
     * 
     * @returns {JSON} responseJson
     */
    async callAPI(url) {
        let request = new Request(url);
        let response = await fetch(request);
        let responseJson = [];
        if (response.status == 200) {
            responseJson = await response.json();
        }
        return responseJson;
    }
}
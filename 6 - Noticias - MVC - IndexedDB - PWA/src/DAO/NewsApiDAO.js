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
    apiKey = "&apiKey=c055c4ef28b941ff802f0d8e925ae920";

    /**
     * Obtem as noticias mais quentes do brasil
     * 
     * @see https://newsapi.org/docs/endpoints/top-headlines
     * 
     * @returns {Array} responseJson
     */
    async getHeadlines() {
        let url = this.baseUrl + "top-headlines?pageSize=100&country=br" + this.apiKey;
        let request = new Request(url);
        let response = await fetch(request);
        let responseJson = [];
        if (response.status == 200) {
            responseJson = await response.json();
        }
        return responseJson;
    }

    /**
     * Obtem as noticias com base num assunto
     * 
     * @see https://newsapi.org/docs/endpoints/everything
     * @param {String} query
     * 
     * @returns {Array} responseJson
     */
    async getEverything(query) {
        let url = this.baseUrl + "everything?excludeDomains=editalconcursosbrasil.com.br&language=pt&q=" + query + this.apiKey;
        let request = new Request(url);
        let response = await fetch(request);
        let responseJson = [];
        if (response.status == 200) {
            responseJson = await response.json();
        }
        return responseJson;
    }
}
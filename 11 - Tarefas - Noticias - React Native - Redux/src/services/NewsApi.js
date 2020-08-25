/** 
 * Interação com API newspi.org
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 * @see https://newsapi.org/docs
 * 
 */
import Helper from './helper';


class NewsApi {

    /**
     * Obtem as noticias mais quentes do brasil
     * 
     * @see https://newsapi.org/docs/endpoints/top-headlines
     * @param {Object} dados
     * 
     * @returns {Array} responseJson
     */
    static async getHeadlines(dados = {}) {
        if (dados.country === undefined) {
            dados.country = "br";
        }

        let url = NewsApi.geraUrl("top-headlines", dados);
        let json = await NewsApi.callAPI(url);
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
    static async getEverything(dados = {}) {
        if (!dados.q) {
            dados.q = 'a';
        }
        dados.language = "pt";
        let url = NewsApi.geraUrl("everything", dados);
        let json = await NewsApi.callAPI(url);
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
    static geraUrl(tipo, dados) {
        let baseUrl = "https://newsapi.org/v2/";
        let apiKey = "e9ef481ddf964e129e60dd04f939f78c";
        let url = baseUrl;
        url += tipo;
        url += "?apiKey=" + apiKey + "&";
        url += (dados != null) ? Helper.objectToString(dados, "&") : '';
        return url;
    }

    /**
     * Realiza a chamada a API
     * 
     * @param {String} url 
     * 
     * @returns {JSON} responseJson
     */
    static async callAPI(url) {
        let request = new Request(url);
        let response = await fetch(request);
        let responseJson = [];
        if (response.status === 200) {
            responseJson = await response.json();
        }
        return responseJson;
    }
}

export default NewsApi;
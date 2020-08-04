/** 
 * Metotos Uteis 
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class Helper {
    
    /**
     * Converte uma data ANO-MES-DIA para DIA/MES/ANO
     * 
     * @param {String} data
     * 
     * @returns {String} dataFormatada
     */
    static formataDataTela(data) {
        let anomesdia = data.substr(0,10).split("-");
        let dataFormatada = anomesdia[2] + '/' + anomesdia[1] + '/' + anomesdia[0];
        return dataFormatada;
    }

}
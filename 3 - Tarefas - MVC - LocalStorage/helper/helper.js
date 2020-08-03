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
    static formataData(data) {
        let anomesdia = data.split("-");
        let dataFormatada = anomesdia[2] + '/' + anomesdia[1] + '/' + anomesdia[0];
        return dataFormatada;
    }

    static ordenacao (a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        // a must be equal to b
        return 0;
    }

}
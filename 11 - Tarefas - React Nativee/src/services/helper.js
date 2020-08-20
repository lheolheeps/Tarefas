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

    /**
     * Converte uma data&hora ANO-MES-DIAHORA:MIN:SEG para DIA/MES/ANO HORA:MIN:SEG
     * 
     * @param {String} datahora
     * 
     * @returns {String} dataHoraFormatada
     */
    static formataDataHora(datahora) {
        let dataHoraFormatada = datahora.substr(8, 2) + '/' + datahora.substr(5, 2) + '/' + datahora.substr(0, 4) + " " + datahora.substr(10, 8);
        return dataHoraFormatada;
    }

    static retiraLetrasDataHora(datahora) {
        let aux = datahora.substr(0, 19);
        let array = aux.split('T');
        let dataHoraFormatada = array.join('');
        return dataHoraFormatada;
    }

    /**
     * Transforma um objeto associativo numa string 
     * junto ao separador indicado
     * 
     * @param {Object} objeto 
     * @param {String} separador 
     * 
     * @returns {String} string
     */
    static objectToString(objeto, separador) {
        let array = [];
        for (let prop in objeto) {
            let str = prop + "=" + objeto[prop];
            array.push(str);
        }
        let string = array.join(separador);
        return string;
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

    /**
     * @param {Object} a 
     * @param {Object} b 
     * @param {String} parameter 
     */
    static sortAscending(a, b, parameter) {
        if (b[parameter] > a[parameter]) {
            return 1;
        }
        if (b[parameter] < a[parameter]) {
            return -1;
        }
        return 0;
    }

    /**
     * @param {Object} a 
     * @param {Object} b 
     * @param {String} parameter 
     */
    static sortDescending(a, b, parameter) {
        if (a[parameter] > b[parameter]) {
            return 1;
        }
        if (a[parameter] < b[parameter]) {
            return -1;
        }
        return 0;
    }

}

export default Helper;
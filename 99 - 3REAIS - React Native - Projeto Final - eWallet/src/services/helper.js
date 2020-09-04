/** 
 * Metotos Uteis 
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */
import bancos from './bancos';

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

    static ordenacao(a, b) {
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

    static calculaBR(a, operacao, b) {
        a = a.replace('.', '');
        a = +a.replace(',', '.');
        b = b.replace('.', '');
        b = +b.replace(',', '.');
        let resultado = 0;
        switch (operacao) {
            case '+':
                resultado = a + b;
                break;
            case '-':
                resultado = a - b;
                break;
            default:
                break;
        }
        resultado = resultado.toFixed(2).toString();
        resultado = resultado.replace('.', ',');
        return resultado;
    }

    static retiraR$(valor) {
        return valor.split(' ')[1];
    }

    static dadosFromBoleto(boleto) {
        boleto = boleto.replace(/\D/g, '');
        if(boleto.length !== 47)
            throw('Boleto precisa ter exatamente 47 digitos');
        let numBanco = boleto.substr(0, 3);
        let banco = bancos.find(banco => banco.numero === numBanco);
        let nomeBanco = (banco) ? banco.nome : 'Não Encontrado';

        let coutVencimento = boleto.substr(33, 4);
        let date = new Date('10/07/1997');
        date.setTime(date.getTime() + (coutVencimento * 24 * 60 * 60 * 1000));
        let vencimento = ("0" + (date.getDate())).slice(-2) + '/' + ("0" + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();

        let totalValor = boleto.substr(37, 10);
        let valor = (parseFloat(totalValor) / 100).toFixed(2).replace('.', ',');

        return {
            banco: nomeBanco,
            vencimento: vencimento,
            valor: valor,
        };
    }

}

export default Helper;
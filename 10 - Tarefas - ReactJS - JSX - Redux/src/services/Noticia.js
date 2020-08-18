/** 
 * Modelo da entidade Noticia
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

import Helper from "./helper";

class Noticia {

    /**
     * Construtor do Objeto
     * 
     * @param {String} autor 
     * @param {String} titulo 
     * @param {String} descricao 
     * @param {String} url 
     * @param {String} urlImg 
     * @param {String} data 
     * @param {String} conteudo 
     * @param {String} canal
     * @param {Boolean} favorito
     */
    constructor(autor, titulo, descricao, url, urlImg, data, conteudo, canal, favorito) {
        this.autor = autor;
        this.titulo = titulo;
        this.descricao = descricao;
        this.url = url;
        this.urlImg = urlImg;
        this.data = data;
        this.conteudo = conteudo;
        this.canal = canal;
        this.favorito = favorito;
    }

    dataFormatada(){
        return Helper.formataDataHora(this.data);
    }

    autorMaisCanal(){
        return (this.autor) ? this.autor + " - " + this.canal : this.canal;
    }
}

export default Noticia;
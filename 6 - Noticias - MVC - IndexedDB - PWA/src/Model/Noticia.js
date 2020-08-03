/** 
 * Modelo da entidade Noticia
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

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
     * @param {Number} id 
     */
    constructor(autor, titulo, descricao, url, urlImg, data, conteudo, id) {
        this.autor = autor;
        this.titulo = titulo;
        this.descricao = descricao;
        this.url = url;
        this.urlImg = urlImg;
        this.data = data;
        this.conteudo = conteudo;
        this.id = id;
    }
}
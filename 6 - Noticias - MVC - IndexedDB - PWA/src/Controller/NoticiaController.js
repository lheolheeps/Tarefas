/** 
 * Controlador das noticias
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class NoticiaController {

    constructor() {
        this.noticiaDAO = new NoticiaDAO();
        this.noticiaView = new NoticiaView();
    }

    /**
     * Renderiza a pagina de nocitias 
     * Pode trazer todas ou apenas as favoritas
     * 
     * @param {Boolean} favoritos 
     */
    render(favoritos) {
        this.noticiaDAO.listar((noticias) => {
            noticias.sort((a,b) => Helper.sortAscending(a,b,"data"));
            this.noticiaView.render(noticias, favoritos, this);
        }, favoritos);
    }

    /**
     * Altera o estado de favorito da noticia
     * 
     * @param {String} url 
     */
    alteraFavorito(url){
        this.noticiaDAO.obter(url, (noticia) => {
            noticia.favorito = (noticia.favorito) ? false : true;
            this.noticiaDAO.alterar(noticia);
        });
    }
}
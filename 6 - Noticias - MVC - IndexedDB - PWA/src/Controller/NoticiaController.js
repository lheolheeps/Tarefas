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

    render(favoritos) {
        this.noticiaDAO.listar((noticias) => {
            noticias.sort(function (a, b) {
                if (a.data > b.data) {
                    return 1;
                }
                if (a.data < b.data) {
                    return -1;
                }
                return 0;
            });
            this.noticiaView.render(noticias);
            this.noticiaView.incluirEventos(this);
        }, favoritos);
    }

    alteraFavorito(url){
        this.noticiaDAO.obter(url, (noticia) => {
            noticia.favorito = (noticia.favorito) ? false : true;
            this.noticiaDAO.alterar(noticia);
        });
    }
}
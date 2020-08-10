/** 
 * Controlador da pagina
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class App {

    constructor() {
        this.noticiaController = new NoticiaController();
    }

    run() {
        let favoritos = (window.location.hash == "#favoritos");
        this.noticiaController.render(favoritos);
    }

    testes() {
        new helperTest().run();
        new NewsApiDAOTest().run();
        new NoticiaDAOTest().run();
        new NoticiaViewTest().run();
        new QueryViewTest().run();
    }
}
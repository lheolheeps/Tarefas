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
        this.noticiaViewTest.run();
        this.noticiaControllerTest.run();
    }
}
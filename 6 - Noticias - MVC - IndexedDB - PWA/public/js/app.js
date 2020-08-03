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
        this.noticiaController.obterNoticias();
    }

    testes() {
        this.noticiaViewTest.run();
        this.noticiaControllerTest.run();
    }
}
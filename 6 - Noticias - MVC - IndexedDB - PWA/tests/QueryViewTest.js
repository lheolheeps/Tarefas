/**
 * Testes unitários para checar o comportamento das Queryes e dos Inputs criados.
 */


class TesteInputEQuery {

    constructor() {
        this.noticiaControler = new NoticiaController();
    }


    testeEscopoTop_deveVirSelector() {
        window.location.hash = '#top';

        this.noticiaControler.adaptarInput();
        let selector = document.getElementById('paisSelector');

        if (selector) {
            console.log('Teste passou! -  Selector retornando como deveria');
        } else {
            console.log('Teste não pasosu! - Selector não encontrado.');
        }
    }

    testeEscopoTodos_deveVirSelector() {
        window.location.hash = '#todos';

        this.noticiaControler.adaptarInput();
        let selector = document.getElementById('inputQuery');

        if (selector) {
            console.log('Teste passou! -  Selector retornando como deveria');
        } else {
            console.log('Teste não pasosu! - Selector não encontrado.');
        }
    }

    run() {
        this.testeEscopoTodos_deveVirSelector();
        this.testeEscopoTop_deveVirSelector();
    }
}
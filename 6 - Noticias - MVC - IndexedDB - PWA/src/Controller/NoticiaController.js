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
        this.newsApiDAO = new NewsApiDAO();
    }

    paises = {
        'br': 'Brásil',
        'us': 'Estados Unidos',
        'gb': 'Inglaterra',
        'ca': 'Canadá',
    }


    /**
     * Renderiza a pagina de nocitias 
     * Pode trazer todas ou apenas as favoritas
     * 
     * @param {Boolean} favoritos 
     */
    render(favoritos) {
        this.noticiaDAO.listar((noticias) => {
            noticias.sort((a, b) => Helper.sortAscending(a, b, "data"));
            this.noticiaView.render(noticias, favoritos, this);
            this.adaptarInput();
        }, favoritos);
    }

    /**
     * Altera o estado de favorito da noticia
     * 
     * @param {String} url 
     */
    alteraFavorito(url) {
        this.noticiaDAO.obter(url, (noticia) => {
            noticia.favorito = (noticia.favorito) ? false : true;
            this.noticiaDAO.alterar(noticia);
        });
    }

    /**
     * Renderiza sem chamar o IndexedDB e atualiza o Titulo da Página dependendo do país.
     * @param {string} sigla 
     */
    async renderPorPais(sigla) {
        if (sigla === 'br') {
            this.render(false);
            return;
        }

        let dados = { country: sigla };
        let section = document.querySelector('section');

        while (section.firstChild) {
            section.removeChild(section.firstChild);
        }

        let listaNoticias = [];
        let lista = await this.newsApiDAO.getHeadlines(dados);
        lista = lista.articles;

        lista.forEach(noticia => {
            noticia.publishedAt = Helper.retiraLetrasDataHora(noticia.publishedAt);
            let novaNoticia = new Noticia(noticia.author, noticia.title, noticia.description, noticia.url, noticia.urlToImage, noticia.publishedAt, noticia.content, noticia.source.name, false);
            listaNoticias.push(novaNoticia);
        })

        listaNoticias.sort((a, b) => Helper.sortAscending(a, b, "data"));
        this.noticiaView.render(listaNoticias, false, this);
    }

    /**
     * Renderiza sem chamar o IndexedDB e procura noticias pela palavra chave query
     * @param {String} query
     */
    async renderPorQuery(query) {
        let pageTitle = document.querySelector('.titulo');
        pageTitle.innerHTML = 'Pesquisando por ' + "'" + query + "'" + '<span id="favorito"><br />Favoritos</span></h1>';

        let section = document.querySelector('section');

        while (section.firstChild) {
            section.removeChild(section.firstChild);
        }

        let json = await this.newsApiDAO.getEverything({ q: query });
        let lista = json.articles
        let listaNoticias = [];

        lista.forEach(noticia => {
            noticia.publishedAt = Helper.retiraLetrasDataHora(noticia.publishedAt);
            let novaNoticia = new Noticia(noticia.author, noticia.title, noticia.description, noticia.url, noticia.urlToImage, noticia.publishedAt, noticia.content, noticia.source.name, false);
            listaNoticias.push(novaNoticia);
        })

        listaNoticias.sort((a, b) => Helper.sortAscending(a, b, "data"));
        this.noticiaView.render(listaNoticias, false, this);
    }

    /**
     * Adicona um Event Listener para a página por Pais.
     */
    escolherPais() {
        let selectPais = document.getElementById('paisSelector');
        selectPais.addEventListener('change', (e) => {
            let sigla = e.target.value;
            let pageTitle = document.querySelector('.titulo');

            let nomePais = selectPais.querySelector('option[value = "' + sigla + '"]').innerHTML;
            if (sigla == 'gb') {
                pageTitle.innerHTML = 'Noticias da ' + nomePais + '<span id="favorito"><br />Favoritos</span></h1>';
            } else if (sigla == 'us') {
                pageTitle.innerHTML = 'Noticias dos ' + nomePais + '<span id="favorito"><br />Favoritos</span></h1>';
            } else {
                pageTitle.innerHTML = 'Noticias do ' + nomePais + '<span id="favorito"><br />Favoritos</span></h1>';
            }

            this.renderPorPais(sigla);
        })
    }


    /**
     * Adiciona um Evento na hora que a página carrega para alterar entre seleção de um país
     * ou colocar um input-text para query
     */
    adaptarInput() {
        let inputItem = document.getElementById('escolherOpcao');
        inputItem.innerHTML = "";

        if (window.location.hash === '#todos') {
            let pageTitle = document.querySelector('.titulo');
            pageTitle.innerHTML = 'Noticias do Brasil' + '<span id="favorito"><br />Favoritos</span></h1>';

            let renderPorQuery = (valor) => this.renderPorQuery(valor);
            let input = document.createElement('input');
            input.setAttribute('id', 'inputQuery');
            input.setAttribute('placeholder', 'Pesquisar');

            inputItem.append(input);

            input.addEventListener('keyup', function(e) {
                if (e.keyCode === 13) {
                    console.log('mandou a query');
                    renderPorQuery(input.value);
                }
            });
        }


        if (window.location.hash === '#top') {
            let pageTitle = document.querySelector('.titulo');
            pageTitle.innerHTML = 'Noticias do Brasil' + '<span id="favorito"><br />Favoritos</span></h1>';

            let paisSelector = document.createElement('select');
            paisSelector.setAttribute('id', "paisSelector");
            let paisesKeys = Object.keys(this.paises);

            paisesKeys.forEach(sigla => {
                let opcao = document.createElement('option');
                opcao.innerHTML = this.paises[sigla];
                opcao.value = sigla;
                paisSelector.append(opcao);
            })

            inputItem.append(paisSelector);
            this.escolherPais();
        }
    }
}
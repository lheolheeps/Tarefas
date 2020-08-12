/** 
 * View das Noticias
 * 
 * Adiciona os metodos de interação dos botões
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class NoticiaView {

    constructor() {
        this.section = document.getElementById('noticias');
    }

    /**
     * Responsavel por renderizar as noticias na tela
     * 
     * @param {Array} noticias
     */
    render(noticias, favoritos, controller) {
        document.getElementById('favorito').style.display = favoritos ? 'block' : 'none';
        if (noticias.length > 0) {
            let cards = [];
            noticias.forEach(noticia => {
                noticia.data = Helper.formataDataHoraTela(noticia.data);
                let img = this.criarImagem(noticia.urlImg);
                let corpo = this.criarCorpo(noticia);
                let hr = React.createElement('hr', { key: Math.random().toString(36).substring(7) });
                let acoes = this.criarAcoes(noticia);
                let card = React.createElement('div', { key: Math.random().toString(36).substring(7), className: "noticia" }, [img, corpo, hr, acoes]);
                cards.push(card);
            }, this);
            ReactDOM.render(cards, this.section);
            this.incluirEventos(controller);
        }
    }

    /**
     * Cria a imagem do card de noticia
     * 
     * @param {String} url
     * 
     * @returns {HTMLImageElement} img
     */
    criarImagem(url) {
        let props = {};
        props.key = Math.random().toString(36).substring(7);
        props.src = (url != null) ? url : "public/img/blank.png";
        props.onError = () => { img.onerror = false; img.src = "public/img/blank.png"; };
        return React.createElement('img', props)
    }

    /**
     * Cria o corpo do card de noticia com o autor, titulo e descrição breve
     * 
     * @param {Noticia} noticia 
     * 
     * @returns {HTMLDivElement} corpo
     */
    criarCorpo(noticia) {
        let data = this.criarData(noticia.data);
        let br = React.createElement('br', { key: Math.random().toString(36).substring(7) });
        let autor = this.criarAutor((noticia.autor) ? noticia.autor + " - " + noticia.canal : noticia.canal);
        let titulo = this.criarTitulo(noticia.titulo);
        let descricao = this.criarDescricao(noticia.descricao);
        return React.createElement('div', { key: Math.random().toString(36).substring(7), className: "corpo" }, [data, br, autor, titulo, descricao])
    }

    /**
     * 
     * @param {String} data 
     */
    criarData(data) {
        return React.createElement('span', { key: Math.random().toString(36).substring(7) }, "Publicado em " + data);
    }
    
    /**
     * 
     * @param {String} autor 
     */
    criarAutor(autor) {
        return React.createElement('span', { key: Math.random().toString(36).substring(7) }, autor);
    }

    /**
     * 
     * @param {String} titulo 
     */
    criarTitulo(titulo) {
        return React.createElement('h3', { key: Math.random().toString(36).substring(7) }, titulo);
    }

    /**
     * 
     * @param {String} descricao 
     */
    criarDescricao(descricao) {
        return React.createElement('p', { key: Math.random().toString(36).substring(7) }, descricao);
    }

    /**
     * Cria as ações do card de noticia com o link para ver mais e favoritar
     * 
     * @param {Noticia} noticia 
     * 
     * @returns {HTMLDivElement} acoes
     */
    criarAcoes(noticia) {
        let botaoView = new BotaoView();
        let verMais = botaoView.criarAReact("Ver Mais", noticia.url, "_blank", null, "fas fa-plus-square");
        let hr = React.createElement('hr', { key: Math.random().toString(36).substring(7) });
        let textoFavorito = (noticia.favorito) ? "Desfavoritar" : "Favoritar";
        let corFavorito = (noticia.favorito) ? "red" : "";
        let favorito = botaoView.criarAReact(textoFavorito, null, null, noticia.url, "fas fa-heart", corFavorito, "favorito");
        return React.createElement('div', { key: Math.random().toString(36).substring(7), className: "acoes" }, [verMais, hr, favorito])
    }

    /**
     * Inclui os eventos de clique nos botões interativos
     * 
     * @param {noticiaController} noticiaController 
     */
    incluirEventos(noticiaController) {
        let favoritos = document.getElementsByClassName('favorito');
        for (let index = 0; index < favoritos.length; index++) {
            favoritos[index].addEventListener("click", () => {
                noticiaController.alteraFavorito(favoritos[index].id);
                this.alteraFavorito(favoritos[index].id);
            });
        }
    }

    /**
     * Altera a cor do icone de favorito para melhor visualização do usuario
     * 
     * @param {String} url 
     */
    alteraFavorito(url) {
        let favoritar = document.getElementById(url);
        let iconFavorito = favoritar.children[0];
        let favorito = (iconFavorito.style.color == "");
        if (!favorito && window.location.hash == "#favoritos") {
            if (confirm("Deseja desfavoritar essa noticia?")) {
                let noticia = favoritar.parentNode.parentNode;
                noticia.remove();
            }
        } else {
            iconFavorito.style.color = favorito ? "red" : "";
            favoritar.textContent = "";
            favoritar.append(iconFavorito);
            favoritar.append(favorito ? "Desfavoritar" : "Favoritar");
        }
    }



}
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
        debugger;
        document.getElementById('favorito').style.display = favoritos ? 'block' : 'none';
        if (noticias.length > 0) {
            this.section.innerHTML = "";
            noticias.forEach(noticia => {
                noticia.data = Helper.formataDataHoraTela(noticia.data);
                let card = document.createElement('div');
                card.className = "noticia";
                card.append(this.criarImagem(noticia.urlImg));
                card.append(this.criarCorpo(noticia));
                card.append(document.createElement('hr'));
                card.append(this.criarAcoes(noticia));
                this.section.append(card);
            }, this);
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
        let img = document.createElement('img');
        img.src = (url != null) ? url : "public/img/blank.png";
        img.onerror = () => { img.src = "public/img/blank.png"; };
        return img;
    }

    /**
     * Cria o corpo do card de noticia com o autor, titulo e descrição breve
     * 
     * @param {Noticia} noticia 
     * 
     * @returns {HTMLDivElement} corpo
     */
    criarCorpo(noticia) {
        let corpo = document.createElement('div');
        corpo.className = "corpo";
        let data = document.createElement('span');
        data.innerHTML = "Publicado em " + noticia.data;
        corpo.append(data);
        corpo.append(document.createElement('br'));
        let autor = document.createElement('span');
        if (noticia.autor != null) {
            autor.innerHTML = noticia.autor + " - " + noticia.canal;
        } else {
            autor.innerHTML = noticia.canal;
        }
        corpo.append(autor);
        let titulo = document.createElement('h3');
        titulo.innerHTML = noticia.titulo;
        corpo.append(titulo);
        let descricao = document.createElement('p');
        descricao.innerHTML = noticia.descricao;
        corpo.append(descricao);
        return corpo;
    }

    /**
     * Cria as ações do card de noticia com o link para ver mais e favoritar
     * 
     * @param {Noticia} noticia 
     * 
     * @returns {HTMLDivElement} acoes
     */
    criarAcoes(noticia) {
        let acoes = document.createElement('div');
        acoes.className = "acoes";
        let verMais = document.createElement('a');
        verMais.href = noticia.url;
        verMais.target = "_blank";
        let iconVerMais = document.createElement('span');
        iconVerMais.className = "fas fa-plus-square";
        verMais.append(iconVerMais);
        verMais.append(" Ver Mais");
        acoes.append(verMais);
        acoes.append(document.createElement('hr'));
        let favorito = document.createElement('a');
        favorito.className = "favorito";
        favorito.id = noticia.url;
        favorito.innerHTML = (noticia.favorito) ? "Desfavoritar&nbsp" : "Favoritar&nbsp";
        let iconFavorito = document.createElement('span');
        iconFavorito.className = "fas fa-heart";
        iconFavorito.style.color = (noticia.favorito) ? "red" : "";
        favorito.append(iconFavorito);
        acoes.append(favorito);
        return acoes;
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
            favoritar.innerHTML = favorito ? "Desfavoritar" : "Favoritar";
            favoritar.append(iconFavorito);
        }
    }



}
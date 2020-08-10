/** 
 * Respoonsael por criar botões dinamicamentes
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class BotaoView {

    /**
     * 
     * @param {String} texto 
     * @param {String} link 
     * @param {String} target 
     * @param {String} id 
     * @param {String} icone 
     * @param {String} cor 
     * @param {String} classe 
     */
    criarA(texto, link, target, id, icone, cor, classe) {
        let botao = document.createElement('a');
        if (link != null) botao.href = link;
        if (target != null) botao.target = target;
        if (id != null) botao.id = id;
        if (classe != null) botao.className = classe;
        if (icone != null) {
            let span = this.criarIcone(icone, cor);
            span.style.marginRight = "3px";
            botao.append(span);
        }
        texto = texto;
        botao.append(texto);
        return botao;
    }

    /**
     * 
     * @param {String} icone 
     * @param {String} cor 
     */
    criarIcone(icone, cor) {
        let icon = document.createElement('span');
        icon.className = icone;
        if (cor != null) icon.style.color = cor;
        return icon;
    }

    // favorito.className = "favorito";
    // favorito.id = noticia.url;
    // favorito.innerHTML = (noticia.favorito) ? "Desfavoritar&nbsp" : "Favoritar&nbsp";
    // let iconFavorito = document.createElement('span');
    // iconFavorito.className = "fas fa-heart";
    // iconFavorito.style.color = (noticia.favorito) ? "red" : "";
    // favorito.append(iconFavorito);
    // acoes.append(favorito);
}
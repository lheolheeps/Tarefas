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
        if (link != null)
            botao.href = link;
        if (target != null)
            botao.target = target;
        if (id != null)
            botao.id = id;
        if (classe != null)
            botao.className = classe;
        if (icone != null) {
            let span = this.criarIcone(icone, cor);
            botao.append(span);
        }
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
        icon.style.marginRight = "3px";
        if (cor != null)
            icon.style.color = cor;
        return icon;
    }

    criarAReact(texto, link, target, id, icone, cor, classe, click) {
        let props = {};
        props.key = Math.random().toString(36).substring(7);
        if (link != null)
            props.href = link;
        if (target != null)
            props.target = target;
        if (id != null)
            props.id = id;
        if (classe != null)
            props.className = classe;
        if (click != null)
            props.onClick = click;
        let span = this.criarIconeReact(icone, cor);
        return React.createElement('a', props, [span, texto]);
    }

    criarIconeReact(classe, cor) {
        let props = {};
        props.key = Math.random().toString(36).substring(7);
        props.className = classe;
        props.style = { marginRight: "3px", color: cor };
        // if (cor != null) props.style.color = cor;
        return React.createElement('span', props, "");
    }
}
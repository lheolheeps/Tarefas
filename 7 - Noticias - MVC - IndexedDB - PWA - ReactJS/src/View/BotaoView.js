/** 
 * Respoonsael por criar botões dinamicamentes
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class BotaoView {

    /**
     * Cria os botões utilizando ReactJS
     * 
     * @param {String} texto 
     * @param {String} link 
     * @param {String} target 
     * @param {String} id 
     * @param {String} icone 
     * @param {String} cor 
     * @param {String} classe 
     */
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


    /**
     * Cria os icones utilizando ReactJS
     * 
     * @param {String} icone 
     * @param {String} cor 
     */
    criarIconeReact(classe, cor) {
        let props = {};
        props.key = Math.random().toString(36).substring(7);
        props.className = classe;
        props.style = { marginRight: "3px", color: cor };
        // if (cor != null) props.style.color = cor;
        return React.createElement('span', props, "");
    }
}
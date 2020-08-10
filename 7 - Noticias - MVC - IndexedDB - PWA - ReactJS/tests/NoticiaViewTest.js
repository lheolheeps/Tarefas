/** 
 * Testes do controlador da view de Noticia
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class NoticiaViewTest {

    constructor() {
        this.noticiaView = new NoticiaView();
    }

    run() {
        console.log("- Testes da classe NoticiaView");
        let noticia = new Noticia("Felipe", "Noticia Teste", "Noticia Teste", "http://localhost:5500",  "https://assets.zap.com.br/assets/v5.37.5/zap.svg?b3f59ed8e7ccc42f6e8b44e5db9a746e", "2012-12-2100:00:00", "Noticia Teste", "Proway", false);
        this.testeCriarImagem(noticia.urlImg);
        this.testeCriarImagemNula(noticia);
        this.testeCriarCorpo(noticia);
        this.testeCriarAcoes(noticia);
    }

    testeCriarImagem(url){
        let img = this.noticiaView.criarImagem(url);
        console.log(img.outerHTML == '<img src="https://assets.zap.com.br/assets/v5.37.5/zap.svg?b3f59ed8e7ccc42f6e8b44e5db9a746e">' ? "deu boa" : "deu ruim", "criarImagem");
    }

    testeCriarImagemNula(){
        let img = this.noticiaView.criarImagem(null);
        console.log(img.outerHTML == '<img src="public/img/blank.png">' ? "deu boa" : "deu ruim", "criarImagem sem url");
    }

    testeCriarCorpo(noticia){
        let corpo = this.noticiaView.criarCorpo(noticia);
        console.log(corpo.outerHTML == '<div class="corpo"><span>Publicado em 2012-12-2100:00:00</span><br><span>Felipe - Proway</span><h3>Noticia Teste</h3><p>Noticia Teste</p></div>' ? "deu boa" : "deu ruim", "criarCorpo");
    }

    testeCriarAcoes(noticia){
        let acoes = this.noticiaView.criarAcoes(noticia);
        console.log(acoes.outerHTML == '<div class="acoes"><a href="http://localhost:5500" target="_blank"><span class="fas fa-plus-square"></span> Ver Mais</a><hr><a class="favorito" id="http://localhost:5500">Favoritar&nbsp;<span class="fas fa-heart"></span></a></div>' ? "deu boa" : "deu ruim", "criarAcoes");
    }


}
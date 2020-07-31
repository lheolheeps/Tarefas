/** 
 * Testes do controlador da View
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class TarefaViewTest {

    constructor() {
        this.tarefaView = new TarefaView();
    }

    run() {
        let dados = this.disponibilizarMock();
        this.testeCriaRodape();
        this.testeCriaConteudo(dados.mockTarefaTeste);
        this.testeCriaLinha(dados.tarefaTeste);
        this.testeCriaRodape();
    }

    testeCriaCabecalho() {
        let thead = "<tr><th>Tarefa</th><th>Entrega</th><th>Ações</th></tr>";
        console.log(thead == this.tarefaView.criarCabecalho().innerHTML ? "deu boa" : "deu ruim", "criarCabecalho");
    }

    testeCriaLinha(tarefaTeste) {
        let tr = '<tr id="linha-999" style="background-color: rgb(221, 221, 221);"><td>Tarefa Teste</td><td>2012-12-21</td><td><input type="checkbox" class="check" id="situacao-999"><a href="#" class="excluir" id="excluir-999" style="color: red;"><span class="fas fa-trash"></span></a></td></tr>';

        console.log(tr == this.tarefaView.criarLinha(tarefaTeste).outerHTML ? "deu boa" : "deu ruim", "criarLinha true");
        tarefaTeste.situacao = false;
        tr = '<tr id="linha-999"><td>Tarefa Teste</td><td>2012-12-21</td><td><input type="checkbox" class="check" id="situacao-999"><a href="#" class="excluir" id="excluir-999" style="color: red;"><span class="fas fa-trash"></span></a></td></tr>';
        console.log(tr == this.tarefaView.criarLinha(tarefaTeste).outerHTML ? "deu boa" : "deu ruim", "criarLinha false");
    }

    testeCriaConteudo(tarefas) {
        let tbody = '<tbody id="tarefas"><tr id="linha-1"><td>Tarefa Mockada 1</td><td>21/12/2012</td><td><input type="checkbox" class="check" id="situacao-1"><a href="#" class="excluir" id="excluir-1" style="color: red;"><span class="fas fa-trash"></span></a></td></tr><tr id="linha-2"><td>Tarefa Mockada 2</td><td>21/12/2012</td><td><input type="checkbox" class="check" id="situacao-2"><a href="#" class="excluir" id="excluir-2" style="color: red;"><span class="fas fa-trash"></span></a></td></tr></tbody>';
        console.log(tbody == this.tarefaView.criarConteudo(tarefas).outerHTML ? "deu boa" : "deu ruim", "criarConteudo");
    }

    testeCriaRodape() {
        let tfoot = '<tr id="formulario"><td><input type="text" id="novo"></td><td><input type="date" id="data"></td><td><input type="submit" id="adicionar" value="Adicionar"></td></tr>';
        console.log(tfoot == this.tarefaView.criarRodape().innerHTML ? "deu boa" : "deu ruim", "criarRodape");
    }

    disponibilizarMock() {
        let mockTarefaTeste = [
            {
                "id": 1,
                "descricao": "Tarefa Mockada 1",
                "data": "21/12/2012",
                "situacao": false
            },
            {
                "id": 2,
                "descricao": "Tarefa Mockada 2",
                "data": "21/12/2012",
                "situacao": false
            }
        ];

        let tarefaTeste = new Tarefa();
        tarefaTeste.id = 999;
        tarefaTeste.descricao = "Tarefa Teste";
        tarefaTeste.data = '2012-12-21';
        tarefaTeste.situacao = true;

        return { 'mockTarefaTeste': mockTarefaTeste, 'tarefaTeste': tarefaTeste };
    }
}
/** 
 * Testes do controlador de Tarefas
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class TarefaControllerTest {

    id;

    constructor() {
        this.tarefaController = new TarefaController();
    }

    async run() {
        await this.testeAdicionar();
        if (this.id != undefined) {
            this.testeObter();
            // this.testeAlteraSituacao();
            this.testeDeletar();
        }
    }

    testeAdicionar() {
        return new Promise((resolve, reject) => {
            this.tarefaController.adicionar({ "descricao": "Tarefa Teste", "data": '2012-12-21' }, (evento) => {
                this.id = evento.target.result;
                this.tarefaController.obter(this.id, (tarefa) => {
                    let passou = tarefa.descricao == "Tarefa Teste" && tarefa.data == '21/12/2012' && tarefa.situacao == false;
                    console.log(passou ? "deu boa" : "deu ruim", "adicionar");
                });
                resolve();
            });

        })

    }

    testeObter() {
        this.tarefaController.obter(this.id, (tarefa) => {
            console.log(tarefa.id == this.id ? "deu boa" : "deu ruim", "obter");
        });
    }

    testeAlteraSituacao() {
        this.tarefaController.alterarSituacao(this.id, true);
        this.tarefaController.obter(this.id, (tarefa) => {
            console.log(tarefa.situacao ? "deu boa" : "deu ruim", "alterarSituacao true");
        });
        this.tarefaController.alterarSituacao(this.id, false);
        this.tarefaController.obter(this.id, (tarefa) => {
            console.log(!tarefa.situacao ? "deu boa" : "deu ruim", "alterarSituacao false");
        });
    }

    testeDeletar() {
        this.tarefaController.deletar(this.id);
        this.tarefaController.obter(this.id, (tarefa) => {
            console.log(tarefa == undefined ? "deu boa" : "deu ruim", "deletar");
        });
    }
}
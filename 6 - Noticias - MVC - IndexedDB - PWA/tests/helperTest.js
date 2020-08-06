/** 
 * Testes das funções auxiliares
 * 
 * @version 1.0.0
 * @author Felipe Assunção <contato@felipeassuncao.com>
 * 
 */

class helperTest {

    run(){
        console.log("- Testes da classe Helper");
        this.testeObjectToString();
        this.testeRetiraLetrasDataHora();
        this.testeFormataDataHoraTela();
    }
    
    testeObjectToString(){
        let object = {
            nome: "Felipe",
            sobrenome: "Assunção"
        }
        console.log(Helper.objectToString(object, ", ") == "nome=Felipe, sobrenome=Assunção" ? "deu boa" : "deu ruim", "objectToString");
    }

    testeRetiraLetrasDataHora(){
        let dataHora = "2012-12-21T00:00:00Z";
        console.log(Helper.retiraLetrasDataHora(dataHora, ", ") == "2012-12-2100:00:00" ? "deu boa" : "deu ruim", "retiraLetrasDataHora");
    }

    testeFormataDataHoraTela(){
        let dataHora = "2012-12-2100:00:00";
        console.log(Helper.formataDataHoraTela(dataHora) == "21/12/2012 00:00:00" ? "deu boa" : "deu ruim", "formataDataHoraTela");
    }

}
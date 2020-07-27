class TarefaController {
    constructor() {
        this.tarefa = new Tarefa();
        this.tabela = document.getElementsByClassName('lista')[0];
        this.id = 0;
    }

    render() {
        let tabela = this.criarTabela();
        tabela.append(this.criarCabecalho());
        let tbody = document.createElement('tbody');
        tbody.id = "tarefas";
        let tarefas = this.tarefa.getTarefas();
        tarefas.forEach(function (element, index) {
            var id = index+1;
            let tr = document.createElement('tr');
            tr.id = "linha"+id;
            let td = document.createElement('td');
            td.innerHTML = element.descricao;
            tr.append(td);
            td = document.createElement('td');
            td.innerHTML = element.data;
            tr.append(td);
            td = document.createElement('td');
            let input = document.createElement('input');
            input.type = "checkbox";
            input.checked = element.situacao ? true : false;
            document.getElementById("situacao"+this.id).addEventListener("click", () => this.checkTarefa(this.id));
            td.append(input);
            tr.append(td);
            tbody.append(tr);
        });
        this.id = tarefas.length+1;
        tabela.append(tbody);
        tabela.append(this.criarRodape());
        this.tabela.append(tabela);
        document.getElementById('adicionar').addEventListener("click", () => this.adicionar());
        for (let index = 0; index < document.getele; index++) {
            const element = array[index];
            
        }
    }

    criarTabela() {
        let tabela = document.createElement('table');
        tabela.className = "tabelaLista";
        tabela.setAttribute("cellspacing", 0);
        return tabela
    }

    criarCabecalho() {
        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        th.innerHTML = "Tarefa";
        tr.append(th);
        th = document.createElement('th');
        th.innerHTML = "Entrega";
        tr.append(th);
        th = document.createElement('th');
        th.innerHTML = "Situação";
        tr.append(th);
        thead.append(tr);
        return thead;
    }

    criarLinha(element) {
        this.id++;
        let tr = document.createElement('tr');
        tr.id = "linha"+this.id;
        let td = document.createElement('td');
        td.innerHTML = element.descricao;
        tr.append(td);
        td = document.createElement('td');
        td.innerHTML = element.data;
        tr.append(td);
        td = document.createElement('td');
        let input = document.createElement('input');
        input.type = "checkbox";
        input.checked = element.situacao ? true : false;
        td.append(input);
        tr.append(td);
        return tr;
    }

    criarRodape() {
        let tfoot = document.createElement('tfoot');
        let tr = document.createElement('tr');
        tr.id = "formulario";
        let td = document.createElement('td');
        let input = document.createElement('input');
        input.type = "text"
        input.id = "novo";
        td.append(input);
        tr.append(td);
        td = document.createElement('td');
        input = document.createElement('input');
        input.type = "date"
        input.id = "data";
        td.append(input);
        tr.append(td);
        td = document.createElement('td');
        input = document.createElement('input');
        input.type = "submit"
        input.id = "adicionar";
        input.value = "Adicionar";
        td.append(input);
        tr.append(td);
        tfoot.append(tr);
        return tfoot;
    }

    adicionar() {
        const tarefa = document.getElementById('novo');
        const data = document.getElementById('data');
        if (tarefa.value != "" && data.value != "") {
            const tbody = document.getElementById('tarefas');
            let tr = document.createElement('tr');
            tr.id = "linha"+this.id;
            let td = document.createElement('td');
            td.innerText = tarefa.value;
            tr.append(td);
            td = document.createElement('td');
            td.innerText = this.formataData(data.value);
            tr.append(td);
            td = document.createElement('td');
            let input = document.createElement('input');
            input.type = 'checkbox';
            input.value = 'S';
            input.id = "situacao"+this.id
            td.append(input);
            tr.append(td);
            tbody.append(tr);
            document.getElementById("situacao"+this.id).addEventListener("click", () => this.checkTarefa(this.id));
            tarefa.value = "";
            data.value = "";
        }
    }

    formataData(data) {
        let anomesdia = data.split("-");
        return anomesdia[2] + '/' + anomesdia[1] + '/' + anomesdia[0];
    }

    checkTarefa(id) {
        let tr = document.getElementById("linha" + id);
        const tabela = document.getElementById('tarefas');
        const situacao = document.getElementById('situacao' + id).checked;
        tabela.removeChild(tr);
        if (situacao) {
            tr.style.backgroundColor = "#ddd";
            tabela.append(tr);
        } else {
            let primeiratr = document.getElementById('tarefas').rows[0];
            tr.removeAttribute("style");
            tabela.insertBefore(tr, primeiratr);
        }
    }
}
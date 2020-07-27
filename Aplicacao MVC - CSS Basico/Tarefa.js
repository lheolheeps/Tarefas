class Tarefa {
    tarefas = [
        {
            "descricao": "Estudar HTML",
            "data": "21/07/2020",
            "situacao": true
        },
        {
            "descricao": "Estudar CSS",
            "data": "22/07/2020",
            "situacao": false
        },
        {
            "descricao": "Estudar JS",
            "data": "23/07/2020",
            "situacao": false
        },
        {
            "descricao": "Entregar Sprint",
            "data": "24/07/2020",
            "situacao": false
        },
    ];

    getTarefas(){
        // obter na API
        return this.tarefas;
    }

    adicionar(descricao, data, situacao){
        return true;
    }
}
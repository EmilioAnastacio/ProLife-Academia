class Exercicio{

    constructor(){
        this.id = 1;
        this.arrayExercicios = [];
        this.editaId = null;

    }

    salvar(){
        let exercicio = this.lerDados();

        console.log("TA ENTRANDO NO SALVAR FDP");

        if(this.validaCampo(exercicio)){

            if(this.editaId == null){
                console.log("TA ENTRANDO NO NULL");
                this.adicionar(exercicio); 
            }else{
                console.log("TA ENTRANDO NO ELSE");
                this.atualizar(this.editaId, exercicio);
                this.editaId = null; /////////
                document.getElementById('saveEdit').innerText ='Salvar';
            }
            
        }

        this.listaTabela();
        this.cancelar(); //limpa o forms

    }

    //FUNCA TABELA, cria e aciona as coisas dentro de um array para que assim cria uma tabela
    //dinamicamente organizada
    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i< this.arrayExercicios.length; i++){

            let tr = tbody.insertRow(); //funcao pra criar linha no rbody

            let td_id = tr.insertCell(); //funcao insera coluna no td
            let td_exercicio = tr.insertCell();
            let td_tipo = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayExercicios[i].id;
            td_exercicio.innerText = this.arrayExercicios[i].nomeExercicio;
            td_tipo.innerText = this.arrayExercicios[i].tipoExercicio;

            td_id.classList.add('center'); //adiciona a classe via JS

            let imgEdit = document.createElement('img');
            imgEdit.src = '/img/edit.png';
            imgEdit.setAttribute("onclick","exercicio.preparaEdit("+ JSON.stringify(this.arrayExercicios[i]) +")");

            let imgDelete = document.createElement('img');
            imgDelete.src = '/img/delete.png';
            imgDelete.setAttribute("onclick","exercicio.deletar("+ this.arrayExercicios[i].id +")"); //(evento) (funcao)

            td_acoes.appendChild(imgEdit); //addcionando tag do tipo TD= pai, filho img
            td_acoes.appendChild(imgDelete);
        }

    }


    // FUNCAO PARA ADICIONAR ELEMENTOS NO ARRAY
    adicionar(exercicio){ 
        this.arrayExercicios.push(exercicio); //adicionar 1 ou mais elementos a um array
        this.id++;
    }

    //FUNCAO QUE RECEBE ID e o EXERCICIO, PARA QUE POSSA ALTERAR O NOME E O TIPO
    atualizar(id, exercicio){
        for(let i = 0; i < this.arrayExercicios.length; i++){
            if(this.arrayExercicios[i].id ==id){

                this.arrayExercicios[i].nomeExercicio = exercicio.nomeExercicio;
                this.arrayExercicios[i].tipoExercicio = exercicio.tipoExercicio;
            }

        }
    }
 
    //FUNCAO QUE SERCE MERAMENTE PARA PREPARAR A ATT DE DADOS, mudar o nome do botao, e 
    // REESCREVER O CONTEUDO DO ID SELECIONADO
    preparaEdit(dados){

        this.editaId = dados.id;

        document.getElementById('exercicio').value = dados.nomeExercicio;
        document.getElementById('tipo').value = dados.tipoExercicio;

        document.getElementById('saveEdit').innerText ='Atualizar';


        ////////////
        ///////////

        let addExer = document.getElementById('agrega');

    if(addExer){
        addExer.classList.add('mostrar');
        addExer.addEventListener("click",(e)=>{

            if(e.target.className == "cancelar" || e.target.className == "butSave"){

                addExer.classList.remove('mostrar');
            }

        })
    }
    }

    //FUNCAO PARA LER OS DADOS PELO ID DE CADA, exercicio & tipo
    lerDados() {

        let exercicio = {}

        exercicio.id = this.id;
        exercicio.nomeExercicio = document.getElementById('exercicio').value;
        exercicio.tipoExercicio = document.getElementById('tipo').value;


        return exercicio
    }

    //FUNCAO PARA VALIDAR A EXISTENCIA DE TEXTO NOS INPUTS, se nao tiver nada pede pra colocar
    validaCampo(exercicio){
        let msg = '';

        if(exercicio.nomeExercicio == ''){
            
            msg += '- Informe o Nome do Exercicio'
        }

        if(exercicio.tipoExercicio == ''){
            
            msg += '- Informe o Tipo do Exercicio'
        }

        if(msg !=''){
            alert(msg);
            return false;
        }

        return true;

    }

    //FUNCAO PRA CANCELAR OS VALORES COLOCADOS NOS INPUTS, deixa vazio
    cancelar(){
        document.getElementById('exercicio').value = '';
        document.getElementById('tipo').value = '';

        document.getElementById(saveEdit).innerText = 'Salvar';
        this.editaId = null;
    }

    //FUNCA PRA DELETAR A LINHA, DELETA DIRETO E RECEBE PELO ID
    deletar(id){

        if(confirm('Deseja realmente deletar o produto:' + id)){

            let tbody = document.getElementById('tbody');

            for(let i = 0; i < this.arrayExercicios.length; i++){

                if(this.arrayExercicios[i].id == id){

                   this.arrayExercicios.splice(i, 1);//indice do q deletar, quantidade
                 tbody.deleteRow(i);
            }
        }
        }

        
    }
}


var exercicio = new Exercicio();

let addButton =document.getElementById('add');
addButton.addEventListener("click", addExercicio);

function addExercicio(){

    let addExer = document.getElementById('agrega');

    if(addExer){
        addExer.classList.add('mostrar');
        addExer.addEventListener("click",(e)=>{

            if(e.target.className == "cancelar" || e.target.className == "butSave"){

                addExer.classList.remove('mostrar');
            }

        })
    }

}

// $('table#tabela').dataTable({
//     "searching": true,
//     "paging": true,
//     "pageLength": 4,
// });
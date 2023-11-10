//Declare um array para armazenar as tarefas
let tarefas =[]


function adicionarTarefa(){

    const tarefa = document.getElementById("tarefaInput").value

    if(tarefa !== ''){  
        tarefas.push(tarefa)
        document.getElementById("tarefaInput").value = ''
        alert("Tarefa adiciona com sucesso.")
    }
    else{
        alert("Por favor, insira uma tarefa válida.")
    }
}

function visualizarTarefas(){

    const ListaElemento = document.getElementById("listaTarefas")

    document.getElementById("listaTarefas").innerHTML = ''

    if(tarefas.length == 0){
        alert("A lista de tarefas está vazia.")
        return;
    }
    else{

        for (const tarefa of tarefas){           
            const liElement = document.createElement("li")
            liElement.textContent = tarefa
            ListaElemento.appendChild(liElement)
        }
    }
} 

function limparTarefas(){

    tarefas = [];
    document.getElementById("listaTarefas").innerHTML = ''
    alert("Lista de tarefas limpa com sucesso!")
    
}


let meuFormulario = document.getElementById("formulario")
meuFormulario.addEventListener("submit",validarFormulario)


function validarFormulario(e){

    e.preventDefault()
    
    let formulario = e.target

    console.log(formulario.children[0].value)
    console.log(formulario.children[1].value)


}
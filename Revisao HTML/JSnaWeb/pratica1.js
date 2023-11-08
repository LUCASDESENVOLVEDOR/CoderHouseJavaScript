
let produtos = document.getElementById("lista-de-produtos")
let resultado = []

for(const produto of produtos.children){
    resultado.push(produto.innerText)
}

console.log(resultado)

//criacao de elementos.


let paragrafo = document.createElement("p")
paragrafo.innerHTML = "<h2>olá mundo </h2>"

document.body.append(paragrafo)

//eliminar elementos 
let paises = document.getElementsByClassName("paises")
paises[0].remove()


//obter / adicionar dados do input.
document.getElementById("nome").value = "Caio"
document.getElementById("idade").value = "20"




//Obtemos o nó em que acrescentaremos os novos elementos
let pai = document.getElementById("pessoas");

//Array com a informação a ser acrescentada
let pessoas = ["HOMER", "MARGE", "BART", "LISA", "MAGGIE"];

//Iteramos o array com for...of
for (const pessoa of pessoas) {
 //Criamos um nó <li> e acrescentamos ao pai em cada ciclo
 let li = document.createElement("li");
        li.innerHTML = pessoa;
        pai.append(li);
}

debugger
//remover a lista nao ordenada
pai.remove()

//odernar o array de pessoas
pessoas.sort()

//croar uma nova lista ol

pai = document.createElement("ol")

for (const pessoa of pessoas) {
    //Criamos um nó <li> e acrescentamos ao pai em cada ciclo
    let li = document.createElement("li");
           li.innerHTML = pessoa;
           pai.append(li);
   }
   

document.body.appendChild(pai)


console.log("Elementos a partir de um objeto")

const produtosMercado = [
     { id: 1, nome: "Arroz", preco: 20 },
     { id: 2, nome: "Macarrão", preco: 5 },
     { id: 3, nome: "Pão", preco: 1 },
     { id: 4, nome: "Pudim", preco: 10 }
    ];


    for (const produto of produtosMercado) {
        let container = document.createElement("div");
        //Definimos o innerHTML do elemento com uma string de texto
        container.innerHTML = "<h3> ID: " + produto.id + "</h3>" +
        "<p> Produto: " + produto.nome + "</p>" +
        "<b> R$ " + produto.preco + "</b><br><br>"
        document.body.append(container);
    }
    

let botao1 = document.getElementById("botao1")

//js aguarda do clique do elemento e depois executa funcao.
botao1.addEventListener("click", acaoClique)

function acaoClique()
{
    alert("Resposta ao evento da opcao 1")
}

let botao2 = document.getElementById("botao2")

botao2.onclick = () => {
    alert("Resposta ao evento da opcao 2")
}


function funcaoOpcao3(){
    alert("Resposta ao evento da opcao 3")

}










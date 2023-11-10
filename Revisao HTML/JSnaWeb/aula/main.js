
console.log(document)
console.log(document.head)
console.log(document.body)


let div = document.getElementById("app")
console.log(div)

let paragrafo = document.getElementById("paragrafo1")
console.log(paragrafo)

console.log("containers")

let containers = document.getElementsByTagName("div")

console.log(containers[0])
console.log(containers[1])
console.log(containers[2])


console.log("querySelector")

let container = document.querySelector("#container") //Por id com #
console.log(container)

paragrafo = document.querySelector(".texto") // Por classe com .
console.log(paragrafo)

// É possível selecionar a tag <p> seguindo a sintaxe de CSS:
let paragrafo1 = document.querySelector("#container p")
console.log(paragrafo1)


console.log("innerText")

let titulo = document.getElementById("titulo")
console.log(titulo.innerText)

//Modificando o conteudo do elemento
titulo.innerText = "Alterado pelo JS"

console.log(titulo.innerText)


console.log("innerHTML")

let divVazia = document.getElementById("div_vazia")

divVazia.innerHTML = "<h2> codigo HTML pelo JS!</h2><p> tag p pelo js! </p>"

divVazia.className = "row"



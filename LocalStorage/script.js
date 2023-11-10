

//armazenar uma informação é uitlizado o setItem.

localStorage.setItem('boas-vindas','Olá Coder!')
localStorage.setItem('valido',true)
localStorage.setItem('numero',20)

//Para acessar a informação armazenada,  utilizamos getItem.

//As chaves e valores de Storage sao armazenadas em formato de cadeia
//de caracteres (STRING)

console.log(localStorage.getItem('boas-vindas'))
console.log(localStorage.getItem('valido'))
console.log(localStorage.getItem('numero'))


localStorage.removeItem('boas-vindas') //eliminar apenas a chave

//localStorage.clear() // eliminar toda a informçao

function salvarItem(){
   
    const novoItem = document.getElementById("item").value

     if(novoItem != ''){
       
            //Obter os itens existentes ou inicialiar um array vazio.

            //'[2,3,4,5,6]'
            const item = localStorage.getItem('itens') ?           
            localStorage.getItem('itens').split(','):[]

           //adiciona novo item a lista
            item.push(novoItem);

            // Salve a lista atualizada no localStorage
            localStorage.setItem('itens', item);
  

            //limpa o campo de input.
            document.getElementById("item").value = ''

            alert("Item salvo com sucesso.")
     }
     else
     {
            alert("Por favor, insira um item válido.")
     }
}


function visualizarItens() {
    const listaCompras = document.getElementById('listaCompras');
    
    listaCompras.innerHTML = '';
  
    // Obtenha os itens do localStorage
    const itens = localStorage.getItem('itens') ? 
   localStorage.getItem('itens').split(',')     : [];
  
    if (itens.length === 0) {
        alert('A lista de compras está vazia.');
        return;
    }
  
    // Adicione os itens à lista na página
    for (const item of itens) {
      const liElement = document.createElement('li');
      liElement.textContent = item;
      listaCompras.appendChild(liElement);
    }
  }

  function limparItens() {
    localStorage.removeItem('itens');
    alert('Itens removidos com sucesso!');

    // Limpe o conteúdo da lista no HTML
    document.getElementById('listaCompras').innerHTML = '';

  }



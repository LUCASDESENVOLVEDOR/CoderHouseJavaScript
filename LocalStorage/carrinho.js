function inicializarCarrinho() {

    //aula de operadores avançados.
      const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
      if (carrinho.length > 0) {
        exibirProdutosNoCarrinho(carrinho);
      } else {
        exibirMensagemCarrinhoVazio();
      }
    }
    
    function exibirProdutosNoCarrinho(produtos) {
      const carrinhoDiv = document.getElementById('carrinho');
      carrinhoDiv.innerHTML = '<h2>Produtos no Carrinho</h2>';
    
      const listaProdutos = document.createElement('ul');
    
  //A interpolação de string é uma maneira mais conveniente de criar strings 
  //concatenando variáveis ou expressões em uma string literal
  
      for (const produto of produtos) {
        const itemProduto = document.createElement('li'); //INTERPOLACAO
        itemProduto.textContent = `ID: ${produto.id}, Nome: ${produto.nome}, Valor: ${produto.valor}, Quantidade: ${produto.quantidade}`;
        listaProdutos.appendChild(itemProduto);
      }
    
      carrinhoDiv.appendChild(listaProdutos);
    }
    
    function exibirMensagemCarrinhoVazio() {
      const carrinhoDiv = document.getElementById('carrinho');
      carrinhoDiv.innerHTML = '<h2>O carrinho está vazio!</h2>';
    }
    
    function adicionarProduto() {
      const id = document.getElementById('id').value.trim(); //trim ostira espaços
      const nome = document.getElementById('nome').value.trim();
      const valor = parseFloat(document.getElementById('valor').value);
      const quantidade = parseInt(document.getElementById('quantidade').value);
    
      if (isNaN(valor) || isNaN(quantidade) || id === '' || nome === '') {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
      }
    
      const novoProduto = {
        id: id,
        nome: nome,
        valor: valor,
        quantidade: quantidade
      };
    
      const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
      carrinho.push(novoProduto);

      
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
    
      exibirProdutosNoCarrinho(carrinho);
    }
    
    
    document.addEventListener('DOMContentLoaded', inicializarCarrinho);
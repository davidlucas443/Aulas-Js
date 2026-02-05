const produtos = {
    produto1: {
        nome:"Camiseta de Algodão",
        preco:59.99,
        disponivel: true,

    },
    produto2: {
        nome: "Calça Jeans Slim Fit",
        preco:119.99,
        disponivel:false,
    },
    produto3:{
        nome:"Tenis Esportivo Nike",
        preco:400.00,
        disponivel:true,
    }
}

//Pegar a div que vamos exibir os produtos

const listaProdutosDiv = document.getElementById('lista-produtos');

//Vamos iterar os elementos do objeto produtos
for(let key in produtos){
    //Vamos ler as propriedades de cada produtos
    if(produtos.hasOwnProperty(key)){
        const produto = produtos[key]
        
        //Vamos criar elementos HTML para exibir produtos
        const produtoDiv = document.createElement('div')
        produtoDiv.classList.add('produto')

        //Vamos criar o elemento <h3> para exibir o nome 
        const nomeH3 = document.createElement('h3')
        //Vamos exibir o nome do produto
        nomeH3.textContent = produto.nome

        //Vamos criar o elemento <p> para exibir o preço do produto
        //formatado com duas casas decimais
        const precoP = document.createElement('p')

        //Vamos exibir o preço do elemento 
        precoP.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`

        //Vamos spanDisponibilidade = doc
        const disponibilidadeP = document.createElement('p')

        const spanDisponibilidade = document.createElement('span')
        spanDisponibilidade.textContent = produto.disponivel ? 'Disponível' : 'Indisponível'
        spanDisponibilidade.classList.add(produto.disponivel ? 'disponivel' : 'indisponivel') 
        disponibilidadeP.appendChild(spanDisponibilidade)

        produtoDiv.appendChild(nomeH3)
        produtoDiv.appendChild(precoP)
        produtoDiv.appendChild(disponibilidadeP)

        listaProdutosDiv.appendChild(produtoDiv)


    }
}
//Vamos pegar a lista de produtos com id = listaProdutos
const listaProdutos = document.getElementById("lista");

//Vamos pegar o input do id = novoProduto
const novoProduto = document.getElementById("novoItem");

//Vamos pegar o elemento button com o id = adicionarProduto
const adicionarProduto = document.getElementById("adicionar");

//Vamos adicionar o metodo addEventListener
adicionarProduto.addEventListener("click", function(){
    //Vamos criar um novo elemento li
    const item = novoProduto.value;

    //Vamos fazer a validação para verificar se o input não está vazio
    if(item !== ""){
        const novoItem = document.createElement("li");
        novoItem.textContent = item;
        listaProdutos.appendChild(novoItem);
        novoProduto.value = "";
    }
})


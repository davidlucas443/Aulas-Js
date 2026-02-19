//Vamos pegar o elemento h1 com id = titulo

const texto = document.getElementById("titulo");

//Vamos pegar o elemento button com id = seuBotao

const botao = document.getElementById("seuBotao");

//Manipulador de evento método add addEvrntListener

botao.addEventListener("click", function(){
    //Vamos alterar o texto do h1
    texto.textContent = "Texto Alterado";
})

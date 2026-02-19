//Vamos pegar o elemento button  com iud = alternarBotao
const elementoBotao = document.getElementById("alternarBotao");

//Vamos pegar o elemento div com id = mensagem

const elementoDiv = document.getElementById("mensagem");

//Vamos adicionar o metodo addEventListener para escutar o click 
elementoBotao.addEventListener("click", function(){

    mensagem.classList.toggle("oculto");
    //Vamos verificar se a div está visível ou oculta

})
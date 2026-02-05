const exemploArrayliteralDiv = document.getElementById('exemplo-array-literal')
const frutas = ['maçã', 'uva', 'banana']
exemploArrayliteralDiv.innerHTML = ` 
<h2>Exemplo de array com literal</h2>
<p>Array: [${frutas}.]</p>
`
const exemploArrayAcessoDiv = document.getElementById('exemplo-array-acesso')

const numeros = [1,2,3,4,5]
const elementos = ['primeiro','segundo', 'terceiro' ,'quarto', 'quinto']

exemploArrayAcessoDiv.innerHTML = `<h2>Exemplo de acesso a elementos da array</h2>`

for(let i=0; i< numeros.length; i++){

    exemploArrayAcessoDiv.innerHTML += `<p> ${elementos[i]} elemento : ${numeros[i]}</p>`
}

const exemploArrayModificadoDiv = document.getElementById('exemplo-array-modificado')

const cores = ['azul', 'amarelo', 'verde']

cores [0] = 'rosa'

exemploArrayModificadoDiv.innerHTML = `
<h2>Exemplo de array modificado</h2>
<p>Array: [${cores}.]</p>
`

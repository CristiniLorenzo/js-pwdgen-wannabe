//name question
const nome = prompt('Ciao dimmi il tuo nome...');
console.log(nome)

//surname question
const surname = prompt('e adesso il tuo cognome...')
console.log(surname)

//color question
const color = prompt('e il tuo colore preferito?')
console.log(color)

//password generator
const passGenerator = `La tua password è: ${nome}${surname}${color}23`

document.getElementById('password').innerHTML = passGenerator
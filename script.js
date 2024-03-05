//name question
const nome = prompt('Ciao dimmi il tuo nome...');
console.log(nome)

//surname question
const surname = prompt('e adesso il tuo cognome...')
console.log(surname)

//color question
const color = prompt('e il tuo colore preferito?')
console.log(color)

// number question
const number = prompt('dimmi il tuo numero preferito')
console.log(number)

const numberAsNumber= parseInt(number)
console.log(numberAsNumber)

const finalNumber = numberAsNumber + 23
//password generator
const passGenerator = `La tua password è: ${nome}${surname}${color}${finalNumber}`

document.getElementById('password').innerHTML = passGenerator
const fixedNumber = 21

let nome = prompt('Dimmi il tuo nome')
console.log(nome)

let cognome = prompt('Dimmi il tuo cognome')
console.log(cognome)

let colore = prompt('Dimmi il tuo colore preferito')
console.log(colore)

document.getElementById('text').innerHTML = `
${nome}${cognome}${colore}${fixedNumber}`
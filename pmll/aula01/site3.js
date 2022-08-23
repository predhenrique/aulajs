const escola = "Cod3r"

console.log(escola.charAt(4)) // ME RETORNA A LETRA DA QUARTA POSIÇÃO
console.log(escola.charAt(5)) // RETORNA VAZIO

//para coloar string pode usar "" '' ou ``

console.log(escola.charCodeAt(3)) // retorna valor da tabela UNICODE
console.log(escola.indexOf('3')) // indice associado a variavel escola

console.log(escola.substring(1))
console.log(escola.substring(0,3))
console.log('Escola' .concat(escola).concat("!"))

console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e'))

console.log('Ana,Maria,Pedro'.split(','))


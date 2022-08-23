console.log(7 / 0) // resulta em infinity
console.log("10" / 2) // retorna resultado pois ele verifica se a string
console.log("Show" * 2) // NaN = Not a Number
//console.log(10.toString())
console.log((10.345).toFixed(2)) //possui algumas imprecisões
console.log("3"+1) // ele concatena pois o + faz sentido no contexto de uma
console.log("3"-1) // ele soma pois o - não faz sentido no contexto da string
function soma(x , y) {
    return console.log(x, "+" , y , " = " , x + y)

}
soma(2, 4)
function mensagem() {
    console.log("oi")
}
mensagem()
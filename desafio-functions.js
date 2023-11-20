let vitorias = parseInt(prompt('numero de vitorias'))
let derrotas = parseInt(prompt('numero de derrotas'))

function decisao(vitorias, derrotas){
    let calculo = (vitorias - derrotas)

    let nivelAtual;

    if(calculo <= 10){
        nivelAtual = "Ferro"
    } 
    else if(calculo >= 11 && calculo <= 20) {
        nivelAtual = "Bronze"
    } 
    else if(calculo >= 21 && calculo <= 50) {
        nivelAtual = "Prata"
    } 
    else if(calculo >= 51 && calculo <= 80) {
        nivelAtual = "Ouro"
    } 
    else if(calculo >= 81 && calculo <= 90) {
        nivelAtual = "Diamante"
    } 
    else if(calculo >= 91 && calculo <= 100) {
        nivelAtual = "Lendário"
    } 
    else{
        nivelAtual = "Imortal"
    }

    return{
        calculo: calculo,
        nivelAtual: nivelAtual
    }

}

let resultado = decisao(vitorias, derrotas)
alert('O Herói tem de saldo de ' + resultado.calculo + ' está no nível de ' + resultado.nivelAtual)


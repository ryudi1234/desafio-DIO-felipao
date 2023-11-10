let name = prompt("qual o seu nome???")
let jogadorNvl = parseInt(prompt("qunto de XP vc tem??"))

if(jogadorNvl <= 1000){
    alert("ferro")
}
else if(jogadorNvl > 1000 && jogadorNvl < 2000){
    alert("bronze")
}
else if(jogadorNvl > 2000 && jogadorNvl < 5000){
    alert("prata")
}
else if(jogadorNvl > 6000 && jogadorNvl < 7000){
    alert("ouro")
}
else if(jogadorNvl > 7000 && jogadorNvl < 8000){
    alert("platina")
}
else if(jogadorNvl > 8000 && jogadorNvl < 9000){
    alert("acendente")
}
else if(jogadorNvl > 9000 && jogadorNvl < 10000){
    alert("imortal")
}
else
{
    alert("radiante")
}

alert("o Heroi de nome " + name + " esta no nivel" + jogadorNvl)


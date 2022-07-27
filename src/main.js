var menuBurger = document.getElementsByClassName('mycontainer')
var qtdPi = document.getElementById('qtd-pi')
var qtdMa = document.getElementById('qtd-ma')
var qtdBa = document.getElementById('qtd-ba')


function menuAtivar() {
    menuBurger[0].style.display = 'block'
}

function menuDesativar() {
    menuBurger[0].style.display = 'none'
}

document.getElementById("select").addEventListener('change', (event) => {
    let opcao = event.target.value
    if(opcao === "1"){
        qtdPi.innerText = "5"
        qtdMa.innerText = "15"
        qtdBa.innerText = "20"
    } else if (opcao === "2") {
        qtdPi.innerText = "8"
        qtdMa.innerText = "10"
        qtdBa.innerText = "4"
    } else if (opcao === "3") {
        qtdPi.innerText = "6"
        qtdMa.innerText = "7"
        qtdBa.innerText = "12"
    } else if (opcao === "4") {
        qtdPi.innerText = "7"
        qtdMa.innerText = "6"
        qtdBa.innerText = "2"
    } else if (opcao === "5") {
        qtdPi.innerText = "5"
        qtdMa.innerText = "8"
        qtdBa.innerText = "15"
    } else {
        console.log("nada por aqui");
    }
});
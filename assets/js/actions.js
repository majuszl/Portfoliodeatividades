function alternarTexto() {
    var texto = document.getElementById("btn-proj")

    console.log(texto.textContent)

    if (texto.textContent === "MEUS") {
        texto.textContent = "PROJETOS"
    } else {
        texto.textContent = "MEUS"
    }
}

setInterval(alternarTexto, 1000)


function trocarTexto () {
    var botao = document.getElementById("btn-footer")

    if (botao.textContent === "Obrigada por ver...") {
        botao.textContent = "e até a próxima! (;"
    } else {
        botao.textContent = "e até a próxima! (;"
    }
}

document.getElementById('btnfooter').addEventListener('scroll', trocarTexto)


function numeroPositivo() {
    var num1 = document.getElementById('num1').value

    if (num1 > 0) {
        return('Este número é positivo! (; ')
    } else if (num1 < 0) {
        return('Este número é negativo! (; ')
    } else if (num1 == 0) {
        return('O número é igual a zero.')
    }

    document.getElementById('resultado').innerText = ""
}

document.getElementById('btnverificar').addEventListener('click', numeroPositivo)
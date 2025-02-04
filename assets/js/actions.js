function alternarTexto() {
    var texto = document.getElementById("btn-proj")

    console.log(texto.textContent)

    if (texto.textContent === "MEUS") {
        texto.textContent = "PROJETOS (;"
    } else {
        texto.textContent = "MEUS"
    }
}

setInterval(alternarTexto, 1000)


// ainda não funciona
function trocarTexto () { 
    var botao = document.getElementById("btn-footer")

    if (botao.textContent === "Obrigada por ver...") {
        botao.textContent = "e até a próxima! (;"
    } else {
        botao.textContent = "e até a próxima! (;"
    }
}

document.getElementById('btn-footer').addEventListener('scroll', trocarTexto)


// ainda não funciona
function numeroPositivo() {
    var num = document.getElementById('num1').value

    if (num > 0) {
        return('Positivo!')
    } else if (num < 0) {
        return('Negativo!')
    } else if (num == 0) {
        return('Igual a zero.')
    }


    document.getElementById('resultado').innerText = ""
}

document.getElementById('btnverificar').addEventListener('click', numeroPositivo)
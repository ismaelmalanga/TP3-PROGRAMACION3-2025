const formulario = document.getElementById("formulario")
const operacion = document.getElementById("operacion")
const boton = document.getElementById("botonCalcular")
const numero2 = document.getElementById("numero2")
const resultado = document.getElementById("resultado")

function validarDivisionPorCero() {
    const op = operacion.value
    const n2 = parseFloat(numero2.value)

    if (op === "division" && n2 === 0) {
        boton.disabled = true
        resultado.textContent = "No se puede dividir en 0"
    } else {
        boton.disabled = false
        resultado.textContent = ""
    }
}

operacion.addEventListener("change", validarDivisionPorCero)
numero2.addEventListener("input", validarDivisionPorCero)

formulario.addEventListener("submit", function (e) {
    e.preventDefault()

    const n1 = parseFloat(document.getElementById("numero1").value)
    const n2 = parseFloat(numero2.value)
    let resp = 0

    switch (operacion.value) {
        case "suma":
            resp = n1 + n2
            break
        case "resta":
            resp = n1 - n2
            break
        case "multiplicacion":
            resp = n1 * n2
            break
        case "division":
            resp = n1 / n2
            break
    }

    resultado.textContent = "El resultado es: " + resp
})

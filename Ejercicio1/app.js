const formulario = document.getElementById("formulario")
        const operacion = document.getElementById("operacion")
        const boton = document.getElementById("botonCalcular")
        const resultado = document.getElementById("resultado")

        formulario.addEventListener("submit", function (e) {
            e.preventDefault()

            const n1 = parseFloat(document.getElementById("numero1").value)
            const n2 = parseFloat(document.getElementById("numero2").value)

            let resp = 0;

            switch (operacion.value) {
                case "suma":
                    resp = n1 + n2
                    break
                case "resta":
                    resp = n1 - n2
                    break;
                case "multiplicacion":
                    resp = n1 * n2
                    break
            }
            resultado.textContent = "El resultado es: " + resp
        });

        operacion.addEventListener("change", () => {
            if (operacion.value === "division") {
                boton.disabled = true
            } else {
                boton.disabled = false;
            }
        });
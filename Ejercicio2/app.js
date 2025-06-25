const lista = document.getElementById("listaPalabras")
const formulario = document.getElementById("formulario")
const input = document.getElementById("input")
const mensaje = document.getElementById("mensaje")
const palabras = ["Moto", "Auto", "UTV", "PickUp", "Quad", "Camion"]

mostrarPalabras(palabras)
formulario.addEventListener("submit", function (e) {
    e.preventDefault()

    const texto = input.value.trim().toLowerCase()
    if (texto === "") {
        mensaje.textContent = "ERROR!!!!! Ingresar palabra para filtrar."
        lista.innerHTML = ""
        return
    }
    mensaje.textContent = ""

    const filtradas = palabras.filter(palabra => palabra.toLowerCase().includes(texto))
    mostrarPalabras(filtradas)
})

function mostrarPalabras(lista_filtrada) {
    lista.innerHTML = ""
    if (lista_filtrada.length === 0) {
        lista.innerHTML = "No hay coincidencias"
        return
    }

    lista_filtrada.forEach(palabra => {
        const li = document.createElement("li")
        li.textContent = palabra
        lista.appendChild(li)
    })
}
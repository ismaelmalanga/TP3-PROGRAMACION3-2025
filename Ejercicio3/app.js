const listaTareas = document.getElementById("lista-completadas")
const mensajeError = document.getElementById("mensaje-error")
const apiURL = "https://jsonplaceholder.typicode.com/todos"


async function cargarTareasCompletadas() {
    const resultado = await fetch(apiURL)
    if (!resultado.ok) {
        mensajeError.textContent = `Error al cargar datos: ${resultado.status} - ${resultado.statusText}`
        return
    }

    const tareas = await resultado.json()
    if (tareas && tareas.length > 0) {
        listaTareas.innerHTML = ""
        const hechas = tareas.filter((tarea) => tarea.completed === true)

        hechas.forEach((tarea) => {
            const elemento = document.createElement("li")
            elemento.innerHTML = `${tarea.title}`
            listaTareas.appendChild(elemento)
        })
    }
}

cargarTareasCompletadas()

function IMCForm() {
    const [peso, setPeso] = React.useState("")
    const [altura, setAltura] = React.useState("")
    const [imc, setImc] = React.useState("")
    const [nivel, setNivel] = React.useState("")

    function calcularIMC(e) {
        e.preventDefault()

        const pesoFloat = parseFloat(peso)
        const alturaFloat = parseFloat(altura)

        if (
            peso === "" || altura === "" ||
            pesoFloat <= 0 || alturaFloat <= 0
        ) {
            alert("Ingresar peso y altura (mayores a 0)")
            return
        }

        const imcCalculado = pesoFloat / (alturaFloat * alturaFloat)
        setImc(imcCalculado.toFixed(2))

        if (imcCalculado < 18.5) {
            setNivel("bajo")
        } else if (imcCalculado <= 24.9) {
            setNivel("normal")
        } else if (imcCalculado <= 29.9) {
            setNivel("sobrepeso")
        } else {
            setNivel("obesidad")
        }
    }

    function Mensaje() {
        if (nivel === "bajo") {
            return "Nivel bajo de IMC"
        } else if (nivel === "normal") {
            return "IMC normal"
        } else if (nivel === "sobrepeso") {
            return "Nivel de sobrepeso"
        } else if (nivel === "obesidad") {
            return "Nivel de obesidad"
        } else {
            return ""
        }
    }

    return (
        <form onSubmit={calcularIMC}>
            <label>Peso (kilos):</label>
            <input type="number" value={peso} onChange={e => setPeso(e.target.value)} required/>

            <label>Altura (metros):</label>
            <input type="number" value={altura} onChange={e => setAltura(e.target.value)} required/>

            <button type="submit">Calcular IMC</button>

            {imc !== "" && (
                <div className={nivel}>
                    Tu IMC es: {imc} - {Mensaje()}
                </div>
            )}
        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<IMCForm />)

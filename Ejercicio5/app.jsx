const { useState } = React

function Calculadora() {
    const [numUno, setNumUno] = useState('')
    const [numDos, setNumDos] = useState('')
    const [tipoOperacion, setTipoOperacion] = useState('suma')
    const [textoResultado, setTextoResultado] = useState('')
    const [botonDeshabilitado, setBotonDeshabilitado] = useState(false)

    function cambiarOperacion(e) {
        const operacionElegida = e.target.value
        setTipoOperacion(operacionElegida)

        if (operacionElegida === 'division') {
            setBotonDeshabilitado(true)
            setTextoResultado('No se puede dividir en 0.')
        } else {
            setBotonDeshabilitado(false)
            setTextoResultado('')
        }
    }

    function hacerCalculo(e) {
        e.preventDefault()
        const n1 = parseFloat(numUno)
        const n2 = parseFloat(numDos)
        let resultado = 0

        switch (tipoOperacion) {
            case 'suma':
                resultado = n1 + n2
                break
            case 'resta':
                resultado = n1 - n2
                break
            case 'multiplicacion':
                resultado = n1 * n2
                break
        }

        setTextoResultado(`El resultado es: ${resultado}`)
    }

    return (
        <div>
            <h2>Calculadora React</h2>
            <form onSubmit={hacerCalculo}>
                <input type="number" value={numUno} onChange={e => setNumUno(e.target.value)} placeholder="Numero 1" required
                /> <br></br>
                <input type="number" value={numDos} onChange={e => setNumDos(e.target.value)} placeholder="Numero 2" required
                /><br></br>
                <select value={tipoOperacion} onChange={cambiarOperacion}>
                    <option value="suma">SUMA</option>
                    <option value="resta">RESTA</option>
                    <option value="multiplicacion">MULTIPLICACIÓN</option>
                    <option value="division">DIVISIÓN</option>
                </select>
                <button type="submit" disabled={botonDeshabilitado}>Calcular</button>
            </form>
            <p>{textoResultado}</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Calculadora />)

function Botones() {
    const [botonIzquierdoActivo, setIzquierdoActivo] = React.useState(true);

    function ClickIzquierdo() {
        setIzquierdoActivo(false)
    }

    function ClickDerecho() {
        setIzquierdoActivo(true)
    }

    return (
        <div>
            <h1>Botones</h1>
            <button onClick={ClickIzquierdo} disabled={!botonIzquierdoActivo}>
                Boton Izquierdo
            </button>
            <button onClick={ClickDerecho} disabled={botonIzquierdoActivo}>
                Boton Derecho
            </button>
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Botones />)

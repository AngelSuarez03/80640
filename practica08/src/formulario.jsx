// import MiFieldSet from "./MiFieldSet.jsx"
import DatosPersonales from "./DatosPersonales.jsx"
import DatosEscolares from "./DatosEscolares.jsx"

function Formulario() {
    return (
        <>
        <form action="">
        {/* <MiFieldSet titulo="Datos Personales" txt1="Nombre" txt2="Password" />
        <MiFieldSet titulo="Datos Escolares" txt1="Carrera" txt2="Semestre" /> */}
        <DatosPersonales></DatosPersonales>
        <DatosEscolares></DatosEscolares>
        <input type="submit" value="Enviar Datos"/>
        </form>
        </>
    )
}

export default Formulario
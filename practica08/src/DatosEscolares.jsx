function DatosEscolares() {
    return (
        <>
        <fieldset>
        <legend>Daatos Escolares</legend>
        <label htmlFor="carrera">Carrera:</label>
        <input type="text" id="carrera"/>
        <label htmlFor="semestre">Semestre:</label>
        <input type="text" id="semestre"/>
        <label htmlFor="matricula">Matricula:</label>
        <input type="text" id="matricula"/>
      </fieldset>
        </>
    )
}

export default DatosEscolares
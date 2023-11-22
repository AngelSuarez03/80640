import { Box, Button, TextField } from "@mui/material"
import { useState } from "react";
import axios from "axios"

function Formulario(props) {

    const [Cargando, setCargando] = useState(false)
    const [datosFormulario, setDatosFormulario] = useState({ nombre: '', password: '' })

    const hacerPeticion = async () => {
        try {
            const res = await axios.post('http://localhost:4567/ruta2', datosFormulario)
            const res2 = await axios.get('http://localhost:4567/ruta2', {params: datosFormulario})
            console.log(res.data)
            return res.data
        } catch (error) {
            throw error
        }
    }

    const cambiosFormulario = (e) => {
        const { name, value } = e.target
        setDatosFormulario({
            ...datosFormulario, [name]: value
        })
        // console.log(name, value)

    }

    const procesarFormulario = async (e) => {
        e.preventDefault();
        console.log("Datos recuperados del formulario", datosFormulario);
        setCargando(true)
        try {
            const res = await hacerPeticion()
            // console.log(res)
            setCargando(false)
            //Se validan los datos formulario contra lo del backend
            if (datosFormulario.nombre === res.alumno) {
                console.log("El usuario es correcto")
            } else {
                console.log("El usuario no es correcto")
            }
        } catch (error) {
            console.log("Error: ", error)
            setCargando(false)
        }
    }

    return (
        <>
            <h1>Inicio de sesión</h1>
            <form onSubmit={procesarFormulario}>
                <Box m={5}>
                    <TextField label="Nombre:" variant="outlined" fullWidth onChange={cambiosFormulario} name="nombre" value={datosFormulario.nombre}></TextField>
                </Box>
                <Box m={5}>
                    <TextField label="Contraseña:" variant="outlined" type="password" fullWidth onChange={cambiosFormulario} name="password" value={datosFormulario.password}></TextField>
                </Box>
                <Box m={5}>
                    <Button variant="contained" type="submit" color="primary" fullWidth disabled={Cargando}>Iniciar Sesión</Button>
                </Box>
            </form>
        </>
    )
}

export default Formulario
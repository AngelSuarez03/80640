import { Box, Button, TextField } from "@mui/material"
import { useState } from "react";
import axios from "axios"

function Formulario(props) {

    const [Cargando, setCargando] = useState(false)
    const [datosFormulario, setDatosFormulario] = useState({ nombre: '', apellido: '' })

    const hacerPeticion = async () => {
        try {
            const res = await axios.post('http://localhost:4567/crear', datosFormulario)
            console.log("Información almacenada");
            // console.log(res.data)
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
        // console.log("Datos recuperados del formulario", datosFormulario);
        setCargando(true)
        try {
            const res = await hacerPeticion()
            // console.log(res)
            setCargando(false)
            //Se validan los datos formulario contra lo del backend
            // if (datosFormulario.nombre === res.alumno) {
            //     console.log("El usuario es correcto")
            // } else {
            //     console.log("El usuario no es correcto")
            // }
        } catch (error) {
            console.log("Error: ", error)
            setCargando(false)
        }
    }
    
    const recuperarDatos = async () => {
        const res = await axios.get('http://localhost:4567/recuperar', datosFormulario)
        console.log(res.data)
    }
    
    const modificarDatos = async () => {
        const res = await axios.put('http://localhost:4567/modificar', datosFormulario)
        console.log(res.data)
    }

    const eliminarDatos = async () => {
        const res = await axios.delete('http://localhost:4567/eliminar')
        console.log(res.data)
    }


    return (
        <>
            <h1>Frontend Y Backend</h1>
            <form onSubmit={procesarFormulario}>
                <Box m={5}>
                    <TextField label="Nombre:" variant="outlined" fullWidth onChange={cambiosFormulario} name="nombre" value={datosFormulario.nombre}></TextField>
                </Box>
                <Box m={5}>
                    <TextField label="Apellido:" variant="outlined" fullWidth onChange={cambiosFormulario} name="apellido" value={datosFormulario.password}></TextField>
                </Box>
                <Box m={5}>
                    <Button variant="contained" type="submit" color="primary" fullWidth disabled={Cargando}>Ingresar información</Button>
                </Box>
                <Box m={5}>
                    <Button variant="contained" onClick={recuperarDatos} color="primary" fullWidth disabled={Cargando}>Recuperar</Button>
                </Box>
                <Box m={5}>
                    <Button variant="contained" onClick={modificarDatos} color="primary" fullWidth disabled={Cargando}>Modificar</Button>
                </Box>
                <Box m={5}>
                    <Button variant="contained" onClick={eliminarDatos} color="primary" fullWidth disabled={Cargando}>Eliminar</Button>
                </Box>
            </form>
        </>
    )
}

export default Formulario
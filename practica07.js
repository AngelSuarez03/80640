const app = document.getElementById("formulario")
const field = (parametros) => {
    return `
        <fieldset>
        <legend>${parametros.leyenda}</legend>
        <label for="${parametros.id1}">${parametros.Parametro1}</label>
        <input type="${parametros.tipo1}" id="${parametros.id1}" name="user" />
        <label for="${parametros.id2}">${parametros.Parametro2}</label>
        <input type="${parametros.tipo2}" id="${parametros.id2}" name="password" />
        </fieldset> 
    `
}

let button = (parametros) => {
    return `
      <input type="${parametros.tipo}" value="${parametros.texto}" class="x" id="envio"/>
    `
}

    app.insertAdjacentHTML("afterbegin", button({tipo:"submit",texto:"Iniciar Sesion"}))
    app.insertAdjacentHTML("afterbegin", field({id1:"Direccion",id2:"ciudad",leyenda:"Informacion de Direccion",Parametro1:"Direccion:",Parametro2:"Ciudad:",tipo1:"text",tipo2:"text"}))
    app.insertAdjacentHTML("afterbegin", field({id1:"Nombre",id2:"correo",leyenda:"Informacion Personal",Parametro1:"Nombre:",Parametro2:"Correo:",tipo1:"text",tipo2:"email"}))
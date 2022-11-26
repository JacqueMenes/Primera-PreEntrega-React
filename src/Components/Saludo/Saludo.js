import React, {Fragment} from "react";

function Saludo(props) {
    console.log(props)
    return (
        <Fragment>
            <h2>Bienvenido {props.nombreCliente} {props.apellidoCliente} a nuestra tienda online! </h2>
            
        </Fragment>
    )

}

export default Saludo

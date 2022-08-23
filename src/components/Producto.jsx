import React from "react";

function Producto(props){
    return(
        <article className='Carta__Contenedor__Producto'>
            <div className="Carta__Contenedor__Producto__Contenedor">
                <img 
                className="Carta__Contenedor__Producto__Contenedor--Imagen" 
                alt={`Imagen de ${props.Nombre}`}
                src = {require(`../Img/Carta-${props.Imagen}.png`)} />
            </div>
            <h2 className="Carta__Contenedor__Producto__Titulo">Nigrini + Maki + Uramaki</h2>
            <a className="Carta__Contenedor__Producto__Encargar" href="https://web.whatsapp.com" target="_blank" rel="noreferrer">Encargar</a>
            <p className="Carta__Contenedor__Producto__Descripcion">{props.Descripcion[0]}<br/>{props.Descripcion[1]}<br/>{props.Descripcion[0]}</p>
        </article>
    )
}

export default Producto;
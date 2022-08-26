import React from 'react'
import './App.css';
import Producto from './components/Producto';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header 
      dimension= 'SM' />
      <section className='Inicio'>
        <article className='Inicio__Imagen'>
          <a className='Inicio__Imagen__BotonPedir' href='#Carta'>Hace tu pedido</a>
        </article>
      </section>

      <section className='QuienesSomos'>
        <article className='QuienesSomos__Contenedor'>
          <p className='QuienesSomos__Contenedor__Parrafo'>Somos un emprendimiento dedicado a la elaboración de sushi a domicilio de la zona de Adrogué.<br/>
          Nuestro objetivo es acercarte a los sabores de la cultura japonesa, con el fin de que usted pueda expandir su experiencia a su paladar. Para esto, proponemos los precios más accesibles del País.
          </p>
        </article>
      </section>

      <section className='Carta' id='Carta'>
        <h1 className='Carta__Titulo'>Carta delivery</h1>
        <div className='Carta__Contenedor'>
          <Producto 
            Nombre = 'Nigrini + Maki + Uramaki'
            Imagen = 'Nigrini-Maki-Uramaki'
            Descripcion = {['2 Piezas de Nigrini', '4 Piezas de Maki', '4 Piezas de Uramaki']} />

            <Producto 
            Nombre = 'Nigrini + Maki + Uramaki'
            Imagen = 'Nigrini-Maki-Uramaki'
            Descripcion = {['2 Piezas de Nigrini', '4 Piezas de Maki', '4 Piezas de Uramaki']} />

            <Producto 
            Nombre = 'Nigrini + Maki + Uramaki'
            Imagen = 'Nigrini-Maki-Uramaki'
            Descripcion = {['2 Piezas de Nigrini', '4 Piezas de Maki', '4 Piezas de Uramaki']} />

            <Producto 
            Nombre = 'Nigrini + Maki + Uramaki'
            Imagen = 'Nigrini-Maki-Uramaki'
            Descripcion = {['2 Piezas de Nigrini', '4 Piezas de Maki', '4 Piezas de Uramaki']} />

            <Producto 
            Nombre = 'Nigrini + Maki + Uramaki'
            Imagen = 'Nigrini-Maki-Uramaki'
            Descripcion = {['2 Piezas de Nigrini', '4 Piezas de Maki', '4 Piezas de Uramaki']} />

            <Producto 
            Nombre = 'Nigrini + Maki + Uramaki'
            Imagen = 'Nigrini-Maki-Uramaki'
            Descripcion = {['2 Piezas de Nigrini', '4 Piezas de Maki', '4 Piezas de Uramaki']} />

            <Producto 
            Nombre = 'Nigrini + Maki + Uramaki'
            Imagen = 'Nigrini-Maki-Uramaki'
            Descripcion = {['2 Piezas de Nigrini', '4 Piezas de Maki', '4 Piezas de Uramaki']} />

            <Producto 
            Nombre = 'Nigrini + Maki + Uramaki'
            Imagen = 'Nigrini-Maki-Uramaki'
            Descripcion = {['2 Piezas de Nigrini', '4 Piezas de Maki', '4 Piezas de Uramaki']} />

            <Producto 
            Nombre = 'Nigrini + Maki + Uramaki'
            Imagen = 'Nigrini-Maki-Uramaki'
            Descripcion = {['2 Piezas de Nigrini', '4 Piezas de Maki', '4 Piezas de Uramaki']} />

            <Producto 
            Nombre = 'Nigrini + Maki + Uramaki'
            Imagen = 'Nigrini-Maki-Uramaki'
            Descripcion = {['2 Piezas de Nigrini', '4 Piezas de Maki', '4 Piezas de Uramaki']} />

        </div>

      </section>
    </div>

  );
}

export default App;

import React from 'react'
import {useState, useEffect} from 'react'

const Componente = () => {

  const[mensaje, setMensaje]=useState("mensaje inicial")
  const[contador, setContador]=useState(0)
   
 useEffect(()=>{

 },[mensaje])

 const suma = ()=> {

  contador < 10? setContador(contador + 1): alert("no se cuenta con stock")
 }
 const resta = ()=> {

  contador <0? setContador(contador - 1): alert("minimo alcanzado")
 }

 const agregar = ()=>{
  alert(`productos agregados ${contador}`)
 }


  return (
    <div>
    <p>{mensaje}</p>
    <button onClick={() =>setMensaje("mensaje modificado")}>cambiar msj</button>
    <p>{contador}</p>
    <button onClick={suma}>+</button>
    <button onClick={resta}>-</button>
    <button onClick={agregar}>agregar al carrito</button>
    </div>
  )
}

export default Componente
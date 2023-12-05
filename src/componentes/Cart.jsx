import SendOrders from './SendOrders'
import { useContext } from 'react'
import { CartContext } from "../context/ShoppingCartProvider"
import React, { useState } from 'react'




const Cart = () => {

  const { cart, setCart, comision } = useContext(CartContext)

  console.log('cart', cart)

  const limpiarCarrito = () => {
    setCart([]);
  };

  return (
    <>
    <h1 className='H1CARRO'>Carrito de compras</h1>
{cart?.map((el) => (
  <>
  <p key={el?.id}>
   Producto: {el.name}
  </p>
  <p>
 Cantidad: {el.cantidad}
  </p>
  </>
))}

{cart.length > 0 && (

      <SendOrders></SendOrders> )}

      {cart.length > 0 && (
  <button onClick={limpiarCarrito}>
    limpiar carrito
  </button>
)}
    </>
  )
}

export default Cart
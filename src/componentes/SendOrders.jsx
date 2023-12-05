import { useState } from "react"
import {collection, addDoc, getFirestore} from "firebase/firestore"



const SendOrders = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState ("")
    const [orderId, setOrderId] = useState (null)

    const db = getFirestore()


const handleSubmit = (e)=> {
    e.preventDefault()

    addDoc(ordersCollection, order).then(({id})=>
        setOrderId(id))
}

const order ={
    nombre,
    email
}

const ordersCollection=collection(db, "MiOrden")
  return (
    <div>
        <h1>Formulario de compra</h1>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" onChange={(e)=>setNombre(e.target.value)}/>
            <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>

            <button type="submit">enviar</button>
        </form>

        <p>Numero de orden: {orderId}</p>
    </div>
  )
}

export default SendOrders
import React from 'react'
import {useState} from 'react'

const Form = () => {

const [nombre, setNombre]= useState("")
const [email, setEmail]= useState("")



const handleSubmit=(e)=>{
  e.preventDefault()
}


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input text="text" onChange={(e)=>setNombre(e.target.value)} />
            <input text="email" onChange={(e)=>setEmail(e.target.value)} /> 
            <button type='submit'>enviar</button>
        </form>
    </div>
  )
}

export default Form
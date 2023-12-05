import {useEffect, useState} from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore'

const Collection = () => {

    const [productos, setProductos] = useState([])

      useEffect(() =>{
        const db = getFirestore()

        const itemsCollection = collection(db, "productos1")

        getDocs(itemsCollection).then((snapshot) =>{
            const docs = snapshot.docs.map((doc) => doc.data())
            setProductos(docs)
        })
      }, [])


  return (
    <div>{
        productos.map((p) => (
            <div>
                <h1>producto: {p.nombre}</h1>
                <p>precio: {p.precio}</p>
                <p>categoria: {p.categoria}</p>
            </div>
        ))
    }</div>
  )
}

export default Collection
import React from 'react'
import ItemCount from './ItemCount'
import ItemDetail from './ItemDetail'
import {Card, CardBody, Stack, Divider, ButtonGroup, Button, CardFooter, Heading, Text} from '@chakra-ui/react'
import Collection from './Collection'
import { useEffect, useState } from "react"
import {doc, getDoc, getFirestore} from "firebase/firestore"

const CategoriaC = () => {
  const [producto, setProducto] = useState([])

  useEffect(()=> {

      const db = getFirestore()

      const oneItem = doc(db, "productos1", `TTwm6WkRDrR7RquTn1QS`)

      getDoc(oneItem).then((snapshot)=>{
          if (snapshot.exists()){
              const docs = snapshot.data()
              setProducto(docs)
          }
      })
  })

  

  return (
    <>
    
    <Card maxW='sm'>
    <CardBody>
      <Stack mt='6' spacing='3'>
      <img src={producto.imagen} />
        <Heading size='md'>{producto.nombre}</Heading>
      </Stack>
    </CardBody>
    
    <Text>${producto.precio}</Text>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
       
      <ItemCount/>
      </ButtonGroup>
    </CardFooter>
  </Card>
</>
  )
}

export default CategoriaC
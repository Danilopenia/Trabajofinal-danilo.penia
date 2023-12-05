import React from 'react'
import { useParams } from 'react-router-dom'
import {Card, CardBody, Stack, Divider, ButtonGroup, Button, CardFooter, Heading, Text} from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({productos}) => {
    const {id}= useParams ()




    const filteredProduct = productos.filter((producto)=> producto.id== id)
    


 
  return (
    <>
    
    {
        filteredProduct.map((p)=>{
            return(
            <Card maxW='sm'>
            <CardBody>
              <Stack mt='6' spacing='3'>
                <p>IMAGEN</p>
                <Heading size='md'>{p.name}</Heading>
              </Stack>
            </CardBody>
            <Text>{p.description}</Text>
            <Text>${p.price}</Text>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='2'>
               
               <ItemCount producto={p}/>
              </ButtonGroup>
            </CardFooter>
          </Card>)
        })
        
    }
    
    
    </>
  )
}

export default ItemDetail
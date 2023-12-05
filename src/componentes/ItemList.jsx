import React from 'react'
import Item from './Item'
import { Container } from '@chakra-ui/react'

const ItemList = ({productos}) => {
    return (
      <div>
       
  
       {
          productos.map((p) => {
              return(
                <Container>
                  <Item 
                     key={p.id}
                     id={p.id}
                     name={p.name}
                     description={p.description}
                     price={p.price}
                     image={p.image}
                     />
                </Container>
              )
          })
  
       }
  
      </div>
    )
  }
  
  export default ItemList
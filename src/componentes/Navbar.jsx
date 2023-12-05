import React from 'react'
import CartWidget from './CartWidget'
import './styles/navbar.css'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='estilofondo1'>


    <Flex>
  <Box>


  <Link to={"/"}>
   <h1 className="estilouno">POLDBRAN</h1>
  </Link>


  </Box>
  <Spacer/>
  <Box>
  <Menu>
  <MenuButton>
    <h2 className='estilodos'>Categorias </h2>
  </MenuButton>
  <MenuList>
    <Link to={"/CategoriaA"}><MenuItem>CategoriaA</MenuItem></Link>
    <Link to={"/CategoriaB"}><MenuItem>CategoriaB</MenuItem></Link>
    <Link to={"/CategoriaC"}><MenuItem>CategoriaC</MenuItem></Link>
  </MenuList>
</Menu>
  </Box>

  <Spacer />
  <Box p='4' bg='green.400'>
    <Link to={"/Cart"}>
  <CartWidget></CartWidget>
  </Link>
  </Box>
</Flex>
    
    </div>
  )
}

export default Navbar
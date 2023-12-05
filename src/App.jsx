import React from 'react'
import Navbar from './componentes/Navbar'
import ItemListContainer from './componentes/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './componentes/Cart'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import CategoriaA from './componentes/CategoriaA'
import CategoriaB from './componentes/CategoriaB'
import CategoriaC from './componentes/CategoriaC'
import ShoppingCartProvider from './context/ShoppingCartProvider'



const App = () => {


return (

<>
<ShoppingCartProvider>


<BrowserRouter>
  <Navbar/>

  <Routes>

  <Route exact path ="/" element={<ItemListContainer/>}/>
  <Route exact path ="/cart" element={<Cart/>}/>
  <Route exact path ="/product/:id" element={<ItemDetailContainer/>}/>
  <Route exact path ="/categoriaA" element={<CategoriaA/>}/>
  <Route exact path ="/categoriaB" element={<CategoriaB/>}/>
  <Route exact path ="/categoriaC" element={<CategoriaC/>}/>
  </Routes>

  

</BrowserRouter>
  </ShoppingCartProvider> 
</>
  )
   
}

export default App

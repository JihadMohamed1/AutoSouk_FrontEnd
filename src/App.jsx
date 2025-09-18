import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landingpage from './Components/Landingpage/Landingpage'
import AboutComponent from './Components/AboutComponent/AboutComponent'
import Compp from './Components/Compp/compp'



function App() {
  

  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Landingpage/>}/>
  <Route path='/lkl' element={<Compp/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App

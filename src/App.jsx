import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landingpage from './Components/Landingpage/Landingpage'
import AboutComponent from './Components/AboutComponent/AboutComponent'
import ContactComponent from './Components/ContactComponent/ContactComponent'
import LoginCopmonent from './Components/LoginComponent/LoginComponent'
import CarCardComponent from './Components/CarCardComponent/CarCardComponent'
import MainComponent from './Components/MainComponent/MainComponent'



function App() {
  

  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Landingpage/>}/>
    <Route path='/Contact' element={<ContactComponent/>}/>
        <Route path='/Login' element={<LoginCopmonent/>}/>
                <Route path='/Cars' element={<MainComponent/>}/>



</Routes>
</BrowserRouter>
  )
}

export default App

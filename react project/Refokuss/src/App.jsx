import { useState } from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
function App() {
 

  return (
    <div className="main bg-[#0f0f0f] w-full h-[1000vh] font-['Satoshi_Variable']">
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
    </div>
  )
}

export default App

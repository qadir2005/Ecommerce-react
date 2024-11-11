import { useState } from 'react'
import './App.css'
import Offer from './Components/Offer'
import Navbar from './Components/Navbar'
import SimpleSlider from './Components/HeroSection'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Offer />
   <Navbar />
   <SimpleSlider />
   </>
  )
}

export default App

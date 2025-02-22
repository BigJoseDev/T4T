import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import AboutUs from "./Pages/AboutUs"
import Web3 from "./Pages/WhatWeOffer"
import HowToApply from "./Pages/HowToApply"
import SupportUs from "./Pages/SupportUs"
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/whatweoffer' element={<Web3/>} />
        <Route path='/how-to-apply' element={<HowToApply/>} />
        <Route path='/support-us' element={<SupportUs/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
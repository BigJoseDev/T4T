import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import AboutUs from "./Pages/AboutUs"
import Web3 from "./Pages/Web3"
import HowToApply from "./Pages/HowToApply"
import SupportUs from "./Pages/SupportUs"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/web3' element={<Web3/>} />
        <Route path='/how-to-apply' element={<HowToApply/>} />
        <Route path='/support-us' element={<SupportUs/>} />
      </Routes>
    </Router>
  )
}

export default App
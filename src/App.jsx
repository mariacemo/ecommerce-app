
import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './routes/Home'
import Navbar from './components/Navbar'
import Collections from './routes/Collections'

function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/collection/:name" element={<Collections/>} />
      </Routes>
    </div>
 
  )
}

export default App

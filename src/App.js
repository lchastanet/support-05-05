import "./styles/App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Details from "./pages/Details"
//http://localhost:8000/students/:id

import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

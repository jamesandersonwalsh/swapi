import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Characters from './components/Characters'
import Films from './components/Films'
import Vehicles from './components/Vehicles'
import Home from './components/Home'
import Planets from './components/Planets'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/films" element={<Films />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Routes>
    </Router>
  )
}

export default App

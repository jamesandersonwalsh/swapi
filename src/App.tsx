import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Characters } from './routes/Characters'
import { Films } from './routes/Films'
import { Vehicles } from './routes/Vehicles'
import { Home } from './routes/Home'
import { Planets } from './routes/Planets'

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

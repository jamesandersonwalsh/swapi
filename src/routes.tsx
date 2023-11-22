import { BrowserRouter, Routes as BrowserRoutes, Route } from 'react-router-dom'

import { Characters } from './routes/Characters'
import { Films } from './routes/Films'
import { Home } from './routes/Home'
import { Planets } from './routes/planets/Planets'
import { Vehicles } from './routes/Vehicles'

export function Routes() {
  return (
    <BrowserRouter>
      <BrowserRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/films" element={<Films />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </BrowserRoutes>
    </BrowserRouter>
  )
}

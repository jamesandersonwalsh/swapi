import { BrowserRouter, Routes as BrowserRoutes, Route } from 'react-router-dom'

import { People } from './routes/people/people'
import { Films } from './routes/films/films'
import { Home } from './routes/home/home'
import { Planets } from './routes/planets/planets'
import { Vehicles } from './routes/vehicles/vehicles'

export function Routes() {
  return (
    <BrowserRouter>
      <BrowserRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/films" element={<Films />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </BrowserRoutes>
    </BrowserRouter>
  )
}

import { TypographyH1 } from '@/components/typography'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <TypographyH1>Hello, there, General Kenobi.</TypographyH1>
      <main>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/planets">Planets</Link>

          <Link to="/characters">Characters</Link>

          <Link to="/films">Films</Link>

          <Link to="/vehicles">Vehicles</Link>
        </div>
      </main>
    </>
  )
}

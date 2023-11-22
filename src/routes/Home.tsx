import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <h1 className="pb-4 text-4xl">Hello, there, General Kenobi.</h1>
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

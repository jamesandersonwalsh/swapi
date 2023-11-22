import { Main } from '@/components/layout'
import { TypographyH1, TypographyH2, TypographyP } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { Orbit, BookUser, Clapperboard, Rocket } from 'lucide-react'

export function Home() {
  return (
    <Main>
      <TypographyH1>Hello there, General Kenobi.</TypographyH1>
      <TypographyH2>Welcome to SWAPI.</TypographyH2>
      <TypographyP className="max-w-prose mb-8">
        SWAPI is a React Sandbox for playing with the Star Wars API. The tech stack has evolved as
        time has gone on. From CRA with CSS Modules, to Next.js + Chakra UI, to the current
        iteration in Vite + TailwindCSS, the tools we use have changed, but SWAPI is forever.
      </TypographyP>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[1024px]">
        <Link to="/planets">
          <Card>
            <CardHeader>
              <CardTitle>Planets</CardTitle>
              <CardDescription>
                Search for various planets in a Galaxy far far away... From Tattoine to Mandalore,
                nothing is off limits.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full">
                <Orbit className="mr-2 h-4 w-4" />
                Run Planetary Scan
              </Button>
            </CardFooter>
          </Card>
        </Link>

        <Link to="/characters">
          <Card>
            <CardHeader>
              <CardTitle>Characters</CardTitle>
              <CardDescription>
                Looking for someone? There are some API routes some would consider ... unnatural.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full">
                <BookUser className="mr-2 h-4 w-4" />
                Navigate to Jedi Archives
              </Button>
            </CardFooter>
          </Card>
        </Link>

        <Link to="/films">
          <Card>
            <CardHeader>
              <CardTitle>Films</CardTitle>
              <CardDescription>
                Look up metadata about the beloved original trilogy, to the episodes no one dares
                mentions in casual conversation.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full">
                <Clapperboard className="mr-2 h-4 w-4" />
                Break the 3rd wall
              </Button>
            </CardFooter>
          </Card>
        </Link>

        <Link to="/vehicles">
          <Card>
            <CardHeader>
              <CardTitle>Vehicles</CardTitle>
              <CardDescription>
                Need to find a new starship, freighter, planetary speeder, or rusty podracer to fix
                up for or flip for credits? Look no further.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full">
                <Rocket className="mr-2 h-4 w-4" />
                Locate vehicles & spacecrafts
              </Button>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </Main>
  )
}

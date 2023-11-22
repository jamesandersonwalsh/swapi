import { Flex, Heading, SimpleGrid, Box, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const boxStyles = {
  bg: 'teal',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '6px',
  height: '5em',
  width: '20em',
  _hover: {
    cursor: 'pointer'
  }
}

export default function Home() {
  return (
    <Flex align="center" justifyContent="center" height="100vh" textAlign="center">
      <main>
        <Heading as="h1" paddingBottom="1em">Hello, there, General Kenobi.</Heading>

        <SimpleGrid columns={2} spacing={10}>
          <Link to="/planets">
            <Box {...boxStyles}>
              <Heading as="h2">Planets &rarr;</Heading>
              <Text fontSize="xl">Search characters by planet.</Text>
            </Box>
          </Link>

          <Link to="/characters">
            <Box {...boxStyles}>
              <Heading as="h2">Characters &rarr;</Heading>
              <Text fontSize="xl">Search for characters by attributes.</Text>
            </Box>
          </Link>

          <Link to="/films">
            <Box {...boxStyles}>
              <Heading as="h2">Films &rarr;</Heading>
              <Text fontSize="xl">Get info by name, number, or date.</Text>
            </Box>
          </Link>

          <Link to="/vehicles">
            <Box {...boxStyles}>
              <Heading as="h2">Vehicles &rarr;</Heading>
              <Text fontSize="xl">Vroom vroom, beep beep.</Text>
            </Box>
          </Link>
        </SimpleGrid>
      </main>
    </Flex>
  )
}

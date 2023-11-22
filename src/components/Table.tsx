import { useState, useEffect } from 'react'
import { Table as ChakraTable, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'

type TableProps = { data: never[] }

export default function Table(props: TableProps) {
  const { data } = props
  const [headerList, setHeaderList] = useState([])

  useEffect(() => {
    if (data.length > 0) {
      setHeaderList(Object.keys(data[0]))
    }
  }, [data])

  return (
    <ChakraTable size="sm">
      <Thead>
        <Tr>
          {headerList.map((header) => (
            <Th key={header}>{header}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row) => {
          const entries = Object.entries(row)

          return (
            <Tr key={entries[0]}>
              {entries.map((entry) => {
                const [key, value] = entry

                return <Td key={key}>{value}</Td>
              })}
            </Tr>
          )
        })}
      </Tbody>
    </ChakraTable>
  )
}

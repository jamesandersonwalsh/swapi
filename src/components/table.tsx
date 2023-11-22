import { HTMLAttributes, PropsWithChildren } from 'react'

export function Table({ children }: PropsWithChildren) {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">{children}</table>
    </div>
  )
}

export function THead({ children }: PropsWithChildren) {
  return <thead>{children}</thead>
}

export function TBody({ children }: PropsWithChildren) {
  return <tbody>{children}</tbody>
}

export function Th(props: HTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  )
}
export function Tr(props: HTMLAttributes<HTMLTableRowElement>) {
  return <tr className="m-0 border-t p-0 even:bg-muted" {...props} />
}

export function Td(props: HTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
      {...props}
    />
  )
}

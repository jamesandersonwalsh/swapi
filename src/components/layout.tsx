import { cn } from '@/utils'

const Main = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  return <main className={cn('flex flex-col items-center m-12', className)} {...props} />
}

export { Main }

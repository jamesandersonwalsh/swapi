import { cn } from '@/utils'
import { HTMLAttributes } from 'react'

export function TypographyH1({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        'prose-neutral scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-8',
        className,
      )}
      {...props}
    />
  )
}

export function TypographyH2({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn(
        'prose-neutral scroll-m-20 my-6 text-3xl font-semibold tracking-tight first:mt-0',
        className,
      )}
      {...props}
    />
  )
}

export function TypographyH3({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        'prose-neutral scroll-m-20 my-5 text-2xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  )
}

export function TypographyH4({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn(
        'prose-neutral scroll-m-20 my-4 text-xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  )
}

export function TypographyP({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('prose-neutral leading-7 my-3 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  )
}

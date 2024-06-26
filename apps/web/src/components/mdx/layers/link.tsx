import NextLink from 'next/link'

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

const Link = (props: LinkProps) => {
  const { href, children, ...rest } = props

  if ((href as string).startsWith('/')) {
    return (
      <NextLink
        className='font-medium underline underline-offset-4 text-aired border'
        href={href as string}
        {...rest}
      >
        {children}
      </NextLink>
    )
  }

  if ((href as string).startsWith('#')) {
    return (
      <a
        className='font-medium underline underline-offset-4 text-aired'
        href={href}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <a
      className='font-medium underline underline-offset-4 text-aired'
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      {...rest}
    >
      {children}
    </a>
  )
}

export default Link

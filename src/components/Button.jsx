import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-nav font-semibold transition-all duration-300 whitespace-nowrap'

const variants = {
  primary:
    'bg-brand-ink text-white hover:bg-brand-yellow hover:text-brand-ink px-7 py-3.5 text-[15px] shadow-sm hover:shadow-cardHover',
  secondary:
    'bg-brand-yellow text-brand-ink hover:bg-[#FFE066] px-7 py-3.5 text-[15px] shadow-sm hover:shadow-cardHover',  outline:
    'border-2 border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-white px-7 py-3 text-[15px]',
  ghost:
    'text-brand-ink hover:text-brand-yellowDark px-2 py-1 text-[15px]',
  hero:
    'bg-brand-yellow text-brand-ink hover:bg-[#FFE066] px-7 py-3.5 text-[15px] shadow-sm hover:shadow-cardHover',}

export default function Button({
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  children,
  type = 'button',
  ...rest
}) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  )
}
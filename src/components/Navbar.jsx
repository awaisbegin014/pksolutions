import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import logo from '../assets/logo.png'
import Button from './Button'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${scrolled ? 'shadow-[0_1px_0_0_rgba(27,27,29,0.06)]' : ''
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8 lg:py-4">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logo} alt="The Yellow Solutions" className="h-12 w-auto sm:h-14 lg:h-16" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative font-nav text-lg font-medium transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:bg-brand-yellow after:transition-all after:duration-300 ${isActive
                  ? 'text-brand-ink after:w-full'
                  : 'text-brand-slate after:w-0 hover:text-brand-ink hover:after:w-full'
                }`
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Button to="/careers" variant="secondary">
            Join Our Team
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-line text-brand-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${open ? 'max-h-96 border-t border-brand-line' : 'max-h-0'
          }`}
      >
        <div className="flex flex-col gap-1 bg-white px-6 py-6">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-3 font-nav text-lg font-medium transition-colors ${isActive ? 'bg-brand-yellowSoft text-brand-ink' : 'text-brand-slate hover:bg-brand-mist'
                }`
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
          <Button to="/careers" variant="secondary" className="mt-3 w-full" onClick={() => setOpen(false)}>
            Join Our Team
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </Button>
        </div>
      </div>
    </header>
  )
}
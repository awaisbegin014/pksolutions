import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react'
import logo from '../assets/logo.png'
import Button from './Button'
import { services } from '../data/servicesData'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const closeTimer = useRef(null)
  const location = useLocation()

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

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [location.pathname])

  const openServicesMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }

  const closeServicesMenu = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150)
  }

  const isServicesActive = location.pathname.startsWith('/services')

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
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `relative font-nav text-lg font-medium transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:bg-brand-yellow after:transition-all after:duration-300 ${isActive
                ? 'text-brand-ink after:w-full'
                : 'text-brand-slate after:w-0 hover:text-brand-ink hover:after:w-full'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative font-nav text-lg font-medium transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:bg-brand-yellow after:transition-all after:duration-300 ${isActive
                ? 'text-brand-ink after:w-full'
                : 'text-brand-slate after:w-0 hover:text-brand-ink hover:after:w-full'
              }`
            }
          >
            About Us
          </NavLink>

          {/* Services — hover dropdown */}
          <div className="relative" onMouseEnter={openServicesMenu} onMouseLeave={closeServicesMenu}>
            <Link
              to="/services"
              className={`relative flex items-center gap-1.5 font-nav text-lg font-medium transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:bg-brand-yellow after:transition-all after:duration-300 ${isServicesActive || servicesOpen
                  ? 'text-brand-ink after:w-full'
                  : 'text-brand-slate after:w-0 hover:text-brand-ink hover:after:w-full'
                }`}
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                strokeWidth={2}
              />
            </Link>

            <div
              className={`absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-4 transition-all duration-200 ${servicesOpen
                  ? 'pointer-events-auto translate-y-0 opacity-100'
                  : 'pointer-events-none translate-y-2 opacity-0'
                }`}
            >
              <div className="rounded-xl2 border border-brand-line bg-white p-5 shadow-cardHover">
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service) => {
                    const Icon = service.icon
                    return (
                      <Link
                        key={service.id}
                        to={'/services/' + service.id}
                        className="group flex items-start gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-brand-mist"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-yellowSoft text-brand-ink transition-colors duration-200 group-hover:bg-brand-yellow">
                          <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                        </span>
                        <span>
                          <span className="block font-nav text-sm font-semibold text-brand-ink">
                            {service.title}
                          </span>
                          <span className="mt-0.5 block text-xs leading-snug text-brand-slate">
                            {service.tagline}
                          </span>
                        </span>
                      </Link>
                    )
                  })}
                </div>
                <Link
                  to="/services"
                  className="mt-3 flex items-center justify-between rounded-xl bg-brand-mist px-4 py-3 text-sm font-nav font-semibold text-brand-ink transition-colors duration-200 hover:bg-brand-yellowSoft"
                >
                  View all services
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `relative font-nav text-lg font-medium transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:bg-brand-yellow after:transition-all after:duration-300 ${isActive
                ? 'text-brand-ink after:w-full'
                : 'text-brand-slate after:w-0 hover:text-brand-ink hover:after:w-full'
              }`
            }
          >
            Careers
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative font-nav text-lg font-medium transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:bg-brand-yellow after:transition-all after:duration-300 ${isActive
                ? 'text-brand-ink after:w-full'
                : 'text-brand-slate after:w-0 hover:text-brand-ink hover:after:w-full'
              }`
            }
          >
            Contact Us
          </NavLink>
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
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${open ? 'max-h-[36rem] overflow-y-auto border-t border-brand-line' : 'max-h-0'
          }`}
      >
        <div className="flex flex-col gap-1 bg-white px-6 py-6">
          {NAV_LINKS.slice(0, 2).map((link) => (
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

          {/* Services — expandable */}
          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-3 font-nav text-lg font-medium transition-colors ${isServicesActive ? 'bg-brand-yellowSoft text-brand-ink' : 'text-brand-slate hover:bg-brand-mist'
                }`}
              aria-expanded={mobileServicesOpen}
            >
              Services
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                strokeWidth={2}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[28rem]' : 'max-h-0'
                }`}
            >
              <div className="flex flex-col gap-1 py-1 pl-4">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={'/services/' + service.id}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-base text-brand-slate transition-colors hover:bg-brand-mist hover:text-brand-ink"
                  >
                    {service.title}
                  </Link>
                ))}
                <Link
                  to="/services"
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-yellowDark"
                >
                  View all services
                </Link>
              </div>
            </div>
          </div>

          {NAV_LINKS.slice(2).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-lg px-3 py-3 font-nav text-lg font-medium transition-colors ${isActive ? 'bg-brand-yellowSoft text-brand-ink' : 'text-brand-slate hover:bg-brand-mist'
                }`
              }
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
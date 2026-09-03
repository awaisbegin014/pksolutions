import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import logo from '../assets/logo-light.png'
import { services as allServices } from '../data/servicesData'

const explore = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact Us', to: '/contact' },
]

const services = allServices.map((service) => ({ label: service.title, to: '/services/' + service.id }))

const socials = [
  { icon: Facebook, href: 'https://www.facebook.com/share/19f5HPxbxh/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/theyellowsolutions?igsi=MXNuNndrbzJlcDg2MA==', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/yellow-solutionss/', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <img src={logo} alt="The Yellow Solutions" className="h-12 w-auto" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              A digital growth partner helping ambitious brands market, build and scale — one solution at a time.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-ink"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white">Explore</h4>
            <ul className="mt-5 space-y-3">
              {explore.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm transition-colors hover:text-brand-yellow">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white">Services</h4>
            <ul className="mt-5 space-y-3">
              {services.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm transition-colors hover:text-brand-yellow">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white">Get In Touch</h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" strokeWidth={1.75} />
                A4, Gulistan-e-Johar , Block 04, Karachi
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" strokeWidth={1.75} />
                +92 319 1233945
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" strokeWidth={1.75} />
                hello@theyellowsolutions.pk
              </li>
            </ul>
            <Link
              to="/careers"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-yellow transition-colors hover:text-white"
            >
              We're hiring — join us
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} The Yellow Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="transition-colors hover:text-brand-yellow">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="transition-colors hover:text-brand-yellow">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
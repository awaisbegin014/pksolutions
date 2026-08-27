import { useState } from 'react'
import {
  HeartPulse,
  GraduationCap,
  Laptop,
  CalendarClock,
  TrendingUp,
  Users2,
  ArrowUpRight,
  Send,
  CheckCircle2,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Button from '../components/Button'

const perks = [
  {
    icon: HeartPulse,
    title: 'Health Coverage',
    description: 'Medical insurance for you, because your wellbeing comes first.',
  },
  {
    icon: Laptop,
    title: 'Flexible Work',
    description: 'A hybrid setup that trusts you to do your best work, your way.',
  },
  {
    icon: GraduationCap,
    title: 'Learning Budget',
    description: 'Courses, certifications and conferences to keep you growing.',
  },
  {
    icon: CalendarClock,
    title: 'Paid Time Off',
    description: 'Generous leave policy so you can rest and come back sharper.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Path',
    description: 'Clear, honest career progression — not a guessing game.',
  },
  {
    icon: Users2,
    title: 'Real Team Culture',
    description: 'A close-knit team that celebrates wins and supports each other.',
  },
]

const positions = [
  { title: 'Digital Marketing Executive', type: 'Full-time', location: 'Karachi (Hybrid)' },
  { title: 'Frontend Developer (React)', type: 'Full-time', location: 'Karachi / Remote' },
  { title: 'Graphic Designer', type: 'Full-time', location: 'Karachi (Hybrid)' },
  { title: 'Social Media Manager', type: 'Full-time', location: 'Karachi (Hybrid)' },
]

export default function Careers() {
  const [form, setForm] = useState({ name: '', email: '', position: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative overflow-hidden bg-brand-ink py-20 sm:py-28">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-yellow/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal className="mx-auto flex flex-col items-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-display font-semibold uppercase tracking-[0.14em] text-brand-yellow">
              <span className="h-2 w-2 rounded-full bg-brand-yellow" />
              Careers
            </span>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">
              Build your career with The Yellow Solutions.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              We're a team of doers who care about great work. If you're curious, driven and want to
              grow fast, we want to hear from you.
            </p>
            <Button href="#open-positions" variant="secondary" className="mt-9">
              View Open Roles
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Why Join Us" title="What you get as part of the team" align="center" />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, i) => (
              <Reveal key={perk.title} delay={i * 60}>
                <div className="flex h-full flex-col rounded-xl2 border border-brand-line bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-yellow hover:shadow-cardHover">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellowSoft text-brand-ink">
                    <perk.icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-brand-ink">{perk.title}</h3>
                  <p className="text-[15px] leading-relaxed text-brand-slate">{perk.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="bg-brand-mist py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Our Culture" title="A team that grows together" />
            <p className="mt-6 text-base leading-relaxed text-brand-slate">
              We believe the best work happens when people feel trusted, challenged and supported.
              That means honest feedback, real ownership over your projects, and a team that shows up
              for each other — not just on deadlines, but every day.
            </p>
            <ul className="mt-6 space-y-3">
              {['Open, direct communication', 'Ownership from day one', 'Celebrating wins as a team'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-brand-ink">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-yellowDark" strokeWidth={1.75} />
                  <span className="text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="aspect-[4/3] w-full rounded-xl2 bg-brand-yellowSoft p-3">
              <div className="flex h-full w-full flex-col justify-between rounded-[1rem] bg-brand-ink p-8 text-white">
                <span className="text-xs font-display font-semibold uppercase tracking-[0.14em] text-brand-yellow">
                  Life at The Yellow Solutions
                </span>
                <p className="font-display text-2xl font-semibold leading-snug">
                  "Every project here feels like it actually matters — and so does every person on the team."
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="open-positions" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <SectionHeading eyebrow="Open Positions" title="Current opportunities" align="center" />
          <div className="mt-14 flex flex-col gap-4">
            {positions.map((role, i) => (
              <Reveal key={role.title} delay={i * 60}>
                <div className="flex flex-col items-start justify-between gap-4 rounded-xl2 border border-brand-line bg-white p-6 transition-all duration-300 hover:border-brand-yellow hover:shadow-card sm:flex-row sm:items-center sm:p-8">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-brand-ink">{role.title}</h3>
                    <p className="mt-1 text-sm text-brand-slate">
                      {role.type} · {role.location}
                    </p>
                  </div>
                  <Button href="#apply" variant="outline" className="w-full sm:w-auto">
                    Apply Now
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="bg-brand-mist py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Apply Now"
            title="Tell us a bit about you"
            description="Fill out the form below and our team will get back to you if there's a fit."
            align="center"
          />
          <Reveal delay={100} className="mt-12">
            {submitted ? (
              <div className="flex flex-col items-center rounded-xl2 border border-brand-line bg-white p-12 text-center shadow-card">
                <CheckCircle2 className="h-12 w-12 text-brand-yellowDark" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-xl font-semibold text-brand-ink">
                  Application received!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-brand-slate">
                  Thank you for applying to The Yellow Solutions. We'll review your details and reach
                  out if there's a match.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-xl2 border border-brand-line bg-white p-6 shadow-card sm:p-10">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-brand-ink">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink outline-none transition-colors focus:border-brand-yellow"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-brand-ink">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink outline-none transition-colors focus:border-brand-yellow"
                    />
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <label htmlFor="position" className="text-sm font-medium text-brand-ink">
                    Position You're Applying For
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={form.position}
                    onChange={handleChange}
                    className="rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink outline-none transition-colors focus:border-brand-yellow"
                  >
                    <option value="" disabled>
                      Select a role
                    </option>
                    {positions.map((role) => (
                      <option key={role.title} value={role.title}>
                        {role.title}
                      </option>
                    ))}
                    <option value="Other">Other / General Application</option>
                  </select>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-brand-ink">
                    Tell Us About Yourself
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Share your experience, portfolio link, or why you'd be a great fit..."
                    className="resize-none rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink outline-none transition-colors focus:border-brand-yellow"
                  />
                </div>
                <Button type="submit" variant="secondary" className="mt-8 w-full sm:w-auto">
                  Submit Application
                  <Send className="h-4 w-4" strokeWidth={1.75} />
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}

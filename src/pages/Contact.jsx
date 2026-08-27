import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import CTASection from '../components/CTASection'

const infoCards = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['Shahrah-e-Faisal, Karachi', 'Sindh, Pakistan'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+92 300 0000000', '+92 21 0000000'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['hello@theyellowsolutions.pk', 'careers@theyellowsolutions.pk'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon – Fri: 10am – 7pm', 'Sat: 11am – 4pm'],
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
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
      <section className="relative overflow-hidden bg-brand-mist py-20 sm:py-28">
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-yellow/25 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal className="mx-auto flex flex-col items-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-4 py-1.5 text-xs font-display font-semibold uppercase tracking-[0.14em] text-brand-ink">
              <span className="h-2 w-2 rounded-full bg-brand-yellow" />
              Contact Us
            </span>
            <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-brand-ink sm:text-5xl">
              Let's build something great together.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-slate sm:text-lg">
              Have a project in mind or just want to say hello? Reach out and our team will get back
              to you within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 70}>
                <div className="flex h-full flex-col rounded-xl2 border border-brand-line bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-yellow hover:shadow-cardHover">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellowSoft text-brand-ink">
                    <card.icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-brand-ink">{card.title}</h3>
                  {card.lines.map((line) => (
                    <p key={line} className="text-[15px] leading-relaxed text-brand-slate">
                      {line}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM + MAP */}
      <section className="bg-brand-mist py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-5 lg:px-8">
          <Reveal className="lg:col-span-3">
            <div className="rounded-xl2 border border-brand-line bg-white p-6 shadow-card sm:p-10">
              <SectionHeading eyebrow="Send A Message" title="Tell us about your project" />
              {submitted ? (
                <div className="mt-8 flex flex-col items-center rounded-xl2 border border-brand-line bg-brand-mist p-10 text-center">
                  <CheckCircle2 className="h-12 w-12 text-brand-yellowDark" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-xl font-semibold text-brand-ink">Message sent!</h3>
                  <p className="mt-2 max-w-sm text-sm text-brand-slate">
                    Thanks for reaching out — a member of our team will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="c-name" className="text-sm font-medium text-brand-ink">
                        Full Name
                      </label>
                      <input
                        id="c-name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink outline-none transition-colors focus:border-brand-yellow"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="c-email" className="text-sm font-medium text-brand-ink">
                        Email Address
                      </label>
                      <input
                        id="c-email"
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
                    <label htmlFor="c-subject" className="text-sm font-medium text-brand-ink">
                      Subject
                    </label>
                    <input
                      id="c-subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink outline-none transition-colors focus:border-brand-yellow"
                    />
                  </div>
                  <div className="mt-6 flex flex-col gap-2">
                    <label htmlFor="c-message" className="text-sm font-medium text-brand-ink">
                      Message
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us a little about what you need..."
                      className="resize-none rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink outline-none transition-colors focus:border-brand-yellow"
                    />
                  </div>
                  <Button type="submit" variant="secondary" className="mt-8 w-full sm:w-auto">
                    Send Message
                    <Send className="h-4 w-4" strokeWidth={1.75} />
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-2">
            <div className="flex h-full flex-col overflow-hidden rounded-xl2 border border-brand-line bg-white shadow-card">
              <div className="flex flex-1 flex-col items-center justify-center gap-3 bg-brand-yellowSoft p-10 text-center">
                <MapPin className="h-10 w-10 text-brand-ink" strokeWidth={1.5} />
                <p className="font-display text-lg font-semibold text-brand-ink">Find Our Office</p>
                <p className="max-w-xs text-sm text-brand-slate">
                  Shahrah-e-Faisal, Karachi, Sindh, Pakistan — map preview coming soon.
                </p>
              </div>
              <div className="border-t border-brand-line p-8">
                <h3 className="font-display text-lg font-semibold text-brand-ink">Prefer to talk directly?</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                  Call us or drop an email and we'll set up a time that works for you.
                </p>
                <div className="mt-5 flex flex-col gap-3 text-sm text-brand-ink">
                  <span className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-brand-yellowDark" /> +92 300 0000000
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-brand-yellowDark" /> hello@theyellowsolutions.pk
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        mode="careers"
        title="Rather join the team than hire us?"
        description="We're always looking for great people to grow with. Check out our open roles."
      />
    </>
  )
}

import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import CTASection from '../components/CTASection'
import yMark from '../assets/y-mark.png'

const contactDetails = [
  {
    icon: Mail,
    title: 'Email',
    lines: ['hello@theyellowsolutions.pk'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+92 319 1233945'],
  },
  {
    icon: MapPin,
    title: 'Address',
    lines: ['A4, Gulistan-e-Johar , Block 04, Karachi'],
  },
]

/* =========================================================
   DECORATIVE CONTACT MARK
========================================================= */

function ContactMark() {
  return (
    <div className="relative flex h-56 w-56 items-center justify-center sm:h-72 sm:w-72 lg:h-80 lg:w-80">
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-brand-yellow/20 blur-3xl" />

      <img
        src={yMark}
        alt="Yellow Solutions"
        className="h-full w-full animate-[float_5s_ease-in-out_infinite] object-contain"
      />
    </div>
  )
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const prefilledService = searchParams.get('service') || ''
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: prefilledService ? `I'm interested in ${prefilledService}. ` : '',
  })
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
      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className="relative flex min-h-[calc(100dvh-72px)] items-center overflow-hidden bg-brand-mist py-16 sm:min-h-[calc(100dvh-80px)] sm:py-24 lg:min-h-[calc(100dvh-96px)]">
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-yellow/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-brand-ink sm:text-6xl">
              <span className="text-brand-yellow">Contact</span> Us
            </h1>
          </Reveal>

          <Reveal delay={100} className="flex justify-center lg:justify-end">
            <ContactMark />
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          GET IN TOUCH + MESSAGE FORM
      ===================================================== */}

      <section className="bg-white pt-14 pb-4 sm:pt-20 sm:pb-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">

          {/* LEFT — CONTACT DETAILS */}

          <Reveal className="lg:col-span-2">
            <h2 className="font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              Let&apos;s Get In Touch
            </h2>

            <div className="mt-10 flex flex-col gap-8">
              {contactDetails.map((detail) => (
                <div key={detail.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-brand-yellow text-brand-yellowDark">
                    <detail.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-semibold text-brand-ink">
                      {detail.title}
                    </h3>
                    {detail.lines.map((line) => (
                      <p key={line} className="text-[15px] leading-relaxed text-brand-slate">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* RIGHT — MESSAGE FORM */}

          <Reveal delay={100} className="lg:col-span-3">
            <div className="rounded-xl2 bg-brand-mist p-8 sm:p-12">
              <div className="text-center">
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-ink sm:text-3xl">
                  Leave A Message
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-brand-slate sm:text-base">
                  Fill the form below and leave a message for us. Our
                  representative will get back to you and discuss your
                  queries.
                </p>

                {prefilledService && (
                  <span className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full border border-brand-yellow bg-white px-4 py-1.5 text-xs font-nav font-semibold uppercase tracking-[0.1em] text-brand-ink">
                    <span className="h-2 w-2 rounded-full bg-brand-yellow" />
                    Regarding: {prefilledService}
                  </span>
                )}

              </div>

              {submitted ? (
                <div className="mt-10 flex flex-col items-center rounded-xl2 border border-brand-line bg-white p-10 text-center">
                  <CheckCircle2 className="h-12 w-12 text-brand-yellowDark" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-xl font-semibold text-brand-ink">
                    Message sent!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-brand-slate">
                    Thanks for reaching out — a member of our team will be in
                    touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-10">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="c-name" className="text-sm font-medium text-brand-ink">
                        Name
                      </label>
                      <input
                        id="c-name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink outline-none transition-colors focus:border-brand-yellow"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="c-email" className="text-sm font-medium text-brand-ink">
                        Email
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink outline-none transition-colors focus:border-brand-yellow"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-2">
                    <label htmlFor="c-message" className="text-sm font-medium text-brand-ink">
                      Message
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      rows={6}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className="resize-none rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink outline-none transition-colors focus:border-brand-yellow"
                    />
                  </div>

                  <Button type="submit" variant="secondary" className="mt-8">
                    Submit
                    <Send className="h-4 w-4" strokeWidth={1.75} />
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        mode="careers"
        showContactButton={false}
        paddingClassName="pt-7 pb-20 sm:pt-9 sm:pb-24"
        title="Rather join the team than hire us?"
        description="We're always looking for great people to grow with. Check out our open roles."
      />
    </>
  )
}
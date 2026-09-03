import { useState } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import FAQItem from '../components/FAQItem'
import yMark from '../assets/y-mark.png'
import { services } from '../data/servicesData'
import { TwoTone } from '../utils/twoTone'

const faqs = [
  {
    q: 'Do I need to hire you for every service, or can I pick just one?',
    a: 'Just one. Most clients start with a single service and add others as needs grow — there is no bundle requirement.',
  },
  {
    q: 'How do you decide which services my business actually needs?',
    a: 'We start with a discovery call to understand your goals and current setup, then recommend only what will move the needle — not a generic package.',
  },
  {
    q: 'How long does a typical engagement take?',
    a: 'Website, app and branding projects usually run 4–8 weeks. Marketing, social and advertising services run as ongoing monthly engagements.',
  },
  {
    q: 'Can these services work together?',
    a: 'Yes — that is where we add the most value. A site or app built by our dev team, and campaigns that drive traffic to it, all reinforce each other.',
  },
]

export default function Services() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-4 py-1.5 text-xs font-nav font-semibold uppercase tracking-[0.14em] text-brand-ink">
              <span className="h-2 w-2 rounded-full bg-brand-yellow" />
              What We Do
            </span>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
              Services built to move
              <span className="text-brand-yellow"> your business forward</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-slate sm:text-lg">
              Five services, one connected team. Whether you need a single project or a
              full growth engine, we build strategy, design and technology around your goals.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button to="/contact" variant="hero">
                Start a Project
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} variant="scale" className="flex items-center justify-center">
            <img
              src={yMark}
              alt="The Yellow Solutions"
              className="w-full max-w-[180px] animate-float drop-shadow-2xl sm:max-w-[220px]"
            />
          </Reveal>
        </div>

        <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
          <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1">
            {services.map((service) => (
              <a
                key={service.id}
                href={'#' + service.id}
                className="shrink-0 rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-nav font-medium text-brand-slate transition-colors duration-200 hover:border-brand-yellow hover:text-brand-ink"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {services.map((service, i) => {
        const Illustration = service.Illustration
        const flip = i % 2 === 1
        const headingCol = flip ? 'lg:col-start-2 lg:row-start-1' : 'lg:col-start-1 lg:row-start-1'
        const illustrationCol = flip
          ? 'lg:col-start-1 lg:row-start-1 lg:row-span-2'
          : 'lg:col-start-2 lg:row-start-1 lg:row-span-2'
        const textCol = flip ? 'lg:col-start-2 lg:row-start-2' : 'lg:col-start-1 lg:row-start-2'

        return (
          <section key={service.id} id={service.id} className="scroll-mt-24 bg-white py-8 sm:py-10">
            <div className="mx-auto max-w-3xl px-6 text-center lg:max-w-6xl lg:px-8 lg:text-left">
              <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center">
                <Reveal className={headingCol}>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
                    <TwoTone text={service.title} />
                  </h2>
                </Reveal>

                <Reveal delay={80} className={'mt-8 lg:mt-0 ' + illustrationCol}>
                  <div className="mx-auto aspect-[4/3] w-full max-w-sm rounded-xl2 bg-white p-4">
                    <Illustration />
                  </div>
                </Reveal>

                <Reveal delay={160} className={'mt-8 text-left lg:mt-6 ' + textCol}>
                  <p className="text-base leading-relaxed text-brand-slate">{service.description}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" strokeWidth={2} />
                        <span className="text-sm leading-relaxed text-brand-ink">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Button to={'/services/' + service.id} variant="secondary" className="mt-7">
                    Get Started
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Reveal>
              </div>
            </div>
          </section>
        )
      })}

      <section className="bg-white pt-12 pb-4 sm:pt-18 sm:pb-6">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQs"
            title={<>Questions about <span className="text-brand-yellow">our services</span></>}
            align="center"
          />
          <div className="mt-14 flex flex-col gap-5">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        mode="contact"
        showTeamButton={false}
        paddingClassName="pt-6 pb-20 sm:pt-8 sm:pb-24"
        title={<>Not sure where to start?<br /><span className="text-brand-yellow">Let's talk it through.</span></>}
        description="Tell us about your business and goals, and we'll recommend the right mix of services to get you there."
      />
    </>
  )
}
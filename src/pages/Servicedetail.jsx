import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowUpRight, ArrowLeft, CheckCircle2 } from 'lucide-react'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import { services, getServiceById } from '../data/servicesData'
import { TwoTone } from '../utils/twoTone'

const process = [
    { step: '01', title: 'Discover', description: 'We learn your business, audience and goals inside out.' },
    { step: '02', title: 'Strategize', description: 'We map a plan built specifically around what will move the needle.' },
    { step: '03', title: 'Execute', description: 'Our team designs, builds and launches with regular check-ins.' },
    { step: '04', title: 'Grow', description: 'We track, optimize and scale what works, quarter after quarter.' },
]

export default function ServiceDetail() {
    const { serviceId } = useParams()
    const service = getServiceById(serviceId)

    if (!service) {
        return <Navigate to="/services" replace />
    }

    const Illustration = service.Illustration
    const Icon = service.icon
    const otherServices = services.filter((s) => s.id !== service.id)

    return (
        <>
            {/* HERO */}
            <section className="bg-white py-8 sm:py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mt-6 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                        <Reveal>
                            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-4 py-1.5 text-xs font-nav font-semibold uppercase tracking-[0.14em] text-brand-ink">
                                <Icon className="h-3.5 w-3.5 text-brand-yellowDark" strokeWidth={2} />
                                Service
                            </span>
                            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
                                <TwoTone text={service.title} />
                            </h1>
                            <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-slate sm:text-lg">
                                {service.tagline}
                            </p>
                            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                                <Button to={'/contact?service=' + encodeURIComponent(service.title)} variant="hero">
                                    Start This Project
                                    <ArrowUpRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </Reveal>

                        <Reveal delay={120} variant="scale" className="flex items-center justify-center">
                            <div className="mx-auto aspect-[4/3] w-full max-w-md rounded-xl2 bg-white p-4">
                                <Illustration />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* OVERVIEW + WHAT'S INCLUDED */}
            <section className="bg-white py-12 sm:py-16">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
                    <Reveal className="lg:col-span-3">
                        <h2 className="font-display text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
                            Overview
                        </h2>
                        <p className="mt-5 text-base leading-relaxed text-brand-slate">{service.description}</p>

                        <h3 className="mt-10 font-display text-xl font-bold tracking-tight text-brand-ink">
                            <TwoTone text="Who this is for" />
                        </h3>
                        <ul className="mt-5 flex flex-col gap-3">
                            {service.idealFor.map((item) => (
                                <li key={item} className="flex items-start gap-2.5">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" strokeWidth={2} />
                                    <span className="text-sm leading-relaxed text-brand-ink">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    <Reveal delay={100} className="lg:col-span-2">
                        <div className="rounded-xl2 border border-brand-line bg-brand-mist p-8">
                            <h3 className="font-display text-xl font-bold tracking-tight text-brand-ink">
                                <TwoTone text="What's included" />
                            </h3>
                            <ul className="mt-6 flex flex-col gap-4">
                                {service.points.map((point) => (
                                    <li key={point} className="flex items-start gap-2.5">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" strokeWidth={2} />
                                        <span className="text-sm leading-relaxed text-brand-ink">{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                to={'/contact?service=' + encodeURIComponent(service.title)}
                                variant="secondary"
                                className="mt-8 w-full"
                            >
                                Get Started
                                <ArrowUpRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* PROCESS */}
            <section className="bg-brand-mist py-14 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="How it works"
                        title={<>Our process for <span className="text-brand-yellow">{service.title.toLowerCase()}</span></>}
                        align="center"
                        className="mx-auto"
                    />
                    <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {process.map((item, i) => (
                            <Reveal key={item.step} delay={i * 80}>
                                <div className="rounded-xl2 border border-brand-line bg-white p-7">
                                    <span className="font-display text-3xl font-bold text-brand-yellow">{item.step}</span>
                                    <h3 className="mt-4 font-display text-lg font-semibold text-brand-ink">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-brand-slate">{item.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* RELATED SERVICES */}
            <section className="bg-white pt-14 pb-2 sm:pt-20 sm:pb-4">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Explore more"
                        title={<TwoTone text="Other ways we can help" />}
                        align="center"
                        className="mx-auto"
                    />
                    <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {otherServices.map((s, i) => {
                            const OtherIcon = s.icon
                            return (
                                <Reveal key={s.id} delay={i * 60} className="group h-full">
                                    <Link
                                        to={'/services/' + s.id}
                                        className="flex h-full flex-col rounded-xl2 border border-brand-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-yellow hover:shadow-cardHover"
                                    >
                                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellowSoft text-brand-ink transition-colors duration-300 group-hover:bg-brand-yellow">
                                            <OtherIcon className="h-5 w-5" strokeWidth={1.75} />
                                        </div>
                                        <h3 className="font-display text-base font-semibold text-brand-ink">{s.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-brand-slate">{s.tagline}</p>
                                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-yellowDark">
                                            Learn more
                                            <ArrowUpRight className="h-3.5 w-3.5" />
                                        </span>
                                    </Link>
                                </Reveal>
                            )
                        })}
                    </div>
                </div>
            </section>

            <CTASection
                mode="contact"
                showTeamButton={false}
                title={<>Ready to start your <span className="text-brand-yellow">{service.title.toLowerCase()}</span> project?</>}
                description="Tell us a bit about your business and goals, and we'll get back to you with next steps."
            />
        </>
    )
}
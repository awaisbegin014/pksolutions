import { Link, useParams } from 'react-router-dom'
import {
    ArrowLeft,
    Armchair,
    Banknote,
    Clock,
    CheckCircle2,
    Send,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { getJobBySlug, whatWeOffer } from '../data/jobsData'

/* =========================================================
   DECORATIVE ILLUSTRATION (search + laptop, Yellow Solutions style)
========================================================= */

function JobHeroIllustration() {
    return (
        <div className="relative mx-auto h-64 w-full max-w-[420px] sm:h-72 lg:h-80">
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-brand-yellow/15 blur-3xl" />

            <svg
                viewBox="0 0 420 300"
                className="h-full w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* browser card */}
                <g className="animate-[float_5s_ease-in-out_infinite]">
                    <rect
                        x="30"
                        y="20"
                        width="240"
                        height="160"
                        rx="14"
                        fill="white"
                        className="drop-shadow-[0_10px_25px_rgba(0,0,0,0.08)]"
                    />
                    <circle cx="50" cy="40" r="4" fill="#E5A900" />
                    <circle cx="64" cy="40" r="4" fill="#E2E2DE" />
                    <circle cx="78" cy="40" r="4" fill="#E2E2DE" />
                    <rect x="48" y="60" width="80" height="90" rx="6" fill="#FFF3D0" />
                    <rect x="140" y="60" width="110" height="14" rx="4" fill="#F0F0EC" />
                    <rect x="140" y="82" width="110" height="14" rx="4" fill="#F0F0EC" />
                    <rect x="140" y="104" width="70" height="14" rx="4" fill="#F0F0EC" />
                </g>

                {/* magnifying glass over profile */}
                <g className="animate-[float_4.5s_ease-in-out_-1s_infinite]">
                    <circle
                        cx="150"
                        cy="115"
                        r="46"
                        fill="white"
                        stroke="#FFC107"
                        strokeWidth="10"
                    />
                    <circle cx="150" cy="105" r="14" fill="#36373B" />
                    <path
                        d="M126 140c6-16 22-24 24-24s18 8 24 24"
                        stroke="#36373B"
                        strokeWidth="8"
                        strokeLinecap="round"
                        fill="none"
                    />
                    <path
                        d="M183 148l26 26"
                        stroke="#FFC107"
                        strokeWidth="12"
                        strokeLinecap="round"
                    />
                </g>

                {/* person at desk */}
                <g className="animate-[float_5.2s_ease-in-out_-2s_infinite]">
                    <rect x="270" y="205" width="120" height="10" rx="4" fill="#E2E2DE" />
                    <path d="M282 215l-8 60" stroke="#77787B" strokeWidth="7" strokeLinecap="round" />
                    <path d="M378 215l8 60" stroke="#77787B" strokeWidth="7" strokeLinecap="round" />

                    <circle cx="345" cy="150" r="20" fill="#D6A477" />
                    <path d="M326 146c2-24 32-27 40-6-9-6-24-6-34 3z" fill="#26272A" />
                    <path d="M320 178c8-13 32-13 40 0l10 37h-60z" fill="#FFC107" />

                    <path d="M325 186l-18 26" stroke="#D6A477" strokeWidth="7" strokeLinecap="round" />
                    <path d="M363 186l18 24" stroke="#D6A477" strokeWidth="7" strokeLinecap="round" />

                    <rect x="307" y="200" width="70" height="16" rx="3" fill="#333439" />
                </g>

                {/* chat bubble */}
                <g className="animate-[float_4s_ease-in-out_-0.5s_infinite]">
                    <rect
                        x="300"
                        y="30"
                        width="100"
                        height="46"
                        rx="14"
                        fill="white"
                        className="drop-shadow-[0_8px_18px_rgba(0,0,0,0.08)]"
                    />
                    <circle cx="322" cy="53" r="5" fill="#FFC107" />
                    <circle cx="342" cy="53" r="5" fill="#E5A900" />
                    <circle cx="362" cy="53" r="5" fill="#FFC107" />
                </g>
            </svg>
        </div>
    )
}

/* =========================================================
   INFO BOX
========================================================= */

function InfoBox({ icon: Icon, title, lines }) {
    return (
        <div className="rounded-xl2 bg-brand-ink p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="font-display text-base font-semibold text-white sm:text-lg">
                        {title}
                    </h3>
                    <div className="mt-2 flex flex-col gap-1">
                        {lines.map((line) => (
                            <p key={line} className="text-sm text-white/70">
                                {line}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-yellow/15 text-brand-yellow">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
            </div>
        </div>
    )
}

/* =========================================================
   JOB DETAIL PAGE
========================================================= */

export default function JobDetail() {
    const { slug } = useParams()
    const job = getJobBySlug(slug)

    if (!job) {
        return (
            <section className="bg-white py-24">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h1 className="font-display text-3xl font-bold text-brand-ink">
                        Job not found
                    </h1>
                    <p className="mt-4 text-brand-slate">
                        This position may no longer be open.
                    </p>
                    <Link
                        to="/careers"
                        className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-yellowDark"
                    >
                        <ArrowLeft className="h-4 w-4" /> Back to Careers
                    </Link>
                </div>
            </section>
        )
    }

    return (
        <>
            {/* =====================================================
          HERO
      ===================================================== */}

            <section className="relative flex min-h-[calc(100dvh-72px)] items-center overflow-hidden bg-brand-mist py-14 sm:min-h-[calc(100dvh-80px)] sm:py-20 lg:min-h-[calc(100dvh-96px)]">
                <div
                    className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-yellow/20 blur-3xl"
                    aria-hidden="true"
                />

                <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
                    <Reveal>
                        <Link
                            to="/careers"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-slate transition-colors hover:text-brand-yellowDark"
                        >
                            <ArrowLeft className="h-4 w-4" /> Back to Careers
                        </Link>
                    </Reveal>

                    <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                        <Reveal>
                            <h1 className="font-display text-4xl font-bold uppercase leading-[1.08] tracking-tight text-brand-ink sm:text-5xl">
                                <span className="text-brand-yellow">
                                    {job.title.split(' ')[0]}
                                </span>{' '}
                                {job.title.split(' ').slice(1).join(' ')}
                            </h1>

                            <p className="mt-5 max-w-md text-base leading-relaxed text-brand-slate">
                                Get a chance to be a part of a progressive and
                                growth-oriented digital marketing agency.
                            </p>
                        </Reveal>

                        <Reveal delay={100} className="flex justify-center lg:justify-end">
                            <JobHeroIllustration />
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* =====================================================
          KEY DETAILS STRIP
      ===================================================== */}

            <section className="bg-gradient-to-r from-brand-yellow to-brand-yellowDark py-10">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 sm:grid-cols-3 lg:px-8">
                    <InfoBox
                        icon={Armchair}
                        title="Position & Level"
                        lines={[job.employment, job.level]}
                    />
                    <InfoBox
                        icon={Banknote}
                        title="Compensation"
                        lines={[job.compensation]}
                    />
                    <InfoBox
                        icon={Clock}
                        title="Location & Timings"
                        lines={[job.timings, job.workMode, job.location]}
                    />
                </div>
            </section>

            {/* =====================================================
          ABOUT + RESPONSIBILITIES + REQUIREMENTS
      ===================================================== */}

            <section className="bg-white py-14 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <Reveal>
                        <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-brand-ink sm:text-3xl">
                            About the Job
                        </h2>
                        <p className="mt-4 max-w-3xl text-base leading-relaxed text-brand-slate">
                            {job.about}
                        </p>
                    </Reveal>

                    <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-2">
                        <Reveal>
                            <h3 className="font-display text-xl font-bold uppercase tracking-tight text-brand-ink">
                                Job Responsibilities
                            </h3>
                            <ul className="mt-5 flex flex-col gap-3">
                                {job.responsibilities.map((item) => (
                                    <li
                                        key={item}
                                        className="flex gap-3 text-[15px] leading-relaxed text-brand-slate"
                                    >
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>

                        <Reveal delay={100}>
                            <h3 className="font-display text-xl font-bold uppercase tracking-tight text-brand-ink">
                                Requirements
                            </h3>
                            <ul className="mt-5 flex flex-col gap-3">
                                {job.requirements.map((item) => (
                                    <li
                                        key={item}
                                        className="flex gap-3 text-[15px] leading-relaxed text-brand-slate"
                                    >
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* =====================================================
          WHAT WE OFFER + APPLY
      ===================================================== */}

            <section className="bg-brand-yellow/10 py-14 sm:py-20">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:px-8">
                    <Reveal>
                        <h3 className="font-display text-xl font-bold uppercase tracking-tight text-brand-ink">
                            What We Offer
                        </h3>
                        <ul className="mt-5 flex flex-col gap-3">
                            {whatWeOffer.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-3 text-[15px] text-brand-slate"
                                >
                                    <CheckCircle2
                                        className="h-5 w-5 shrink-0 text-brand-yellowDark"
                                        strokeWidth={1.75}
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    <Reveal delay={100}>
                        <h3 className="font-display text-xl font-bold uppercase tracking-tight text-brand-ink">
                            Apply for this Job
                        </h3>
                        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-brand-slate">
                            To apply, send us your resume along with the position title
                            in the subject line. Our team will review your application
                            and reach out if you are shortlisted.
                        </p>

                        <Button
                            to={`/careers/${job.slug}/apply`}
                            variant="secondary"
                            className="mt-7"
                        >
                            Apply Now
                            <Send className="h-4 w-4" strokeWidth={1.75} />
                        </Button>
                    </Reveal>
                </div>
            </section>
        </>
    )
}
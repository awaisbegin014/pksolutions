import {
  Share2,
  Search,
  TrendingUp,
  Bot,
  PenTool,
  Briefcase,
  Palette,
  Handshake,
  Code2,
  ArrowUpRight,
} from 'lucide-react'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import TeamCard from '../components/TeamCard'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import yMark from '../assets/y-mark.png'

const aboutPoints = [
  { number: '01', title: 'Passion' },
  { number: '02', title: 'Purpose' },
  { number: '03', title: 'Transparency' },
]

const departments = [
  {
    icon: Share2,
    title: 'Social Media',
    description:
      'A consistent social presence helps brands stay relevant and connected. We create platform-specific content, manage publishing schedules, and develop strategies that encourage engagement and support broader marketing goals.',
  },
  {
    icon: Search,
    title: 'Search Engine Optimization',
    description:
      'Our SEO specialists focus on building visibility through technical optimization, content strategy, on-page improvements, and ethical link-building practices that help your clients earn sustainable organic growth.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description:
      'The powerhouse of strategic and data-driven digital promotion, responsible for running paid advertising campaigns that generate measurable results, such as clicks, conversions, or sales.',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description:
      'Save time, reduce manual work, and improve efficiency with intelligent automation built around the way your agency operates. We create AI-powered systems that help your team do more with less.',
  },
  {
    icon: PenTool,
    title: 'Content Writer',
    description:
      'Every brand has a story worth telling. From website copy and blog posts to landing pages and email campaigns, our content team creates messaging that engages audiences and supports client objectives.',
  },
  {
    icon: Briefcase,
    title: 'Business Development',
    description:
      "We're the architects of growth, exploring new horizons and opportunities for your brand. From partnerships to market strategies, we're your navigators in the dynamic landscape of business.",
  },
  {
    icon: Palette,
    title: 'Design',
    description:
      'Great design should do more than just look good. It should strengthen your brand. Our designers create visuals that are purposeful and tailored to each project, from social creatives to full brand identities.',
  },
  {
    icon: Handshake,
    title: 'Client Success',
    description:
      'Strong partnerships are built on clear communication and accountability. Our Client Success team manages expectations and ensures every deliverable is completed on time and aligned with your requirements.',
  },
  {
    icon: Code2,
    title: 'Web Development',
    description:
      "Your clients expect websites that are fast, reliable, and built to perform. Our developers create responsive, scalable websites that balance functionality with user experience for every project.",
  },
]

const team = [
  { name: 'Ayesha Khan', role: 'Founder & CEO' },
  { name: 'Bilal Ahmed', role: 'Head of Design' },
  { name: 'Sara Malik', role: 'Head of Marketing' },
  { name: 'Hamza Raza', role: 'Lead Developer' },
]

/* ---------- Hand-drawn brand-themed illustrations (no external assets) ---------- */

function IdeaIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <circle cx="200" cy="150" r="130" fill="#FFF3D0" />
      {/* rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="160"
          y1="70"
          x2="160"
          y2="30"
          stroke="#FFC107"
          strokeWidth="6"
          strokeLinecap="round"
          transform={`rotate(${deg} 160 100)`}
          opacity="0.7"
        />
      ))}
      {/* bulb glass */}
      <circle cx="160" cy="140" r="60" fill="#FFC107" />
      {/* bulb base */}
      <rect x="138" y="196" width="44" height="18" rx="4" fill="#1B1B1D" />
      <rect x="144" y="214" width="32" height="10" rx="3" fill="#1B1B1D" />
      {/* filament */}
      <path
        d="M145 150 L155 165 L165 145 L175 160"
        stroke="#1B1B1D"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
      {/* rocket */}
      <g transform="translate(255 60) rotate(35)">
        <path d="M0 60 C0 20 14 0 24 0 C34 0 48 20 48 60 Z" fill="#1B1B1D" />
        <circle cx="24" cy="34" r="9" fill="#FFC107" />
        <path d="M0 55 L-14 78 L4 68 Z" fill="#FFC107" />
        <path d="M48 55 L62 78 L44 68 Z" fill="#FFC107" />
        <path d="M18 60 L24 92 L30 60 Z" fill="#FFC107" />
      </g>
      {/* sparkles */}
      <g fill="#FFC107">
        <circle cx="320" cy="70" r="4" />
        <circle cx="300" cy="120" r="3" />
        <circle cx="330" cy="150" r="5" />
        <circle cx="80" cy="60" r="3" />
        <circle cx="60" cy="220" r="4" />
      </g>
    </svg>
  )
}

function TeamCallIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <circle cx="200" cy="150" r="130" fill="#FFF3D0" />
      {/* left window */}
      <rect x="45" y="80" width="140" height="110" rx="14" fill="#FFFFFF" stroke="#EDEBE6" strokeWidth="2" />
      <rect x="45" y="80" width="140" height="24" rx="14" fill="#1B1B1D" />
      <circle cx="60" cy="92" r="4" fill="#FFC107" />
      <circle cx="74" cy="92" r="4" fill="#FFFFFF" opacity="0.5" />
      <circle cx="88" cy="92" r="4" fill="#FFFFFF" opacity="0.5" />
      <circle cx="115" cy="148" r="24" fill="#1B1B1D" />
      <path d="M75 190 C75 162 155 162 155 190 Z" fill="#FFC107" />
      {/* right window */}
      <rect x="215" y="110" width="140" height="110" rx="14" fill="#FFFFFF" stroke="#EDEBE6" strokeWidth="2" />
      <rect x="215" y="110" width="140" height="24" rx="14" fill="#1B1B1D" />
      <circle cx="230" cy="122" r="4" fill="#FFC107" />
      <circle cx="244" cy="122" r="4" fill="#FFFFFF" opacity="0.5" />
      <circle cx="258" cy="122" r="4" fill="#FFFFFF" opacity="0.5" />
      <circle cx="285" cy="178" r="24" fill="#FFC107" />
      <path d="M245 220 C245 192 325 192 325 220 Z" fill="#1B1B1D" />
      {/* connecting signal */}
      <path
        d="M190 130 C210 110 210 160 230 140"
        stroke="#1B1B1D"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="2 10"
      />
      <circle cx="200" cy="90" r="10" fill="#1B1B1D" />
      <path d="M195 90 a5 5 0 0 1 10 0" stroke="#FFC107" strokeWidth="2" fill="none" />
    </svg>
  )
}

function GrowthIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <circle cx="200" cy="150" r="130" fill="#FFF3D0" />
      {/* bars */}
      <rect x="80" y="190" width="34" height="60" rx="6" fill="#FFC107" />
      <rect x="140" y="160" width="34" height="90" rx="6" fill="#FFC107" />
      <rect x="200" y="120" width="34" height="130" rx="6" fill="#FFC107" />
      <rect x="260" y="85" width="34" height="165" rx="6" fill="#1B1B1D" />
      {/* trend line */}
      <path
        d="M97 185 L157 155 L217 110 L277 70"
        stroke="#1B1B1D"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M277 70 L262 76 L280 90 Z" fill="#1B1B1D" />
      {/* left figure */}
      <circle cx="60" cy="215" r="14" fill="#1B1B1D" />
      <path d="M46 260 C46 235 74 235 74 260 Z" fill="#1B1B1D" />
      {/* right figure celebrating */}
      <circle cx="330" cy="150" r="14" fill="#FFC107" />
      <path d="M316 195 C316 172 344 172 344 195 Z" fill="#FFC107" />
      <line x1="344" y1="180" x2="360" y2="160" stroke="#FFC107" strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}

export default function About() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h1 className="font-display text-5xl font-bold tracking-tight text-brand-ink sm:text-6xl lg:text-7xl">
              About <span className="text-brand-yellow">The Yellow Solutions</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-brand-slate sm:text-xl">
              Leading the adaptation to a future where businesses grow and scale with
              result-driven strategies and intelligent, connected digital marketing.
            </p>
          </Reveal>
          <Reveal delay={120} variant="scale" className="flex items-center justify-center">
            <img
              src={yMark}
              alt="The Yellow Solutions"
              className="w-full max-w-[220px] drop-shadow-xl sm:max-w-[260px]"
            />
          </Reveal>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="aspect-[4/3] w-full rounded-xl2 bg-white p-4">
              <IdeaIllustration />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="About Us"
              title={<>Who we are and <span className="text-brand-yellow">what drives us</span></>}
            />
            <p className="mt-6 text-base leading-relaxed text-brand-slate">
              The Yellow Solutions is committed to fostering a culture of continuous learning,
              empowering our team to grow while setting the highest standards for performance and
              success. We believe professional development should go hand in hand with meaningful
              work, offering experiences that support personal growth and a healthy work-life
              balance. Our team of skilled professionals specializes in crafting effective digital
              marketing strategies and building technology solutions that optimize processes,
              enhance efficiency, and drive business growth.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {aboutPoints.map((point) => (
                <div
                  key={point.title}
                  className="relative overflow-hidden rounded-lg bg-gradient-to-br from-brand-yellowSoft/70 via-brand-yellowSoft/30 to-white p-5"
                >
                  <span className="absolute left-2 top-2 h-[calc(100%-1rem)] w-0.5 bg-gradient-to-b from-brand-yellow to-brand-yellow/10" />
                  <div className="pl-4">
                    <span className="font-display text-2xl font-bold text-brand-yellow/50">
                      {point.number}
                    </span>
                    <p className="mt-1 font-display text-base font-semibold text-brand-ink">
                      {point.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Who We Are"
              title={<>A team built for how modern <span className="text-brand-yellow">brands grow</span></>}
            />
            <p className="mt-6 text-base leading-relaxed text-brand-slate">
              Our approach to combining digital marketing and automation empowers businesses with
              forward-thinking strategies and intelligent technology, driving growth, efficiency,
              and industry leadership. By leveraging data-driven insights and automation-driven
              processes, we craft impactful brand experiences, streamline operations, and unlock
              scalable solutions that fuel every stage of the journey. Through deep client
              collaboration, we develop tailored methodologies that enhance engagement, optimize
              workflows, and position businesses at the forefront of innovation.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="aspect-[4/3] w-full rounded-xl2 bg-white p-4">
              <TeamCallIllustration />
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="aspect-[4/3] w-full rounded-xl2 bg-white p-4">
              <GrowthIllustration />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Our Values"
              title={<>Every person here helps <span className="text-brand-yellow">shape the outcome</span></>}
            />
            <p className="mt-6 text-base leading-relaxed text-brand-slate">
              We believe in empowering every individual to make an impact. Each person's unique
              strengths and experiences contribute to the bigger picture, creating a team that's
              greater than the sum of its parts. This diverse blend of talents is what fuels our
              problem solving and drives the innovative solutions we offer our clients. From
              strategy to execution, we see every project as a chance to explore smarter, more
              scalable ways to grow — and our ability to adapt quickly ensures we're always ahead
              of the curve.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Departments"
            title={<>What <span className="text-brand-yellow">We Do</span></>}
            description="Get to know us better by exploring our various departments and their areas of expertise."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept, i) => (
              <Reveal key={dept.title} delay={i * 50}>
                <div className="group">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellowSoft text-brand-ink">
                    <dept.icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-brand-yellow">
                    {dept.title}
                  </h3>
                  <div className="relative mt-2">
                    <p className="text-sm leading-relaxed text-brand-slate">{dept.description}</p>
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-yellow transition-all duration-300 group-hover:w-full" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-14 flex justify-center">
            <Button to="/careers" variant="hero">
              Grow With Us
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
                Meet The <span className="text-brand-yellow">People Behind It</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-base leading-relaxed text-brand-slate">
                The Yellow Solutions brings together experienced professionals who believe the
                best results come from collaboration and shared accountability. Across strategy,
                creative, development, and client success, our people work as one team to solve
                challenges, embrace innovation, and help clients achieve sustainable growth.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <TeamCard key={member.name} {...member} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        mode="careers"
        bgClassName="bg-brand-yellowSoft/40"
        title={<>Are you ready to <span className="text-brand-yellow">go further?</span></>}
        description="We bring the full force of our talent, expertise and energy to build a more growth-focused future for all."
      />
    </>
  )
}
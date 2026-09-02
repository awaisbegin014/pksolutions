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
      'Your clients expect websites that are fast, reliable, and built to perform. Our developers create responsive, scalable websites that balance functionality with user experience for every project.',
  },
]

const team = [
  { name: 'Ayesha Khan', role: 'Founder & CEO' },
  { name: 'Bilal Ahmed', role: 'Head of Design' },
  { name: 'Sara Malik', role: 'Head of Marketing' },
  { name: 'Hamza Raza', role: 'Lead Developer' },
]

/* =========================================================
   1. ABOUT US
   Three people / collaboration illustration
   ========================================================= */

function AboutUsIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      {/* Background */}
      <circle cx="200" cy="150" r="130" fill="#FFF3D0" />

      {/* Top connection arc */}
      <path
        d="M105 170 C135 95 265 95 300 170"
        stroke="#FFC107"
        strokeWidth="3"
        fill="none"
        strokeDasharray="7 8"
        opacity="0.55"
      />

      {/* LEFT PERSON */}
      <g className="animate-[float_5s_ease-in-out_infinite]">
        {/* Hair */}
        <path
          d="M102 122 C103 95 148 92 150 122 C142 112 112 111 102 122Z"
          fill="#1B1B1D"
        />

        {/* Head */}
        <circle cx="125" cy="125" r="25" fill="#FFC107" />

        {/* Body */}
        <path
          d="M92 205 C94 165 105 150 125 150 C145 150 157 165 158 205 Z"
          fill="#1B1B1D"
        />

        {/* Collar */}
        <path
          d="M116 157 L125 174 L134 157"
          stroke="#FFC107"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        {/* Arm */}
        <path
          d="M100 172 L78 188"
          stroke="#1B1B1D"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </g>

      {/* CENTER PERSON */}
      <g className="animate-[float_4.5s_ease-in-out_-1s_infinite]">
        {/* Hair */}
        <path
          d="M173 105 C174 72 226 72 228 105 C216 91 187 91 173 105Z"
          fill="#1B1B1D"
        />

        {/* Head */}
        <circle cx="200" cy="105" r="29" fill="#1B1B1D" />

        {/* Face */}
        <circle cx="200" cy="108" r="18" fill="#FFC107" />

        {/* Body */}
        <path
          d="M158 205 C160 157 173 138 200 138 C227 138 240 157 242 205 Z"
          fill="#FFC107"
        />

        {/* Collar */}
        <path
          d="M185 143 L200 162 L215 143"
          stroke="#1B1B1D"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Arms */}
        <path
          d="M168 158 L145 178"
          stroke="#FFC107"
          strokeWidth="11"
          strokeLinecap="round"
        />

        <path
          d="M232 158 L255 178"
          stroke="#FFC107"
          strokeWidth="11"
          strokeLinecap="round"
        />
      </g>

      {/* RIGHT PERSON */}
      <g className="animate-[float_5.2s_ease-in-out_-2s_infinite]">
        {/* Hair */}
        <path
          d="M252 123 C254 97 297 96 299 123 C290 111 262 110 252 123Z"
          fill="#1B1B1D"
        />

        {/* Head */}
        <circle cx="275" cy="125" r="25" fill="#1B1B1D" />

        {/* Face */}
        <circle cx="275" cy="128" r="16" fill="#FFC107" />

        {/* Body */}
        <path
          d="M242 205 C244 165 255 150 275 150 C295 150 307 165 309 205 Z"
          fill="#1B1B1D"
        />

        {/* Collar */}
        <path
          d="M266 157 L275 174 L284 157"
          stroke="#FFC107"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        {/* Arm */}
        <path
          d="M300 172 L322 188"
          stroke="#1B1B1D"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </g>

      {/* Connection lines */}
      <g
        stroke="#1B1B1D"
        strokeWidth="2"
        strokeDasharray="5 6"
        opacity="0.4"
      >
        <line x1="125" y1="125" x2="200" y2="105" />
        <line x1="200" y1="105" x2="275" y2="125" />
      </g>

      {/* Top nodes */}
      <g fill="#FFC107">
        <circle cx="92" cy="82" r="5" />
        <circle cx="200" cy="55" r="5" />
        <circle cx="308" cy="82" r="5" />
      </g>

      {/* Floating dots */}
      <g fill="#1B1B1D" opacity="0.5">
        <circle cx="70" cy="205" r="4" />
        <circle cx="335" cy="175" r="4" />
        <circle cx="90" cy="245" r="3" />
        <circle cx="315" cy="235" r="3" />
      </g>
    </svg>
  )
}


/* =========================================================
   2. WHO WE ARE
   Growth chart + 4 bars + arrow outside the top
   ========================================================= */

function AutomationGrowthIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      {/* Background circle */}
      <circle cx="200" cy="155" r="130" fill="#FFF3D0" />

      {/* Base */}
      <path
        d="M82 245 H305"
        stroke="#1B1B1D"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.2"
      />

      {/* FOUR RISING BARS */}
      <g className="animate-[float_5s_ease-in-out_infinite]">
        {/* Bar 1 */}
        <rect
          x="88"
          y="190"
          width="32"
          height="55"
          rx="6"
          fill="#FFC107"
        />

        {/* Bar 2 */}
        <rect
          x="134"
          y="165"
          width="32"
          height="80"
          rx="6"
          fill="#1B1B1D"
        />

        {/* Bar 3 */}
        <rect
          x="180"
          y="135"
          width="32"
          height="110"
          rx="6"
          fill="#FFC107"
        />

        {/* Bar 4 */}
        <rect
          x="226"
          y="100"
          width="32"
          height="145"
          rx="6"
          fill="#1B1B1D"
        />
      </g>

      
{/* Trend line + diagonal arrow */}
<g className="animate-[float_4.6s_ease-in-out_-1s_infinite]">
  {/* Main rising trend line */}
  <path
    d="M100 175 L150 145 L200 115 L250 85"
    stroke="#1B1B1D"
    strokeWidth="5"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  />

  {/* Arrow continues in the SAME diagonal direction */}
  <path
    d="M250 85 L275 70"
    stroke="#1B1B1D"
    strokeWidth="5"
    fill="none"
    strokeLinecap="round"
  />

  {/* Single arrow head */}
  <path
    d="M275 70 L256 68 M275 70 L271 90"
    stroke="#1B1B1D"
    strokeWidth="5"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</g>

{/* Simple top circle — no tick */}
<g className="animate-[float_4s_ease-in-out_-1.5s_infinite]">
  <circle
    cx="242"
    cy="45"
    r="18"
    fill="#FFC107"
    stroke="#1B1B1D"
    strokeWidth="4"
  />
</g>



        
      

      {/* Automation gear */}
      <g
        className="animate-[spin_12s_linear_infinite]"
        transform="translate(310 175)"
      >
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <rect
            key={deg}
            x="-5"
            y="-34"
            width="10"
            height="15"
            rx="3"
            fill="#FFC107"
            transform={`rotate(${deg})`}
          />
        ))}

        <circle r="23" fill="#1B1B1D" />
        <circle r="8" fill="#FFF3D0" />
      </g>

      {/* Floating dots */}
      <g fill="#1B1B1D" opacity="0.5">
        <circle
          cx="75"
          cy="115"
          r="4"
          className="animate-[float_3.8s_ease-in-out_-0.4s_infinite]"
        />

        <circle
          cx="330"
          cy="100"
          r="5"
          className="animate-[float_4.2s_ease-in-out_-1.6s_infinite]"
        />

        <circle
          cx="70"
          cy="220"
          r="3"
          className="animate-[float_3.6s_ease-in-out_-2.4s_infinite]"
        />
      </g>
    </svg>
  )
}


/* =========================================================
   3. OUR VALUES
   Team members feeding ideas into one final outcome
   ========================================================= */

function ValuesIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      {/* Background */}
      <circle
        cx="200"
        cy="150"
        r="130"
        fill="#FFF3D0"
      />

      {/* Decorative dots */}
      <g fill="#1B1B1D" opacity="0.35">
        <circle cx="62" cy="105" r="4" />
        <circle cx="335" cy="92" r="4" />
        <circle cx="72" cy="225" r="3" />
        <circle cx="330" cy="230" r="3" />
      </g>

      {/* =========================
          LEFT IDEA — PASSION
         ========================= */}
      <g className="animate-[float_4.5s_ease-in-out_infinite]">
        {/* Connector */}
        <path
          d="M105 105 C135 112 145 128 158 140"
          stroke="#1B1B1D"
          strokeWidth="3"
          strokeDasharray="6 7"
          fill="none"
          opacity="0.45"
        />

        {/* Idea circle */}
        <circle
          cx="90"
          cy="92"
          r="30"
          fill="#FFC107"
          stroke="#1B1B1D"
          strokeWidth="4"
        />

        {/* Light bulb */}
        <path
          d="M80 91
             C80 83 86 78 90 78
             C97 78 101 84 100 91
             C100 96 96 99 95 103
             H85
             C84 99 80 96 80 91Z"
          fill="#1B1B1D"
        />

        <path
          d="M85 107 H95"
          stroke="#1B1B1D"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M87 112 H93"
          stroke="#1B1B1D"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Small spark */}
        <path
          d="M72 72 L68 67"
          stroke="#1B1B1D"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M108 72 L112 67"
          stroke="#1B1B1D"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* =========================
          RIGHT IDEA — PURPOSE
         ========================= */}
      <g className="animate-[float_4.8s_ease-in-out_-1s_infinite]">
        {/* Connector */}
        <path
          d="M295 105 C265 112 255 128 242 140"
          stroke="#1B1B1D"
          strokeWidth="3"
          strokeDasharray="6 7"
          fill="none"
          opacity="0.45"
        />

        {/* Target circle */}
        <circle
          cx="310"
          cy="92"
          r="30"
          fill="#1B1B1D"
          stroke="#FFC107"
          strokeWidth="4"
        />

        {/* Target */}
        <circle
          cx="310"
          cy="92"
          r="15"
          fill="#FFC107"
        />

        <circle
          cx="310"
          cy="92"
          r="7"
          fill="#1B1B1D"
        />

        {/* Target arrow */}
        <path
          d="M298 80 L314 96"
          stroke="#1B1B1D"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M314 96 L313 87 M314 96 L305 95"
          stroke="#1B1B1D"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* =========================
          BOTTOM IDEA — COLLABORATION
         ========================= */}
      <g className="animate-[float_5s_ease-in-out_-1.8s_infinite]">
        {/* Connector */}
        <path
          d="M125 225 C150 205 165 188 182 174"
          stroke="#1B1B1D"
          strokeWidth="3"
          strokeDasharray="6 7"
          fill="none"
          opacity="0.45"
        />

        {/* Connector */}
        <path
          d="M275 225 C250 205 235 188 218 174"
          stroke="#1B1B1D"
          strokeWidth="3"
          strokeDasharray="6 7"
          fill="none"
          opacity="0.45"
        />

        {/* Collaboration circle */}
        <circle
          cx="200"
          cy="232"
          r="30"
          fill="#FFC107"
          stroke="#1B1B1D"
          strokeWidth="4"
        />

        {/* Connected nodes */}
        <circle
          cx="188"
          cy="225"
          r="7"
          fill="#1B1B1D"
        />

        <circle
          cx="212"
          cy="225"
          r="7"
          fill="#1B1B1D"
        />

        <circle
          cx="200"
          cy="242"
          r="7"
          fill="#1B1B1D"
        />

        {/* Connections */}
        <path
          d="M193 229 L200 238 L207 229"
          stroke="#FFC107"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M195 225 H205"
          stroke="#FFC107"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>

      {/* =========================
          CENTRAL CORE
         ========================= */}
      <g className="animate-[float_5s_ease-in-out_-0.8s_infinite]">
        {/* Outer ring */}
        <circle
          cx="200"
          cy="150"
          r="48"
          fill="#1B1B1D"
        />

        {/* Inner ring */}
        <circle
          cx="200"
          cy="150"
          r="35"
          fill="#FFC107"
        />

        {/* Core */}
        <circle
          cx="200"
          cy="150"
          r="19"
          fill="#1B1B1D"
        />

        {/* Connected center nodes */}
        <circle
          cx="200"
          cy="133"
          r="5"
          fill="#FFC107"
        />

        <circle
          cx="185"
          cy="159"
          r="5"
          fill="#FFC107"
        />

        <circle
          cx="215"
          cy="159"
          r="5"
          fill="#FFC107"
        />

        {/* Core connections */}
        <path
          d="M200 133 L185 159 L215 159 Z"
          stroke="#FFC107"
          strokeWidth="2.5"
          fill="none"
        />
      </g>

      {/* =========================
          GROWTH ARROW
         ========================= */}
      <g className="animate-[float_4.2s_ease-in-out_-1.5s_infinite]">
        {/* Rising line */}
        <path
          d="M200 130 L200 82"
          stroke="#1B1B1D"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Arrow head */}
        <path
          d="M200 82 L188 96"
          stroke="#1B1B1D"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M200 82 L212 96"
          stroke="#1B1B1D"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Small yellow accent */}
        <circle
          cx="200"
          cy="67"
          r="6"
          fill="#FFC107"
        />
      </g>

      {/* =========================
          EXTRA ACCENTS
         ========================= */}
      <g fill="#FFC107">
        <circle cx="125" cy="58" r="4" />
        <circle cx="275" cy="58" r="4" />
        <circle cx="145" cy="255" r="3" />
        <circle cx="255" cy="255" r="3" />
      </g>

      {/* Tiny floating lines */}
      <g
        stroke="#1B1B1D"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.35"
      >
        <path d="M65 150 H78" />
        <path d="M322 150 H335" />
        <path d="M110 245 L104 251" />
        <path d="M290 245 L296 251" />
      </g>
    </svg>
  )
}


/* =========================================================
   PAGE
   ========================================================= */

export default function About() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h1 className="font-display text-5xl font-bold tracking-tight text-brand-ink sm:text-6xl lg:text-7xl">
              About{' '}
              <span className="text-brand-yellow">
                The Yellow Solutions
              </span>
            </h1>

            <p className="mt-4 max-w-lg text-lg leading-relaxed text-brand-slate sm:text-xl">
              Leading the adaptation to a future where businesses grow and scale with
              result-driven strategies and intelligent, connected digital marketing.
            </p>
          </Reveal>

          <Reveal
            delay={120}
            variant="scale"
            className="flex items-center justify-center"
          >
            <img
              src={yMark}
              alt="The Yellow Solutions"
              className="w-full max-w-[220px] drop-shadow-xl sm:max-w-[260px]"
            />
          </Reveal>
        </div>
      </section>


      {/* ABOUT US */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">

          <Reveal>
            <SectionHeading
              eyebrow="About Us"
              align="center"
              title={
                <>
                  Who we are and{' '}
                  <span className="text-brand-yellow">
                    what drives us
                  </span>
                </>
              }
            />
          </Reveal>

          <Reveal delay={80} className="mt-8">
            <div className="mx-auto aspect-[4/3] w-full max-w-sm rounded-xl2 bg-white p-4">
              <AboutUsIllustration />
            </div>
          </Reveal>

          <Reveal delay={160} className="mt-8 text-left">
            <p className="text-base leading-relaxed text-brand-slate">
              The Yellow Solutions is committed to fostering a culture of continuous
              learning, empowering our team to grow while setting the highest standards
              for performance and success. We believe professional development should go
              hand in hand with meaningful work, offering experiences that support personal
              growth and a healthy work-life balance. Our team of skilled professionals
              specializes in crafting effective digital marketing strategies and building
              technology solutions that optimize processes, enhance efficiency, and drive
              business growth.
            </p>

            <div className="mt-7 grid grid-cols-3 gap-4">
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
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">

          <Reveal>
            <SectionHeading
              eyebrow="Who We Are"
              align="center"
              title={
                <>
                  A team built for how modern{' '}
                  <span className="text-brand-yellow">
                    brands grow
                  </span>
                </>
              }
            />
          </Reveal>

          <Reveal delay={80} className="mt-8">
            <div className="mx-auto aspect-[4/3] w-full max-w-sm rounded-xl2 bg-white p-4">
              <AutomationGrowthIllustration />
            </div>
          </Reveal>

          <Reveal delay={160} className="mt-8 text-left">
            <p className="text-base leading-relaxed text-brand-slate">
              Our approach to combining digital marketing and automation empowers
              businesses with forward-thinking strategies and intelligent technology,
              driving growth, efficiency, and industry leadership. By leveraging
              data-driven insights and automation-driven processes, we craft impactful
              brand experiences, streamline operations, and unlock scalable solutions
              that fuel every stage of the journey. Through deep client collaboration,
              we develop tailored methodologies that enhance engagement, optimize
              workflows, and position businesses at the forefront of innovation.
            </p>
          </Reveal>
        </div>
      </section>


      {/* OUR VALUES */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">

          <Reveal>
            <SectionHeading
              eyebrow="Our Values"
              align="center"
              title={
                <>
                  Every person here helps{' '}
                  <span className="text-brand-yellow">
                    shape the outcome
                  </span>
                </>
              }
            />
          </Reveal>

          <Reveal delay={80} className="mt-8">
            <div className="mx-auto aspect-[4/3] w-full max-w-sm rounded-xl2 bg-white p-4">
              <ValuesIllustration />
            </div>
          </Reveal>

          <Reveal delay={160} className="mt-8 text-left">
            <p className="text-base leading-relaxed text-brand-slate">
              We believe in empowering every individual to make an impact. Each person's
              unique strengths and experiences contribute to the bigger picture, creating
              a team that's greater than the sum of its parts. This diverse blend of
              talents is what fuels our problem solving and drives the innovative
              solutions we offer our clients. From strategy to execution, we see every
              project as a chance to explore smarter, more scalable ways to grow — and
              our ability to adapt quickly ensures we're always ahead of the curve.
            </p>
          </Reveal>
        </div>
      </section>


      {/* WHAT WE DO */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            eyebrow="Our Departments"
            title={
              <>
                What <span className="text-brand-yellow">We Do</span>
              </>
            }
            description="Get to know us better by exploring our various departments and their areas of expertise."
            align="center"
          />

          <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept, i) => (
              <Reveal key={dept.title} delay={i * 50}>
                <div className="group">

                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-yellowSoft text-brand-ink">
                    <dept.icon
                      className="h-5 w-5"
                      strokeWidth={1.75}
                    />
                  </div>

                  <h3 className="font-display text-xl font-semibold text-brand-yellow">
                    {dept.title}
                  </h3>

                  <div className="relative mt-2">
                    <p className="text-sm leading-relaxed text-brand-slate">
                      {dept.description}
                    </p>

                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-yellow transition-all duration-300 group-hover:w-full" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={200}
            className="mt-8 flex justify-center"
          >
            <Button to="/careers" variant="hero">
              Grow With Us
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>


      {/* MEET THE TEAM */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">

            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
                Meet The{' '}
                <span className="text-brand-yellow">
                  People Behind It
                </span>
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-base leading-relaxed text-brand-slate">
                The Yellow Solutions brings together experienced professionals who
                believe the best results come from collaboration and shared
                accountability. Across strategy, creative, development, and client
                success, our people work as one team to solve challenges, embrace
                innovation, and help clients achieve sustainable growth.
              </p>
            </Reveal>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <TeamCard
                key={member.name}
                {...member}
                delay={i * 80}
              />
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <CTASection
        mode="careers"
        bgClassName="bg-brand-yellowSoft/40"
        title={
          <>
            Are you ready to{' '}
            <span className="text-brand-yellow">
              go further?
            </span>
          </>
        }
        description="We bring the full force of our talent, expertise and energy to build a more growth-focused future for all."
      />
    </>
  )
}
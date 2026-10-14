import { useState } from 'react'
import { ArrowUpRight, ShieldCheck, Users, Clock, Sparkles } from 'lucide-react'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import TeamCard from '../components/TeamCard'
import FAQItem from '../components/FAQItem'
import yMark from '../assets/y-mark.png'
import ceoImg from '../assets/team/ceo.png'
import gmImg from '../assets/team/general-manager.png'
import hrImg from '../assets/team/hr-manager.png'
import pmImg from '../assets/team/project-manager.png'
import smmImg from '../assets/team/social-media-manager.png'

const services = [
  { title: 'Digital Marketing', description: 'Full-funnel campaigns across search, social and content that turn attention into revenue. We plan, launch and optimize every touchpoint so your brand shows up where your customers already are.' },
  { title: 'Web Development', description: 'Fast, responsive websites and web apps built to convert visitors into customers. We focus on clean design, solid performance and a smooth user experience across every device.' },
  { title: 'Application Development', description: 'Native and cross-platform mobile apps built for performance, from first prototype to app store launch. We design intuitive interfaces and build on scalable foundations, so your app works as well as it looks.' },
  { title: 'Social Media Growth', description: 'Content and community strategy that builds a loyal, engaged audience around your brand. We plan calendars, create content and track what actually drives engagement.' },
  { title: 'Paid Advertising', description: 'Data-driven ad management across Meta, Google and TikTok focused on measurable ROI. We test, optimize and scale campaigns so every rupee spent works harder.' },
  { title: 'Growth Strategy', description: 'Research-backed roadmaps that align your marketing, product and sales for real growth. We identify where the biggest opportunities are and build a plan to capture them.' },
]

const stats = [
  { value: 120, suffix: '+', label: 'Projects Delivered' },
  { value: 60, suffix: '+', label: 'Happy Clients' },
  { value: 8, suffix: '+', label: 'Years Combined Experience' },
  { value: 15, suffix: '+', label: 'Team Members' },
]

const whyUs = [
  { icon: ShieldCheck, title: 'Reliable Delivery', description: 'Clear timelines and consistent communication from kickoff to launch.' },
  { icon: Users, title: 'Dedicated Team', description: 'A hands-on team that treats every project like its own business.' },
  { icon: Clock, title: 'Fast Turnaround', description: 'Streamlined processes that get your work live without cutting corners.' },
  { icon: Sparkles, title: 'Tailored Solutions', description: 'No templates or copy-paste strategies — every plan is built around you.' },
]

const team = [
  { name: 'CEO', image: ceoImg },
  { name: 'General Manager', image: gmImg },
  { name: 'HR Manager', image: hrImg },
  { name: 'Project Manager', image: pmImg },
  { name: 'Social Media Manager', image: smmImg },
]

const growItems = [
  {
    title: 'Internship Program',
    description: "Work alongside experienced professionals, contribute to live client projects, and develop practical skills that prepare you for a successful career in digital marketing. You'll be paired with a mentor from day one, sit in on real client calls, and get hands-on exposure to strategy, execution and reporting — not just theory. By the end of the program you'll have a portfolio of real work to show, not just a certificate.",
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
    reverse: false,
  },
  {
    title: 'Career Opportunities',
    description: 'Join a collaborative team where your ideas matter and your professional growth is supported every step of the way. Explore opportunities across our departments — from strategy and design to development and client success — and find the path that fits your strengths. We promote from within, invest in ongoing training, and give every team member the ownership to shape projects, not just execute tasks handed down to them.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
    reverse: true,
  },
  {
    title: 'Learning & Development',
    description: "We believe learning is what drives success. Through regular training sessions, knowledge sharing, and practical experience, you'll build the skills needed to stay ahead. Our team runs internal workshops, encourages certifications, and keeps everyone up to date with the tools and trends shaping digital marketing today, so your growth never plateaus and you're always working with the latest thinking in the industry.",
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    reverse: false,
  },
]

const process = [
  { step: '01', title: 'Discover', description: 'We learn your business, audience and goals inside out.' },
  { step: '02', title: 'Strategize', description: 'We map a plan built specifically around what will move the needle.' },
  { step: '03', title: 'Execute', description: 'Our team designs, builds and launches with regular check-ins.' },
  { step: '04', title: 'Grow', description: 'We track, optimize and scale what works, quarter after quarter.' },
]

const faqs = [
  { q: 'What services does The Yellow Solutions offer?', a: 'We handle digital marketing, web development, application development, social media growth and paid advertising — everything under one roof.' },
  { q: 'How long does a typical project take?', a: 'Timelines vary by scope, but most website and branding projects run 4–8 weeks, with marketing engagements running monthly.' },
  { q: 'Do you work with businesses outside Pakistan?', a: "Yes, we work with clients locally and internationally, coordinating across time zones as needed." },
  { q: 'How do I get started?', a: "Reach out through our Contact page and we'll schedule a short discovery call to understand your goals." },
  { q: 'Are you hiring?', a: 'We are often looking for driven people — check our Careers page for current openings.' },
]

const marqueeWords = ['Strategy', 'Design', 'Development', 'Marketing', 'Branding', 'Growth']

const careerPoints = [
  { title: 'Real Impact', description: 'Your work goes live, not into practice folders.' },
  { title: 'Innovation First', description: 'Use AI, automation, and modern marketing tools.' },
  { title: 'Collaborative Culture', description: 'Learn from specialists across every department.' },
  { title: 'Career Growth', description: 'Build expertise while solving real-world challenges.' },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      {/* HERO */}
      <section className="flex min-h-[calc(100dvh-72px)] flex-col bg-white sm:min-h-[calc(100dvh-80px)] lg:min-h-[calc(100dvh-96px)]">
        <div className="flex flex-1 items-center">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-10 sm:py-12 lg:grid-cols-2 lg:px-8 lg:py-16">
            <Reveal>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-4 py-1.5 text-xs font-nav font-semibold uppercase tracking-[0.14em] text-brand-ink">
                <span className="h-2 w-2 rounded-full bg-brand-yellow" />
                Digital Growth Partner
              </span>
              <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
                We help brands
                <span className="relative mx-2 inline-block whitespace-nowrap">
                  grow
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    height="12"
                    viewBox="0 0 120 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M2 9C25 3 95 3 118 9" stroke="#FFC107" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="text-brand-yellow">louder, faster, and smarter.</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-slate sm:text-lg">
                The Yellow Solutions is a digital growth partner for brands that want more than
                services — we build strategy, design and technology into one connected engine for growth.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button to="/contact" variant="hero">
                  Get In Touch
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button to="/careers" variant="hero" className="!bg-white !text-brand-ink hover:!bg-[#FFE066] hover:!text-brand-ink border border-brand-line">
                  Join Our Team
                </Button>
              </div>
            </Reveal>

            <Reveal delay={120} className="relative flex items-center justify-center lg:self-center">
              <img
                src={yMark}
                alt="The Yellow Solutions"
                className="w-full max-w-[160px] animate-float drop-shadow-2xl sm:max-w-[220px] lg:max-w-xs"
              />
            </Reveal>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="border-y border-brand-line bg-white py-5">
          <div className="no-scrollbar flex overflow-hidden">
            <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16">
              {[...marqueeWords, ...marqueeWords].map((word, i) => (
                <span
                  key={`${word}-${i}`}
                  className="flex items-center gap-3 font-display text-lg font-semibold uppercase tracking-wide text-brand-ink/70"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-brand-ink py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} className="text-center lg:text-left">
              <p className="font-display text-4xl font-bold text-brand-yellow sm:text-5xl">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-white/70">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>


      {/* CAREER GROWTH */}
      {/* CAREER GROWTH */}
      <section className="bg-white py-12 sm:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-stretch gap-14 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-brand-ink sm:text-4xl lg:text-[2.75rem]">
                Build Your Career Where<br />
                <span className="text-brand-yellow">Innovation Meets Opportunity</span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-slate sm:text-lg">
                Great work starts with great people. At The Yellow Solutions, you'll work alongside
                specialists across marketing, design, development, client success, content, and
                automation while gaining hands-on experience with real client projects that challenge
                you to think strategically and grow professionally.
              </p>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-brand-slate sm:text-lg">
                Skill-building is part of our culture, not an occasional initiative. Through mentorship
                and hands-on experience, every team member is encouraged to strengthen their expertise,
                contribute meaningful ideas, and grow alongside the evolving digital industry.
              </p>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-brand-slate sm:text-lg">
                Whether we're launching campaigns, developing websites, automating workflows, or
                helping businesses scale, we believe exceptional results come from teams that never
                stop learning.
              </p>
              <Button to="/careers" variant="hero" className="mt-8">
                Join Our Team
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Reveal>

            <div className="flex h-full flex-col gap-10 lg:gap-14">
              {careerPoints.map((point, i) => (
                <Reveal key={point.title} delay={i * 80}>
                  <div className="border-l-2 border-brand-yellow pl-6">
                    <h3 className="font-display text-3xl font-bold text-brand-yellowDark sm:text-4xl">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-base leading-relaxed text-brand-slate">{point.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* SERVICES — plain list, no cards */}
      <section className="bg-white py-12 sm:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="What We Do"
              title={<>Solutions built around<br /><span className="text-brand-yellow">your growth</span></>}
              description="From first impression to final conversion, we cover every piece of your digital presence."
            />
            <Reveal>
              <Button to="/contact" variant="outline" className="shrink-0">
                Start a Project
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 60} className="group relative pb-4">
                <h3 className="font-display text-2xl font-semibold text-brand-yellow">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-brand-slate">{service.description}</p>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-yellow transition-all duration-300 group-hover:w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* MEET THE TEAM */}
      <section className="bg-white py-12 sm:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Meet The People Behind It"
            title={<>The team behind<br /><span className="text-brand-yellow">The Yellow Solutions</span></>}
            align="center"
          />
          {/* CEO - First in one line */}
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-xs sm:w-72">
              <TeamCard {...team[0]} delay={0} />
            </div>
          </div>

          {/* All 4 team members below */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.slice(1).map((member, i) => (
              <TeamCard key={member.name} {...member} delay={(i + 1) * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* GROW WITH A TEAM */}
      <section className="bg-white py-12 sm:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Careers"
            title={<>Grow With A Team That Invests<br /><span className="text-brand-yellow">In Your Success</span></>}
            description="Whether you're beginning your professional journey or looking for your next opportunity, The Yellow Solutions provides an environment where curiosity is encouraged, achievements are recognized, and continuous learning becomes part of your everyday career."
            align="center"
          />
          <div className="mt-14 flex flex-col gap-14">
            {growItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div
                  className={`flex flex-col items-center gap-8 sm:gap-12 lg:flex-row ${item.reverse ? 'lg:flex-row-reverse' : ''
                    }`}
                >
                  <div className="w-full lg:w-1/2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-[4/3] w-full rounded-xl2 object-cover shadow-card"
                    />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h3 className="font-display text-2xl font-semibold text-brand-ink sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-brand-slate">{item.description}</p>
                    <Button to="/careers" variant="hero" className="mt-6">
                      Join Our Team
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — white bg */}
      <section className="bg-white py-12 sm:py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title={<>A simple process, built for<br /><span className="text-brand-yellow">momentum</span></>}
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 80}>
                <div className="relative h-full rounded-xl2 bg-brand-yellow p-8 transition-all duration-300 hover:shadow-cardHover">
                  <span className="font-display text-4xl font-bold text-brand-ink">{item.step}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-brand-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/70">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
<section className="bg-white pt-12 pb-10 sm:pt-18 sm:pb-14">
          <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <SectionHeading eyebrow="FAQs" title={<>Frequently <span className="text-brand-yellow">Asked Questions</span></>} align="center" />
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
  mode="careers"
  paddingClassName="pt-10 pb-20 sm:pt-14 sm:pb-24"
  title={<>We're growing — and we want you<br /><span className="text-brand-yellow">with us.</span></>}
  description="The Yellow Solutions is always looking for curious, driven people who want to build something great."
/>
    </>
  )
}
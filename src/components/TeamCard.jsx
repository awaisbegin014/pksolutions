import { User } from 'lucide-react'
import Reveal from './Reveal'

const roleResponsibilities = {
  CEO: 'Sets the company vision, leads strategic decision-making, builds key partnerships, and guides sustainable growth while shaping a high-performing company culture.',
  'General Manager': 'Oversees daily operations, translates company strategy into action, coordinates departments and resources, and ensures consistent performance across the business.',
  'HR Manager': 'Leads recruitment and onboarding, supports employee development, maintains workplace policies, and builds an engaged, inclusive, and productive team culture.',
  'Project Manager': 'Plans project scope and timelines, coordinates teams and client communication, manages priorities and risks, and ensures high-quality work is delivered on time.',
  'Social Media Manager': 'Develops content strategies, manages publishing calendars, engages online communities, and analyzes performance to strengthen brand presence and campaign results.',
}

export default function TeamCard({ name, role, image, responsibilities, delay = 0 }) {
  const responsibilityText = responsibilities ?? roleResponsibilities[role] ?? ''

  return (
    <Reveal delay={delay} className="group/card">
      <div className="overflow-hidden rounded-xl2 border border-brand-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cardHover">
        <div
          className="group/photo relative aspect-[4/5] w-full bg-brand-mist [perspective:1200px] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-yellow"
          tabIndex={0}
          aria-label={`View ${role} responsibilities for ${name}`}
        >
          <div className="absolute inset-0 transition-transform duration-[900ms] [transform-style:preserve-3d] [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] group-hover/photo:[transform:rotateY(180deg)] group-focus/photo:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 overflow-hidden [backface-visibility:hidden]">
              {image ? (
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-cover object-top transition-transform duration-[900ms] group-hover/photo:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-brand-slate/40">
                  <User className="h-14 w-14" strokeWidth={1.25} />
                  <span className="text-xs font-display font-medium uppercase tracking-[0.14em] text-brand-slate/50">
                    Photo coming soon
                  </span>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-yellow" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-center bg-brand-ink px-5 py-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-brand-yellow">
                Key Responsibilities
              </p>
              <p className="mt-4 text-sm leading-6 text-white/85">
                {responsibilityText}
              </p>
            </div>
          </div>
        </div>
        <div className="px-6 py-5">
          <h3 className="font-display text-xl font-semibold leading-tight text-brand-ink transition-colors duration-200 group-hover/card:text-brand-yellowDark">
            {name}
          </h3>
          {role && (
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-yellowDark">
              {role}
            </p>
          )}
        </div>
      </div>
    </Reveal>
  )
}

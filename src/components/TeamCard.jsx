import { User } from 'lucide-react'
import Reveal from './Reveal'

/**
 * Team member card. The photo area is intentionally left as an empty
 * placeholder — real headshots will be dropped in later. Do not replace
 * the placeholder with a stock/AI-generated photo.
 */
export default function TeamCard({ name, role, delay = 0 }) {
  return (
    <Reveal delay={delay} className="group">
      <div className="overflow-hidden rounded-xl2 border border-brand-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cardHover">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-mist">
          {/* Empty placeholder — real photo to be added later */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 border-b border-dashed border-brand-line/0 text-brand-slate/40">
            <User className="h-14 w-14" strokeWidth={1.25} />
            <span className="text-xs font-display font-medium uppercase tracking-[0.14em] text-brand-slate/50">
              Photo coming soon
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand-yellow transition-transform duration-300 group-hover:scale-x-100" />
        </div>
        <div className="p-6">
          <h3 className="font-display text-lg font-semibold text-brand-ink">{name}</h3>
          <p className="mt-1 text-sm font-medium text-brand-yellowDark">{role}</p>
        </div>
      </div>
    </Reveal>
  )
}

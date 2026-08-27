import Reveal from './Reveal'

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <Reveal delay={delay} className="group h-full">
      <div className="flex h-full flex-col rounded-xl2 border border-brand-line bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-yellow hover:shadow-cardHover">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellowSoft text-brand-ink transition-colors duration-300 group-hover:bg-brand-yellow">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </div>
        <h3 className="mb-3 font-display text-xl font-semibold text-brand-ink">{title}</h3>
        <p className="text-[15px] leading-relaxed text-brand-slate">{description}</p>
      </div>
    </Reveal>
  )
}

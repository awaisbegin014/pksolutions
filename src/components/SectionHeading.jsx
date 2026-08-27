import Reveal from './Reveal'

/**
 * Shared section heading. The small dot before the eyebrow label echoes
 * the dot above the "Y" in the wordmark — the recurring signature mark
 * used throughout the site instead of generic numbered badges.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}) 

{
  const alignClasses =
  align === 'center'
    ? 'items-center text-center mx-auto'
    : align === 'right'
    ? 'items-end text-right ml-auto'
    : 'items-start text-left'

  return (
    <Reveal className={`flex flex-col ${alignClasses} max-w-2xl`}>
      {eyebrow && (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-4 py-1.5 text-xs font-nav font-semibold uppercase tracking-[0.14em] text-brand-ink">          <span className="h-2 w-2 rounded-full bg-brand-yellow" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display font-semibold leading-[1.12] tracking-tight text-3xl sm:text-4xl lg:text-[2.75rem] ${light ? 'text-white' : 'text-brand-ink'
          }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? 'text-white/70' : 'text-brand-slate'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}

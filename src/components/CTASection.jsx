import Reveal from './Reveal'
import Button from './Button'

export default function CTASection({
  mode = 'contact',
  eyebrow,
  title,
  description,
  bgClassName = 'bg-white',
  paddingClassName = 'py-20 sm:py-24',
  showTeamButton = true,
  showContactButton = true,
}) {
  const isCareers = mode === 'careers'

  return (
    <section className={bgClassName}>
      <div className={'mx-auto max-w-5xl px-6 lg:px-8 ' + paddingClassName}>
        <Reveal className="flex flex-col items-center text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-4 py-1.5 text-xs font-nav font-semibold uppercase tracking-[0.14em] text-brand-ink">
            <span className="h-2 w-2 rounded-full bg-brand-yellow" />
            {eyebrow || (isCareers ? 'We are growing' : "Let's talk")}
          </span>
          <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight text-brand-ink sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 max-w-xl text-base text-brand-slate sm:text-lg">{description}</p>
          )}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            {showTeamButton && (
              <Button to="/careers" variant="hero">
                {isCareers ? 'View Open Roles' : 'Join Our Team'}
              </Button>
            )}
            {showContactButton && (
              <Button to="/contact" variant="secondary">
                {isCareers ? 'Contact Us' : 'Get In Touch'}
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
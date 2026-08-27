import { ChevronDown } from 'lucide-react'

export default function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-brand-mist">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
      >
        <span className="font-display text-lg font-semibold text-brand-ink sm:text-xl">{q}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <ChevronDown className="h-4 w-4 text-brand-ink" strokeWidth={2.5} />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-base leading-relaxed text-brand-slate">{a}</p>
        </div>
      </div>
    </div>
  )
}
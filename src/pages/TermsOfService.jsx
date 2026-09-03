import Reveal from '../components/Reveal'

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: [
      'By accessing or using the Yellow Solutions website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.',
    ],
  },
  {
    title: '2. Services',
    body: [
      'The Yellow Solutions provides digital marketing, web development, application development, brand identity, social media growth, and paid advertising services. The specific scope, deliverables, and timelines for any engagement will be agreed separately in a proposal or contract before work begins.',
    ],
  },
  {
    title: '3. Client Responsibilities',
    body: [
      'Clients agree to provide accurate information, timely feedback, and any assets or access required for us to deliver the agreed services. Delays in providing these may affect project timelines.',
    ],
  },
  {
    title: '4. Payments',
    body: [
      'Payment terms, including deposits, milestones, and due dates, will be outlined in the individual project agreement or invoice. Late payments may result in a pause of ongoing work until outstanding amounts are settled.',
    ],
  },
  {
    title: '5. Intellectual Property',
    body: [
      'Upon full payment, clients receive ownership of the final deliverables created specifically for their project, unless otherwise agreed in writing. The Yellow Solutions retains the right to showcase completed work in its portfolio and marketing materials, unless a client requests otherwise.',
    ],
  },
  {
    title: '6. Limitation of Liability',
    body: [
      'To the fullest extent permitted by law, The Yellow Solutions shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services.',
    ],
  },
  {
    title: '7. Termination',
    body: [
      'Either party may terminate an ongoing engagement with written notice, subject to the terms agreed in the relevant project contract. Fees for work completed up to the point of termination remain payable.',
    ],
  },
  {
    title: '8. Changes to These Terms',
    body: [
      'We may revise these Terms of Service from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the updated terms.',
    ],
  },
  {
    title: '9. Contact Us',
    body: [
      'If you have any questions about these Terms of Service, please contact us at hello@theyellowsolutions.pk or A4, Gulistan-e-Johar, Block 04, Karachi.',
    ],
  },
]

export default function TermsOfService() {
  return (
    <>
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-4 py-1.5 text-xs font-nav font-semibold uppercase tracking-[0.14em] text-brand-ink">
              <span className="h-2 w-2 rounded-full bg-brand-yellow" />
              Legal
            </span>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-brand-ink sm:text-5xl">
              Terms of <span className="text-brand-yellow">Service</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-slate sm:text-lg">
              The terms that govern use of The Yellow Solutions website and the services we provide.
            </p>
            <p className="mt-4 text-sm text-brand-slate">Last updated: September 2026</p>
          </Reveal>

          <div className="mt-12 flex flex-col gap-10">
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={i * 40}>
                <h2 className="font-display text-xl font-bold tracking-tight text-brand-ink">
                  {section.title}
                </h2>
                <div className="mt-3 flex flex-col gap-3">
                  {section.body.map((paragraph, j) => (
                    <p key={j} className="text-base leading-relaxed text-brand-slate">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
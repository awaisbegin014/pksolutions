import Reveal from '../components/Reveal'

const sections = [
  {
    title: '1. Information We Collect',
    body: [
      'We collect information you provide directly to us, such as your name, email address, phone number, and any details you share through our contact form or when you enquire about our services.',
      'We may also automatically collect certain information when you visit our website, including your IP address, browser type, device information, and pages you view, through cookies and similar technologies.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    body: [
      'We use the information we collect to respond to your enquiries, provide and improve our services, communicate with you about projects, and send occasional updates about our work — only where you have agreed to receive them.',
      'We do not sell, rent, or trade your personal information to third parties for their marketing purposes.',
    ],
  },
  {
    title: '3. Cookies',
    body: [
      'Our website may use cookies to improve your browsing experience and understand how visitors interact with our site. You can disable cookies through your browser settings, though some features of the site may not function as intended.',
    ],
  },
  {
    title: '4. Data Sharing',
    body: [
      'We may share your information with trusted third-party service providers who help us operate our website and deliver our services (such as hosting or analytics providers), and only to the extent necessary for them to perform those services.',
      'We may also disclose information if required to do so by law or in response to valid requests by public authorities.',
    ],
  },
  {
    title: '5. Data Security',
    body: [
      'We take reasonable technical and organizational measures to protect the information we hold from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: '6. Your Rights',
    body: [
      'You may request access to, correction of, or deletion of the personal information we hold about you at any time by contacting us using the details below.',
    ],
  },
  {
    title: '7. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.',
    ],
  },
  {
    title: '8. Contact Us',
    body: [
      'If you have any questions about this Privacy Policy, please contact us at hello@theyellowsolutions.pk or A4, Gulistan-e-Johar, Block 04, Karachi.',
    ],
  },
]

export default function PrivacyPolicy() {
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
              Privacy <span className="text-brand-yellow">Policy</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-slate sm:text-lg">
              How The Yellow Solutions collects, uses, and protects information submitted through our website.
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
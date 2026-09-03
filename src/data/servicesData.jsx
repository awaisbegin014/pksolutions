import { Megaphone, Code2, Smartphone, Share2, Target } from 'lucide-react'

/* =========================================================
   ILLUSTRATIONS
   One detailed custom SVG per service, in the same visual
   language as About.jsx (soft yellow backdrop circle, ink +
   yellow shapes, dashed connectors, floating dots, gentle
   float / spin animation).
   ========================================================= */

function DigitalMarketingIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <circle cx="200" cy="150" r="130" fill="#FFF3D0" />

      {/* Broadcast arcs from megaphone */}
      <g stroke="#1B1B1D" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.45">
        <path d="M250 140 C262 122 262 158 250 176" />
        <path d="M268 122 C288 100 288 198 268 220" />
        <path d="M286 104 C314 76 314 222 286 240" />
      </g>

      {/* Megaphone */}
      <g className="animate-[float_5s_ease-in-out_infinite]">
        <rect x="96" y="128" width="26" height="42" rx="7" fill="#1B1B1D" />
        <path d="M122 122 L205 96 V202 L122 176 Z" fill="#1B1B1D" />
        <path d="M205 96 L252 80 V218 L205 202 Z" fill="#FFC107" />
        <path d="M132 178 L141 213 C142 218 149 221 154 218 L154 184 Z" fill="#1B1B1D" />
      </g>

      {/* Email chip */}
      <g className="animate-[float_4.4s_ease-in-out_-1s_infinite]">
        <rect x="52" y="60" width="56" height="40" rx="8" fill="#1B1B1D" />
        <path d="M56 66 L80 84 L104 66" stroke="#FFC107" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Search / SEO chip */}
      <g className="animate-[float_4.8s_ease-in-out_-2s_infinite]">
        <circle cx="320" cy="200" r="20" fill="#1B1B1D" />
        <circle cx="316" cy="196" r="9" fill="none" stroke="#FFC107" strokeWidth="3.5" />
        <line x1="322" y1="202" x2="330" y2="210" stroke="#FFC107" strokeWidth="3.5" strokeLinecap="round" />
      </g>

      {/* Dashed connectors */}
      <g stroke="#1B1B1D" strokeWidth="2" strokeDasharray="5 6" opacity="0.35">
        <path d="M108 78 C130 85 150 100 168 112" />
        <path d="M300 190 C285 175 268 168 250 165" />
      </g>

      {/* Rising trend line */}
      <g className="animate-[float_4.2s_ease-in-out_-1.5s_infinite]">
        <path
          d="M85 245 L128 222 L170 234 L212 200"
          stroke="#1B1B1D"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M212 200 L195 198 M212 200 L209 217" stroke="#1B1B1D" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g fill="#FFC107">
        <circle cx="70" cy="230" r="4" />
        <circle cx="340" cy="120" r="4" />
      </g>
      <g fill="#1B1B1D" opacity="0.4">
        <circle cx="88" cy="42" r="3" />
        <circle cx="345" cy="150" r="3" />
      </g>
    </svg>
  )
}

function WebDevelopmentIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <circle cx="200" cy="150" r="130" fill="#FFF3D0" />

      {/* Browser window */}
      <g className="animate-[float_5s_ease-in-out_infinite]">
        <rect x="85" y="82" width="230" height="150" rx="12" fill="#1B1B1D" />
        <rect x="85" y="82" width="230" height="26" rx="12" fill="#1B1B1D" />
        <circle cx="104" cy="95" r="4" fill="#FFC107" />
        <circle cx="120" cy="95" r="4" fill="#FFF3D0" />
        <circle cx="136" cy="95" r="4" fill="#FFF3D0" />
        <rect x="97" y="120" width="204" height="98" rx="6" fill="#FFF3D0" />

        {/* sidebar */}
        <rect x="109" y="132" width="34" height="74" rx="4" fill="#1B1B1D" opacity="0.85" />
        <rect x="116" y="142" width="20" height="5" rx="2.5" fill="#FFC107" />
        <rect x="116" y="154" width="20" height="5" rx="2.5" fill="#FFF3D0" opacity="0.6" />
        <rect x="116" y="166" width="20" height="5" rx="2.5" fill="#FFF3D0" opacity="0.6" />

        {/* code lines */}
        <rect x="155" y="136" width="60" height="7" rx="3.5" fill="#FFC107" />
        <rect x="155" y="152" width="95" height="7" rx="3.5" fill="#1B1B1D" opacity="0.75" />
        <rect x="155" y="168" width="75" height="7" rx="3.5" fill="#1B1B1D" opacity="0.4" />
        <rect x="155" y="184" width="110" height="7" rx="3.5" fill="#FFC107" />
        <rect x="155" y="200" width="55" height="7" rx="3.5" fill="#1B1B1D" opacity="0.4" />
      </g>

      {/* Code bracket accents */}
      <g className="animate-[float_4.4s_ease-in-out_-1s_infinite]">
        <path d="M348 118 L368 148 L348 178" stroke="#1B1B1D" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g className="animate-[float_4.2s_ease-in-out_-0.5s_infinite]">
        <path d="M52 118 L32 148 L52 178" stroke="#FFC107" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Cursor click ripple */}
      <g className="animate-[float_4.6s_ease-in-out_-1.8s_infinite]">
        <circle cx="270" cy="245" r="14" fill="none" stroke="#1B1B1D" strokeWidth="3" opacity="0.3" />
        <circle cx="270" cy="245" r="7" fill="#FFC107" />
        <path d="M270 245 L288 262 L282 264 L286 272 L279 274 L275 265 L270 271 Z" fill="#1B1B1D" />
      </g>

      {/* Gear */}
      <g className="animate-[spin_12s_linear_infinite]" transform="translate(95 245)">
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <rect key={deg} x="-4" y="-22" width="8" height="10" rx="2" fill="#1B1B1D" transform={'rotate(' + deg + ')'} />
        ))}
        <circle r="15" fill="#FFC107" />
        <circle r="6" fill="#1B1B1D" />
      </g>

      <g fill="#1B1B1D" opacity="0.4">
        <circle cx="325" cy="65" r="3" />
        <circle cx="70" cy="80" r="3" />
      </g>
    </svg>
  )
}

function ApplicationDevelopmentIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <circle cx="200" cy="150" r="130" fill="#FFF3D0" />

      {/* Guide ring */}
      <circle cx="200" cy="150" r="98" fill="none" stroke="#1B1B1D" strokeWidth="2" strokeDasharray="6 8" opacity="0.25" />

      {/* Phone frame */}
      <g className="animate-[float_5s_ease-in-out_infinite]">
        <rect x="150" y="58" width="100" height="188" rx="20" fill="#1B1B1D" />
        <rect x="158" y="76" width="84" height="150" rx="6" fill="#FFF3D0" />
        <rect x="185" y="66" width="30" height="5" rx="2.5" fill="#1B1B1D" opacity="0.4" />
        <circle cx="200" cy="236" r="5" fill="#FFC107" />

        {/* app icon grid on screen */}
        <rect x="166" y="86" width="30" height="30" rx="8" fill="#FFC107" />
        <rect x="204" y="86" width="30" height="30" rx="8" fill="#1B1B1D" opacity="0.85" />
        <rect x="166" y="124" width="30" height="30" rx="8" fill="#1B1B1D" opacity="0.4" />
        <rect x="204" y="124" width="30" height="30" rx="8" fill="#FFC107" />
        <rect x="166" y="162" width="68" height="10" rx="5" fill="#1B1B1D" opacity="0.5" />
        <rect x="166" y="178" width="45" height="10" rx="5" fill="#1B1B1D" opacity="0.3" />
      </g>

      {/* Code brackets */}
      <g className="animate-[float_4.4s_ease-in-out_-1s_infinite]">
        <path d="M78 120 L58 150 L78 180" stroke="#1B1B1D" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g className="animate-[float_4.2s_ease-in-out_-0.5s_infinite]">
        <path d="M322 120 L342 150 L322 180" stroke="#FFC107" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Download / install badge */}
      <g className="animate-[float_4.6s_ease-in-out_-1.6s_infinite]">
        <circle cx="292" cy="88" r="24" fill="#1B1B1D" />
        <path d="M292 76 L292 96 M283 88 L292 98 L301 88" stroke="#FFC107" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Gear (dev tooling) */}
      <g className="animate-[spin_12s_linear_infinite]" transform="translate(100 238)">
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <rect key={deg} x="-4" y="-22" width="8" height="10" rx="2" fill="#1B1B1D" transform={'rotate(' + deg + ')'} />
        ))}
        <circle r="15" fill="#FFC107" />
        <circle r="6" fill="#1B1B1D" />
      </g>

      {/* Notification bubble */}
      <g className="animate-[float_4.8s_ease-in-out_-2s_infinite]">
        <rect x="52" y="52" width="54" height="36" rx="10" fill="#1B1B1D" />
        <path d="M62 88 L62 100 L76 88 Z" fill="#1B1B1D" />
        <circle cx="68" cy="70" r="5" fill="#FFC107" />
        <rect x="80" y="66" width="18" height="6" rx="3" fill="#FFF3D0" opacity="0.7" />
      </g>

      <g fill="#FFC107">
        <circle cx="330" cy="222" r="4" />
      </g>
      <g fill="#1B1B1D" opacity="0.4">
        <circle cx="75" cy="222" r="3" />
        <circle cx="340" cy="60" r="3" />
      </g>
    </svg>
  )
}

function SocialMediaGrowthIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <circle cx="200" cy="150" r="130" fill="#FFF3D0" />

      {/* Phone */}
      <g className="animate-[float_5s_ease-in-out_infinite]">
        <rect x="160" y="70" width="80" height="160" rx="16" fill="#1B1B1D" />
        <rect x="168" y="88" width="64" height="106" rx="6" fill="#FFF3D0" />
        <circle cx="200" cy="216" r="6" fill="#FFC107" />

        {/* grid feed inside screen */}
        <rect x="176" y="96" width="21" height="21" rx="4" fill="#FFC107" />
        <rect x="200" y="96" width="21" height="21" rx="4" fill="#1B1B1D" opacity="0.7" />
        <rect x="176" y="120" width="21" height="21" rx="4" fill="#1B1B1D" opacity="0.4" />
        <rect x="200" y="120" width="21" height="21" rx="4" fill="#FFC107" />
        <rect x="176" y="150" width="45" height="6" rx="3" fill="#1B1B1D" opacity="0.5" />
        <rect x="176" y="164" width="30" height="6" rx="3" fill="#1B1B1D" opacity="0.3" />
      </g>

      {/* Like bubble */}
      <g className="animate-[float_4.2s_ease-in-out_-0.8s_infinite]">
        <circle cx="290" cy="105" r="26" fill="#1B1B1D" />
        <path
          d="M281 100 C281 94 288 90 292 96 C296 90 303 94 303 100 C303 108 292 116 292 116 C292 116 281 108 281 100Z"
          fill="#FFC107"
        />
      </g>

      {/* Comment bubble */}
      <g className="animate-[float_4.6s_ease-in-out_-1.6s_infinite]">
        <rect x="60" y="88" width="56" height="38" rx="10" fill="#1B1B1D" />
        <path d="M78 126 L78 138 L92 126 Z" fill="#1B1B1D" />
        <rect x="72" y="100" width="32" height="5" rx="2.5" fill="#FFC107" />
        <rect x="72" y="110" width="20" height="5" rx="2.5" fill="#FFF3D0" opacity="0.7" />
      </g>

      {/* Network nodes */}
      <g stroke="#1B1B1D" strokeWidth="2.5" strokeDasharray="5 7" opacity="0.4">
        <line x1="200" y1="150" x2="112" y2="200" />
        <line x1="200" y1="150" x2="300" y2="205" />
      </g>
      <g>
        <circle cx="112" cy="200" r="9" fill="#1B1B1D" className="animate-[float_4s_ease-in-out_-1.5s_infinite]" />
        <circle cx="300" cy="205" r="8" fill="#FFC107" className="animate-[float_4.3s_ease-in-out_-1s_infinite]" />
      </g>

      {/* Growth arrow */}
      <g className="animate-[float_4.6s_ease-in-out_-1.2s_infinite]">
        <path d="M78 250 L112 228 L145 240 L178 210" stroke="#1B1B1D" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M178 210 L162 209 M178 210 L176 226" stroke="#1B1B1D" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g fill="#FFC107">
        <circle cx="330" cy="130" r="4" />
      </g>
      <g fill="#1B1B1D" opacity="0.4">
        <circle cx="70" cy="70" r="3" />
      </g>
    </svg>
  )
}

function PaidAdvertisingIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <circle cx="200" cy="150" r="130" fill="#FFF3D0" />

      {/* Target */}
      <g className="animate-[float_5s_ease-in-out_infinite]">
        <circle cx="195" cy="150" r="65" fill="#1B1B1D" />
        <circle cx="195" cy="150" r="46" fill="#FFF3D0" />
        <circle cx="195" cy="150" r="28" fill="#FFC107" />
        <circle cx="195" cy="150" r="11" fill="#1B1B1D" />
      </g>

      {/* Arrow hitting target */}
      <g className="animate-[float_4.2s_ease-in-out_-1s_infinite]">
        <path d="M85 240 L188 155" stroke="#1B1B1D" strokeWidth="6" strokeLinecap="round" />
        <path d="M62 258 L85 240 L94 265 Z" fill="#1B1B1D" />
        <path d="M85 240 L110 236 M85 240 L94 216" stroke="#1B1B1D" strokeWidth="5" strokeLinecap="round" />
      </g>

      {/* Bar chart */}
      <g className="animate-[float_4.6s_ease-in-out_-1.6s_infinite]">
        <rect x="292" y="188" width="18" height="34" rx="4" fill="#1B1B1D" />
        <rect x="316" y="162" width="18" height="60" rx="4" fill="#FFC107" />
        <rect x="340" y="130" width="18" height="92" rx="4" fill="#1B1B1D" />
      </g>

      {/* Ad tag */}
      <g className="animate-[float_4.4s_ease-in-out_-0.6s_infinite]">
        <rect x="255" y="55" width="52" height="34" rx="8" fill="#1B1B1D" />
        <text x="281" y="77" textAnchor="middle" fontSize="15" fontWeight="700" fill="#FFC107" fontFamily="sans-serif">
          AD
        </text>
        <path d="M255 72 L240 82 L255 82 Z" fill="#1B1B1D" />
      </g>

      {/* Coin */}
      <g className="animate-[float_4.8s_ease-in-out_-2s_infinite]">
        <circle cx="82" cy="88" r="22" fill="#FFC107" stroke="#1B1B1D" strokeWidth="3.5" />
        <text x="82" y="94" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1B1B1D" fontFamily="sans-serif">
          $
        </text>
      </g>

      <g fill="#1B1B1D" opacity="0.4">
        <circle cx="330" cy="245" r="3" />
        <circle cx="95" cy="200" r="3" />
      </g>
    </svg>
  )
}

/* =========================================================
   DATA
   Single source of truth for the Services page, the service
   detail pages, the navbar hover dropdown, and the footer.
   ========================================================= */

export const services = [
  {
    id: 'digital-marketing',
    icon: Megaphone,
    Illustration: DigitalMarketingIllustration,
    title: 'Digital Marketing',
    tagline: 'Full-funnel campaigns that turn attention into revenue.',
    description:
      'Full-funnel campaigns across search, social and content that turn attention into revenue. We plan, launch and optimize every touchpoint so your brand shows up where your customers already are — and keeps them coming back.',
    points: [
      'SEO & content strategy',
      'Email & marketing automation',
      'Conversion rate optimization',
      'Analytics & reporting dashboards',
    ],
    idealFor: [
      'Businesses that need a steady stream of qualified leads',
      'Brands with a website that isn\u2019t converting traffic yet',
      'Teams that want one dashboard for every marketing channel',
    ],
  },
  {
    id: 'web-development',
    icon: Code2,
    Illustration: WebDevelopmentIllustration,
    title: 'Web Development',
    tagline: 'Fast, responsive websites and web apps that convert.',
    description:
      'Fast, responsive websites and web apps built to convert visitors into customers. We focus on clean design, solid performance and a smooth user experience across every device, backed by code that is easy to maintain and scale.',
    points: [
      'Custom, responsive websites',
      'E-commerce & booking integrations',
      'Speed & technical SEO optimization',
      'Ongoing support & maintenance',
    ],
    idealFor: [
      'Businesses launching a new site or rebuilding an outdated one',
      'Brands that need e-commerce or booking built in',
      'Teams that want a site that is fast on every device',
    ],
  },
  {
    id: 'application-development',
    icon: Smartphone,
    Illustration: ApplicationDevelopmentIllustration,
    title: 'Application Development',
    tagline: 'Mobile apps built to perform, from prototype to launch.',
    description:
      'Native and cross-platform mobile apps built for performance, from first prototype to app store launch. We design intuitive interfaces and build on solid, scalable foundations, so your app works as well on day one as it does after a million downloads.',
    points: [
      'iOS & Android native development',
      'Cross-platform apps (React Native / Flutter)',
      'UI/UX design & interactive prototyping',
      'App Store & Play Store deployment',
    ],
    idealFor: [
      'Startups turning a product idea into a working app',
      'Businesses that need one codebase for iOS and Android',
      'Teams that need ongoing app support after launch',
    ],
  },
  {
    id: 'social-media-growth',
    icon: Share2,
    Illustration: SocialMediaGrowthIllustration,
    title: 'Social Media Growth',
    tagline: 'Content and community strategy that builds real audiences.',
    description:
      'Content and community strategy that builds a loyal, engaged audience around your brand. We plan calendars, create content and track what actually drives engagement, so your following grows into real business impact.',
    points: [
      'Content calendars & creative production',
      'Community management',
      'Influencer & partnership outreach',
      'Performance tracking & optimization',
    ],
    idealFor: [
      'Brands that want a consistent, on-strategy posting schedule',
      'Businesses that need help turning followers into customers',
      'Teams without the bandwidth to manage socials in-house',
    ],
  },
  {
    id: 'paid-advertising',
    icon: Target,
    Illustration: PaidAdvertisingIllustration,
    title: 'Paid Advertising',
    tagline: 'Data-driven ad management focused on measurable ROI.',
    description:
      'Data-driven ad management across Meta, Google and TikTok focused on measurable ROI. We test, optimize and scale campaigns so every rupee spent works harder, with full visibility into what is driving results.',
    points: [
      'Meta, Google & TikTok ad management',
      'Audience research & targeting',
      'A/B testing & creative iteration',
      'ROI-focused budget optimization',
    ],
    idealFor: [
      'Businesses that want faster results than organic alone',
      'Brands with a budget that needs to work harder',
      'Teams that want clear reporting on ad spend and return',
    ],
  },
]

export function getServiceById(id) {
  return services.find((service) => service.id === id)
}
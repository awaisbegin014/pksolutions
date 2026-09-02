import { useState } from "react";
import { Link } from "react-router-dom";

import {
  BriefcaseBusiness,
  ChevronDown,
  ExternalLink,
  GraduationCap,
  Target,
} from "lucide-react";

import Reveal from "../components/Reveal";
import { jobs } from "../data/jobsData";

const faqs = [
  {
    question: "How to apply at HexaClicks?",
    answer:
      "You can fill in the application form for the vacancies you qualify for and are interested in. Our team will review your application and contact shortlisted candidates.",
  },
  {
    question: "Do you offer training before starting?",
    answer:
      "Yes. We provide onboarding and practical guidance so you can understand our workflow, tools, clients and expectations before taking ownership of your work.",
  },
  {
    question: "What roles can fresh graduates apply for?",
    answer:
      "Fresh graduates can apply for internships, junior marketing positions, sales development, lead generation and other entry-level opportunities when available.",
  },
  {
    question: "How long does it take to hear back after applying?",
    answer:
      "Applications are reviewed on a rolling basis. If your profile is shortlisted, our team will contact you regarding the next stage of the hiring process.",
  },
  {
    question: "What are your work culture and professional community like?",
    answer:
      "We believe in collaboration, learning, accountability and open communication. Our team works together to solve problems, share ideas and continuously improve.",
  },
  {
    question: "What benefits will I get when working at HexaClicks?",
    answer:
      "You will get opportunities to learn, work on real client projects, develop professional skills, receive mentorship and grow within a collaborative digital environment.",
  },
];

/* =========================================================
   HERO ANIMATED ILLUSTRATION
========================================================= */

function HeroIllustration() {
  return (
    <div
      className="
        relative
        mx-auto
        w-full
        max-w-[1000px]
        overflow-hidden
        aspect-[23/10]
        sm:aspect-[28/10]
        md:aspect-[1200/350]
      "
    >
      <svg
        viewBox="0 0 1200 350"
        className="
          absolute
          left-1/2
          top-1/2
          h-full
          w-auto
          -translate-x-1/2
          -translate-y-1/2
        "
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="heroShadow"
            x="-30%"
            y="-30%"
            width="160%"
            height="160%"
          >
            <feDropShadow
              dx="0"
              dy="7"
              stdDeviation="7"
              floodOpacity="0.10"
            />
          </filter>
        </defs>

        {/* WAVY DOTTED PATH */}

        <path
          d="
            M145 65
            C205 65 235 90 270 135
            C300 175 350 180 405 175
            C470 170 510 105 565 85
            C625 63 675 85 725 130
            C770 170 820 180 875 175
            C925 170 960 125 990 85
            C1025 40 1060 35 1085 30
          "
          stroke="#E5A900"
          strokeWidth="4"
          strokeDasharray="8 10"
          strokeLinecap="round"
        />

        {/* GRAPH CARD */}

        <g
          filter="url(#heroShadow)"
          className="animate-[float_5s_ease-in-out_-2s_infinite]"
        >
          <rect
            x="300"
            y="160"
            width="155"
            height="88"
            rx="12"
            fill="white"
          />

          <path
            d="
              M318 226
              C343 210 353 182 373 200
              C389 214 396 177 415 186
              C428 192 437 170 440 167
            "
            stroke="#E5A900"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <path
            d="M318 229H439"
            stroke="#E5E5E2"
            strokeWidth="2"
          />

          <circle
            cx="373"
            cy="200"
            r="6"
            fill="#FFC107"
          />
        </g>

        {/* CHECK CARD */}

        <g
          filter="url(#heroShadow)"
          className="animate-[float_4.5s_ease-in-out_-1.5s_infinite]"
        >
          <rect
            x="559"
            y="40"
            width="82"
            height="82"
            rx="13"
            fill="white"
          />

          <circle
            cx="600"
            cy="81"
            r="20"
            fill="#FFF3D0"
          />

          <path
            d="M590 81L597 88L612 71"
            stroke="#E5A900"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* ANALYTICS CARD */}

        <g
          filter="url(#heroShadow)"
          className="animate-[float_5.2s_ease-in-out_-3s_infinite]"
        >
          <rect
            x="820"
            y="160"
            width="170"
            height="82"
            rx="12"
            fill="white"
          />

          {[843, 866, 889, 912, 935, 958].map((x, i) => (
            <path
              key={x}
              d={`M${x} 219V${203 - (i % 3) * 9}`}
              stroke={i % 2 === 0 ? "#36373B" : "#E5A900"}
              strokeWidth="7"
              strokeLinecap="round"
            />
          ))}
        </g>

        {/* CONNECTION DOTS */}

        <circle
          cx="145"
          cy="65"
          r="6"
          fill="#FFC107"
        />

        <circle
          cx="405"
          cy="175"
          r="6"
          fill="#FFC107"
        />

        <circle
          cx="565"
          cy="85"
          r="6"
          fill="#FFC107"
        />

        <circle
          cx="875"
          cy="175"
          r="6"
          fill="#FFC107"
        />

        <circle
          cx="1085"
          cy="30"
          r="6"
          fill="#FFC107"
        />
        </svg>
    </div>
  );
}

/* =========================================================
   TEAM ILLUSTRATION
========================================================= */

function TeamIllustration() {
  return (
    <div className="mx-auto w-full max-w-[520px] aspect-[600/380]">
      <svg
        viewBox="0 0 600 380"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="300"
          cy="355"
          rx="215"
          ry="17"
          fill="#E6E6E3"
        />

        {/* Desk */}

        <rect
          x="90"
          y="205"
          width="270"
          height="25"
          rx="4"
          fill="#E2E2DE"
        />

        <path
          d="M110 230L98 344"
          stroke="#77787B"
          strokeWidth="9"
          strokeLinecap="round"
        />

        <path
          d="M340 230L355 344"
          stroke="#77787B"
          strokeWidth="9"
          strokeLinecap="round"
        />

        {/* Monitor */}

        <rect
          x="155"
          y="112"
          width="100"
          height="76"
          rx="7"
          fill="#303136"
        />

        <rect
          x="164"
          y="121"
          width="82"
          height="58"
          rx="3"
          fill="#C5D5D8"
        />

        <path
          d="M205 188V203"
          stroke="#45464A"
          strokeWidth="7"
        />

        <rect
          x="179"
          y="202"
          width="52"
          height="6"
          rx="3"
          fill="#55565A"
        />

        {/* Person 1 */}

        <g className="animate-[float_5s_ease-in-out_infinite]">
          <circle
            cx="132"
            cy="128"
            r="24"
            fill="#D6A477"
          />

          <path
            d="
              M108 122
              C111 92 145 87 157 114
              C146 107 125 108 110 121Z
            "
            fill="#26272A"
          />

          <path
            d="
              M111 155
              C120 139 144 139 154 155
              L169 207
              H98
              L111 155Z
            "
            fill="#455B72"
          />

          <path
            d="M116 164L91 199"
            stroke="#D6A477"
            strokeWidth="9"
            strokeLinecap="round"
          />

          <path
            d="M149 164L175 197"
            stroke="#D6A477"
            strokeWidth="9"
            strokeLinecap="round"
          />

          <rect
            x="91"
            y="187"
            width="75"
            height="38"
            rx="4"
            fill="#333439"
          />

          <rect
            x="98"
            y="193"
            width="61"
            height="25"
            rx="2"
            fill="#C5D4D7"
          />
        </g>

        {/* Person 2 */}

        <g className="animate-[float_4.6s_ease-in-out_-1s_infinite]">
          <circle
            cx="255"
            cy="96"
            r="24"
            fill="#D6A477"
          />

          <path
            d="
              M231 91
              C235 61 271 60 280 88
              C266 81 248 82 233 93Z
            "
            fill="#25262A"
          />

          <path
            d="
              M230 127
              C241 111 268 111 280 127
              L292 205
              H216
              L230 127Z
            "
            fill="#FFC107"
          />

          <path
            d="M237 139L216 177"
            stroke="#D6A477"
            strokeWidth="9"
            strokeLinecap="round"
          />

          <path
            d="M274 139L298 177"
            stroke="#D6A477"
            strokeWidth="9"
            strokeLinecap="round"
          />

          <rect
            x="277"
            y="157"
            width="55"
            height="41"
            rx="5"
            fill="#333439"
          />

          <rect
            x="283"
            y="163"
            width="43"
            height="29"
            rx="2"
            fill="#C7D7DA"
          />
        </g>

        {/* Person 3 */}

        <g className="animate-[float_5.2s_ease-in-out_-2s_infinite]">
          <circle
            cx="375"
            cy="132"
            r="24"
            fill="#D6A477"
          />

          <path
            d="
              M350 127
              C354 97 389 94 400 121
              C389 114 367 114 351 128Z
            "
            fill="#292A2D"
          />

          <path
            d="
              M350 158
              C361 143 389 143 400 158
              L418 207
              H333
              L350 158Z
            "
            fill="#E8E8E4"
          />

          <path
            d="
              M364 158
              H388
              L397 205
              H354
              L364 158Z
            "
            fill="#8AA65D"
          />

          <path
            d="M356 166L327 201"
            stroke="#D6A477"
            strokeWidth="9"
            strokeLinecap="round"
          />

          <path
            d="M394 166L424 201"
            stroke="#D6A477"
            strokeWidth="9"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}

/* =========================================================
   OFFICE ILLUSTRATION
========================================================= */

function OfficeIllustration() {
  return (
    <div className="mx-auto w-full max-w-[540px] aspect-[600/390]">
      <svg
        viewBox="0 0 600 390"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="320"
          cy="364"
          rx="205"
          ry="17"
          fill="#E2E2DE"
        />

        {/* Desk */}

        <rect
          x="102"
          y="232"
          width="280"
          height="23"
          rx="4"
          fill="#DCDCD8"
        />

        <path
          d="M124 255L113 350"
          stroke="#6D6E72"
          strokeWidth="9"
          strokeLinecap="round"
        />

        <path
          d="M359 255L373 350"
          stroke="#6D6E72"
          strokeWidth="9"
          strokeLinecap="round"
        />

        {/* Computer */}

        <rect
          x="147"
          y="118"
          width="124"
          height="91"
          rx="7"
          fill="#2D2E32"
        />

        <rect
          x="157"
          y="128"
          width="104"
          height="70"
          rx="4"
          fill="#C2D1D4"
        />

        <path
          d="M208 209V226"
          stroke="#44454A"
          strokeWidth="7"
        />

        <rect
          x="180"
          y="225"
          width="57"
          height="6"
          rx="3"
          fill="#535459"
        />

        {/* Chair */}

        <path
          d="
            M386 205
            C418 185 467 199 474 230
            C478 251 463 270 440 271
            H394
            C373 271 359 258 360 239
            C361 225 371 213 386 205Z
          "
          fill="#C9A03F"
        />

        {/* Person */}

        <g className="animate-[float_4.8s_ease-in-out_infinite]">
          <circle
            cx="379"
            cy="120"
            r="29"
            fill="#D6A477"
          />

          <path
            d="
              M350 113
              C354 76 398 76 409 109
              C394 100 371 101 352 115Z
            "
            fill="#242529"
          />

          <path
            d="M368 142H391V158H368Z"
            fill="#D6A477"
          />

          <path
            d="
              M352 157
              C367 141 394 141 409 157
              L437 250
              H322
              L352 157Z
            "
            fill="#445A70"
          />

          <path
            d="
              M366 157
              L381 177
              L396 157
              L406 249
              H356
              L366 157Z
            "
            fill="#F4F4F0"
          />

          <path
            d="M356 169L321 220"
            stroke="#D6A477"
            strokeWidth="11"
            strokeLinecap="round"
          />

          <path
            d="M405 169L437 218"
            stroke="#D6A477"
            strokeWidth="11"
            strokeLinecap="round"
          />

          <path
            d="M350 249L334 334"
            stroke="#292A2E"
            strokeWidth="16"
            strokeLinecap="round"
          />

          <path
            d="M407 249L430 334"
            stroke="#292A2E"
            strokeWidth="16"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}

/* =========================================================
   CAREERS PAGE
========================================================= */

export default function Careers() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-white">
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-20
            h-80
            w-80
            -translate-x-1/2
            rounded-full
            bg-brand-yellow/10
            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-6
            lg:px-8
          "
        >

          {/* HEADING */}

          <div
            className="
              relative
              z-30
              flex
              items-center
              justify-center
              gap-2
              pt-8
              sm:gap-4
              sm:pt-10
              md:gap-6
              md:pt-12
              lg:gap-8
              lg:pt-16
            "
          >

            {/* BALLOON */}

            <div
              className="
                pointer-events-none
                shrink-0
                h-16
                w-16
                sm:h-20
                sm:w-20
                md:h-28
                md:w-28
                lg:h-36
                lg:w-36
              "
            >
              <svg
                viewBox="0 0 280 270"
                className="h-full w-full animate-[float_5.5s_ease-in-out_infinite]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="balloonHero"
                    x1="50"
                    y1="40"
                    x2="210"
                    y2="270"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFC107" />
                    <stop offset="1" stopColor="#E4A900" />
                  </linearGradient>

                  <filter
                    id="balloonShadow"
                    x="-30%"
                    y="-30%"
                    width="160%"
                    height="160%"
                  >
                    <feDropShadow
                      dx="0"
                      dy="7"
                      stdDeviation="7"
                      floodOpacity="0.10"
                    />
                  </filter>
                </defs>

                <path
                  d="
                    M75 145
                    C55 110 43 65 58 35
                    C72 7 106 -5 146 -5
                    C187 -5 220 8 234 35
                    C248 65 235 110 215 145
                    C200 171 178 183 146 183
                    C115 183 91 170 75 145Z
                  "
                  fill="url(#balloonHero)"
                />

                <path
                  d="M91 8C116 55 120 115 108 157"
                  stroke="white"
                  strokeWidth="15"
                  strokeLinecap="round"
                  opacity="0.9"
                />

                <path
                  d="M130 -10C148 45 154 115 148 178"
                  stroke="white"
                  strokeWidth="15"
                  strokeLinecap="round"
                  opacity="0.9"
                />

                <path
                  d="M169 -7C178 48 190 110 181 167"
                  stroke="white"
                  strokeWidth="15"
                  strokeLinecap="round"
                  opacity="0.9"
                />

                <path
                  d="M207 20C199 67 208 107 195 150"
                  stroke="white"
                  strokeWidth="15"
                  strokeLinecap="round"
                  opacity="0.9"
                />

                <path
                  d="M128 180L120 207M164 180L172 207"
                  stroke="#737477"
                  strokeWidth="3"
                />

                <rect
                  x="119"
                  y="203"
                  width="54"
                  height="34"
                  rx="5"
                  fill="white"
                  filter="url(#balloonShadow)"
                />

                <path
                  d="M146 211V228M138 219H154"
                  stroke="#E5A900"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* MAIN HEADING */}

            <Reveal className="min-w-0 flex-1 text-center">
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-brand-slate
                  sm:text-sm
                "
              >
                LET&apos;S CARVE OUT THE FUTURE IN DIGITAL
              </p>

              <h1
                className="
                  relative
                  z-30
                  mt-4
                  font-display
                  text-4xl
                  font-bold
                  leading-[1.08]
                  tracking-tight
                  text-brand-ink
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                <span className="text-brand-ink">
                  YOUR TALENT
                </span>

                <br />

                <span className="text-brand-yellow">
                  OUR NEXT CHAPTER
                </span>
              </h1>
            </Reveal>

            {/* ROCKET */}

            <div
              className="
                pointer-events-none
                shrink-0
                h-16
                w-20
                sm:h-20
                sm:w-24
                md:h-28
                md:w-32
                lg:h-36
                lg:w-40
              "
            >
              <svg
                viewBox="0 0 300 250"
                className="h-full w-full animate-[float_4s_ease-in-out_-1s_infinite]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="
                    M74 90
                    C125 45 200 43 258 79
                    L218 155
                    L136 164
                    L74 90Z
                  "
                  fill="#333438"
                />

                <circle
                  cx="187"
                  cy="95"
                  r="31"
                  fill="#F5F5F2"
                />

                <circle
                  cx="187"
                  cy="95"
                  r="21"
                  fill="#38393D"
                />

                <circle
                  cx="193"
                  cy="88"
                  r="6"
                  fill="#8A8B8F"
                />

                <path
                  d="M136 162L105 203L152 181"
                  fill="#E5A900"
                />

                <path
                  d="M219 151L253 184L222 112"
                  fill="#FFC107"
                />

                <path
                  d="
                    M106 150
                    C74 172 50 198 34 226
                    C66 214 95 199 123 176Z
                  "
                  fill="#FFC107"
                />

                <path
                  d="
                    M91 170
                    C73 184 60 199 49 213
                    C71 204 89 193 105 181Z
                  "
                  fill="#E5A900"
                />
              </svg>
            </div>
          </div>

          {/* HERO ILLUSTRATION */}

          <div
            className="
              relative
              z-10
              mt-2
              sm:mt-4
              lg:mt-5
            "
          >
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* =====================================================
          CAREERS INTRO
      ===================================================== */}

      <section className="bg-white py-12 sm:py-18">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            items-start
            gap-14
            px-6
            lg:grid-cols-2
            lg:gap-20
            lg:px-8
          "
        >

          {/* LEFT */}

          <Reveal>
            <div>
              <h2
                className="
                  font-display
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-brand-ink
                  sm:text-4xl
                  lg:text-[2.75rem]
                "
              >
                Careers at{" "}
                <span className="text-brand-yellow">
                  Yellow Solutions
                </span>
              </h2>

              <div className="mt-8">
                <TeamIllustration />
              </div>

              <p
                className="
                  mt-8
                  max-w-lg
                  text-base
                  leading-relaxed
                  text-brand-slate
                  sm:text-lg
                "
              >
                Imagine yourself working at one of the data focused
                digital marketing agencies, surrounded by teams and
                people who challenge you, support you, and inspire you
                to be extraordinary.
              </p>
            </div>
          </Reveal>

          {/* RIGHT */}

          <Reveal delay={120}>
            <div>
              <h2
                className="
                  font-display
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-brand-ink
                  sm:text-4xl
                  lg:text-[2.75rem]
                "
              >
                Where are{" "}
                <span className="text-brand-yellow">
                  you now?
                </span>
              </h2>

              <div className="mt-8">
                <OfficeIllustration />
              </div>

              <div className="mt-8">
                <p
                  className="
                    max-w-lg
                    text-base
                    leading-relaxed
                    text-brand-slate
                    sm:text-lg
                  "
                >
                  Start here and we&apos;ll show you what&apos;s next.
                </p>

                <p
                  className="
                    mt-4
                    max-w-lg
                    text-base
                    leading-relaxed
                    text-brand-slate
                    sm:text-lg
                  "
                >
                  We are a team of people who thrive in our unique
                  and flexible culture to make a real and lasting
                  difference to our people, clients and business.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          PROGRAM CARDS
      ===================================================== */}

      <section className="bg-[#FFFDF4] py-12 sm:py-18">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            gap-6
            px-6
            sm:grid-cols-2
            lg:grid-cols-3
            lg:px-8
          "
        >

          {/* INTERNSHIP */}

          <Reveal>
            <div
              className="
                group
                h-full
                rounded-xl2
                bg-white
                p-7
                shadow-[0_4px_22px_rgba(0,0,0,0.045)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]
                sm:p-8
              "
            >
              <div
                className="
                  mb-6
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  bg-brand-yellow
                  text-brand-ink
                  [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)]
                "
              >
                <GraduationCap
                  className="h-6 w-6"
                  strokeWidth={1.8}
                />
              </div>

              <h3
                className="
                  font-display
                  text-2xl
                  font-semibold
                  leading-tight
                  text-brand-ink
                "
              >
                Internship Program
              </h3>

              <p
                className="
                  mt-4
                  text-base
                  leading-relaxed
                  text-brand-slate
                "
              >
                Immerse yourself in the digital marketing industry
                with HexaClicks Internship Program. Gain hands-on
                experience and work on real projects.
              </p>
            </div>
          </Reveal>

          {/* MANAGEMENT */}

          <Reveal delay={80}>
            <div
              className="
                group
                h-full
                rounded-xl2
                bg-white
                p-7
                shadow-[0_4px_22px_rgba(0,0,0,0.045)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]
                sm:p-8
              "
            >
              <div
                className="
                  mb-6
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  bg-brand-yellow
                  text-brand-ink
                  [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)]
                "
              >
                <Target
                  className="h-6 w-6"
                  strokeWidth={1.8}
                />
              </div>

              <h3
                className="
                  font-display
                  text-2xl
                  font-semibold
                  leading-tight
                  text-brand-ink
                "
              >
                Management Trainee Program
              </h3>

              <p
                className="
                  mt-4
                  text-base
                  leading-relaxed
                  text-brand-slate
                "
              >
                Unlock your potential with HexaClicks&apos; Management
                Trainee Program. Develop leadership skills, gain
                practical experience and accelerate your career.
              </p>
            </div>
          </Reveal>

          {/* JOBS */}

          <Reveal delay={160}>
            <div
              className="
                group
                h-full
                rounded-xl2
                bg-white
                p-7
                shadow-[0_4px_22px_rgba(0,0,0,0.045)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]
                sm:p-8
              "
            >
              <div
                className="
                  mb-6
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  bg-brand-yellow
                  text-brand-ink
                  [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)]
                "
              >
                <BriefcaseBusiness
                  className="h-6 w-6"
                  strokeWidth={1.8}
                />
              </div>

              <h3
                className="
                  font-display
                  text-2xl
                  font-semibold
                  leading-tight
                  text-brand-ink
                "
              >
                Job Opportunities
              </h3>

              <p
                className="
                  mt-4
                  text-base
                  leading-relaxed
                  text-brand-slate
                "
              >
                Explore exciting opportunities at HexaClicks and
                join our dynamic team. Take the next step in your
                career across sales, business development and
                lead generation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          AVAILABLE JOB OPPORTUNITIES
      ===================================================== */}

      <section
        id="open-positions"
        className="bg-white py-12 sm:py-18"
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            lg:px-8
          "
        >
          <Reveal>
            <h2
              className="
                font-display
                text-3xl
                font-bold
                leading-tight
                tracking-tight
                text-brand-ink
                sm:text-4xl
                lg:text-[2.75rem]
              "
            >
              Available Job{" "}
              <span className="text-brand-yellow">
                Opportunities
              </span>
            </h2>
          </Reveal>

          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-x-14
              md:grid-cols-2
            "
          >
            {jobs.map((job, index) => (
              <Reveal
                key={job.slug}
                delay={index * 40}
              >
                <Link
                  to={`/careers/${job.slug}`}
                  className="
                    group
                    flex
                    min-h-[76px]
                    w-full
                    items-center
                    justify-between
                    gap-4
                    border-b
                    border-brand-line
                    py-4
                    transition-all
                    duration-200
                    hover:bg-[#FFFDF4]
                    hover:px-3
                  "
                >
                  <span
                    className="
                      flex
                      min-w-0
                      items-center
                      gap-4
                      text-base
                      font-semibold
                      text-brand-ink
                      sm:text-lg
                    "
                  >
                    <span
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        bg-brand-yellow
                        text-xs
                        font-bold
                        text-brand-ink
                        [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0">
                      {job.title}
                    </span>
                  </span>

                  <ExternalLink
                    className="
                      h-5
                      w-5
                      shrink-0
                      text-brand-yellow
                      transition-transform
                      duration-200
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      {/* FAQ */}
<section
  className="
    bg-white
    py-12
    sm:py-18
  "
>
  <div
    className="
      mx-auto
      max-w-7xl
      px-6
      lg:px-8
    "
  >
    <Reveal>
      <div className="text-center">
        <p
          className="
            font-nav
            text-xs
            font-semibold
            uppercase
            tracking-[0.14em]
            text-brand-slate
          "
        >
          FAQs
        </p>

        <h2
          className="
            mt-3
            font-display
            text-3xl
            font-bold
            leading-tight
            tracking-tight
            text-brand-ink
            sm:text-4xl
            lg:text-[2.75rem]
          "
        >
          Frequently{" "}
          <span className="text-brand-yellow">
            Asked Questions
          </span>
        </h2>
      </div>
    </Reveal>

    {/* FAQ BOXES */}
    <div
      className="
        mt-14
        flex
        w-full
        flex-col
        gap-5
      "
    >
      {faqs.map((faq, index) => {
        const isOpen = openFaq === index;

        return (
          <Reveal
            key={faq.question}
            delay={index * 35}
            className="w-full"
          >
            <div
              className="
                w-full
                overflow-hidden
                rounded-none
                bg-[#F3F3F3]
                shadow-[0_2px_12px_rgba(27,27,29,0.035)]
              "
            >
              <button
                type="button"
                onClick={() =>
                  setOpenFaq(isOpen ? -1 : index)
                }
                className="
                  flex
                  min-h-[76px]
                  w-full
                  items-center
                  justify-between
                  gap-5
                  px-6
                  py-5
                  text-left
                  transition-colors
                  duration-200
                  hover:bg-[#EDEDED]
                  sm:min-h-[80px]
                  sm:px-8
                  sm:py-5
                "
              >
                <span
                  className="
                    font-display
                    text-[15px]
                    font-semibold
                    leading-relaxed
                    text-brand-ink
                    sm:text-[17px]
                  "
                >
                  {faq.question}
                </span>

                <span
                  className={`
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-brand-yellow
                    text-brand-ink
                    transition-transform
                    duration-300
                    ${isOpen ? "rotate-180" : ""}
                  `}
                >
                  <ChevronDown
                    className="h-4 w-4"
                    strokeWidth={3}
                  />
                </span>
              </button>

              <div
                className={`
                  grid
                  transition-all
                  duration-300
                  ease-in-out
                  ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }
                `}
              >
                <div className="overflow-hidden">
                  <p
                    className="
                      px-6
                      pb-7
                      text-[15px]
                      leading-7
                      text-brand-slate
                      sm:px-8
                      sm:text-[16px]
                      sm:leading-7
                    "
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  </div>
</section>
    </main>
  );
}
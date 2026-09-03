export const jobs = [
  {
    slug: "business-developer-cold-calling",
    title: "Business Developer - Cold Calling",
    level: "Junior to Mid Level",
    employment: "Permanent - Full Time",
    compensation: "Market Competitive Salary + Commission",
    timings: "10:00 AM to 07:00 PM (Mon-Fri)",
    workMode: "On-Site",
    location: "A4, Gulistan-e-Johar , Block 04, Karachi",
    about:
      "We are looking for a motivated Business Developer to generate qualified leads through outbound cold calling, build relationships with potential clients, and drive revenue growth for the agency.",
    responsibilities: [
      "Make outbound cold calls to prospective clients daily",
      "Qualify leads and set up discovery calls for the sales team",
      "Maintain accurate records of calls and follow-ups in CRM",
      "Achieve weekly and monthly call & conversion targets",
      "Build rapport and handle objections confidently",
      "Coordinate with the sales team to close deals",
    ],
    requirements: [
      "0-2 years of cold calling / telesales experience",
      "Excellent spoken English communication",
      "Confident, persistent and target-driven attitude",
      "Comfortable working evening/night shifts (US/UK timings)",
    ],
  },
  {
    slug: "lead-generation-specialist",
    title: "Lead Generation Specialist",
    level: "Junior to Mid Level",
    employment: "Permanent - Full Time",
    compensation: "Market Competitive Salary",
    timings: "06:00 PM to 03:00 AM (Mon-Fri)",
    workMode: "On-Site",
    location: "A4, Gulistan-e-Johar , Block 04, Karachi",
    about:
      "We are looking for a Lead Generation Specialist to research, identify and qualify potential clients across various platforms to fuel our sales pipeline.",
    responsibilities: [
      "Research and identify prospects via LinkedIn, Apollo, etc.",
      "Build and maintain targeted prospect lists",
      "Run outbound email/LinkedIn outreach campaigns",
      "Qualify leads before handing off to sales team",
      "Track outreach performance and optimize messaging",
    ],
    requirements: [
      "1+ years experience in lead generation / prospecting",
      "Familiarity with LinkedIn Sales Navigator & outreach tools",
      "Strong written English and research skills",
      "Detail-oriented and organized",
    ],
  },
  {
    slug: "business-developer-chat-based",
    title: "Business Developer - Chat Based",
    level: "Junior to Mid Level",
    employment: "Permanent - Full Time",
    compensation: "Market Competitive Salary + Commission",
    timings: "06:00 PM to 03:00 AM (Mon-Fri)",
    workMode: "On-Site",
    location: "A4, Gulistan-e-Johar , Block 04, Karachi",
    about:
      "We are looking for a Business Developer to handle inbound and outbound client conversations over chat platforms (Upwork, Fiverr, LinkedIn) and convert them into paying clients.",
    responsibilities: [
      "Respond to client inquiries over chat professionally and quickly",
      "Understand client requirements and pitch relevant services",
      "Negotiate scope, timelines and pricing",
      "Convert conversations into signed projects/contracts",
      "Maintain a strong response-rate and client satisfaction score",
    ],
    requirements: [
      "Excellent written English and typing speed",
      "1+ years in chat-based sales or client handling",
      "Persuasive, patient and professional communication style",
      "Basic understanding of digital marketing services",
    ],
  },
  {
    slug: "platform-based-sales-agent",
    title: "Platform-Based Sales Agent - Fiverr / Upwork / Freelancer",
    level: "Junior to Mid Level",
    employment: "Permanent - Full Time",
    compensation: "Market Competitive Salary + Commission",
    timings: "06:00 PM to 03:00 AM (Mon-Fri)",
    workMode: "On-Site",
    location: "A4, Gulistan-e-Johar , Block 04, Karachi",
    about:
      "We are looking for a Platform-Based Sales Agent to manage and grow our presence on Fiverr, Upwork and Freelancer — from bidding to closing deals.",
    responsibilities: [
      "Send high-quality proposals/bids on Upwork, Fiverr & Freelancer",
      "Communicate with potential buyers and close deals",
      "Maintain and improve profile ranking and ratings",
      "Track proposal-to-conversion metrics",
      "Coordinate with delivery team once a project is won",
    ],
    requirements: [
      "1-2 years experience bidding on freelance platforms",
      "Proven track record of closing projects",
      "Strong written English and negotiation skills",
      "Understanding of digital marketing / web services",
    ],
  },
];

export const whatWeOffer = [
  "A creative, fun-loving, and a healthy environment.",
  "Market competitive salary.",
  "A growth-oriented environment.",
  "Full-time employment.",
  "Flexible working hours.",
];

export function getJobBySlug(slug) {
  return jobs.find((job) => job.slug === slug);
}

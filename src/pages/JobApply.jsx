import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronRight, UploadCloud, CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { getJobBySlug } from '../data/jobsData'

const experienceOptions = [
    'Fresh / No Experience',
    'Less than 1 year',
    '1-2 years',
    '2-4 years',
    '4-6 years',
    '6+ years',
]

const currencyOptions = ['PKR', 'USD']
const salaryTypeOptions = ['Monthly', 'Hourly']

function Field({ label, required, children }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-brand-ink">
                {label} {required && <span className="text-brand-yellowDark">*</span>}
            </label>
            {children}
        </div>
    )
}

const inputClasses =
    'w-full rounded-xl border border-brand-line bg-white px-5 py-3.5 text-base text-brand-ink outline-none transition-colors focus:border-brand-yellow'

export default function JobApply() {
    const { slug } = useParams()
    const job = getJobBySlug(slug)

    const [submitted, setSubmitted] = useState(false)
    const [fileName, setFileName] = useState('')
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phone: '',
        dob: '',
        city: '',
        education: '',
        institute: '',
        completionDate: '',
        jobTitle: '',
        company: '',
        experience: '',
        currentSalary: '',
        currentSalaryCurrency: 'PKR',
        currentSalaryType: 'Monthly',
        salaryExpectation: '',
        salaryExpectationCurrency: 'PKR',
        salaryExpectationType: 'Monthly',
        linkedin: '',
        agree: false,
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const handleFile = (e) => {
        setFileName(e.target.files?.[0]?.name || '')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    if (!job) {
        return (
            <section className="bg-white py-24">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h1 className="font-display text-3xl font-bold text-brand-ink">
                        Job not found
                    </h1>
                    <Link
                        to="/careers"
                        className="mt-6 inline-block font-semibold text-brand-yellowDark"
                    >
                        Back to Careers
                    </Link>
                </div>
            </section>
        )
    }

    return (
        <>
            {/* =====================================================
          HERO
      ===================================================== */}

            <section className="bg-gradient-to-r from-brand-yellow to-brand-yellowDark py-16 sm:py-20">
                <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
                    <Reveal>
                        <h1 className="font-display text-3xl font-bold text-brand-ink sm:text-4xl lg:text-5xl">
                            {job.title}
                        </h1>
                        <p className="mt-4 text-sm font-medium text-brand-ink/80 sm:text-base">
                            {job.location} &nbsp;•&nbsp; {job.workMode}
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* =====================================================
          BREADCRUMB + FORM
      ===================================================== */}

            <section className="bg-white py-12 sm:py-16">
                <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <Reveal>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-brand-slate">
                            <Link to="/careers" className="font-medium text-brand-yellowDark hover:underline">
                                Careers
                            </Link>
                            <ChevronRight className="h-4 w-4" />
                            <Link
                                to={`/careers/${job.slug}`}
                                className="font-medium text-brand-yellowDark hover:underline"
                            >
                                {job.title}
                            </Link>
                            <ChevronRight className="h-4 w-4" />
                            <span>Apply</span>
                        </div>
                    </Reveal>

                    {submitted ? (
                        <Reveal delay={100}>
                            <div className="mt-12 flex flex-col items-center rounded-xl2 border border-brand-line bg-brand-mist p-12 text-center">
                                <CheckCircle2 className="h-14 w-14 text-brand-yellowDark" strokeWidth={1.5} />
                                <h2 className="mt-5 font-display text-2xl font-bold text-brand-ink">
                                    Application submitted!
                                </h2>
                                <p className="mt-2 max-w-sm text-brand-slate">
                                    Thanks for applying to {job.title}. Our team will review your
                                    application and reach out if you're shortlisted.
                                </p>
                                <Link to="/careers" className="mt-6">
                                    <Button type="button" variant="outline">
                                        Back to Careers
                                    </Button>
                                </Link>
                            </div>
                        </Reveal>
                    ) : (
                        <Reveal delay={100}>
                            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
                                <Field label="Full Name" required>
                                    <input
                                        name="fullName" required value={form.fullName} onChange={handleChange}
                                        placeholder="Full Name" className={inputClasses}
                                    />
                                </Field>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <Field label="Email" required>
                                        <input
                                            type="email" name="email" required value={form.email} onChange={handleChange}
                                            placeholder="Email" className={inputClasses}
                                        />
                                    </Field>
                                    <Field label="Phone No." required>
                                        <input
                                            name="phone" required value={form.phone} onChange={handleChange}
                                            placeholder="Phone No." className={inputClasses}
                                        />
                                    </Field>
                                </div>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <Field label="Date of Birth" required>
                                        <input
                                            type="date" name="dob" required value={form.dob} onChange={handleChange}
                                            className={inputClasses}
                                        />
                                    </Field>
                                    <Field label="City" required>
                                        <input
                                            name="city" required value={form.city} onChange={handleChange}
                                            placeholder="City" className={inputClasses}
                                        />
                                    </Field>
                                </div>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <Field label="Education Level / Degree / Program" required>
                                        <input
                                            name="education" required value={form.education} onChange={handleChange}
                                            placeholder="Education Level / Degree / Program" className={inputClasses}
                                        />
                                    </Field>
                                    <Field label="Institute" required>
                                        <input
                                            name="institute" required value={form.institute} onChange={handleChange}
                                            placeholder="Institute" className={inputClasses}
                                        />
                                    </Field>
                                </div>

                                <Field label="Date of Completion" required>
                                    <input
                                        type="date" name="completionDate" required value={form.completionDate}
                                        onChange={handleChange} className={inputClasses}
                                    />
                                </Field>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <Field label="Current / Previous Job Title" required>
                                        <input
                                            name="jobTitle" required value={form.jobTitle} onChange={handleChange}
                                            placeholder="Current / Previous Job Title" className={inputClasses}
                                        />
                                    </Field>
                                    <Field label="Current / Previous Company" required>
                                        <input
                                            name="company" required value={form.company} onChange={handleChange}
                                            placeholder="Current / Previous Company" className={inputClasses}
                                        />
                                    </Field>
                                </div>

                                <Field label="Work Experience (In Years)" required>
                                    <select
                                        name="experience" required value={form.experience} onChange={handleChange}
                                        className={inputClasses}
                                    >
                                        <option value="" disabled>Select Years of Experience</option>
                                        {experienceOptions.map((opt) => (
                                            <option key={opt} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                </Field>

                                <Field label="Current Salary" required>
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                        <input
                                            name="currentSalary" required value={form.currentSalary} onChange={handleChange}
                                            placeholder="Current Salary" className={inputClasses}
                                        />
                                        <select
                                            name="currentSalaryCurrency" value={form.currentSalaryCurrency}
                                            onChange={handleChange} className={inputClasses}
                                        >
                                            {currencyOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                                        </select>
                                        <select
                                            name="currentSalaryType" value={form.currentSalaryType}
                                            onChange={handleChange} className={inputClasses}
                                        >
                                            {salaryTypeOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                                        </select>
                                    </div>
                                </Field>

                                <Field label="Salary Expectations" required>
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                        <input
                                            name="salaryExpectation" required value={form.salaryExpectation}
                                            onChange={handleChange} placeholder="Salary Expectations" className={inputClasses}
                                        />
                                        <select
                                            name="salaryExpectationCurrency" value={form.salaryExpectationCurrency}
                                            onChange={handleChange} className={inputClasses}
                                        >
                                            {currencyOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                                        </select>
                                        <select
                                            name="salaryExpectationType" value={form.salaryExpectationType}
                                            onChange={handleChange} className={inputClasses}
                                        >
                                            {salaryTypeOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                                        </select>
                                    </div>
                                </Field>

                                <Field label="LinkedIn Profile Link">
                                    <input
                                        name="linkedin" value={form.linkedin} onChange={handleChange}
                                        placeholder="LinkedIn Profile Link" className={inputClasses}
                                    />
                                </Field>

                                <Field label="Resume" required>
                                    <label
                                        htmlFor="resume"
                                        className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-dashed border-brand-line bg-brand-mist px-4 py-4 text-sm text-brand-slate transition-colors hover:border-brand-yellow"
                                    >
                                        <span className="flex items-center gap-2">
                                            <UploadCloud className="h-5 w-5 text-brand-yellowDark" strokeWidth={1.75} />
                                            {fileName || 'Choose file (PDF or Word)'}
                                        </span>
                                        <span className="rounded-lg bg-brand-yellow px-8 py-4 text-sm font-semibold text-brand-ink">
                                            Browse
                                        </span>
                                    </label>
                                    <input
                                        id="resume" type="file" required onChange={handleFile}
                                        accept=".pdf,.doc,.docx" className="hidden"
                                    />
                                </Field>

                                <label className="flex items-start gap-3 text-sm text-brand-slate">
                                    <input
                                        type="checkbox" name="agree" required checked={form.agree}
                                        onChange={handleChange} className="mt-1 h-4 w-4 accent-brand-yellow"
                                    />
                                    <span>
                                        I agree to the{' '}
                                        <a href="#" className="font-medium text-brand-yellowDark hover:underline">
                                            terms and conditions
                                        </a>{' '}
                                        &{' '}
                                        <a href="#" className="font-medium text-brand-yellowDark hover:underline">
                                            privacy policy
                                        </a>
                                    </span>
                                </label>

                                <Button type="submit" variant="secondary" className="mt-2 self-start">
                                    Apply
                                </Button>
                            </form>
                        </Reveal>
                    )}
                </div>
            </section>
        </>
    )
}
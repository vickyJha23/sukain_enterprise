import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import {
  company,
  cropCoverGsm,
  cropCoverRate,
  cropCoverNote,
  cropCoverRows,
  crops,
  ctaBanner,
  mulchLengths,
  mulchRates,
  process,
  products,
  quoteForm,
  quoteLink,
  quoteSection,
  rateNote,
  requirements,
  rupee,
  rupee2,
  weedMatRates,
  type Hero,
} from '../data/site'

export function SectionHead({
  eyebrow,
  title,
  text,
  light = false,
  action,
}: {
  eyebrow?: string
  title: ReactNode
  text?: ReactNode
  light?: boolean
  action?: ReactNode
}) {
  return (
    <div className="mb-11 flex flex-wrap items-end justify-between gap-7">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className={`h2 ${light ? 'text-white' : ''}`}>{title}</h2>
        {text && <p className={`mt-3 max-w-160 ${light ? 'text-[#b6c0b9]' : 'text-muted'}`}>{text}</p>}
      </div>
      {action}
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  crumb,
  crumbs = crumb ? [{ label: crumb }] : [],
}: Partial<Hero> & {
  title: ReactNode
  image: string
  crumbs?: { label: string; to?: string }[]
}) {
  return (
    <section
      className="relative bg-cover bg-center pt-27.5 pb-22.5 text-[#e1e7e3] before:absolute before:inset-0 before:bg-linear-to-r before:from-ink/95 before:to-ink/70"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container-x relative">
        <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-[#b6c0b9]" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-white">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="inline-flex items-center gap-1.5">
              <Icon name="chevronRight" size={14} />
              {c.to ? <Link to={c.to} className="hover:text-white">{c.label}</Link> : c.label}
            </span>
          ))}
        </nav>
        {eyebrow && <span className="eyebrow text-[#7fcf8f]">{eyebrow}</span>}
        <h1 className="mb-4 max-w-200 text-[clamp(2rem,4.5vw,3.2rem)] font-black uppercase text-white">{title}</h1>
        {text && <p className="max-w-155 text-lg">{text}</p>}
      </div>
    </section>
  )
}

export function ProductCards() {
  return (
    <div className="grid gap-5.5 md:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <article
          key={p.slug}
          className="overflow-hidden rounded-md bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
        >
          <div className="relative h-60">
            <img src={p.image} alt={p.title} loading="lazy" className="size-full object-cover" />
            <span className="absolute -bottom-5.5 left-4.5 grid size-11.5 place-items-center rounded-full bg-white text-brand shadow-card">
              <Icon name={p.icon} size={22} />
            </span>
          </div>
          <div className="px-5 pt-9 pb-5.5">
            <h3 className="mb-2 text-xl font-bold text-ink">{p.title}</h3>
            <p className="mb-3.5 text-[0.9rem] text-muted">{p.short}</p>
            <Link to={`/products/${p.slug}`} className="link-arrow">
              Learn More <Icon name="arrow" size={14} />
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}

export function CropTiles() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-8">
      {crops.map((c) => (
        <Link
          key={c.slug}
          to={`/crops#${c.slug}`}
          className="flex flex-col items-center gap-3 rounded-md border border-line bg-white px-2.5 py-6 text-center text-sm leading-snug transition hover:-translate-y-1 hover:border-brand hover:shadow-card"
        >
          <Icon name={c.icon} size={28} className="text-brand" />
          <span>{c.title}</span>
        </Link>
      ))}
    </div>
  )
}

export function ProcessSteps() {
  return (
    <ol className="grid grid-cols-2 gap-x-3 gap-y-9 sm:grid-cols-3 lg:grid-cols-5">
      {process.map((p, idx) => (
        <li
          key={p.title}
          className="relative flex flex-col items-center text-center text-[0.84rem] text-muted lg:not-last:after:absolute lg:not-last:after:top-7 lg:not-last:after:-right-3 lg:not-last:after:text-2xl lg:not-last:after:text-[#9aa59e] lg:not-last:after:content-['›']"
        >
          <span className="absolute -top-1.5 left-[calc(50%-46px)] z-10 grid h-7.5 min-w-7.5 place-items-center rounded-full bg-brand px-1.5 text-xs font-bold text-white">
            {String(idx + 1).padStart(2, '0')}
          </span>
          <span className="grid size-17.5 place-items-center rounded-full bg-white text-ink shadow-card">
            <Icon name={p.icon} size={26} />
          </span>
          <strong className="mt-3.5 font-semibold text-ink">{p.title}</strong>
          <span>{p.sub}</span>
        </li>
      ))}
    </ol>
  )
}

export function MulchRateTable() {
  return (
    <div className="overflow-x-auto rounded-md border border-line">
      <table className="data-table">
        <thead>
          <tr>
            <th>Micron</th>
            {mulchLengths.map((l) => <th key={l}>{l} (₹)</th>)}
          </tr>
        </thead>
        <tbody>
          {mulchRates.map(([micron, rates]) => (
            <tr key={micron}>
              <td>{micron} Micron</td>
              {rates.map((r, i) => <td key={i} className={i === rates.length - 1 ? 'price' : ''}>{rupee(r)}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function WeedMatRateTable() {
  return (
    <div className="overflow-x-auto rounded-md border border-line">
      <table className="data-table">
        <thead>
          <tr><th>S.No.</th><th>GSM</th><th>Width</th><th>Length</th><th>Price / Roll</th></tr>
        </thead>
        <tbody>
          {weedMatRates.map(([gsm, width, price], i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{gsm} GSM</td>
              <td>{width}</td>
              <td>100 mtr</td>
              <td className="price">{rupee(price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function CropCoverRateTable({ gsm }: { gsm: number }) {
  return (
    <div className="overflow-x-auto rounded-md border border-line">
      <table className="data-table">
        <thead>
          <tr><th>Length (m)</th><th>Width (ft)</th><th>Weight (kg)</th><th>Rate (₹/kg)</th><th>Total (₹)</th></tr>
        </thead>
        <tbody>
          {cropCoverRows(gsm).map((r) => (
            <tr key={`${r.width}-${r.length}`}>
              <td>{r.length}</td>
              <td>{r.width}</td>
              <td>{r.weight.toFixed(2)}</td>
              <td>{cropCoverRate.toFixed(2)}</td>
              <td className="price">{rupee2(r.total)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function CropCoverRates() {
  const [gsm, setGsm] = useState(cropCoverGsm[0])
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-2" role="tablist" aria-label="Crop cover GSM">
        {cropCoverGsm.map((g) => (
          <button
            key={g}
            type="button"
            role="tab"
            aria-selected={gsm === g}
            onClick={() => setGsm(g)}
            className={`rounded-full border px-4.5 py-2 text-sm font-semibold transition hover:border-brand hover:bg-brand hover:text-white ${
              gsm === g ? 'border-brand bg-brand text-white' : 'border-line bg-white text-body'
            }`}
          >
            {g} GSM
          </button>
        ))}
        <span className="ml-auto rounded-md bg-[#ffe14d] px-3.5 py-2 text-sm font-bold text-ink">Rate: ₹{cropCoverRate} per kg</span>
      </div>
      <CropCoverRateTable gsm={gsm} />
      <p className="mt-3 text-sm text-muted">{cropCoverNote}</p>
    </div>
  )
}

export function ProductRates({ slug }: { slug: string }) {
  if (slug === 'weed-mat') return <WeedMatRateTable />
  if (slug === 'uv-crop-cover') return <CropCoverRates />
  return <MulchRateTable />
}

export function RateNote() {
  return (
    <p className="mt-4 text-sm text-muted">{rateNote}</p>
  )
}

export function CtaBanner() {
  return (
    <section className="bg-brand py-14 text-[#e3f3e6]">
      <div className="container-x flex flex-wrap items-center justify-between gap-7">
        <div>
          <h2 className="h2 mb-1.5 text-white">{ctaBanner.title}</h2>
          <p>{ctaBanner.text}</p>
        </div>
        <div className="flex flex-wrap gap-3.5">
          <Link to={quoteLink.to} className="btn btn-light">
            {ctaBanner.button} <Icon name="arrow" size={16} />
          </Link>
          <a href={company.phoneHref} className="btn btn-outline-light">
            <Icon name="phone" size={16} /> {company.phone}
          </a>
        </div>
      </div>
    </section>
  )
}

const emptyForm = { name: '', company: '', phone: '', location: '', requirement: '', message: '' }
type FormState = typeof emptyForm

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [sent, setSent] = useState<FormState | null>(null)

  const set = (k: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const errs: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) errs.name = quoteForm.errors.name
    if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) errs.phone = quoteForm.errors.phone
    if (!form.location.trim()) errs.location = quoteForm.errors.location
    if (!form.requirement) errs.requirement = quoteForm.errors.requirement
    setErrors(errs)
    if (Object.keys(errs).length) return
    setSent(form)
    setForm(emptyForm)
  }

  if (sent) {
    const msg = encodeURIComponent(
      `${quoteForm.greeting}, I'm ${sent.name}${sent.company ? ` from ${sent.company}` : ''} (${sent.location}). ` +
        `Requirement: ${sent.requirement}. ${sent.message} Phone: ${sent.phone}`,
    )
    return (
      <div className="rounded-md bg-white px-6 py-9 text-center text-body">
        <Icon name="checkCircle" size={44} className="mx-auto mb-3 text-brand" />
        <h3 className="mb-2 text-xl font-bold">Thank you, {sent.name}!</h3>
        <p className="mb-5">{quoteForm.thanks}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={`${company.whatsapp}?text=${msg}`} target="_blank" rel="noreferrer" className="btn btn-primary">
            <Icon name="whatsapp" size={16} /> {quoteForm.whatsappButton}
          </a>
          <button type="button" className="btn btn-ghost" onClick={() => setSent(null)}>
            {quoteForm.again}
          </button>
        </div>
      </div>
    )
  }

  const pad = compact ? 'py-2.5' : ''
  const err = (k: keyof FormState) => (errors[k] ? 'border-red-400' : '')
  const msg = (k: keyof FormState) => errors[k] && <small className="mt-1 text-xs text-red-400">{errors[k]}</small>

  const ph = quoteForm.placeholders
  const field = (k: keyof FormState, type = 'text') => (
    <label className="flex flex-col">
      <span className="sr-only">{ph[k]}</span>
      <input type={type} placeholder={ph[k]} value={form[k]} onChange={set(k)} className={`input ${pad} ${err(k)}`} />
      {msg(k)}
    </label>
  )

  return (
    <form className="grid gap-3.5 sm:grid-cols-2" onSubmit={submit} noValidate>
      {field('name')}
      {field('company')}
      {field('phone', 'tel')}
      {field('location')}
      <label className="flex flex-col sm:col-span-2">
        <span className="sr-only">{ph.requirement}</span>
        <select value={form.requirement} onChange={set('requirement')} className={`input ${pad} ${err('requirement')}`}>
          <option value="">{ph.requirement}</option>
          {requirements.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
        {msg('requirement')}
      </label>
      <label className="flex flex-col sm:col-span-2">
        <span className="sr-only">{ph.message}</span>
        <textarea
          rows={compact ? 3 : 5}
          placeholder={ph.message}
          value={form.message}
          onChange={set('message')}
          className={`input resize-y ${pad}`}
        />
      </label>
      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-primary">
          {quoteForm.submit} <Icon name="arrow" size={16} />
        </button>
      </div>
    </form>
  )
}

export function QuoteSection() {
  return (
    <section
      id="quote"
      className="relative bg-cover bg-center py-20 text-[#d5ddd7] before:absolute before:inset-0 before:bg-linear-to-r before:from-[#0b120e]/97 before:via-[#0b120e]/90 before:to-[#0b120e]/60"
      style={{ backgroundImage: `url(${quoteSection.image})` }}
    >
      <div className="container-x relative grid items-center gap-10 lg:grid-cols-[1fr_1.5fr] xl:grid-cols-[1fr_1.4fr_0.8fr]">
        <div>
          <h2 className="mb-3 text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-white">{quoteSection.title}</h2>
          <p>{quoteSection.text}</p>
          <ul className="mt-6 grid gap-3.5 text-white">
            <li className="flex items-center gap-3.5"><Icon name="phone" size={20} /><a href={company.phoneHref} className="hover:text-[#7fcf8f]">{company.phone}</a></li>
            <li className="flex items-center gap-3.5 break-all"><Icon name="mail" size={20} className="shrink-0" /><a href={`mailto:${company.email}`} className="hover:text-[#7fcf8f]">{company.email}</a></li>
            <li className="flex items-center gap-3.5"><Icon name="pin" size={20} /><span>{company.location}</span></li>
          </ul>
        </div>
        <QuoteForm compact />
        <ul className="grid grid-cols-2 gap-4.5 rounded-md border border-white/12 bg-[#08100b]/85 p-6 text-[0.9rem] text-white sm:grid-cols-4 lg:col-span-2 xl:col-span-1 xl:grid-cols-1">
          {quoteSection.perks.map((p) => (
            <li key={p.label} className="flex items-center gap-3"><Icon name={p.icon} size={18} /> {p.label}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

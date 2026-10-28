import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { CtaBanner, PageHero, ProcessSteps, SectionHead } from '../components/Sections'
import { about, pageHeroes, quoteLink, stats, values } from '../data/site'

export function ValueCard({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <article className="rounded-md border border-line bg-white px-6.5 py-7.5 transition hover:-translate-y-1 hover:shadow-card">
      <span className="mb-4.5 inline-grid size-13.5 place-items-center rounded-full bg-brand/8 text-brand">
        <Icon name={icon} size={26} />
      </span>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-[0.92rem] text-muted">{text}</p>
    </article>
  )
}

export function CheckList({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`my-5 grid gap-2.5 ${className}`}>
      {items.map((t) => (
        <li key={t} className="flex items-start gap-2.5">
          <Icon name="check" size={18} className="mt-1 shrink-0 text-brand" /> {t}
        </li>
      ))}
    </ul>
  )
}

export default function About() {
  const { intro, business } = about
  return (
    <>
      <PageHero {...pageHeroes.about} />

      <section className="py-16 md:py-22.5">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <img src={intro.image} alt={intro.imageAlt} loading="lazy" className="h-65 w-full rounded-md object-cover md:h-120" />
            <div className="absolute right-3 bottom-3 rounded-md bg-brand px-7 py-6 text-white shadow-pop md:-right-5 md:-bottom-5">
              <strong className="block font-head text-[2.6rem] leading-none font-black">{intro.badge.value}</strong>
              <span>{intro.badge.label}</span>
            </div>
          </div>
          <div className="text-muted">
            <span className="eyebrow">{intro.eyebrow}</span>
            <h2 className="h2 mb-4">{intro.title}</h2>
            {intro.paragraphs.map((p, i) => (
              <p key={i} className="mb-4">{p}</p>
            ))}
            <CheckList className="mb-7 text-body" items={intro.checklist} />
            <Link to={quoteLink.to} className="btn btn-primary">
              {intro.button} <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy py-15">
        <ul className="container-x grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <li key={s.label} className="flex items-start gap-3">
              <Icon name={s.icon} size={34} className="shrink-0 text-[#5fc172]" />
              <div>
                <strong className="block font-head text-3xl font-extrabold text-white">{s.value}</strong>
                <span className="text-sm text-[#b6c0b9]">{s.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-16 md:py-22.5">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {about.missionVision.map((m) => (
            <article key={m.title} className="rounded-md border border-l-4 border-line border-l-brand p-10">
              <Icon name={m.icon} size={32} className="mb-4 text-brand" />
              <h3 className="mb-2 text-xl font-bold">{m.title}</h3>
              <p className="text-muted">{m.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-soft py-16 md:py-22.5">
        <div className="container-x">
          <SectionHead eyebrow={about.values.eyebrow} title={about.values.title} />
          <div className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <ValueCard key={v.title} {...v} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-22.5">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="eyebrow">{business.eyebrow}</span>
            <h2 className="h2 mb-5">{business.title}</h2>
            <div className="overflow-x-auto rounded-md border border-line">
              <table className="data-table min-w-0">
                <tbody>
                  {business.rows.map(([k, v]) => (
                    <tr key={k}><td>{k}</td><td>{v}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <img src={business.image} alt={business.imageAlt} loading="lazy" className="w-full rounded-md shadow-pop" />
        </div>
      </section>

      <section className="bg-soft py-16 md:py-22.5">
        <div className="container-x">
          <SectionHead eyebrow={about.process.eyebrow} title={about.process.title} />
          <ProcessSteps />
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

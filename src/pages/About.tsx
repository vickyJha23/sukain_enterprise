import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { CtaBanner, PageHero, ProcessSteps, SectionHead } from '../components/Sections'
import { company, IMAGES, stats, values } from '../data/site'

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
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Quality Plastics for a Greener Tomorrow"
        text="Agricultural mulching film and weed mat from Bawal, Haryana, made to help farmers grow more with less."
        image={IMAGES.filmTexture}
        crumbs={[{ label: 'About Us' }]}
      />

      <section className="py-16 md:py-22.5">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <img src={IMAGES.sample30} alt="Sunkaine 30 micron mulch film sample" loading="lazy" className="h-65 w-full rounded-md object-cover md:h-120" />
            <div className="absolute right-3 bottom-3 rounded-md bg-brand px-7 py-6 text-white shadow-pop md:-right-5 md:-bottom-5">
              <strong className="block font-head text-[2.6rem] leading-none font-black">2020</strong>
              <span>GST Registered Since</span>
            </div>
          </div>
          <div className="text-muted">
            <span className="eyebrow">Who We Are</span>
            <h2 className="h2 mb-4">A Trusted Name in Agricultural Plastic Films</h2>
            <p className="mb-4">
              Sunkaine Plastic Industries is based at Plot No. 126, Sector 9, Industrial Model Township, Bawal, Haryana.
              We make and supply silver/black mulching film from 18 to 30 micron and UV stabilised weed mat from 90 to
              120 GSM.
            </p>
            <p>
              Led by {company.owner}, we focus on what matters in the field: consistent thickness, film that lays flat
              and doesn't tear, and fair prices. Farmers, dealers and large growers can call us directly for orders and
              advice.
            </p>
            <CheckList
              className="mb-7 text-body"
              items={[
                'Silver/Black mulching film, 18–30 micron',
                'UV stabilised weed mat, 90–120 GSM',
                'Roll lengths of 400 m, 800 m and 1000 m',
                `GST registered business (GSTIN ${company.gstin})`,
              ]}
            />
            <Link to="/contact#quote" className="btn btn-primary">
              Talk to Our Team <Icon name="arrow" size={16} />
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
          {[
            ['target', 'Our Mission', 'To give every farmer access to quality mulching film and weed mat at a fair price, so they can save water, reduce weeding and grow better crops.'],
            ['eye', 'Our Vision', 'Quality today, green tomorrow: to be a trusted name in agricultural plastics, known for products that perform season after season.'],
          ].map(([icon, title, text]) => (
            <article key={title} className="rounded-md border border-l-4 border-line border-l-brand p-10">
              <Icon name={icon} size={32} className="mb-4 text-brand" />
              <h3 className="mb-2 text-xl font-bold">{title}</h3>
              <p className="text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-soft py-16 md:py-22.5">
        <div className="container-x">
          <SectionHead eyebrow="Why Choose Us" title="What Sets Us Apart" />
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
            <span className="eyebrow">Business Details</span>
            <h2 className="h2 mb-5">Registered &amp; Verified</h2>
            <div className="overflow-x-auto rounded-md border border-line">
              <table className="data-table min-w-0">
                <tbody>
                  <tr><td>Legal Name</td><td>{company.name}</td></tr>
                  <tr><td>Proprietor</td><td>{company.owner}</td></tr>
                  <tr><td>GSTIN</td><td>{company.gstin}</td></tr>
                  <tr><td>Registered</td><td>{company.registered}</td></tr>
                  <tr><td>Address</td><td>{company.address}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <img src={IMAGES.businessCard} alt="Sunkaine Plastic Industries business card" loading="lazy" className="w-full rounded-md shadow-pop" />
        </div>
      </section>

      <section className="bg-soft py-16 md:py-22.5">
        <div className="container-x">
          <SectionHead eyebrow="Laying Guide" title="From Bed Preparation to Planting" />
          <ProcessSteps />
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

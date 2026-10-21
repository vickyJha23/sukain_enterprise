import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import Icon from '../components/Icon'
import { MulchRateTable, PageHero, ProcessSteps, QuoteSection, RateNote, SectionHead, WeedMatRateTable } from '../components/Sections'
import { company, IMAGES, products } from '../data/site'
import NotFound from './NotFound'

function SideLink({ to, active = false, children }: { to: string; active?: boolean; children: ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className={`mt-2 flex items-center justify-between rounded px-3.5 py-3 text-[0.92rem] font-medium transition hover:bg-brand hover:text-white ${
          active ? 'bg-brand text-white' : 'bg-soft'
        }`}
      >
        {children}
        <Icon name="chevronRight" size={16} />
      </Link>
    </li>
  )
}

const sideTitle = 'mb-1 inline-block border-b-2 pb-3 text-[1.05rem] font-bold'

export default function ProductDetail() {
  const { slug } = useParams()
  const p = products.find((x) => x.slug === slug)
  if (!p) return <NotFound />

  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title={p.title}
        text={p.short}
        image={IMAGES.filmTexture}
        crumbs={[{ label: 'Our Products', to: '/products' }, { label: p.title }]}
      />

      <section className="py-16 md:py-22.5">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1fr_340px]">
          <div className="min-w-0">
            <img className="mb-9 h-65 w-full rounded-md object-cover md:h-105" src={p.image} alt={p.title} />
            <h2 className="h2 mb-4">About {p.title}</h2>
            <p className="text-muted">{p.intro}</p>

            <h3 className="mt-9 mb-4 text-xl font-bold">Key Benefits</h3>
            <ul className="grid gap-3.5 sm:grid-cols-2">
              {p.benefits.map((b) => (
                <li key={b} className="flex gap-2.5 rounded-md bg-soft p-4 text-[0.92rem]">
                  <Icon name="checkCircle" size={20} className="shrink-0 text-brand" /> {b}
                </li>
              ))}
            </ul>

            <h3 className="mt-9 mb-4 text-xl font-bold">Ideal For</h3>
            <ul className="grid grid-cols-2 gap-3.5 sm:grid-cols-3">
              {p.idealFor.map((f) => (
                <li key={f.label} className="flex items-center gap-3 rounded-md border border-line p-4 font-semibold text-ink">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-navy text-white">
                    <Icon name={f.icon} size={20} />
                  </span>
                  <span className="min-w-0">{f.label}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-9 mb-4 text-xl font-bold">Specifications</h3>
            <div className="overflow-x-auto rounded-md border border-line">
              <table className="data-table">
                <thead>
                  <tr><th>Property</th><th>Details</th></tr>
                </thead>
                <tbody>
                  {p.specs.map(([k, v]) => (
                    <tr key={k}><td>{k}</td><td>{v}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mt-9 mb-4 text-xl font-bold">Price List</h3>
            {p.slug === 'weed-mat' ? <WeedMatRateTable /> : <MulchRateTable />}
            <RateNote />
          </div>

          <aside className="grid min-w-0 gap-6 lg:sticky lg:top-27">
            <div className="rounded-md border border-line p-6.5">
              <h4 className={`${sideTitle} border-brand`}>All Products</h4>
              <ul>
                {products.map((x) => (
                  <SideLink key={x.slug} to={`/products/${x.slug}`} active={x.slug === p.slug}>
                    {x.title}
                  </SideLink>
                ))}
              </ul>
            </div>
            <div className="rounded-md border border-line p-6.5">
              <h4 className={`${sideTitle} border-brand`}>Rate List Brochure</h4>
              <a href={IMAGES.rateList} target="_blank" rel="noreferrer" className="mt-3 block overflow-hidden rounded border border-line">
                <img src={IMAGES.rateList} alt="Sunkaine mulching film and weed mat rate list" loading="lazy" className="w-full transition-transform duration-300 hover:scale-105" />
              </a>
              <a href={IMAGES.rateList} download="sunkaine-rate-list.jpg" className="btn btn-primary btn-sm mt-4 w-full">
                <Icon name="file" size={16} /> Download Rate List
              </a>
            </div>
            <div className="rounded-md bg-brand p-6.5 text-[#e3f3e6]">
              <h4 className={`${sideTitle} border-white text-white`}>Need Help Choosing?</h4>
              <p className="my-3">Tell us your crop and field, and we'll suggest the right size.</p>
              <a href={company.phoneHref} className="mb-4 flex items-center gap-2.5 font-head text-xl font-bold text-white">
                <Icon name="phone" size={18} /> {company.phone}
              </a>
              <a href={company.whatsapp} target="_blank" rel="noreferrer" className="btn btn-light btn-sm">
                <Icon name="whatsapp" size={16} /> WhatsApp Us
              </a>
            </div>
            <div className="rounded-md border border-line p-6.5">
              <h4 className={`${sideTitle} border-brand`}>Technical Resources</h4>
              <ul>
                {[
                  ['specifications', 'Specifications'],
                  ['laying-guide', 'Laying Guide'],
                  ['faqs', 'FAQs'],
                ].map(([id, label]) => (
                  <SideLink key={id} to={`/technical-info#${id}`}>
                    <span className="inline-flex items-center gap-2"><Icon name="file" size={16} /> {label}</span>
                  </SideLink>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-soft py-16 md:py-22.5">
        <div className="container-x">
          <SectionHead eyebrow="How to Use" title="Laying Guide" />
          <ProcessSteps />
        </div>
      </section>

      <QuoteSection />
    </>
  )
}

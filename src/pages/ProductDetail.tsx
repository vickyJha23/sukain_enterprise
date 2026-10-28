import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHero, ProcessSteps, ProductRates, QuoteSection, RateNote, SectionHead } from '../components/Sections'
import { company, productDetail, productHero, products } from '../data/site'
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
  const { headings, sidebar, help, priceCard } = productDetail

  return (
    <>
      <PageHero
        eyebrow={productHero.eyebrow}
        title={p.title}
        text={p.short}
        image={productHero.image}
        crumbs={[{ label: productHero.eyebrow, to: '/products' }, { label: p.title }]}
      />

      <section className="py-16 md:py-22.5">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1fr_340px]">
          <div className="min-w-0">
            <img className="mb-9 h-65 w-full rounded-md object-cover md:h-105" src={p.image} alt={p.title} />
            <h2 className="h2 mb-4">About {p.title}</h2>
            <p className="text-muted">{p.intro}</p>

            <h3 className="mt-9 mb-4 text-xl font-bold">{headings.benefits}</h3>
            <ul className="grid gap-3.5 sm:grid-cols-2">
              {p.benefits.map((b) => (
                <li key={b} className="flex gap-2.5 rounded-md bg-soft p-4 text-[0.92rem]">
                  <Icon name="checkCircle" size={20} className="shrink-0 text-brand" /> {b}
                </li>
              ))}
            </ul>

            <h3 className="mt-9 mb-4 text-xl font-bold">{headings.idealFor}</h3>
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

            <h3 className="mt-9 mb-4 text-xl font-bold">{headings.specs}</h3>
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

            <h3 className="mt-9 mb-4 text-xl font-bold">{headings.prices}</h3>
            <ProductRates slug={p.slug} />
            <RateNote />
          </div>

          <aside className="grid min-w-0 gap-6 lg:sticky lg:top-27">
            <div className="rounded-md border border-line p-6.5">
              <h4 className={`${sideTitle} border-brand`}>{sidebar.allProducts}</h4>
              <ul>
                {products.map((x) => (
                  <SideLink key={x.slug} to={`/products/${x.slug}`} active={x.slug === p.slug}>
                    {x.title}
                  </SideLink>
                ))}
              </ul>
            </div>
            <div className="rounded-md border border-line p-6.5">
              <h4 className={`${sideTitle} border-brand`}>{priceCard.title}</h4>
              <p className="my-3 text-[0.92rem] text-muted">{priceCard.text}</p>
              <Link to={`/price-list#${p.slug}`} className="btn btn-primary btn-sm w-full">
                <Icon name="rupee" size={16} /> {priceCard.button}
              </Link>
            </div>
            <div className="rounded-md bg-brand p-6.5 text-[#e3f3e6]">
              <h4 className={`${sideTitle} border-white text-white`}>{help.title}</h4>
              <p className="my-3">{help.text}</p>
              <a href={company.phoneHref} className="mb-4 flex items-center gap-2.5 font-head text-xl font-bold text-white">
                <Icon name="phone" size={18} /> {company.phone}
              </a>
              <a href={company.whatsapp} target="_blank" rel="noreferrer" className="btn btn-light btn-sm">
                <Icon name="whatsapp" size={16} /> WhatsApp Us
              </a>
            </div>
            <div className="rounded-md border border-line p-6.5">
              <h4 className={`${sideTitle} border-brand`}>{sidebar.resources}</h4>
              <ul>
                {productDetail.resources.map((r) => (
                  <SideLink key={r.id} to={`/technical-info#${r.id}`}>
                    <span className="inline-flex items-center gap-2"><Icon name="file" size={16} /> {r.label}</span>
                  </SideLink>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-soft py-16 md:py-22.5">
        <div className="container-x">
          <SectionHead eyebrow={productDetail.process.eyebrow} title={productDetail.process.title} />
          <ProcessSteps />
        </div>
      </section>

      <QuoteSection />
    </>
  )
}

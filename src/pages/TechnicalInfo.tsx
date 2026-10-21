import { useState } from 'react'
import Icon from '../components/Icon'
import { CtaBanner, MulchRateTable, PageHero, RateNote, SectionHead, WeedMatRateTable } from '../components/Sections'
import { ValueCard } from './About'
import { care, faqs, IMAGES, process, specs } from '../data/site'

const tabs = [
  ['rate-list', 'Rate List'],
  ['specifications', 'Specifications'],
  ['laying-guide', 'Laying Guide'],
  ['care', 'Storage & Care'],
  ['faqs', 'FAQs'],
]

export default function TechnicalInfo() {
  const [openFaq, setOpenFaq] = useState(0)
  const [head, ...rows] = specs

  return (
    <>
      <PageHero
        eyebrow="Technical Info"
        title="Rate List, Specifications & Guide"
        text="Everything you need to choose, lay and look after the right film for your field."
        image={IMAGES.filmTexture}
        crumbs={[{ label: 'Technical Info' }]}
      />

      <div className="sticky top-18 z-10 border-b border-line bg-white lg:top-21">
        <div className="container-x flex gap-2 overflow-x-auto">
          {tabs.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="border-b-3 border-transparent px-4.5 py-4 text-sm font-semibold whitespace-nowrap hover:border-brand hover:text-brand"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <section className="scroll-mt-36 py-16 md:py-22.5" id="rate-list">
        <div className="container-x">
          <SectionHead
            eyebrow="Rate List"
            title="Mulching Film & Weed Mat Prices"
            text="Standard price per roll. Dealers and bulk buyers can ask for special pricing."
            action={
              <a href={IMAGES.rateList} download="sunkaine-rate-list.jpg" className="btn btn-primary btn-sm">
                <Icon name="file" size={16} /> Download Rate List
              </a>
            }
          />
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="min-w-0">
              <h3 className="mb-4 text-xl font-bold">Mulching Film <small className="text-sm font-medium text-muted">Silver / Black</small></h3>
              <MulchRateTable />
            </div>
            <div className="min-w-0">
              <h3 className="mb-4 text-xl font-bold">Weed Mat <small className="text-sm font-medium text-muted">UV Stabilised</small></h3>
              <WeedMatRateTable />
            </div>
          </div>
          <RateNote />
        </div>
      </section>

      <section className="scroll-mt-36 bg-soft py-16 md:py-22.5" id="specifications">
        <div className="container-x">
          <SectionHead eyebrow="Product Specifications" title="Compare Our Products" />
          <div className="overflow-x-auto rounded-md border border-line bg-white">
            <table className="data-table">
              <thead>
                <tr>{head.map((h) => <th key={h}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r[0]}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="scroll-mt-36 py-16 md:py-22.5" id="laying-guide">
        <div className="container-x">
          <SectionHead eyebrow="Laying Guide" title="How to Lay Mulching Film" />
          <div className="grid gap-5.5">
            {process.map((p, i) => (
              <article key={p.title} className="grid items-center gap-6 rounded-md bg-white p-5 shadow-card md:grid-cols-[120px_1fr]">
                <span className="grid size-24 place-items-center rounded-md bg-soft text-brand max-md:size-16">
                  <Icon name={p.icon} size={40} strokeWidth={1.6} />
                </span>
                <div>
                  <span className="grid h-7.5 w-fit min-w-7.5 place-items-center rounded-full bg-brand px-1.5 text-xs font-bold text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 mb-2 text-xl font-bold">
                    {p.title} <small className="text-sm font-medium text-muted">{p.sub}</small>
                  </h3>
                  <p className="text-muted">{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-36 bg-soft py-16 md:py-22.5" id="care">
        <div className="container-x">
          <SectionHead eyebrow="Storage & Care" title="Get the Most From Every Roll" />
          <div className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-4">
            {care.map((c) => (
              <ValueCard key={c.title} icon="shield" {...c} />
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-36 py-16 md:py-22.5" id="faqs">
        <div className="container-x max-w-225">
          <SectionHead eyebrow="FAQs" title="Frequently Asked Questions" text="Can't find your answer? Call or WhatsApp us and we'll help." />
          <div className="grid gap-3">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i
              return (
                <div key={f.q} className="overflow-hidden rounded-md border border-line bg-white">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5.5 py-5 text-left font-head font-semibold text-ink"
                  >
                    {f.q}
                    <Icon name="plus" size={20} className={`shrink-0 text-brand transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <p className={`overflow-hidden px-5.5 text-muted ${isOpen ? 'pb-5' : ''}`}>{f.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

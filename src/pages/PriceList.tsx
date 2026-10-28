import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { CtaBanner, PageHero, ProductRates, RateNote, SectionHead } from '../components/Sections'
import { pageHeroes, priceListPage, products, quoteLink } from '../data/site'

export default function PriceList() {
  const { intro } = priceListPage

  return (
    <>
      <PageHero {...pageHeroes.priceList} />

      <div className="sticky top-18 z-10 border-b border-line bg-white print:hidden lg:top-21">
        <div className="container-x flex gap-2 overflow-x-auto">
          {products.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="border-b-3 border-transparent px-4.5 py-4 text-sm font-semibold whitespace-nowrap hover:border-brand hover:text-brand"
            >
              {p.title}
            </a>
          ))}
        </div>
      </div>

      <section className="pt-16 md:pt-22.5">
        <div className="container-x">
          <SectionHead
            eyebrow={intro.eyebrow}
            title={intro.title}
            text={intro.text}
            action={
              <button type="button" onClick={() => window.print()} className="btn btn-ghost btn-sm print:hidden">
                <Icon name="file" size={16} /> {priceListPage.print}
              </button>
            }
          />
        </div>
      </section>

      {products.map((p, i) => {
        const info = priceListPage.products[p.slug]
        return (
          <section key={p.slug} id={p.slug} className={`scroll-mt-36 py-12 md:py-16 ${i % 2 ? 'bg-soft' : ''}`}>
            <div className="container-x">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <img src={p.image} alt={p.title} loading="lazy" className="size-20 shrink-0 rounded-md object-cover shadow-card print:hidden" />
                  <div>
                    <h2 className="text-2xl font-extrabold">{p.title}</h2>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {info.facts.map((f) => (
                        <li key={f} className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-body">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="text-right max-sm:text-left">
                  <strong className="block font-head text-2xl font-extrabold text-brand">{info.from}</strong>
                  <span className="text-sm text-muted">{info.unit}</span>
                </div>
              </div>

              <ProductRates slug={p.slug} />

              <div className="mt-5 flex flex-wrap gap-3 print:hidden">
                <Link to={`${quoteLink.to}`} className="btn btn-primary btn-sm">
                  {priceListPage.quote} <Icon name="arrow" size={14} />
                </Link>
                <Link to={`/products/${p.slug}`} className="btn btn-ghost btn-sm">
                  About {p.title}
                </Link>
              </div>
            </div>
          </section>
        )
      })}

      <section className="pb-16 md:pb-22.5">
        <div className="container-x">
          <RateNote />
        </div>
      </section>

      <div className="print:hidden">
        <CtaBanner />
      </div>
    </>
  )
}

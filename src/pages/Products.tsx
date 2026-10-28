import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { CtaBanner, PageHero, SectionHead } from '../components/Sections'
import { CheckList } from './About'
import { pageHeroes, products, productsPage } from '../data/site'

export default function Products() {
  return (
    <>
      <PageHero {...pageHeroes.products} />

      <section className="py-16 md:py-22.5">
        <div className="container-x">
          <SectionHead eyebrow={productsPage.eyebrow} title={productsPage.title} text={productsPage.text} />
          <div className="grid gap-17.5">
            {products.map((p, i) => (
              <article key={p.slug} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-15">
                <div className={i % 2 ? 'lg:order-2' : ''}>
                  <img src={p.image} alt={p.title} loading="lazy" className="h-65 w-full rounded-md object-cover shadow-pop md:h-100" />
                </div>
                <div>
                  <span className="mb-4.5 inline-grid size-13 place-items-center rounded-md bg-brand text-white">
                    <Icon name={p.icon} size={24} />
                  </span>
                  <h3 className="mb-3 text-[1.7rem] font-extrabold">{p.title}</h3>
                  <p className="text-muted">{p.intro}</p>
                  <CheckList items={p.benefits.slice(0, 3)} className="mb-7" />
                  <Link to={`/products/${p.slug}`} className="btn btn-primary">
                    Explore {p.title} <Icon name="arrow" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { CropTiles, MulchRateTable, ProcessSteps, ProductCards, QuoteSection, SectionHead } from '../components/Sections'
import { company, features, gallery, heroSlides, home, quoteLink, stats } from '../data/site'

function Hero() {
  const [index, setIndex] = useState(0)
  const count = heroSlides.length
  const { hero } = home

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 6000)
    return () => clearInterval(t)
  }, [index, count])

  return (
    <section className="relative flex items-center overflow-hidden bg-ink text-white md:min-h-155">
      {heroSlides.map((s, i) => (
        <div
          key={s.image}
          aria-hidden={i !== index}
          className={`absolute inset-0 bg-cover bg-center ${i === index ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
          style={{ backgroundImage: `url(${s.image})`, backgroundPosition: s.position, transition: 'opacity 1.2s ease, transform 7s ease' }}
        />
      ))}
      <div className="absolute inset-0 bg-ink/82 md:bg-transparent md:bg-linear-to-r md:from-[#08100b]/96 md:via-[#08100b]/82 md:via-40% md:to-[#08100b]/25" />

      <div className="container-x relative z-10 pt-16 pb-12">
        <span className="eyebrow tracking-[0.3em] text-white">{hero.eyebrow}</span>
        <h1 className="mb-5.5 text-[clamp(2.4rem,5.4vw,4rem)] leading-none font-black text-white uppercase">
          {hero.titleLines.map((line, i) => (
            <span key={line} className={`block ${i === hero.highlightLine ? 'text-[#5fc172]' : ''}`}>
              {line}
            </span>
          ))}
        </h1>
        <p className="max-w-140 text-lg text-[#e1e7e3]">{hero.text}</p>
        <div className="mt-7.5 mb-11 flex flex-wrap gap-4">
          <Link to={quoteLink.to} className="btn btn-primary btn-lg max-sm:w-full">
            {hero.primary} <Icon name="arrow" size={18} />
          </Link>
          <a href={company.whatsapp} target="_blank" rel="noreferrer" className="btn btn-outline-light btn-lg max-sm:w-full">
            <Icon name="whatsapp" size={20} /> {hero.secondary}
          </a>
        </div>
        <ul className="flex flex-wrap gap-x-9.5 gap-y-4.5">
          {features.map((f) => (
            <li key={f.label} className="flex max-w-32.5 items-center gap-3 text-sm leading-tight">
              <Icon name={f.icon} size={30} strokeWidth={1.6} className="shrink-0" />
              <span>{f.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute right-10 bottom-7.5 z-10 hidden max-w-55 text-right lg:block">
        <p className="mb-3 font-head text-lg font-semibold">{heroSlides[index].caption}</p>
        <div className="flex justify-end gap-2.5">
          {(
            [
              ['Previous slide', 'chevronLeft', -1],
              ['Next slide', 'chevronRight', 1],
            ] as const
          ).map(([label, icon, dir]) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              onClick={() => setIndex((index + dir + count) % count)}
              className="grid size-9.5 place-items-center rounded-full border border-white/40 bg-white/10 transition hover:border-brand hover:bg-brand"
            >
              <Icon name={icon} size={18} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const { about, products, crops, process, rates } = home
  return (
    <>
      <Hero />

      <section className="py-16 md:py-22.5">
        <div className="container-x grid items-center gap-15 lg:grid-cols-[1fr_1.25fr]">
          <div>
            <span className="eyebrow">{about.eyebrow}</span>
            <h2 className="h2 mb-4">{about.title}</h2>
            <p className="mb-7 text-muted">{about.text}</p>
            <Link to={about.link.to} className="btn btn-primary">
              {about.link.label} <Icon name="arrow" size={16} />
            </Link>
          </div>
          <div>
            <ul className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <li key={s.label} className="flex items-start gap-2.5">
                  <Icon name={s.icon} size={28} className="shrink-0 text-brand" />
                  <div>
                    <strong className="block font-head text-lg font-extrabold text-ink">{s.value}</strong>
                    <span className="text-xs text-muted">{s.label}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="relative overflow-hidden rounded-md">
              <img src={about.image} alt={about.imageAlt} loading="lazy" className="h-75 w-full object-cover object-[center_60%]" />
              <div className="absolute right-4 bottom-4 left-4 rounded-md bg-white px-5.5 py-5 font-head text-lg leading-snug font-bold text-ink shadow-card sm:left-auto sm:max-w-57.5">
                {about.caption}
                <span className="mt-3 block h-0.75 w-9 bg-brand" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-[#c5cec8] md:py-22.5">
        <div className="container-x">
          <SectionHead
            light
            eyebrow={products.eyebrow}
            title={products.title}
            action={
              <div className="flex max-w-155 flex-col items-start gap-3.5 lg:flex-row lg:items-center lg:gap-7">
                <p className="text-sm">{products.text}</p>
                <Link to={products.link.to} className="btn btn-outline-light btn-sm">
                  {products.link.label} <Icon name="arrow" size={14} />
                </Link>
              </div>
            }
          />
          <ProductCards />
        </div>
      </section>

      <section className="py-16 md:py-22.5">
        <div className="container-x">
          <SectionHead
            eyebrow={crops.eyebrow}
            title={crops.title}
            action={
              <Link to={crops.link.to} className="btn btn-primary btn-sm">
                {crops.link.label} <Icon name="arrow" size={14} />
              </Link>
            }
          />
          <CropTiles />
        </div>
      </section>

      <section className="bg-soft py-16 md:py-22.5">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[280px_1fr]">
          <div>
            <span className="eyebrow">{process.eyebrow}</span>
            <h2 className="h2 mb-3">{process.title}</h2>
            <p className="text-muted">{process.text}</p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <section className="py-16 md:py-22.5">
        <div className="container-x">
          <SectionHead
            eyebrow={rates.eyebrow}
            title={rates.title}
            text={rates.text}
            action={
              <Link to={rates.link.to} className="btn btn-primary btn-sm">
                {rates.link.label} <Icon name="arrow" size={14} />
              </Link>
            }
          />
          <MulchRateTable />
        </div>
      </section>

      <section className="bg-soft py-16 md:py-22.5">
        <div className="container-x grid items-start gap-7.5 lg:grid-cols-[260px_1fr]">
          <div>
            <span className="eyebrow">{home.gallery.eyebrow}</span>
            <h2 className="h2 mb-3">{home.gallery.title}</h2>
            <p className="mb-5 text-muted">{home.gallery.text}</p>
            <Link to={home.gallery.link.to} className="btn btn-primary btn-sm">
              {home.gallery.link.label} <Icon name="arrow" size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {gallery.slice(0, 5).map((g) => (
              <Link to={home.gallery.link.to} key={g.title} className="group">
                <div className="mb-2.5 overflow-hidden rounded">
                  <img src={g.image} alt={g.title} loading="lazy" className="h-32.5 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <strong className="block text-sm text-ink">{g.title}</strong>
                <span className="text-xs text-muted">{g.category}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection />
    </>
  )
}

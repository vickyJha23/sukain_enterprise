import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { CropTiles, MulchRateTable, ProcessSteps, ProductCards, QuoteSection, SectionHead } from '../components/Sections'
import { company, features, gallery, heroSlides, IMAGES, stats } from '../data/site'

function Hero() {
  const [index, setIndex] = useState(0)
  const count = heroSlides.length

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
        <span className="eyebrow tracking-[0.3em] text-white">Mulching Film &amp; Weed Mat Manufacturer</span>
        <h1 className="mb-5.5 text-[clamp(2.4rem,5.4vw,4rem)] leading-none font-black text-white uppercase">
          Quality Today
          <br />
          <span className="text-[#5fc172]">Green</span>
          <br />
          Tomorrow
        </h1>
        <p className="max-w-140 text-lg text-[#e1e7e3]">
          Sunkaine Plastic Industries makes silver/black mulching film and UV stabilised weed mat in Bawal, Haryana,
          helping farmers save water, control weeds and grow bigger harvests.
        </p>
        <div className="mt-7.5 mb-11 flex flex-wrap gap-4">
          <Link to="/contact#quote" className="btn btn-primary btn-lg max-sm:w-full">
            Get a Free Quote <Icon name="arrow" size={18} />
          </Link>
          <a href={company.whatsapp} target="_blank" rel="noreferrer" className="btn btn-outline-light btn-lg max-sm:w-full">
            <Icon name="whatsapp" size={20} /> WhatsApp Us
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
  return (
    <>
      <Hero />

      <section className="py-16 md:py-22.5">
        <div className="container-x grid items-center gap-15 lg:grid-cols-[1fr_1.25fr]">
          <div>
            <span className="eyebrow">About Sunkaine Plastic Industries</span>
            <h2 className="h2 mb-4">Quality Plastic Solutions for a Greener Tomorrow</h2>
            <p className="mb-7 text-muted">
              Sunkaine Plastic Industries is an agricultural plastics business in the Industrial Model Township, Bawal,
              Haryana, GST registered since 2020. Led by {company.owner}, we supply mulching film and weed mat with
              consistent thickness, quality raw material and honest pricing for farmers and dealers.
            </p>
            <Link to="/about" className="btn btn-primary">
              Know More <Icon name="arrow" size={16} />
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
              <img src={IMAGES.sample25} alt="Sunkaine 25 micron silver/black mulch film sample" loading="lazy" className="h-75 w-full object-cover object-[center_40%]" />
              <div className="absolute right-4 bottom-4 left-4 rounded-md bg-white px-5.5 py-5 font-head text-lg leading-snug font-bold text-ink shadow-card sm:left-auto sm:max-w-57.5">
                Reliable Film for Every Crop Season
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
            eyebrow="Our Products"
            title="Mulching Film & Weed Mat"
            action={
              <div className="flex max-w-155 flex-col items-start gap-3.5 lg:flex-row lg:items-center lg:gap-7">
                <p className="text-sm">Agricultural films designed for better soil health, higher yield and long field life.</p>
                <Link to="/products" className="btn btn-outline-light btn-sm">
                  View All Products <Icon name="arrow" size={14} />
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
            eyebrow="Crops We Serve"
            title="Made for Indian Farms"
            action={
              <Link to="/crops" className="btn btn-primary btn-sm">
                View All Crops <Icon name="arrow" size={14} />
              </Link>
            }
          />
          <CropTiles />
        </div>
      </section>

      <section className="bg-soft py-16 md:py-22.5">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[280px_1fr]">
          <div>
            <span className="eyebrow">Laying Guide</span>
            <h2 className="h2 mb-3">From Bed Preparation to Planting</h2>
            <p className="text-muted">Five simple steps to lay mulching film for the best results.</p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <section className="py-16 md:py-22.5">
        <div className="container-x">
          <SectionHead
            eyebrow="Rate List"
            title="Mulching Film Prices"
            text="Silver/Black mulching film, price per roll. Weed mat prices are on the Technical Info page."
            action={
              <Link to="/technical-info#rate-list" className="btn btn-primary btn-sm">
                Full Rate List <Icon name="arrow" size={14} />
              </Link>
            }
          />
          <MulchRateTable />
        </div>
      </section>

      <section className="bg-soft py-16 md:py-22.5">
        <div className="container-x grid items-start gap-7.5 lg:grid-cols-[260px_1fr]">
          <div>
            <span className="eyebrow">Gallery</span>
            <h2 className="h2 mb-3">Our Products Up Close</h2>
            <p className="mb-5 text-muted">Real samples and product photos from Sunkaine Plastic Industries.</p>
            <Link to="/gallery" className="btn btn-primary btn-sm">
              View Gallery <Icon name="arrow" size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {gallery.slice(0, 5).map((g) => (
              <Link to="/gallery" key={g.title} className="group">
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

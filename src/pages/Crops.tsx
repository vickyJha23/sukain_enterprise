import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { CropTiles, CtaBanner, PageHero, SectionHead } from '../components/Sections'
import { crops, IMAGES } from '../data/site'

export default function Crops() {
  return (
    <>
      <PageHero
        eyebrow="Crops We Serve"
        title="Made for Indian Farms"
        text="Mulching film and weed mat help a wide range of crops grow cleaner, healthier and stronger."
        image={IMAGES.sample25}
        crumbs={[{ label: 'Crops' }]}
      />

      <section className="py-16 md:py-22.5">
        <div className="container-x">
          <CropTiles />
        </div>
      </section>

      <section className="bg-soft py-16 md:py-22.5">
        <div className="container-x">
          <SectionHead
            eyebrow="Crop Benefits"
            title="Better Results in Every Field"
            text="Every crop has its own needs for water, temperature and weed control. Here's how our products help each one."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {crops.map((c) => (
              <article
                key={c.slug}
                id={c.slug}
                className="scroll-mt-27 rounded-md border-t-4 border-brand bg-white px-5.5 pt-7 pb-6 shadow-card transition-transform duration-300 target:outline-3 target:outline-brand hover:-translate-y-1.5"
              >
                <span className="mb-4 grid size-12.5 place-items-center rounded-full bg-brand text-white">
                  <Icon name={c.icon} size={24} />
                </span>
                <h3 className="mb-2 text-xl font-bold">{c.title}</h3>
                <p className="mb-4 text-[0.9rem] text-muted">{c.text}</p>
                <Link to="/contact#quote" className="link-arrow">
                  Get a Quote <Icon name="arrow" size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

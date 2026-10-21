import { useEffect, useState } from 'react'
import Icon from '../components/Icon'
import { CtaBanner, PageHero, SectionHead } from '../components/Sections'
import { gallery, galleryCategories, IMAGES } from '../data/site'

const tag = 'inline-block rounded-sm bg-brand px-2.5 py-1 text-[0.72rem] font-bold tracking-wider text-white uppercase'

type Item = (typeof gallery)[number]

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState<Item | null>(null)
  const list = filter === 'All' ? gallery : gallery.filter((g) => g.category === filter)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our Products Up Close"
        text="Real samples, product photos and brochures from Sunkaine Plastic Industries."
        image={IMAGES.sample30}
        crumbs={[{ label: 'Gallery' }]}
      />

      <section className="py-16 md:py-22.5">
        <div className="container-x">
          <SectionHead
            eyebrow="Photos"
            title="See the Quality for Yourself"
            action={
              <div className="flex flex-wrap gap-2" role="tablist">
                {galleryCategories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    role="tab"
                    aria-selected={filter === c}
                    onClick={() => setFilter(c)}
                    className={`rounded-full border px-4.5 py-2 text-sm font-semibold transition hover:border-brand hover:bg-brand hover:text-white ${
                      filter === c ? 'border-brand bg-brand text-white' : 'border-line bg-white text-body'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            }
          />
          <div className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((g) => (
              <button
                type="button"
                key={g.title}
                onClick={() => setActive(g)}
                className="group relative h-75 overflow-hidden rounded-md bg-ink text-left"
              >
                <img src={g.image} alt={g.title} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-b from-transparent to-[#08100b]/92 px-5.5 pt-15 pb-5 text-[#d5ddd7]">
                  <span className={tag}>{g.category}</span>
                  <h3 className="mt-2 mb-1 text-xl font-bold text-white">{g.title}</h3>
                  <p className="text-sm">{g.text}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-100 grid place-items-center bg-[#050806]/88 p-6"
        >
          <div className="relative w-full max-w-200 overflow-hidden rounded-md bg-white" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute top-3 right-3 grid size-10.5 place-items-center rounded-full bg-white"
            >
              <Icon name="close" size={22} />
            </button>
            <img src={active.image} alt={active.title} className="max-h-[75vh] w-full bg-ink object-contain" />
            <div className="px-6 py-5">
              <span className={tag}>{active.category}</span>
              <h3 className="mt-2.5 mb-1 text-xl font-bold">{active.title}</h3>
              <p className="text-muted">{active.text}</p>
            </div>
          </div>
        </div>
      )}

      <CtaBanner />
    </>
  )
}

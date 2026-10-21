import Icon from '../components/Icon'
import { PageHero, QuoteForm } from '../components/Sections'
import { company, IMAGES } from '../data/site'

const cards = [
  { icon: 'phone', title: 'Call Us', value: company.phone, href: company.phoneHref },
  { icon: 'mail', title: 'Email Us', value: company.email, href: `mailto:${company.email}` },
  { icon: 'whatsapp', title: 'WhatsApp', value: `Chat with ${company.owner}`, href: company.whatsapp, external: true },
  { icon: 'file', title: 'GSTIN', value: company.gstin },
  { icon: 'pin', title: 'Visit Us', value: company.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`, external: true },
]

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Order"
        text="Share your requirements and get prices and availability from our team."
        image={IMAGES.sample25}
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="py-16 md:py-22.5">
        <div className="container-x grid gap-5.5 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((c) => {
            const Tag = c.href ? 'a' : 'div'
            return (
              <Tag
                key={c.title}
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noreferrer' : undefined}
                className="rounded-md border border-line px-5 py-8.5 text-center transition hover:border-brand hover:shadow-card"
              >
                <span className="mb-4.5 inline-grid size-13.5 place-items-center rounded-full bg-brand/8 text-brand">
                  <Icon name={c.icon} size={24} />
                </span>
                <h3 className="mb-1 text-xl font-bold">{c.title}</h3>
                <p className="wrap-break-word text-muted">{c.value}</p>
              </Tag>
            )
          })}
        </div>
      </section>

      <section className="bg-soft py-16 md:py-22.5" id="quote">
        <div className="container-x grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-md bg-white px-5 py-7 shadow-card sm:p-10">
            <span className="eyebrow">Get a Free Quote</span>
            <h2 className="h2 mb-3">Send Us Your Requirements</h2>
            <p className="mb-6.5 text-muted">Fill in the form and send it on WhatsApp for a quick reply from our team.</p>
            <QuoteForm />
          </div>
          <div className="flex flex-col overflow-hidden rounded-md bg-white shadow-card">
            <iframe
              title="Sunkaine Plastic Industries location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-85 w-full flex-1 border-0"
            />
            <div className="px-7 py-6">
              <h4 className="mb-2 flex items-center gap-2 font-bold">
                <Icon name="pin" size={18} className="text-brand" /> Factory Address
              </h4>
              <p className="text-muted">{company.address}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

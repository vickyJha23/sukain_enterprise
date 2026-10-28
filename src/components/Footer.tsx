import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import Logo from './Logo'
import { company, footer, type PageLink } from '../data/site'

function Col({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="mb-4.5 text-base text-white">{title}</h4>
      <ul className="grid gap-2.5">{children}</ul>
    </div>
  )
}

const year = new Date().getFullYear()
const linkCls = 'hover:text-white'

const links = (items: PageLink[]) =>
  items.map((l) => (
    <li key={l.to}><Link className={linkCls} to={l.to}>{l.label}</Link></li>
  ))

export default function Footer() {
  return (
    <footer className="bg-ink pt-[70px] text-[0.92rem] text-[#a7b0aa]">
      <div className="container-x grid grid-cols-2 gap-10 pb-12 md:grid-cols-3 xl:grid-cols-[1.5fr_1fr_1fr_1fr_1.4fr]">
        <div className="col-span-2 md:col-span-3 xl:col-span-1">
          <div className="mb-5 inline-block rounded-md bg-white px-4 py-2.5">
            <Logo />
          </div>
          <p className="mb-4">{footer.about}</p>
          <div className="flex flex-wrap gap-3">
            <a href={company.whatsapp} target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm">
              <Icon name="whatsapp" size={16} /> {footer.whatsappButton}
            </a>
            <a
              href={company.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow us on Instagram"
              className="btn btn-outline-light btn-sm"
            >
              <Icon name="instagram" size={16} /> {footer.instagramButton}
            </a>
          </div>
        </div>

        <Col title={footer.headings.quickLinks}>{links(footer.quickLinks)}</Col>
        <Col title={footer.headings.products}>{links(footer.productLinks)}</Col>
        <Col title={footer.headings.crops}>{links(footer.cropLinks)}</Col>

        <Col title={footer.headings.contact}>
          <li className="flex gap-2.5"><Icon name="phone" size={16} className="mt-1 shrink-0 text-[#7fcf8f]" /><a className={linkCls} href={company.phoneHref}>{company.phone}</a></li>
          <li className="flex gap-2.5 break-all"><Icon name="mail" size={16} className="mt-1 shrink-0 text-[#7fcf8f]" /><a className={linkCls} href={`mailto:${company.email}`}>{company.email}</a></li>
          <li className="flex gap-2.5"><Icon name="pin" size={16} className="mt-1 shrink-0 text-[#7fcf8f]" /><span>{company.address}</span></li>
          <li className="flex gap-2.5"><Icon name="file" size={16} className="mt-1 shrink-0 text-[#7fcf8f]" /><span>GSTIN: {company.gstin}</span></li>
          <li className="flex gap-2.5"><Icon name="instagram" size={16} className="mt-1 shrink-0 text-[#7fcf8f]" /><a className={linkCls} href={company.instagram} target="_blank" rel="noreferrer">{company.instagramHandle}</a></li>
        </Col>
      </div>
      <div className="border-t border-white/10 py-5 text-sm">
        <div className="container-x flex flex-wrap justify-between gap-2.5">
          <span>© {year} {company.name}. All rights reserved.</span>
          <span>{footer.bottomLine}</span>
        </div>
      </div>
    </footer>
  )
}

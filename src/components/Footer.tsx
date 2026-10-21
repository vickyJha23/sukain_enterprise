import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import Logo from './Logo'
import { company, crops, products } from '../data/site'

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

export default function Footer() {
  return (
    <footer className="bg-ink pt-[70px] text-[0.92rem] text-[#a7b0aa]">
      <div className="container-x grid grid-cols-2 gap-10 pb-12 md:grid-cols-3 xl:grid-cols-[1.5fr_1fr_1fr_1fr_1.4fr]">
        <div className="col-span-2 md:col-span-3 xl:col-span-1">
          <div className="mb-5 inline-block rounded-md bg-white px-4 py-2.5">
            <Logo />
          </div>
          <p className="mb-4">
            Agricultural mulching film and UV stabilised weed mat, made in Bawal, Haryana. Quality today, green
            tomorrow.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={company.whatsapp} target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm">
              <Icon name="whatsapp" size={16} /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <Col title="Quick Links">
          <li><Link className={linkCls} to="/about">About Us</Link></li>
          <li><Link className={linkCls} to="/gallery">Gallery</Link></li>
          <li><Link className={linkCls} to="/technical-info#rate-list">Rate List</Link></li>
          <li><Link className={linkCls} to="/technical-info#faqs">FAQs</Link></li>
          <li><Link className={linkCls} to="/contact">Contact</Link></li>
        </Col>

        <Col title="Our Products">
          {products.map((p) => (
            <li key={p.slug}><Link className={linkCls} to={`/products/${p.slug}`}>{p.title}</Link></li>
          ))}
          <li><Link className={linkCls} to="/technical-info#specifications">Specifications</Link></li>
          <li><Link className={linkCls} to="/technical-info#laying-guide">Laying Guide</Link></li>
        </Col>

        <Col title="Crops">
          {crops.slice(0, 5).map((c) => (
            <li key={c.slug}><Link className={linkCls} to={`/crops#${c.slug}`}>{c.title}</Link></li>
          ))}
        </Col>

        <Col title="Contact">
          <li className="flex gap-2.5"><Icon name="phone" size={16} className="mt-1 shrink-0 text-[#7fcf8f]" /><a className={linkCls} href={company.phoneHref}>{company.phone}</a></li>
          <li className="flex gap-2.5 break-all"><Icon name="mail" size={16} className="mt-1 shrink-0 text-[#7fcf8f]" /><a className={linkCls} href={`mailto:${company.email}`}>{company.email}</a></li>
          <li className="flex gap-2.5"><Icon name="pin" size={16} className="mt-1 shrink-0 text-[#7fcf8f]" /><span>{company.address}</span></li>
          <li className="flex gap-2.5"><Icon name="file" size={16} className="mt-1 shrink-0 text-[#7fcf8f]" /><span>GSTIN: {company.gstin}</span></li>
        </Col>
      </div>
      <div className="border-t border-white/10 py-5 text-sm">
        <div className="container-x flex flex-wrap justify-between gap-2.5">
          <span>© {year} {company.name}. All rights reserved.</span>
          <span>Quality Today, Green Tomorrow · Made in India</span>
        </div>
      </div>
    </footer>
  )
}

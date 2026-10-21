import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Icon from './Icon'
import { company, products } from '../data/site'

const titles: Record<string, string> = {
  '/': 'Mulching Film & Weed Mat Manufacturer, Haryana',
  '/about': 'About Us',
  '/products': 'Our Products',
  '/crops': 'Crops We Serve',
  '/gallery': 'Gallery',
  '/technical-info': 'Rate List & Technical Info',
  '/contact': 'Contact Us',
}

function pageTitle(pathname: string) {
  const slug = pathname.match(/^\/products\/([^/]+)/)?.[1]
  const name = slug ? products.find((p) => p.slug === slug)?.title : titles[pathname.replace(/\/$/, '') || '/']
  return `${name ?? 'Page Not Found'} | ${company.name}`
}

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    document.title = pageTitle(pathname)
  }, [pathname])

  useEffect(() => {
    if (hash) {
      // wait a frame so the target section has rendered
      const t = setTimeout(() => {
        const el = document.getElementById(hash.slice(1))
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 60)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <a
        href={company.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-6 bottom-6 z-[60] grid size-[58px] place-items-center rounded-full bg-[#25d366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.45)] transition-transform hover:scale-110"
      >
        <Icon name="whatsapp" size={28} />
      </a>
    </>
  )
}

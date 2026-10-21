import { useEffect, useState, type FormEvent, type MouseEvent } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Icon from './Icon'
import Logo from './Logo'
import { company, crops, products } from '../data/site'

type NavItem = { to: string; label: string; children?: { to: string; label: string }[] }

const nav: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  {
    to: '/products',
    label: 'Our Products',
    children: products.map((p) => ({ to: `/products/${p.slug}`, label: p.title })),
  },
  {
    to: '/crops',
    label: 'Crops',
    children: crops.map((c) => ({ to: `/crops#${c.slug}`, label: c.title })),
  },
  { to: '/gallery', label: 'Gallery' },
  {
    to: '/technical-info',
    label: 'Technical Info',
    children: [
      { to: '/technical-info#rate-list', label: 'Rate List' },
      { to: '/technical-info#specifications', label: 'Product Specifications' },
      { to: '/technical-info#laying-guide', label: 'Laying Guide' },
      { to: '/technical-info#care', label: 'Storage & Care' },
      { to: '/technical-info#faqs', label: 'FAQs' },
    ],
  },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  // while the mobile menu is open: lock page scroll, close on Escape or when widening to desktop
  useEffect(() => {
    if (!open) return
    const desktop = window.matchMedia('(min-width: 1024px)')
    const close = () => {
      setOpen(false)
      setExpanded(null)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    const onChange = (e: MediaQueryListEvent) => e.matches && close()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onChange)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onChange)
    }
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenus = () => {
    setOpen(false)
    setExpanded(null)
    setSearchOpen(false)
  }

  // close the mobile menu when any link inside it is followed
  const onNavClick = (e: MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest('a')) closeMenus()
  }

  const runSearch = (e: FormEvent) => {
    e.preventDefault()
    closeMenus()
    const q = query.trim().toLowerCase()
    if (!q) return
    const product = products.find((p) => p.title.toLowerCase().includes(q) || p.slug.includes(q))
    if (product) return navigate(`/products/${product.slug}`)
    if (/mulch|micron|film|silver/.test(q)) return navigate('/products/mulching-film')
    if (/weed|mat|gsm/.test(q)) return navigate('/products/weed-mat')
    const crop = crops.find((c) => c.title.toLowerCase().includes(q))
    if (crop) return navigate(`/crops#${crop.slug}`)
    if (/price|rate|cost/.test(q)) return navigate('/technical-info#rate-list')
    if (/photo|gallery|sample/.test(q)) return navigate('/gallery')
    if (/faq|spec|technical|lay|install|care/.test(q)) return navigate('/technical-info')
    navigate('/contact')
  }

  return (
    <>
      <div className="bg-ink text-[0.82rem] text-[#d3dad5]">
        <div className="container-x flex min-h-10 items-center justify-between">
          <div className="flex items-center gap-7">
            <span className="inline-flex items-center gap-2">
              <Icon name="pin" size={14} className="text-[#7fcf8f]" /> {company.location}
            </span>
            <a href={`mailto:${company.email}`} className="hidden items-center gap-2 hover:text-white md:inline-flex">
              <Icon name="mail" size={14} className="text-[#7fcf8f]" /> {company.email}
            </a>
          </div>
          <div className="flex items-stretch gap-7 self-stretch">
            <span className="hidden items-center xl:inline-flex">GSTIN: {company.gstin}</span>
            <a href={company.phoneHref} className="hidden items-center gap-2 hover:text-white sm:inline-flex">
              <Icon name="phone" size={14} className="text-[#7fcf8f]" /> {company.phone}
            </a>
            <Link to="/contact#quote" className="inline-flex items-center gap-2 bg-brand px-5 font-semibold text-white">
              Get a Quote <Icon name="arrow" size={14} />
            </Link>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b border-line bg-white transition-shadow ${scrolled ? 'shadow-[0_6px_24px_rgba(0,0,0,0.08)]' : ''}`}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-6 lg:h-[84px]">
          <Logo />

          <nav
            aria-label="Main"
            onClick={onNavClick}
            className={`max-lg:absolute max-lg:inset-x-0 max-lg:top-full max-lg:h-[calc(100dvh-72px)] max-lg:overflow-y-auto max-lg:bg-white max-lg:px-6 max-lg:pt-4 max-lg:pb-8 max-lg:shadow-pop max-lg:transition-[transform,visibility] max-lg:duration-300 ${
              open ? 'max-lg:visible max-lg:translate-x-0' : 'max-lg:pointer-events-none max-lg:invisible max-lg:translate-x-full'
            }`}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-1">
              {nav.map((item) => (
                <li key={item.to} className="group relative border-b border-line lg:border-0">
                  <div className="flex items-center justify-between">
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `relative flex flex-1 items-center gap-1 py-4 text-base font-semibold hover:text-brand lg:px-2 lg:py-[30px] lg:text-[0.85rem] xl:px-3 xl:text-[0.9rem] after:absolute after:inset-x-3 after:bottom-[22px] after:hidden after:h-0.5 after:origin-center after:bg-brand after:transition-transform lg:after:block hover:after:scale-x-100 ${
                          isActive ? 'text-brand after:scale-x-100' : 'text-ink after:scale-x-0'
                        }`
                      }
                    >
                      {item.label}
                      {item.children && <Icon name="chevronDown" size={14} className="hidden lg:block" />}
                    </NavLink>
                    {item.children && (
                      <button
                        type="button"
                        className="grid size-10 place-items-center rounded bg-soft lg:hidden"
                        aria-label={`Toggle ${item.label}`}
                        aria-expanded={expanded === item.to}
                        onClick={() => setExpanded(expanded === item.to ? null : item.to)}
                      >
                        <Icon name="chevronDown" size={18} className={`transition-transform ${expanded === item.to ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  {item.children && (
                    <ul
                      className={`${expanded === item.to ? 'block' : 'hidden'} pb-2.5 pl-3 lg:invisible lg:absolute lg:top-full lg:left-0 lg:block lg:min-w-60 lg:translate-y-2.5 lg:rounded-b-md lg:border-t-[3px] lg:border-brand lg:bg-white lg:py-2.5 lg:pl-0 lg:opacity-0 lg:shadow-pop lg:transition-all lg:group-hover:visible lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:visible lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100`}
                    >
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <Link
                            to={c.to}
                            className="block px-5 py-2 text-[0.88rem] text-body transition-all hover:bg-soft hover:pl-6 hover:text-brand"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Link to="/contact#quote" className="btn btn-primary mt-6 flex lg:hidden">
              Get a Free Quote <Icon name="arrow" size={16} />
            </Link>
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              className="grid size-[42px] place-items-center rounded-full text-ink hover:bg-soft"
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <Icon name={searchOpen ? 'close' : 'search'} size={20} />
            </button>
            <button
              type="button"
              className="grid size-[42px] place-items-center rounded-full text-ink hover:bg-soft lg:hidden"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? 'close' : 'menu'} size={24} />
            </button>
          </div>
        </div>

        {searchOpen && (
          <form className="border-t border-line bg-white" onSubmit={runSearch}>
            <div className="container-x flex items-center gap-3 py-3.5 text-muted">
              <Icon name="search" size={18} />
              <input
                autoFocus
                type="search"
                placeholder="Search products, crops, prices, FAQs…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="min-w-0 flex-1 py-2 text-base text-body outline-none"
              />
              <button type="submit" className="btn btn-primary btn-sm">
                Search
              </button>
            </div>
          </form>
        )}
      </header>
    </>
  )
}

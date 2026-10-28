// all photos are served locally from /public/assets
export const IMAGES = {
  logo: '/assets/sunkaine-logo.png',
  mulchRoll: '/assets/stock/mulch-asparagus-rows.jpg',
  weedMatRoll: '/assets/stock/weed-mat-texture.jpg',
  chilliField: '/assets/stock/mulch-chilli-field.jpg',
  strawberrySilver: '/assets/stock/mulch-strawberry-silver.jpg',
  strawberryBlack: '/assets/stock/mulch-strawberry-black.jpg',
  vegetablesWhite: '/assets/stock/mulch-vegetables-white.jpg',
  dripLine: '/assets/stock/mulch-drip-line.jpg',
  cropCover: '/assets/crop-cover-product.jpg',
  cropCoverField: '/assets/crop-cover-field.jpg',
  cropCoverTunnels: '/assets/crop-cover-tunnels.jpg',
  cropCoverVineyard: '/assets/crop-cover-vineyard.jpg',
}

export const company = {
  name: 'Sunkaine Plastic Industries',
  tagline: 'Quality today, green tomorrow.',
  owner: 'Mukam Agarwal',
  phone: '+91 70826 78221',
  phoneHref: 'tel:+917082678221',
  whatsapp: 'https://wa.me/917082678221',
  email: 'skpibawal2@gmail.com',
  instagram: 'https://www.instagram.com/mk7857914',
  instagramHandle: '@mk7857914',
  location: 'Bawal, Haryana',
  address: 'Plot No. 126, Sec-9, Phase 3, Industrial Model Twp, Bawal, Haryana 123501',
  gstin: '06AEFFS8441A1Z8',
  registered: '30/09/2020',
}

export const heroSlides = [
  { image: IMAGES.mulchRoll, position: 'center 60%', caption: 'Mulching Film for Water-Saving Farms' },
  { image: IMAGES.cropCoverField, position: 'center 60%', caption: 'UV Crop Cover Protecting Young Plants' },
  { image: IMAGES.cropCover, position: 'center 65%', caption: 'UV Crop Cover, 17 to 30 GSM' },
  { image: IMAGES.chilliField, position: 'center 60%', caption: 'Silver Mulch Film with Drip Irrigation' },
  { image: IMAGES.strawberrySilver, position: 'center 50%', caption: 'Clean, Healthy Fruit on Mulch Film' },
]

export const features = [
  { icon: 'shield', label: 'Durable & Long Life' },
  { icon: 'droplet', label: 'Moisture Retention' },
  { icon: 'leaf', label: 'Weed Control' },
  { icon: 'sun', label: 'UV Stabilised Covers' },
  { icon: 'rupee', label: 'Cost Effective' },
]

export const stats = [
  { icon: 'layers', value: '18–30', label: 'Micron Film Options' },
  { icon: 'grid', value: '90–120', label: 'GSM Weed Mat' },
  { icon: 'sun', value: '17–30', label: 'GSM Crop Cover' },
  { icon: 'badge', value: '2020', label: 'GST Registered Since' },
]

export type Product = {
  slug: string
  title: string
  icon: string
  image: string
  short: string
  intro: string
  benefits: string[]
  idealFor: { icon: string; label: string }[]
  specs: [string, string][]
}

export const products: Product[] = [
  {
    slug: 'mulching-film',
    title: 'Mulching Film',
    icon: 'layers',
    image: IMAGES.mulchRoll,
    short: 'Silver/Black mulch film in 18 to 30 micron for better soil health, higher yield and moisture retention.',
    intro:
      'Sunkaine mulching film covers raised beds to hold moisture in the soil, block weed growth and keep the root zone at a steady temperature. The silver face reflects light back onto the plant, while the black face stays down to stop sunlight from reaching weeds. It is available in five thicknesses and three roll lengths.',
    benefits: [
      'Retains soil moisture and reduces irrigation water',
      'Blocks sunlight to suppress weed growth',
      'Reflective silver surface helps keep sucking pests away',
      'Reduces soil erosion and fertiliser run-off',
      'Cleaner fruit with less soil contact and rot',
      'Steadier root-zone temperature through day and night',
    ],
    idealFor: [
      { icon: 'leaf', label: 'Vegetables' },
      { icon: 'flame', label: 'Chilli & Capsicum' },
      { icon: 'apple', label: 'Tomato' },
      { icon: 'drop', label: 'Melons' },
      { icon: 'flower', label: 'Strawberry' },
      { icon: 'sprout', label: 'Cucumber' },
    ],
    specs: [
      ['Thickness', '18, 20, 21, 25 & 30 micron'],
      ['Colour', 'Silver / Black (dual colour)'],
      ['Roll length', '400 m, 800 m, 1000 m'],
      ['Width', 'Available on request'],
    ],
  },
  {
    slug: 'weed-mat',
    title: 'Weed Mat',
    icon: 'grid',
    image: IMAGES.weedMatRoll,
    short: 'UV stabilised woven ground cover in 90 to 120 GSM that controls weeds, improves soil health and lasts long.',
    intro:
      'Sunkaine weed mat is a UV stabilised woven ground cover that stops weeds while letting water and air pass through to the soil. Printed guide lines make planting rows straight and quick, and the woven fabric is built for long outdoor life in orchards, nurseries and polyhouses.',
    benefits: [
      'Long-term weed control without chemicals',
      'Water and air permeable woven fabric',
      'UV stabilised for long outdoor life',
      'Printed guide lines for accurate row spacing',
      'Keeps pots and beds clean and mud-free',
      'Saves labour spent on manual weeding',
    ],
    idealFor: [
      { icon: 'tree', label: 'Orchards' },
      { icon: 'sprout', label: 'Nurseries' },
      { icon: 'home', label: 'Polyhouses' },
      { icon: 'flower', label: 'Floriculture' },
      { icon: 'leaf', label: 'Landscaping' },
      { icon: 'grid', label: 'Pathways' },
    ],
    specs: [
      ['Weight', '90, 100, 110 & 120 GSM'],
      ['Width', '2.5 ft, 3.5 ft, 5 ft, 6 ft'],
      ['Roll length', '100 m'],
      ['Treatment', 'UV stabilised'],
      ['Colour', 'Black with green guide lines'],
    ],
  },
  {
    slug: 'uv-crop-cover',
    title: 'UV Crop Cover',
    icon: 'sun',
    image: IMAGES.cropCover,
    short: 'Lightweight UV crop cover in 17 to 30 GSM that shields young plants from cold, insects and harsh weather.',
    intro:
      'Sunkaine UV crop cover is a lightweight white fabric laid directly over crops or stretched over low tunnel hoops. It lets sunlight, air and water reach the plants while protecting them from cold nights, insects, birds and strong wind. It comes in five weights, three widths and four roll lengths, priced by weight at ₹110 per kg.',
    benefits: [
      'Protects seedlings from cold nights and frost',
      'Keeps insects and birds off young plants',
      'Lets light, air and water pass through',
      'Shelters crops from strong wind and heavy rain',
      'Supports earlier, more even crop growth',
      'Lightweight and easy to lay by hand or on hoops',
    ],
    idealFor: [
      { icon: 'drop', label: 'Melons' },
      { icon: 'leaf', label: 'Vegetables' },
      { icon: 'apple', label: 'Grapes & Fruit' },
      { icon: 'flower', label: 'Strawberry' },
      { icon: 'sprout', label: 'Nurseries' },
      { icon: 'home', label: 'Low Tunnels' },
    ],
    specs: [
      ['Weight', '17, 20, 23, 25 & 30 GSM'],
      ['Width', '5.25 ft, 6.89 ft, 10.50 ft'],
      ['Roll length', '200 m, 400 m, 500 m, 800 m'],
      ['Treatment', 'UV stabilised'],
      ['Colour', 'White'],
      ['Price', '₹110 per kg (price = roll weight × ₹110)'],
    ],
  },
]

export const mulchLengths = ['400 mtr', '800 mtr', '1000 mtr']
export const mulchRates: [micron: number, rates: number[]][] = [
  [18, [650, 1250, 1350]],
  [20, [850, 1450, 1850]],
  [21, [950, 1650, 2500]],
  [25, [1350, 1850, 2850]],
  [30, [1550, 2450, 3200]],
]

export const weedMatRates: [gsm: number, width: string, price: number][] = [
  [90, '2.5 Ft', 950],
  [90, '3.5 Ft', 1250],
  [90, '5 Ft', 1450],
  [90, '6 Ft', 1550],
  [100, '2.5 Ft', 1150],
  [100, '3.5 Ft', 1450],
  [100, '5 Ft', 1650],
  [100, '6 Ft', 1850],
  [110, '2.5 Ft', 1450],
  [110, '3.5 Ft', 1650],
  [110, '5 Ft', 1850],
  [110, '6 Ft', 2150],
  [120, '2.5 Ft', 1650],
  [120, '3.5 Ft', 1900],
]

export const rupee = (n: number) => '₹' + n.toLocaleString('en-IN')

// UV crop cover is sold by weight: roll weight (kg) = GSM × length (m) × width (m) / 1000
export const cropCoverRate = 110
export const cropCoverGsm = [17, 20, 23, 25, 30]
export const cropCoverLengths = [200, 400, 500, 800]
export const cropCoverWidths: [ft: string, metres: number][] = [
  ['5.25', 1.6],
  ['6.89', 2.1],
  ['10.50', 3.2],
]
export const cropCoverRows = (gsm: number) =>
  cropCoverWidths.flatMap(([ft, m]) =>
    cropCoverLengths.map((length) => {
      const weight = Math.round(gsm * length * m) / 1000
      return { length, width: ft, weight, total: Math.round(weight * cropCoverRate * 100) / 100 }
    }),
  )
export const rupee2 = (n: number) =>
  '₹' + n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

export const crops = [
  { slug: 'vegetables', title: 'Vegetables', icon: 'leaf', text: 'Brinjal, cauliflower, cabbage and other bed-grown vegetables get cleaner beds and steadier moisture.' },
  { slug: 'chilli-capsicum', title: 'Chilli & Capsicum', icon: 'flame', text: 'Silver/black film helps keep thrips and aphids away from young plants and saves irrigation water.' },
  { slug: 'tomato', title: 'Tomato', icon: 'apple', text: 'Fruit stays off wet soil, reducing rot, and weed-free beds mean stronger, healthier plants.' },
  { slug: 'melons', title: 'Melons & Cucumber', icon: 'drop', text: 'Watermelon, muskmelon and cucumber benefit from warm, moist beds, and crop cover protects young vines from cold and insects.' },
  { slug: 'strawberry', title: 'Strawberry', icon: 'flower', text: 'Mulch film keeps berries clean and dry, the standard practice for quality strawberry beds.' },
  { slug: 'orchards', title: 'Orchards & Vineyards', icon: 'tree', text: 'Weed mat around fruit trees cuts weeding labour, and UV crop cover shelters grape rows and young fruit from weather and birds.' },
  { slug: 'nurseries', title: 'Nurseries', icon: 'sprout', text: 'Weed mat keeps nursery floors clean, drained and easy to organise with printed guide lines.' },
  { slug: 'polyhouse', title: 'Polyhouse & Tunnels', icon: 'home', text: 'Mulch film, weed mat and UV crop cover all suit protected cultivation and low tunnels, where clean beds and a steady climate matter most.' },
]

export const process = [
  { title: 'Bed Preparation', sub: '& Levelling', icon: 'tractor', text: 'Plough, level and form raised beds. Remove stones and sharp stubble that could puncture the film.' },
  { title: 'Drip Line', sub: 'Installation', icon: 'droplet', text: 'Lay drip laterals along the bed before covering it, so water reaches the roots under the film.' },
  { title: 'Laying the Film', sub: 'Silver Side Up', icon: 'layers', text: 'Stretch the film tight over the bed with the silver side facing up, ideally in the cool morning.' },
  { title: 'Anchoring', sub: '& Hole Punching', icon: 'ruler', text: 'Bury both edges in soil to hold the film, then punch planting holes at your crop spacing.' },
  { title: 'Planting', sub: '& Care', icon: 'sprout', text: 'Transplant seedlings through the holes and irrigate through the drip line for the season.' },
]

// stock photos from the internet, all free to use; `credit` is shown under the photo in the gallery
export const STOCK = {
  asparagusRows: {
    image: '/assets/stock/mulch-asparagus-rows.jpg',
    credit: 'Photo: Flickr, CC0 (public domain)',
  },
  chilliField: {
    image: IMAGES.chilliField,
    credit: 'Photo: Srimathiv1995, Wikimedia Commons, CC BY-SA 4.0',
  },
  strawberrySilver: {
    image: IMAGES.strawberrySilver,
    credit: 'Photo: USDA NRCS, public domain',
  },
  strawberryBlack: {
    image: IMAGES.strawberryBlack,
    credit: 'Photo: Hayan Alhasan, Wikimedia Commons, CC BY-SA 4.0',
  },
  zucchini: {
    image: '/assets/stock/mulch-zucchini.jpg',
    credit: 'Photo: USDA, public domain',
  },
  dripLine: {
    image: IMAGES.dripLine,
    credit: 'Photo: USDA, public domain',
  },
  vegetablesWhite: {
    image: IMAGES.vegetablesWhite,
    credit: 'Photo: Wikimedia Commons, public domain',
  },
}

export type GalleryItem = { title: string; category: string; text: string; image: string; credit?: string }

export const gallery: GalleryItem[] = [
  { title: 'Mulch Film in the Field', category: 'Mulching Film', text: 'Long rows of mulched beds', ...STOCK.asparagusRows },
  { title: 'Chilli on Silver Mulch', category: 'Mulching Film', text: 'Silver mulch with drip irrigation', ...STOCK.chilliField },
  { title: 'Strawberries on Silver Mulch', category: 'Mulching Film', text: 'Clean, dry fruit off the soil', ...STOCK.strawberrySilver },
  { title: 'Strawberries on Black Mulch', category: 'Mulching Film', text: 'Weed-free strawberry beds', ...STOCK.strawberryBlack },
  { title: 'Zucchini on Mulch Film', category: 'Mulching Film', text: 'Healthy vines, no weeds', ...STOCK.zucchini },
  { title: 'Drip Line Under Mulch', category: 'Mulching Film', text: 'Water goes straight to the roots', ...STOCK.dripLine },
  { title: 'Vegetables on White Mulch', category: 'Mulching Film', text: 'Mulched rows across a whole field', ...STOCK.vegetablesWhite },
  { title: 'Weed Mat Weave', category: 'Weed Mat', text: 'Woven fabric with green guide lines', image: IMAGES.weedMatRoll },
  { title: 'UV Crop Cover in the Field', category: 'Crop Cover', text: 'Covering young plants row by row', image: IMAGES.cropCoverField },
  { title: 'UV Crop Cover Roll', category: 'Crop Cover', text: 'Rolls, sheets and tunnel hoops', image: IMAGES.cropCover },
  { title: 'Low Tunnel Covers', category: 'Crop Cover', text: 'Crop cover over hoop tunnels', image: IMAGES.cropCoverTunnels },
  { title: 'Vineyard Protection', category: 'Crop Cover', text: 'Cover over grape rows', image: IMAGES.cropCoverVineyard },
]
export const galleryCategories = ['All', ...new Set(gallery.map((g) => g.category))]

export const specs = [
  ['Property', 'Mulching Film', 'Weed Mat', 'UV Crop Cover'],
  ['Thickness / weight', '18, 20, 21, 25, 30 micron', '90, 100, 110, 120 GSM', '17, 20, 23, 25, 30 GSM'],
  ['Colour', 'Silver / Black', 'Black with green guide lines', 'White'],
  ['Roll length', '400 m, 800 m, 1000 m', '100 m', '200, 400, 500, 800 m'],
  ['Width', 'On request', '2.5, 3.5, 5, 6 ft', '5.25, 6.89, 10.50 ft'],
  ['Water permeable', 'No (use with drip)', 'Yes', 'Yes'],
  ['UV stabilised', '—', 'Yes', 'Yes'],
  ['Pricing', 'Per roll', 'Per roll', '₹110 per kg'],
  ['Typical use', 'Seasonal vegetable & fruit beds', 'Orchards, nurseries, polyhouses', 'Cold & insect protection, low tunnels'],
]

export const care = [
  { title: 'Storage', text: 'Keep rolls in a cool, shaded place away from direct sun and sharp objects until use.' },
  { title: 'Handling', text: 'Unroll by hand or with a mulch layer. Avoid dragging rolls over rough ground.' },
  { title: 'In the Field', text: 'Keep edges buried so wind cannot lift the film. Repair small tears with tape.' },
  { title: 'After Harvest', text: 'Lift used film and dispose of it responsibly through local plastic collection.' },
]

export const faqs = [
  {
    q: 'Which micron mulch film should I choose?',
    a: '18–21 micron suits short-duration vegetable crops. 25 micron is a good all-round choice for most seasonal crops, and 30 micron is best for long-duration crops or rough, stony fields.',
  },
  {
    q: 'Which side of the silver/black film faces up?',
    a: 'Silver side up. The silver face reflects light and heat and helps keep sucking pests away, while the black face blocks sunlight so weeds cannot grow underneath.',
  },
  {
    q: 'What widths are available for mulching film?',
    a: 'Please call us with your bed width and we will confirm the sizes available for your order.',
  },
  {
    q: 'Does weed mat let water through?',
    a: 'Yes. Weed mat is a woven fabric, so rain and irrigation water pass through to the soil while sunlight is blocked.',
  },
  {
    q: 'How is UV crop cover priced?',
    a: 'UV crop cover is sold by weight at ₹110 per kg. Roll weight depends on GSM, width and length. For example, a 17 GSM, 5.25 ft, 200 m roll weighs 5.44 kg and costs ₹598.40. The full table is in the rate list.',
  },
  {
    q: 'Which GSM crop cover should I choose?',
    a: 'Lighter 17–20 GSM cover suits laying directly over crops and insect protection. Heavier 23–30 GSM cover gives more protection from cold and lasts longer on low tunnel hoops.',
  },
  {
    q: 'Are the prices on the rate list final?',
    a: 'The rate list shows our standard price per roll. Prices may change with raw material costs, so please call to confirm current rates, bulk discounts and delivery.',
  },
  {
    q: 'Do you supply dealers and bulk buyers?',
    a: 'Yes. We welcome dealers, distributors and large farms. Send an enquiry or call us for dealer pricing.',
  },
  {
    q: 'Do you provide a GST invoice?',
    a: `Yes. Sunkaine Plastic Industries is GST registered (GSTIN ${company.gstin}).`,
  },
]

export const values = [
  { icon: 'badge', title: 'Quality Material', text: 'Carefully selected raw material for consistent thickness and strength.' },
  { icon: 'ruler', title: 'Consistent Sizing', text: 'Accurate micron, GSM and roll length on every roll we ship.' },
  { icon: 'rupee', title: 'Fair Pricing', text: 'Transparent rate list with factory-direct prices.' },
  { icon: 'truck', title: 'Trusted Partner', text: 'Dependable dispatch from Bawal, Haryana for farmers and dealers.' },
]

export const requirements = [
  'Mulching Film',
  'Weed Mat',
  'UV Crop Cover',
  'Multiple Products',
  'Dealer / Bulk Order',
  'Price Enquiry',
  'Not Sure – Need Advice',
]

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export type PageLink = { to: string; label: string }
export type NavItem = PageLink & { children?: PageLink[] }

export const technicalSections = [
  { id: 'specifications', label: 'Specifications' },
  { id: 'laying-guide', label: 'Laying Guide' },
  { id: 'care', label: 'Storage & Care' },
  { id: 'faqs', label: 'FAQs' },
]

export const navigation: NavItem[] = [
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
  {
    to: '/price-list',
    label: 'Price List',
    children: products.map((p) => ({ to: `/price-list#${p.slug}`, label: p.title })),
  },
  { to: '/gallery', label: 'Gallery' },
  {
    to: '/technical-info',
    label: 'Technical Info',
    children: technicalSections.map((s) => ({ to: `/technical-info#${s.id}`, label: s.label })),
  },
  { to: '/contact', label: 'Contact' },
]

export const quoteLink = { to: '/contact#quote', label: 'Get a Quote', mobileLabel: 'Get a Free Quote' }

export const searchPlaceholder = 'Search products, crops, prices, FAQs…'

// browser tab titles, combined with the company name in the Layout
export const pageTitles: Record<string, string> = {
  '/': 'Mulching Film, Weed Mat & UV Crop Cover Manufacturer, Haryana',
  '/about': 'About Us',
  '/products': 'Our Products',
  '/crops': 'Crops We Serve',
  '/gallery': 'Gallery',
  '/price-list': 'Price List',
  '/technical-info': 'Technical Info',
  '/contact': 'Contact Us',
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

export const footer = {
  about:
    'Agricultural mulching film, UV stabilised weed mat and UV crop cover, made in Bawal, Haryana. Quality today, green tomorrow.',
  quickLinks: [
    { to: '/about', label: 'About Us' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/price-list', label: 'Price List' },
    { to: '/technical-info#faqs', label: 'FAQs' },
    { to: '/contact', label: 'Contact' },
  ],
  productLinks: [
    ...products.map((p) => ({ to: `/products/${p.slug}`, label: p.title })),
    { to: '/technical-info#specifications', label: 'Specifications' },
    { to: '/technical-info#laying-guide', label: 'Laying Guide' },
  ],
  cropLinks: crops.slice(0, 5).map((c) => ({ to: `/crops#${c.slug}`, label: c.title })),
  bottomLine: 'Quality Today, Green Tomorrow · Made in India',
  headings: { quickLinks: 'Quick Links', products: 'Our Products', crops: 'Crops', contact: 'Contact' },
  whatsappButton: 'Chat on WhatsApp',
  instagramButton: 'Instagram',
}

// ---------------------------------------------------------------------------
// Shared sections
// ---------------------------------------------------------------------------

export type Hero = { eyebrow: string; title: string; text: string; image: string; crumb: string }

export const pageHeroes = {
  about: {
    eyebrow: 'About Us',
    title: 'Quality Plastics for a Greener Tomorrow',
    text: 'Agricultural films and covers from Bawal, Haryana, made to help farmers grow more with less.',
    image: IMAGES.vegetablesWhite,
    crumb: 'About Us',
  },
  products: {
    eyebrow: 'Our Products',
    title: 'Mulching Film, Weed Mat & UV Crop Cover',
    text: 'Agricultural films and covers designed for better soil health, crop protection and higher yield.',
    image: IMAGES.cropCoverField,
    crumb: 'Our Products',
  },
  crops: {
    eyebrow: 'Crops We Serve',
    title: 'Made for Indian Farms',
    text: 'Our films and covers help a wide range of crops grow cleaner, healthier and stronger.',
    image: IMAGES.cropCoverTunnels,
    crumb: 'Crops',
  },
  gallery: {
    eyebrow: 'Gallery',
    title: 'Our Products Up Close',
    text: 'Mulching film, weed mat and UV crop cover at work in the field.',
    image: IMAGES.strawberryBlack,
    crumb: 'Gallery',
  },
  priceList: {
    eyebrow: 'Price List',
    title: 'Sunkaine Price List',
    text: 'Mulching film, weed mat and UV crop cover prices for every size, updated from our latest rate list.',
    image: IMAGES.chilliField,
    crumb: 'Price List',
  },
  technical: {
    eyebrow: 'Technical Info',
    title: 'Specifications & Laying Guide',
    text: 'Everything you need to choose, lay and look after the right product for your field.',
    image: IMAGES.dripLine,
    crumb: 'Technical Info',
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's Talk About Your Order",
    text: 'Share your requirements and get prices and availability from our team.',
    image: IMAGES.cropCoverField,
    crumb: 'Contact',
  },
} satisfies Record<string, Hero>

export const productHero = { eyebrow: 'Our Products', image: IMAGES.vegetablesWhite }

export const ctaBanner = {
  title: 'Planning your next crop season?',
  text: 'Talk to us for the right product, sizes and the best price on your order.',
  button: 'Get a Free Quote',
}

export const quoteSection = {
  title: 'Get a Free Quote',
  text: 'Tell us what you need and our team will get back to you with prices and availability.',
  image: IMAGES.mulchRoll,
  perks: [
    { icon: 'rupee', label: 'Factory Prices' },
    { icon: 'ruler', label: 'All Sizes' },
    { icon: 'badge', label: 'Quality Material' },
    { icon: 'truck', label: 'Timely Supply' },
  ],
}

export const quoteForm = {
  placeholders: {
    name: 'Your Name*',
    company: 'Farm / Shop Name',
    phone: 'Phone Number*',
    location: 'Village / City*',
    requirement: 'Select Requirement*',
    message: 'Quantity, micron / GSM, roll length (optional)',
  },
  errors: {
    name: 'Please enter your name',
    phone: 'Please enter a valid phone number',
    location: 'Please enter your location',
    requirement: 'Please select a requirement',
  },
  submit: 'Send Enquiry',
  thanks: 'Send your enquiry on WhatsApp and our team will reply with prices and availability.',
  whatsappButton: 'Send on WhatsApp',
  again: 'Send another enquiry',
  greeting: `Hello ${company.name}`,
}

export const rateNote = `Prices are per roll and may change with raw material costs. Call ${company.phone} to confirm current rates, bulk discounts and delivery.`
export const cropCoverNote = `Price = roll weight × ₹${cropCoverRate}/kg. All widths are separate rolls.`

// ---------------------------------------------------------------------------
// Page content
// ---------------------------------------------------------------------------

export const home = {
  hero: {
    eyebrow: 'Mulching Film · Weed Mat · UV Crop Cover',
    titleLines: ['Quality Today', 'Green', 'Tomorrow'],
    highlightLine: 1,
    text: 'Sunkaine Plastic Industries makes mulching film, weed mat and UV crop cover in Bawal, Haryana, helping farmers save water, control weeds, protect young plants and grow bigger harvests.',
    primary: 'Get a Free Quote',
    secondary: 'WhatsApp Us',
  },
  about: {
    eyebrow: 'About Sunkaine Plastic Industries',
    title: 'Quality Plastic Solutions for a Greener Tomorrow',
    text: `Sunkaine Plastic Industries is an agricultural plastics business in the Industrial Model Township, Bawal, Haryana, GST registered since 2020. Led by ${company.owner}, we supply mulching film, weed mat and UV crop cover with consistent thickness, quality raw material and honest pricing for farmers and dealers.`,
    image: IMAGES.cropCoverField,
    imageAlt: 'Sunkaine UV crop cover laid over young plants in the field',
    caption: 'Reliable Film for Every Crop Season',
    link: { to: '/about', label: 'Know More' },
  },
  products: {
    eyebrow: 'Our Products',
    title: 'Mulching Film, Weed Mat & Crop Cover',
    text: 'Agricultural films designed for better soil health, higher yield and long field life.',
    link: { to: '/products', label: 'View All Products' },
  },
  crops: {
    eyebrow: 'Crops We Serve',
    title: 'Made for Indian Farms',
    link: { to: '/crops', label: 'View All Crops' },
  },
  process: {
    eyebrow: 'Laying Guide',
    title: 'From Bed Preparation to Planting',
    text: 'Five simple steps to lay mulching film for the best results.',
  },
  rates: {
    eyebrow: 'Rate List',
    title: 'Mulching Film Prices',
    text: 'Silver/Black mulching film, price per roll. Weed mat and UV crop cover prices are on the Price List page.',
    link: { to: '/price-list', label: 'Full Price List' },
  },
  gallery: {
    eyebrow: 'Gallery',
    title: 'Our Products Up Close',
    text: 'Our products at work in farms and fields.',
    link: { to: '/gallery', label: 'View Gallery' },
  },
}

export const about = {
  intro: {
    eyebrow: 'Who We Are',
    title: 'A Trusted Name in Agricultural Plastic Films',
    image: IMAGES.chilliField,
    imageAlt: 'Chilli crop growing on silver mulch film with drip irrigation',
    badge: { value: '2020', label: 'GST Registered Since' },
    paragraphs: [
      'Sunkaine Plastic Industries is based at Plot No. 126, Sector 9, Industrial Model Township, Bawal, Haryana. We make and supply silver/black mulching film from 18 to 30 micron, UV stabilised weed mat from 90 to 120 GSM, and UV crop cover from 17 to 30 GSM.',
      `Led by ${company.owner}, we focus on what matters in the field: consistent thickness, film that lays flat and doesn't tear, and fair prices. Farmers, dealers and large growers can call us directly for orders and advice.`,
    ],
    checklist: [
      'Silver/Black mulching film, 18–30 micron',
      'UV stabilised weed mat, 90–120 GSM',
      `UV crop cover, 17–30 GSM, sold at ₹${cropCoverRate} per kg`,
      `GST registered business (GSTIN ${company.gstin})`,
    ],
    button: 'Talk to Our Team',
  },
  missionVision: [
    {
      icon: 'target',
      title: 'Our Mission',
      text: 'To give every farmer access to quality mulching film, weed mat and crop cover at a fair price, so they can save water, reduce weeding and grow better crops.',
    },
    {
      icon: 'eye',
      title: 'Our Vision',
      text: 'Quality today, green tomorrow: to be a trusted name in agricultural plastics, known for products that perform season after season.',
    },
  ],
  values: { eyebrow: 'Why Choose Us', title: 'What Sets Us Apart' },
  business: {
    eyebrow: 'Business Details',
    title: 'Registered & Verified',
    rows: [
      ['Legal Name', company.name],
      ['Proprietor', company.owner],
      ['GSTIN', company.gstin],
      ['Registered', company.registered],
      ['Address', company.address],
    ],
    image: IMAGES.cropCoverTunnels,
    imageAlt: 'Crop cover protecting young plants on low tunnels',
  },
  process: { eyebrow: 'Laying Guide', title: 'From Bed Preparation to Planting' },
}

export const productsPage = {
  eyebrow: 'What We Offer',
  title: 'The Right Product for Every Field',
  text: 'Choose the thickness, weight and roll size that suits your crop, season and field conditions.',
}

export const productDetail = {
  headings: {
    benefits: 'Key Benefits',
    idealFor: 'Ideal For',
    specs: 'Specifications',
    prices: 'Price List',
  },
  sidebar: {
    allProducts: 'All Products',
    resources: 'Technical Resources',
  },
  priceCard: {
    title: 'Price List',
    text: 'See every size and price for all our products on one page.',
    button: 'View Price List',
  },
  help: {
    title: 'Need Help Choosing?',
    text: "Tell us your crop and field, and we'll suggest the right size.",
  },
  resources: technicalSections.filter((s) => ['specifications', 'laying-guide', 'faqs'].includes(s.id)),
  process: { eyebrow: 'How to Use', title: 'Laying Guide' },
}

export const cropsPage = {
  eyebrow: 'Crop Benefits',
  title: 'Better Results in Every Field',
  text: "Every crop has its own needs for water, temperature and protection. Here's how our products help each one.",
  link: 'Get a Quote',
}

export const galleryPage = { eyebrow: 'Photos', title: 'See the Quality for Yourself' }

export const priceListPage = {
  intro: {
    eyebrow: 'Rate List',
    title: 'Clear Prices for Every Size',
    text: 'Standard factory prices for all Sunkaine products. Dealers and bulk buyers can ask for special pricing.',
  },
  print: 'Print / Save as PDF',
  quote: 'Get a Quote',
  // starting price and short facts shown above each product table
  products: {
    'mulching-film': {
      unit: 'Price per roll',
      from: 'From ₹650',
      facts: ['Silver / Black', '18–30 micron', '400, 800 & 1000 m rolls'],
    },
    'weed-mat': {
      unit: 'Price per 100 m roll',
      from: 'From ₹950',
      facts: ['UV stabilised', '90–120 GSM', '2.5–6 ft widths'],
    },
    'uv-crop-cover': {
      unit: `₹${cropCoverRate} per kg`,
      from: 'From ₹598.40',
      facts: ['UV stabilised', '17–30 GSM', '200–800 m rolls'],
    },
  } as Record<string, { unit: string; from: string; facts: string[] }>,
}

export const technical = {
  specifications: { eyebrow: 'Product Specifications', title: 'Compare Our Products' },
  layingGuide: { eyebrow: 'Laying Guide', title: 'How to Lay Mulching Film' },
  care: { eyebrow: 'Storage & Care', title: 'Get the Most From Every Roll' },
  faqs: {
    eyebrow: 'FAQs',
    title: 'Frequently Asked Questions',
    text: "Can't find your answer? Call or WhatsApp us and we'll help.",
  },
}

export const contactCards = [
  { icon: 'phone', title: 'Call Us', value: company.phone, href: company.phoneHref },
  { icon: 'mail', title: 'Email Us', value: company.email, href: `mailto:${company.email}` },
  { icon: 'whatsapp', title: 'WhatsApp', value: `Chat with ${company.owner}`, href: company.whatsapp, external: true },
  { icon: 'instagram', title: 'Instagram', value: company.instagramHandle, href: company.instagram, external: true },
  {
    icon: 'pin',
    title: 'Visit Us',
    value: company.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`,
    external: true,
  },
]

export const contactPage = {
  form: {
    eyebrow: 'Get a Free Quote',
    title: 'Send Us Your Requirements',
    text: 'Fill in the form and send it on WhatsApp for a quick reply from our team.',
  },
  mapTitle: `${company.name} location`,
  mapUrl: `https://www.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`,
  addressTitle: 'Factory Address',
}

export const notFound = {
  eyebrow: 'Error 404',
  title: 'Page Not Found',
  text: "The page you're looking for doesn't exist or has been moved.",
  button: 'Back to Home',
}

// all photos are served locally from /public/assets
export const IMAGES = {
  filmTexture: '/assets/film-texture.jpg',
  mulchRoll: '/assets/mulch-film-roll.jpg',
  weedMatRoll: '/assets/weed-mat-roll.jpg',
  sample20: '/assets/sample-20-micron.jpg',
  sample25: '/assets/sample-25-micron.jpg',
  sample30: '/assets/sample-30-micron.jpg',
  rateList: '/assets/sunkaine-rate-list.jpg',
  businessCard: '/assets/sunkaine-business-card.jpg',
}

export const company = {
  name: 'Sunkaine Plastic Industries',
  tagline: 'Quality today, green tomorrow.',
  owner: 'Mukam Agarwal',
  phone: '+91 70826 78221',
  phoneHref: 'tel:+917082678221',
  whatsapp: 'https://wa.me/917082678221',
  email: 'skpibawal2@gmail.com',
  location: 'Bawal, Haryana',
  address: 'Plot No. 126, Sec-9, Phase 3, Industrial Model Twp, Bawal, Haryana 123501',
  gstin: '06AEFFS8441A1Z8',
  registered: '30/09/2020',
}

export const heroSlides = [
  { image: IMAGES.sample30, position: 'center 55%', caption: '30 Micron Silver/Black Mulch Film' },
  { image: IMAGES.sample25, position: 'center 55%', caption: '25 Micron Film for Seasonal Crops' },
  { image: IMAGES.filmTexture, position: 'center', caption: 'Reflective Silver Surface, Weed-Blocking Black Base' },
]

export const features = [
  { icon: 'shield', label: 'Durable & Long Life' },
  { icon: 'droplet', label: 'Moisture Retention' },
  { icon: 'leaf', label: 'Weed Control' },
  { icon: 'sun', label: 'UV Stabilised Weed Mat' },
  { icon: 'rupee', label: 'Cost Effective' },
]

export const stats = [
  { icon: 'layers', value: '18–30', label: 'Micron Film Options' },
  { icon: 'grid', value: '90–120', label: 'GSM Weed Mat' },
  { icon: 'badge', value: '2020', label: 'GST Registered Since' },
  { icon: 'factory', value: 'Made in', label: 'India, Bawal (HR)' },
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

export const crops = [
  { slug: 'vegetables', title: 'Vegetables', icon: 'leaf', text: 'Brinjal, cauliflower, cabbage and other bed-grown vegetables get cleaner beds and steadier moisture.' },
  { slug: 'chilli-capsicum', title: 'Chilli & Capsicum', icon: 'flame', text: 'Silver/black film helps keep thrips and aphids away from young plants and saves irrigation water.' },
  { slug: 'tomato', title: 'Tomato', icon: 'apple', text: 'Fruit stays off wet soil, reducing rot, and weed-free beds mean stronger, healthier plants.' },
  { slug: 'melons', title: 'Melons & Cucumber', icon: 'drop', text: 'Watermelon, muskmelon and cucumber benefit from warm, moist beds and clean fruit contact.' },
  { slug: 'strawberry', title: 'Strawberry', icon: 'flower', text: 'Mulch film keeps berries clean and dry, the standard practice for quality strawberry beds.' },
  { slug: 'orchards', title: 'Orchards', icon: 'tree', text: 'Weed mat around fruit trees cuts weeding labour for many seasons while water still reaches the roots.' },
  { slug: 'nurseries', title: 'Nurseries', icon: 'sprout', text: 'Weed mat keeps nursery floors clean, drained and easy to organise with printed guide lines.' },
  { slug: 'polyhouse', title: 'Polyhouse', icon: 'home', text: 'Both products suit protected cultivation, where clean beds and controlled moisture matter most.' },
]

export const process = [
  { title: 'Bed Preparation', sub: '& Levelling', icon: 'tractor', text: 'Plough, level and form raised beds. Remove stones and sharp stubble that could puncture the film.' },
  { title: 'Drip Line', sub: 'Installation', icon: 'droplet', text: 'Lay drip laterals along the bed before covering it, so water reaches the roots under the film.' },
  { title: 'Laying the Film', sub: 'Silver Side Up', icon: 'layers', text: 'Stretch the film tight over the bed with the silver side facing up, ideally in the cool morning.' },
  { title: 'Anchoring', sub: '& Hole Punching', icon: 'ruler', text: 'Bury both edges in soil to hold the film, then punch planting holes at your crop spacing.' },
  { title: 'Planting', sub: '& Care', icon: 'sprout', text: 'Transplant seedlings through the holes and irrigate through the drip line for the season.' },
]

export const gallery = [
  { title: '30 Micron Mulch Film', category: 'Samples', text: 'Silver/Black, heavy duty', image: IMAGES.sample30 },
  { title: '25 Micron Mulch Film', category: 'Samples', text: 'Silver/Black, seasonal crops', image: IMAGES.sample25 },
  { title: '20 Micron Mulch Film', category: 'Samples', text: 'Silver/Black, short-duration crops', image: IMAGES.sample20 },
  { title: 'Mulching Film Roll', category: 'Products', text: 'Laid on planted beds', image: IMAGES.mulchRoll },
  { title: 'Weed Mat Roll', category: 'Products', text: 'UV stabilised with guide lines', image: IMAGES.weedMatRoll },
  { title: 'Rate List', category: 'Brochures', text: 'Mulching film & weed mat prices', image: IMAGES.rateList },
  { title: 'Business Card', category: 'Brochures', text: 'Contact details', image: IMAGES.businessCard },
]
export const galleryCategories = ['All', ...new Set(gallery.map((g) => g.category))]

export const specs = [
  ['Property', 'Mulching Film', 'Weed Mat'],
  ['Thickness / weight', '18, 20, 21, 25, 30 micron', '90, 100, 110, 120 GSM'],
  ['Colour', 'Silver / Black', 'Black with green guide lines'],
  ['Roll length', '400 m, 800 m, 1000 m', '100 m'],
  ['Width', 'On request', '2.5, 3.5, 5, 6 ft'],
  ['Water permeable', 'No (use with drip)', 'Yes'],
  ['UV stabilised', '—', 'Yes'],
  ['Typical use', 'Seasonal vegetable & fruit beds', 'Orchards, nurseries, polyhouses'],
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
  { icon: 'truck', title: 'Trusted Supply', text: 'Dependable dispatch from Bawal, Haryana for farmers and dealers.' },
]

export const requirements = [
  'Mulching Film',
  'Weed Mat',
  'Both Products',
  'Dealer / Bulk Order',
  'Price Enquiry',
  'Not Sure – Need Advice',
]

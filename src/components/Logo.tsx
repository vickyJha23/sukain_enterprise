import { Link } from 'react-router-dom'
import { company, IMAGES } from '../data/site'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`flex shrink-0 items-center ${className}`} aria-label={`${company.name} home`}>
      <img src={IMAGES.logo} alt={company.name} className="h-12 w-auto lg:h-14" width={772} height={360} />
    </Link>
  )
}

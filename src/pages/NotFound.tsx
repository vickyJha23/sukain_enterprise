import { Link } from 'react-router-dom'
import Icon from '../components/Icon'

export default function NotFound() {
  return (
    <section className="py-35 text-center">
      <div className="container-x">
        <span className="eyebrow">Error 404</span>
        <h1 className="mb-4 text-[clamp(2rem,5vw,3.4rem)] font-black">Page Not Found</h1>
        <p className="mb-7 text-muted">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home <Icon name="arrow" size={16} />
        </Link>
      </div>
    </section>
  )
}

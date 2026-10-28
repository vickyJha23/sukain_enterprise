import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { notFound } from '../data/site'

export default function NotFound() {
  return (
    <section className="py-35 text-center">
      <div className="container-x">
        <span className="eyebrow">{notFound.eyebrow}</span>
        <h1 className="mb-4 text-[clamp(2rem,5vw,3.4rem)] font-black">{notFound.title}</h1>
        <p className="mb-7 text-muted">{notFound.text}</p>
        <Link to="/" className="btn btn-primary">
          {notFound.button} <Icon name="arrow" size={16} />
        </Link>
      </div>
    </section>
  )
}

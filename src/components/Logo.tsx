import { Link } from 'react-router-dom'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`flex shrink-0 items-center gap-2.5 ${className}`} aria-label="Sunkaine Plastic Industries home">
      <svg viewBox="0 0 48 48" className="size-10 lg:size-12" aria-hidden="true">
        <path d="M4 38c10-7 26-7 40 0" fill="none" stroke="#8a5a2b" strokeWidth="4" strokeLinecap="round" />
        <path d="M8 44c9-5 23-5 32 0" fill="none" stroke="#8a5a2b" strokeWidth="3" strokeLinecap="round" opacity=".6" />
        <path d="M24 33V18" stroke="#1f7a34" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 22C16 22 11 16 11 8c8 0 13 5 13 14Z" fill="#2e9a45" />
        <path d="M24 19c0-9 5-15 14-15 0 9-5 15-14 15Z" fill="#1f7a34" />
      </svg>
      <span className="flex flex-col font-head leading-none">
        <span className="text-[1.05rem] font-black tracking-[0.04em] text-brand lg:text-[1.25rem]">SUNKAINE</span>
        <span className="mt-1 text-[0.56rem] font-bold tracking-[0.14em] text-earth lg:text-[0.64rem]">PLASTIC INDUSTRIES</span>
      </span>
    </Link>
  )
}

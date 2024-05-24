import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <img style={{ width: '28px' }} src="images/icon128.png" />
    </Link>
  )
}

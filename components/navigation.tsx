import Link from "next/link"

export function Navigation() {
  return (
    <nav className="bg-green-900 text-white p-4">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link href="/" className="hover:text-green-300 transition-colors">
            Unqualified Advice
          </Link>
        </li>
        <li>
          <Link href="/#about" className="hover:text-green-300 transition-colors">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/transcripts" className="hover:text-green-300 transition-colors">
            Show Transcripts
          </Link>
        </li>
      </ul>
    </nav>
  )
}


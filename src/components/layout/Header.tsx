import { Navigation } from './Navigation'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <nav className="flex items-center space-x-6">
          <a href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </a>
          <a href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </a>
          <a href="/transcripts" className="text-sm font-medium transition-colors hover:text-primary">
            Transcripts
          </a>
        </nav>
      </div>
    </header>
  )
} 
import { Facebook, Twitter, Instagram, AirplayIcon as Spotify, PodcastIcon as ApplePodcast } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Unqualified Advice</h3>
            <p>© 2025 Unqualified Advice. All Rights Reserved</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-300 transition-colors">
              <Facebook />
            </a>
            <a href="#" className="hover:text-green-300 transition-colors">
              <Twitter />
            </a>
            <a href="#" className="hover:text-green-300 transition-colors">
              <Instagram />
            </a>
            <a href="#" className="hover:text-green-300 transition-colors">
              <Spotify />
            </a>
            <a href="#" className="hover:text-green-300 transition-colors">
              <ApplePodcast />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}


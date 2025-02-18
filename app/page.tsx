import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { MoreHorizontal } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 px-4 py-8 flex flex-col items-center justify-center">
      <div className="mx-auto w-full max-w-md">
        {/* Header with menu */}
        <div className="relative mb-8">
          <button className="absolute right-0 top-0 rounded-full p-2 text-white/80 hover:bg-white/10">
            <MoreHorizontal className="h-6 w-6" />
          </button>
        </div>

        {/* Title Section */}
        <div className="mb-8 flex flex-col items-center space-y-4">
          <h1 className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-4xl font-bold text-transparent">
            notion-links
          </h1>
          <p className="text-center text-white/80">{siteConfig.bio}</p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {siteConfig.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full"
            >
              <div className="flex items-center justify-center rounded-md bg-white/10 px-4 py-3 text-white backdrop-blur-sm transition-all hover:bg-white/20">
                <span className="flex items-center justify-center gap-2">
                  {link.title} <span>{link.emoji}</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <footer className="py-6 text-center text-xs sm:text-sm text-white">
        <b>
          © {new Date().getFullYear()}{' '}
          <Button
            variant="link_right"
            asChild
            className="p-0 h-auto font-bold text-muted-foreground"
          >
            <Link href="https://github.com/andrechandra">Andre Chandra</Link>
          </Button>
          . All rights reserved. <br />
        </b>
      </footer>
    </main>
  )
}

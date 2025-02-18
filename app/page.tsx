import { Button } from '@/components/ui/button'
import { getLinks } from '@/utils/notion'
import Link from 'next/link'
import { NotionLink } from '@/types/notionlink'
import { SocialIcons } from '@/components/social-icons'
import ShareButton from '@/components/share-button'

export default async function Home() {
  const response = await getLinks()
  const notionLinks = response.results as unknown as NotionLink[]

  const links = notionLinks
    .map((link) => ({
      title: link.properties.Name.title[0]?.plain_text || 'Untitled',
      url: link.properties.URL.url || '',
      order: link.properties.Order?.number ?? 0,
      icon: link.properties.Icons.rich_text[0]?.plain_text || 'Untitled',
      description: link.properties.Description.rich_text[0]?.plain_text || '',
    }))
    .sort((a, b) => a.order - b.order)

  // console.log('Raw Notion Links:', notionLinks)
  // console.log('Transformed and sorted links:', links)

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 px-4 py-8 flex flex-col items-center justify-center">
      <div className="mx-auto w-full max-w-md">
        {/* Header with menu */}
        <ShareButton />

        {/* Title Section */}
        <div className="mb-8 flex flex-col items-center space-y-4">
          <h1 className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-4xl font-bold text-transparent">
            Andre Chandra Putra
          </h1>
          {/* Render first link title (or a placeholder message) */}
          <p className="text-center text-white/80">
            {links.length > 0 ? links[0].description : 'No links available'}
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.length > 0 ? (
            links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full"
              >
                <div className="flex items-center justify-center rounded-md bg-white/10 px-4 py-3 text-white backdrop-blur-sm transition-all hover:bg-white/20">
                  <span className="flex items-center justify-center gap-2">
                    {link.title}
                    <div className="p-1 rounded-full">
                      <SocialIcons icon={link.icon}></SocialIcons>
                    </div>
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-white/80">
              No links found in your Notion database.
            </p>
          )}
        </div>
      </div>

      <footer className="py-6 text-center text-xs sm:text-sm text-white">
        <b>
          © {new Date().getFullYear()}{' '}
          <Button
            variant="link"
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

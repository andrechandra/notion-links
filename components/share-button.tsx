'use client'

import { MoreHorizontal } from 'lucide-react'

const ShareButton = () => {
  const handleShare = async () => {
    if (typeof window === 'undefined') return

    const url = window.location.href

    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: url,
        })
      } catch (error) {
        console.error('Error sharing:', error)
      }
    } else {
      try {
        await navigator.clipboard.writeText(url)
        alert('Link copied to clipboard!')
      } catch (error) {
        console.error('Failed to copy:', error)
      }
    }
  }

  return (
    <div className="relative mb-8">
      <button
        onClick={handleShare}
        className="absolute right-0 top-0 rounded-full p-2 text-white/80 hover:bg-white/10"
      >
        <MoreHorizontal className="h-6 w-6" />
      </button>
    </div>
  )
}

export default ShareButton

import {
  SiDocsdotrs,
  SiLinkedin,
  SiGithub,
  SiInstagram,
  SiX,
  SiFacebook,
  SiDiscord,
  SiYoutube,
  SiTiktok,
  SiReddit,
  SiSnapchat,
  SiPinterest,
  SiTwitch,
  SiTelegram,
  SiWhatsapp,
  SiSpotify,
  SiApple,
  SiGoogle,
  SiSteam,
  SiMedium,
  SiDevdotto,
  SiThreads,
} from 'react-icons/si'

export const SocialIcons = ({ icon }: { icon: string }) => {
  switch (icon.toLowerCase()) {
    case 'portfolio':
      return <SiDocsdotrs className="h-5 w-5" />
    case 'linkedin':
      return <SiLinkedin className="h-5 w-5" />
    case 'github':
      return <SiGithub className="h-5 w-5" />
    case 'instagram':
      return <SiInstagram className="h-5 w-5" />
    case 'twitter':
    case 'x':
      return <SiX className="h-5 w-5" />
    case 'facebook':
      return <SiFacebook className="h-5 w-5" />
    case 'discord':
      return <SiDiscord className="h-5 w-5" />
    case 'youtube':
      return <SiYoutube className="h-5 w-5" />
    case 'tiktok':
      return <SiTiktok className="h-5 w-5" />
    case 'reddit':
      return <SiReddit className="h-5 w-5" />
    case 'snapchat':
      return <SiSnapchat className="h-5 w-5" />
    case 'pinterest':
      return <SiPinterest className="h-5 w-5" />
    case 'twitch':
      return <SiTwitch className="h-5 w-5" />
    case 'telegram':
      return <SiTelegram className="h-5 w-5" />
    case 'whatsapp':
      return <SiWhatsapp className="h-5 w-5" />
    case 'spotify':
      return <SiSpotify className="h-5 w-5" />
    case 'apple':
      return <SiApple className="h-5 w-5" />
    case 'google':
      return <SiGoogle className="h-5 w-5" />
    case 'steam':
      return <SiSteam className="h-5 w-5" />
    case 'medium':
      return <SiMedium className="h-5 w-5" />
    case 'dev.to':
    case 'dev':
      return <SiDevdotto className="h-5 w-5" />
    case 'threads':
      return <SiThreads className="h-5 w-5" />
    default:
      return null
  }
}

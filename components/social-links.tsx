import type React from "react"
import Link from "next/link"
import { MessageSquare, Send, Youtube, Twitch } from "lucide-react"

const SocialLinks: React.FC = () => {
  return (
    <div className="flex justify-center space-x-6">
      <Link href="https://discord.gg/fairrp" target="_blank" rel="noopener noreferrer">
        <div className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-500/20 transition-all">
          <MessageSquare className="h-5 w-5 text-white" />
        </div>
      </Link>
      <Link href="https://t.me/fairrp" target="_blank" rel="noopener noreferrer">
        <div className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-500/20 transition-all">
          <Send className="h-5 w-5 text-white" />
        </div>
      </Link>
      <Link href="https://youtube.com/fairrp" target="_blank" rel="noopener noreferrer">
        <div className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-500/20 transition-all">
          <Youtube className="h-5 w-5 text-white" />
        </div>
      </Link>
      <Link href="https://twitch.tv/fairrp" target="_blank" rel="noopener noreferrer">
        <div className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-500/20 transition-all">
          <Twitch className="h-5 w-5 text-white" />
        </div>
      </Link>
    </div>
  )
}

export default SocialLinks

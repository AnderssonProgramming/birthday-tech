import { Heart, Sparkles } from "lucide-react"
import type { ReactNode } from "react"

export default function BackgroundElements() {
  return (
    <div className="absolute inset-0">
      <FloatingElement
        icon={<Sparkles className="text-yellow-300 w-6 h-6" />}
        className="top-10 left-10 animate-bounce"
      />
      <FloatingElement icon={<Heart className="text-pink-300 w-8 h-8" />} className="top-20 right-20 animate-pulse" />
      <FloatingElement
        icon={<Sparkles className="text-blue-300 w-5 h-5" />}
        className="bottom-20 left-20 animate-bounce delay-300"
      />
      <FloatingElement
        icon={<Heart className="text-red-300 w-6 h-6" />}
        className="bottom-10 right-10 animate-pulse delay-500"
      />
    </div>
  )
}

function FloatingElement({
  icon,
  className,
}: Readonly<{
  icon: ReactNode
  className: string
}>) {
  return <div className={`absolute ${className}`}>{icon}</div>
}

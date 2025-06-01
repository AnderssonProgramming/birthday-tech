import type { AmbientVideoProps } from "../types/birthday"

export default function AmbientVideo({ videoUrl }: Readonly<AmbientVideoProps>) {
  // Default video URL - replace with your preferred birthday video
  const defaultVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"

  const videoSrc = videoUrl || defaultVideoUrl

  return (
    <div className="flex flex-col justify-center items-center h-full space-y-6">
      <h2 className="text-2xl font-bold text-white text-center mb-2">Birthday Vibes 🎵</h2>
      <VideoPlayer src={videoSrc} />
      <p className="text-center text-white/80 text-sm">
        💡 Tip: Replace the video URL with your preferred birthday song or ambient video!
      </p>
    </div>
  )
}

function VideoPlayer({ src }: Readonly<{ src: string }>) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-2xl w-full">
      <iframe
        src={src}
        className="w-full aspect-video h-64 lg:h-80"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Birthday Ambient Video"
      />
    </div>
  )
}

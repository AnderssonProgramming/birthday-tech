import type { PhotoCollageProps, Photo } from "../types/birthday"

export default function PhotoCollage({ photos }: Readonly<PhotoCollageProps>) {
  // Default photos - replace with your actual photos
  const defaultPhotos: Photo[] = [
    { id: 1, src: "https://media.gq.com.mx/photos/682ac646de0430178b75e8a0/16:9/w_2560%2Cc_limit/NBA_Finales_de_Conferencia_2199173018.jpg?height=200&width=200", alt: "Memory 1" },
    { id: 2, src: "https://media.gq.com.mx/photos/682ac646de0430178b75e8a0/16:9/w_2560%2Cc_limit/NBA_Finales_de_Conferencia_2199173018.jpg?height=200&width=200", alt: "Memory 2" },
    { id: 3, src: "https://media.gq.com.mx/photos/682ac646de0430178b75e8a0/16:9/w_2560%2Cc_limit/NBA_Finales_de_Conferencia_2199173018.jpg?height=200&width=200", alt: "Memory 3" },
    { id: 4, src: "https://media.gq.com.mx/photos/682ac646de0430178b75e8a0/16:9/w_2560%2Cc_limit/NBA_Finales_de_Conferencia_2199173018.jpg?height=200&width=200", alt: "Memory 4" },
    { id: 5, src: "https://media.gq.com.mx/photos/682ac646de0430178b75e8a0/16:9/w_2560%2Cc_limit/NBA_Finales_de_Conferencia_2199173018.jpg?height=200&width=200", alt: "Memory 5" },
    { id: 6, src: "https://media.gq.com.mx/photos/682ac646de0430178b75e8a0/16:9/w_2560%2Cc_limit/NBA_Finales_de_Conferencia_2199173018.jpg?height=200&width=200", alt: "Memory 6" },
    { id: 7, src: "https://media.gq.com.mx/photos/682ac646de0430178b75e8a0/16:9/w_2560%2Cc_limit/NBA_Finales_de_Conferencia_2199173018.jpg?height=200&width=200", alt: "Memory 7" },
    { id: 8, src: "https://media.gq.com.mx/photos/682ac646de0430178b75e8a0/16:9/w_2560%2Cc_limit/NBA_Finales_de_Conferencia_2199173018.jpg?height=200&width=200", alt: "Memory 8" },
  ]

  const photosToDisplay = photos || defaultPhotos

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white text-center mb-6">Our Beautiful Memories 📸</h2>
      <div className="grid grid-cols-2 gap-4">
        {photosToDisplay.map((photo) => (
          <PhotoItem key={photo.id} photo={photo} />
        ))}
      </div>
      <p className="text-center text-white/80 text-sm mt-4">
        💡 Tip: Replace the placeholder images with your actual photos!
      </p>
    </div>
  )
}

function PhotoItem({ photo }: { photo: Photo }) {
  return (
    <div className="relative overflow-hidden rounded-lg transform transition-transform hover:scale-105 duration-300">
      <img
        src={photo.src}
        alt={photo.alt}
        className="w-full h-auto object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
        <p className="text-white text-sm">{photo.alt}</p>
      </div>
    </div>
  )
}

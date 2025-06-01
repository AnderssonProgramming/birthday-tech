export interface Photo {
  id: number
  src: string
  alt: string
}

export interface PhotoCollageProps {
  photos?: Photo[]
}

export interface LetterContent {
  title: string
  message: string
}

export interface InteractiveGiftProps {
  giftOpened: boolean
  showLetter: boolean
  onGiftClick: () => void
}

export interface AmbientVideoProps {
  videoUrl?: string
}

export interface AmbientVideoProps {
  videoUrl?: string
}

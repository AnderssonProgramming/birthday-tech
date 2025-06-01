"use client"

import { useState } from "react"
import PhotoCollage from "./photo-collage"
import InteractiveGift from "./interactive-gift"
import AmbientVideo from "./ambient-video"
import BackgroundElements from "./background-elements"

export default function BirthdaySuprise() {
  const [giftOpened, setGiftOpened] = useState(false)
  const [showLetter, setShowLetter] = useState(false)

  const handleGiftClick = () => {
    setGiftOpened(true)
    setTimeout(() => setShowLetter(true), 800)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">      <BackgroundElements />

      <div className="container mx-auto px-4 py-8 relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-screen items-center">
          {/* Left Side - Photo Collage */}
          <PhotoCollage />

          {/* Center - Interactive Gift */}
          <InteractiveGift giftOpened={giftOpened} showLetter={showLetter} onGiftClick={handleGiftClick} />

          {/* Right Side - Ambient Video */}
          <div className="flex items-center justify-center h-full">
            <AmbientVideo />
          </div>
        </div>
      </div>
    </div>
  )
}

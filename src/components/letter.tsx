import { Card, CardContent } from "./ui/card"
import { Heart, Sparkles } from "lucide-react"
import type { LetterContent } from "../types/birthday"

interface LetterProps {
  content?: LetterContent
}

export default function Letter({ content }: Readonly<LetterProps>) {
  // Default letter content - customize this for your dad
  const defaultContent: LetterContent = {
    title: "Happy Birthday Dad! 🎉",
    message: `Dear Dad,

On this special day, I wanted to create something unique just for you. Thank you for being the most amazing father anyone could ask for.

Your love, guidance, and support have shaped me into who I am today. Every lesson you taught me, every moment we shared, and every sacrifice you made - I remember them all with gratitude.

You've always been my hero, my role model, and my biggest supporter. Today, I celebrate not just your birthday, but the incredible person you are.

I hope this little surprise brings a smile to your face and shows you how much you mean to me.

With all my love and best wishes for the year ahead!

Happy Birthday! 🎂❤️

Your loving child`,
  }

  const letterContent = content || defaultContent

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-2xl animate-fade-in">
      <CardContent className="p-8">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{letterContent.title}</h2>
          <div className="text-left space-y-4 text-gray-700 leading-relaxed">
            {letterContent.message.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-lg">
                {paragraph}
              </p>
            ))}
          </div>
          <LetterDecorations />
        </div>
      </CardContent>
    </Card>
  )
}

function LetterDecorations() {
  return (
    <div className="flex justify-center space-x-4 mt-8">
      <Heart className="text-red-500 w-8 h-8 animate-pulse" />
      <Sparkles className="text-yellow-500 w-8 h-8 animate-spin" />
      <Heart className="text-red-500 w-8 h-8 animate-pulse delay-300" />
    </div>
  )
}

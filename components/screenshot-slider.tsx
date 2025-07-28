"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import Image from "next/image"
import { ImageViewer } from "./image-viewer"

interface Screenshot {
  src: string
  alt: string
  title: string
}

interface ScreenshotSliderProps {
  screenshots: Screenshot[]
}

export function ScreenshotSlider({ screenshots }: ScreenshotSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [viewerOpen, setViewerOpen] = useState(false)
  const [viewerIndex, setViewerIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const handleImageClick = (index: number) => {
    console.log("Image clicked:", index) // Debug log
    setViewerIndex(index)
    setViewerOpen(true)
  }

  useEffect(() => {
    if (!isAutoPlaying || viewerOpen) return

    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentIndex, viewerOpen])

  return (
    <div className="relative w-full">
      {/* Main Slider */}
      <div className="relative overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex % screenshots.length) * 25}%)` }}
        >
          {screenshots.concat(screenshots).map((screenshot, index) => {
            const actualIndex = (currentIndex + index) % screenshots.length
            return (
              <div key={`${actualIndex}-${index}`} className="w-1/4 flex-shrink-0 px-2">
                <Card className="group bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm cursor-pointer">
                  <CardContent className="p-0 relative">
                    <div
                      className="aspect-[9/16] relative overflow-hidden"
                      onClick={() => handleImageClick(actualIndex)}
                    >
                      <Image
                        src={screenshot.src || "/placeholder.svg"}
                        alt={screenshot.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-semibold text-lg">{screenshot.title}</h3>
                          <p className="text-gray-300 text-sm mt-1">Click to view full size</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center mt-8 space-x-4">
        <Button
          onClick={prevSlide}
          size="sm"
          className="bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30 rounded-full p-3 backdrop-blur-sm transition-all duration-300"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex space-x-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-purple-500 scale-125" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <Button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          size="sm"
          className="bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30 rounded-full p-3 backdrop-blur-sm transition-all duration-300"
        >
          {isAutoPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>

        <Button
          onClick={nextSlide}
          size="sm"
          className="bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30 rounded-full p-3 backdrop-blur-sm transition-all duration-300"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 w-full bg-white/10 rounded-full h-1 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-100 ease-linear"
          style={{
            width: `${((currentIndex + 1) / screenshots.length) * 100}%`,
          }}
        />
      </div>

      {/* Image Viewer */}
      <ImageViewer
        images={screenshots}
        initialIndex={viewerIndex}
        isOpen={viewerOpen}
        onClose={() => setViewerOpen(false)}
      />
    </div>
  )
}

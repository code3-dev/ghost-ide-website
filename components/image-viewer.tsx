"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import Image from "next/image"

interface Screenshot {
  src: string
  alt: string
  title: string
}

interface ImageViewerProps {
  images: Screenshot[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
}

export function ImageViewer({ images, initialIndex, isOpen, onClose }: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [zoom, setZoom] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      setZoom(1)
      setPosition({ x: 0, y: 0 })
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          goToPrevious()
          break
        case "ArrowRight":
          goToNext()
          break
        case "=":
        case "+":
          handleZoomIn()
          break
        case "-":
          handleZoomOut()
          break
        case "0":
          resetZoom()
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, currentIndex])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    resetZoom()
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    resetZoom()
  }

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev * 1.2, 4))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev / 1.2, 0.5))
  }

  const resetZoom = () => {
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && zoom > 1) {
      setIsDragging(true)
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      })
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches.length === 1 && zoom > 1) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      })
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  if (!isOpen) return null

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <h3 className="text-lg font-semibold">{currentImage.title}</h3>
            <p className="text-sm text-gray-400">
              {currentIndex + 1} of {images.length}
            </p>
          </div>
          <Button
            onClick={onClose}
            size="sm"
            className="bg-white/10 hover:bg-white/20 border-0 text-white p-2 rounded-full"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Main Image Container */}
      <div
        ref={imageRef}
        className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="relative transition-transform duration-200 ease-out"
          style={{
            transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
          }}
        >
          <Image
            src={currentImage.src || "/placeholder.svg"}
            alt={currentImage.alt}
            width={800}
            height={1200}
            className="max-w-[90vw] max-h-[90vh] object-contain select-none"
            draggable={false}
          />
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <Button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 border-0 text-white p-3 rounded-full backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 border-0 text-white p-3 rounded-full backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center justify-center space-x-4">
          {/* Zoom Controls */}
          <div className="flex items-center space-x-2 bg-black/50 rounded-full px-4 py-2 backdrop-blur-sm">
            <Button
              onClick={handleZoomOut}
              size="sm"
              className="bg-transparent hover:bg-white/20 border-0 text-white p-2 rounded-full"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-white text-sm min-w-[3rem] text-center">{Math.round(zoom * 100)}%</span>
            <Button
              onClick={handleZoomIn}
              size="sm"
              className="bg-transparent hover:bg-white/20 border-0 text-white p-2 rounded-full"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button
              onClick={resetZoom}
              size="sm"
              className="bg-transparent hover:bg-white/20 border-0 text-white p-2 rounded-full"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>

          {/* Dot Indicators */}
          {images.length > 1 && (
            <div className="flex space-x-2 bg-black/50 rounded-full px-4 py-2 backdrop-blur-sm">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    resetZoom()
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex ? "bg-purple-500 scale-125" : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Keyboard Hints */}
        <div className="hidden md:block text-center mt-4">
          <p className="text-gray-400 text-xs">Use arrow keys to navigate • +/- to zoom • 0 to reset • ESC to close</p>
        </div>
      </div>
    </div>
  )
}

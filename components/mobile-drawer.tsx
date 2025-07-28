"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, Github, MessageCircle, Radio, Code, Camera, UsersIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleLinkClick = () => {
    onClose()
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!mounted || !isOpen) return null

  const drawerContent = (
    <div className="fixed inset-0 z-[999999]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={handleBackdropClick} />

      {/* Drawer */}
      <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-black border-l border-white/10 transform transition-transform duration-300 ease-out translate-x-0">
        {/* Content */}
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image src="/images/logo.png" alt="Ghost IDE Logo" width={40} height={40} className="rounded-xl" />
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30"></div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Ghost IDE</h2>
                <p className="text-sm text-gray-400">Fast Editor for Android</p>
              </div>
            </div>
            <Button
              onClick={onClose}
              size="sm"
              className="bg-white/10 hover:bg-white/20 border-0 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-6 space-y-2">
            <Link
              href="#features"
              onClick={handleLinkClick}
              className="flex items-center space-x-4 text-gray-300 hover:text-white transition-all duration-200 py-4 px-4 rounded-2xl hover:bg-white/10 group"
            >
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-medium">Features</span>
            </Link>

            <Link
              href="#screenshots"
              onClick={handleLinkClick}
              className="flex items-center space-x-4 text-gray-300 hover:text-white transition-all duration-200 py-4 px-4 rounded-2xl hover:bg-white/10 group"
            >
              <div className="p-2 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 group-hover:scale-110 transition-transform">
                <Camera className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-medium">Screenshots</span>
            </Link>

            <Link
              href="#community"
              onClick={handleLinkClick}
              className="flex items-center space-x-4 text-gray-300 hover:text-white transition-all duration-200 py-4 px-4 rounded-2xl hover:bg-white/10 group"
            >
              <div className="p-2 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 group-hover:scale-110 transition-transform">
                <UsersIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-medium">Community</span>
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="p-6 space-y-4 border-t border-white/10">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 shadow-lg text-white py-4 rounded-2xl font-medium text-lg transition-all duration-300 hover:scale-105"
            >
              <Link href="https://github.com/HanzoDev1375/Ghostide/releases/latest" onClick={handleLinkClick}>
                <Download className="h-5 w-5 mr-3" />
                Download App
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:text-white py-4 rounded-2xl bg-transparent font-medium text-lg transition-all duration-300"
            >
              <Link href="https://github.com/HanzoDev1375/Ghostide" onClick={handleLinkClick}>
                <Github className="h-5 w-5 mr-3" />
                View Source
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="p-6 border-t border-white/10">
            <h3 className="text-white font-semibold mb-4 text-lg">Join Community</h3>
            <div className="space-y-3">
              <Link
                href="https://t.me/ghost_web_ide"
                onClick={handleLinkClick}
                className="flex items-center space-x-4 text-gray-300 hover:text-white transition-all duration-200 py-3 px-4 rounded-xl hover:bg-white/10 group"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="font-medium">Telegram Group</span>
                  <p className="text-xs text-gray-400">Join discussions</p>
                </div>
              </Link>

              <Link
                href="https://t.me/Ghostwebide"
                onClick={handleLinkClick}
                className="flex items-center space-x-4 text-gray-300 hover:text-white transition-all duration-200 py-3 px-4 rounded-xl hover:bg-white/10 group"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-green-600 group-hover:scale-110 transition-transform">
                  <Radio className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="font-medium">Telegram Channel</span>
                  <p className="text-xs text-gray-400">Get updates</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm">© 2025 Ghost IDE</p>
            <p className="text-gray-500 text-xs mt-1">Open Source Project</p>
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(drawerContent, document.body)
}

export function MobileNavButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Button
        onClick={handleToggle}
        size="sm"
        className="md:hidden bg-white/10 hover:bg-white/20 border-0 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <Menu className="h-6 w-6" />
      </Button>
      <MobileDrawer isOpen={isOpen} onClose={handleClose} />
    </>
  )
}

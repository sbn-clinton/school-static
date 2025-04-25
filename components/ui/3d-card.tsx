"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useRef, useState } from "react"

export function Card3d({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    // Calculate rotation based on mouse position relative to card center
    const rotateY = ((mouseX - centerX) / (rect.width / 2)) * 5
    const rotateX = ((centerY - mouseY) / (rect.height / 2)) * 5

    setRotate({ x: rotateX, y: rotateY })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotate({ x: 0, y: 0 })
  }

  return (
    <div
      className={cn("perspective-1000px", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div
        className={cn("relative transition-transform duration-200 ease-out", className)}
        style={{
          transform: isHovered ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` : "rotateX(0deg) rotateY(0deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Spotlight({
  className,
  fill = "white",
  children,
  ...props
}: {
  className?: string
  fill?: string
  children: React.ReactNode
  [key: string]: any
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            setOpacity(0.85)
          } else {
            setIsVisible(false)
            setOpacity(0)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        mousePosition.current = { x, y }
        updateSpotlightPosition()
      }
    }

    const updateSpotlightPosition = () => {
      if (containerRef.current) {
        const spotlight = containerRef.current.querySelector(".spotlight") as HTMLElement
        if (spotlight) {
          spotlight.style.background = `radial-gradient(600px circle at ${mousePosition.current.x}px ${mousePosition.current.y}px, ${fill}, transparent ${opacity})`
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isVisible, fill, opacity])

  return (
    <div ref={containerRef} className={cn("relative w-full overflow-hidden rounded-md", className)} {...props}>
      <div
        className="spotlight absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(600px circle at center, ${fill}, transparent ${opacity})`,
        }}
      />
      {children}
    </div>
  )
}

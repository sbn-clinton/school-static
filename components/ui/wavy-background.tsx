"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function WavyBackground({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: "slow" | "fast"
  waveOpacity?: number
  [key: string]: any
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
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

  const defaultColors = ["rgba(76, 175, 80, 0.8)", "rgba(33, 150, 243, 0.8)", "rgba(156, 39, 176, 0.8)"]

  const waveWidthValue = waveWidth || 50
  const speedValue = speed === "fast" ? "20s" : "30s"
  const allColors = colors || defaultColors

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", containerClassName)} {...props}>
      <svg className="absolute inset-0 w-full h-full" style={{ filter: `blur(${blur}px)` }}>
        <rect width="100%" height="100%" fill={backgroundFill || "transparent"} />
        {isVisible &&
          allColors.map((color, i) => (
            <g key={i}>
              <path
                d={`M 0 ${50 + i * 20} Q ${waveWidthValue} ${100 + i * 20}, ${waveWidthValue * 2} ${50 + i * 20} T ${
                  waveWidthValue * 4
                } ${50 + i * 20} T ${waveWidthValue * 6} ${50 + i * 20} T ${waveWidthValue * 8} ${50 + i * 20} T ${
                  waveWidthValue * 10
                } ${50 + i * 20} T ${waveWidthValue * 12} ${50 + i * 20} V 200 H 0 Z`}
                fill={color}
                opacity={waveOpacity}
              >
                <animate
                  attributeName="d"
                  values={`M 0 ${50 + i * 20} Q ${waveWidthValue} ${
                    75 + i * 20
                  }, ${waveWidthValue * 2} ${50 + i * 20} T ${
                    waveWidthValue * 4
                  } ${50 + i * 20} T ${waveWidthValue * 6} ${50 + i * 20} T ${waveWidthValue * 8} ${50 + i * 20} T ${
                    waveWidthValue * 10
                  } ${50 + i * 20} T ${waveWidthValue * 12} ${50 + i * 20} V 200 H 0 Z;
                          M 0 ${50 + i * 20} Q ${waveWidthValue} ${
                            25 + i * 20
                          }, ${waveWidthValue * 2} ${50 + i * 20} T ${
                            waveWidthValue * 4
                          } ${50 + i * 20} T ${waveWidthValue * 6} ${
                            50 + i * 20
                          } T ${waveWidthValue * 8} ${50 + i * 20} T ${
                            waveWidthValue * 10
                          } ${50 + i * 20} T ${waveWidthValue * 12} ${50 + i * 20} V 200 H 0 Z`}
                  dur={speedValue}
                  repeatCount="indefinite"
                />
              </path>
            </g>
          ))}
      </svg>
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}

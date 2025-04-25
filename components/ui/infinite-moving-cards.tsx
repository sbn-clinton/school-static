"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { motion, useAnimationControls, useInView } from "framer-motion"

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    content: React.ReactNode
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef)
  const controls = useAnimationControls()
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!isInView) return

    let speedValue = 0
    switch (speed) {
      case "fast":
        speedValue = 30
        break
      case "normal":
        speedValue = 50
        break
      case "slow":
        speedValue = 80
        break
      default:
        speedValue = 50
        break
    }

    const directionValue = direction === "left" ? -1 : 1

    if (isHovering && pauseOnHover) {
      controls.stop()
    } else {
      controls.start({
        x: directionValue * speedValue + "%",
        transition: {
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "linear",
        },
      })
    }

    return () => {
      controls.stop()
    }
  }, [isInView, isHovering, pauseOnHover, direction, speed, controls])

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden relative w-full", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div className="flex gap-4 w-fit" initial={{ x: 0 }} animate={controls}>
        {items.map((item, idx) => (
          <div key={idx} className="flex-shrink-0">
            {item.content}
          </div>
        ))}
        {items.map((item, idx) => (
          <div key={`duplicate-${idx}`} className="flex-shrink-0">
            {item.content}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

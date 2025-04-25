"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function TextGenerateEffect({
  words,
  className,
}: {
  words: string
  className?: string
}) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".text-generate-effect")
    elements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [])

  const renderWords = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {words.split(" ").map((word, idx) => {
          return (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                delay: idx * 0.1,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="inline-block mr-1.5"
            >
              {word}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return <div className={cn("text-generate-effect", className)}>{renderWords()}</div>
}

"use client"

import type React from "react"

import { useRef } from "react"

export function HeroParallax({
  children,
  className,
  backgroundUrl,
}: {
  children: React.ReactNode
  className?: string
  backgroundUrl?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const {

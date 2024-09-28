"use client"
import Link from 'next/link'
import React, { MouseEvent, useState } from 'react'

interface Props {
  children: React.ReactNode
}

const LayoutClient = ({ children }: Props) => {
  const [spotlightStyle, setSpotlightStyle] = useState({
    background: 'radial-gradient(600px at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%)'
  })
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setSpotlightStyle({
      background: `radial-gradient(600px at ${e.pageX}px ${e.pageY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
    })
  }

  return (
    <div onMouseMove={handleMouseMove}>
      <div style={spotlightStyle} className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" ></div>
      <div className="min-h-screen max-w-screen-xl mx-auto px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <Link href="#content" className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">Skip to Content</Link>
        {children}
      </div>
    </div>
  )
}

export default LayoutClient
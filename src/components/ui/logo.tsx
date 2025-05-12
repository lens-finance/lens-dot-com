import React from "react"
import { Link } from "@tanstack/react-router"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link to="/" className={className}>
      <div className="flex items-center gap-2 font-semibold text-xl tracking-tight">
        <span className="bg-gradient-to-r from-primary to-[oklch(0.75_0.18_175)] bg-clip-text text-transparent">
          LENS
        </span>
        <span className="opacity-80">Finance</span>
      </div>
    </Link>
  )
}
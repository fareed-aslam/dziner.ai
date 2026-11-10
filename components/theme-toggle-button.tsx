"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export default function ThemeToggleButton() {
  const { setTheme } = useTheme()

  const onToggle = React.useCallback(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "light" : "dark")
  }, [setTheme])

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={onToggle}
      className="relative h-8 w-8 rounded-full"
      aria-label="Toggle theme"
    >
      <SunIcon className="absolute h-5 w-5 scale-100 transition-transform dark:scale-0" />
      <MoonIcon className="absolute h-5 w-5 scale-0 transition-transform dark:scale-100" />
    </Button>
  )
}

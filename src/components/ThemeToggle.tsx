import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>(null)

  useEffect(() => {
    setTheme(localStorage.getItem('theme') ?? 'dark')
  }, [])

  const handleClick = () => {
    if (!theme) return
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    if (!theme) return

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  if (!theme) return null

  return (
    <button
      onClick={handleClick}
      className="border border-slate-500 p-2 rounded-lg bg-background-dark hover:bg-opacity-90 transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}

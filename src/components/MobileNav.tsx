import { Drawer } from 'vaul'
import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }

  return (
    <Drawer.Root direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Trigger
        aria-label="Toggle mobile menu"
        className="md:hidden p-2 hover:bg-badge-light-bg/5 dark:hover:bg-badge-dark-bg/5 rounded-lg"
      >
        <div className="relative w-6 h-6">
          <span
            className={`absolute left-0 top-1/2 -translate-y-1/2 block h-0.5 w-6 transform transition duration-200 ease-in-out bg-text-light dark:bg-text-dark ${
              isOpen ? 'rotate-45' : '-translate-y-2'
            }`}
          />
          <span
            className={`mt-[1px] absolute left-0 top-1/2 -translate-y-1/2 block h-0.5 w-6 transform transition duration-200 ease-in-out bg-text-light dark:bg-text-dark ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 -translate-y-1/2 block h-0.5 w-6 transform transition duration-200 ease-in-out bg-text-light dark:bg-text-dark ${
              isOpen ? '-rotate-45' : 'translate-y-2'
            }`}
          />
        </div>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
        <Drawer.Content className="bg-background-light dark:bg-background-dark flex flex-col fixed left-0 top-0 bottom-0 h-full w-[80%] max-w-[300px] z-50">
          <div className="p-4 bg-background-light dark:bg-background-dark flex-1">
            <div className="mb-8">
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                    setIsOpen(false)
                  }}
                  className="text-xl font-bold"
                >
                  Tim Moran
                </a>
                <ThemeToggle />
              </div>
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-text-light dark:text-text-dark hover:text-badge-light-text dark:hover:text-badge-dark-text transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

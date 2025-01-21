import { useState } from 'react'
import { Badge } from './Badge'

interface ProjectAccordionProps {
  title: string
  description: string[]
  technologies: string[]
}

export const ProjectAccordion = ({ title, description, technologies }: ProjectAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-4 flex items-center justify-between hover:bg-blue-50 dark:hover:bg-badge-dark-bg/5 transition-colors"
      >
        <h3 className="text-sm sm:text-lg font-semibold text-left">{title}</h3>
        <svg
          className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px]' : 'max-h-0'
        }`}
      >
        <div className="p-4 space-y-4">
          {description.map((desc, index) => (
            <p key={index} className="text-text-light/80 dark:text-text-dark/80">
              {desc}
            </p>
          ))}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

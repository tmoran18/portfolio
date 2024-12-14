interface ExperienceCardProps {
  url: string
  date: string
  title: string
  company: string
  description: string
  technologies: string[]
}

export const ExperienceCard = ({
  url,
  date,
  title,
  company,
  description,
  technologies,
}: ExperienceCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      className="block cursor-pointer p-6 rounded-lg hover:bg-badge-light-bg/5 dark:hover:bg-badge-dark-bg/5 transition-colors group"
    >
      <div className="flex flex-col sm:flex-row justify-betweenmb-4">
        <div className="min-w-[120px] my-1 text-sm text-text-light/60 dark:text-text-dark/60">
          {date}
        </div>
        <div className="flex-1 sm:ml-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-text-light/60 dark:text-text-dark/60">{company}</p>
          </div>
          <p className="mb-4 text-text-light/80 dark:text-text-dark/80">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-badge-light-bg dark:bg-badge-dark-bg text-badge-light-text dark:text-badge-dark-text border border-badge-light-border dark:border-transparent"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="sm:ml-2"></div>
    </a>
  )
}

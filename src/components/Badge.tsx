export const Badge = ({ children }: { children: React.ReactNode | string }) => (
  <span className="inline-flex items-center px-2.5 mr-1.5 py-0.5 rounded-full text-xs font-medium bg-badge-light-bg dark:bg-badge-dark-bg text-badge-light-text dark:text-badge-dark-text border border-badge-light-border dark:border-transparent">
    {children}
  </span>
)

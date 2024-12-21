import { useState } from 'react'

export const ContactForm = () => {
  const [result, setResult] = useState('')

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult('Sending....')
    const formData = new FormData(event.currentTarget)

    // Public API Key
    formData.append('access_key', '92ff435b-7269-4eab-bfff-69f592fb021a')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult('Form Submitted Successfully')
      event.currentTarget.reset()
    } else {
      console.log('Error', data)
      setResult(data.message)
    }
  }

  return (
    <div className="pb-12">
      <form onSubmit={onSubmit} className="space-y-4 max-w-md">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-badge-light-text dark:focus:ring-badge-dark-text transition-colors"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-badge-light-text dark:focus:ring-badge-dark-text transition-colors"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your message"
            required
            rows={4}
            className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-badge-light-text dark:focus:ring-badge-dark-text transition-colors"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-badge-light-bg dark:bg-badge-dark-bg text-badge-light-text dark:text-badge-dark-text border border-badge-light-border dark:border-transparent hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-badge-light-text dark:focus:ring-badge-dark-text"
        >
          Send Message
        </button>
        <input type="hidden" name="subject" value="Tim's Portfolio Contact Form"></input>
        <input type="checkbox" name="botcheck" className="hidden"></input>
      </form>
      {result && (
        <p
          className={`mt-4 ${
            result === 'Sending....'
              ? 'text-badge-light-text dark:text-badge-dark-text'
              : result.includes('Successfully')
              ? 'text-green-600 dark:text-green-400'
              : 'text-red-600 dark:text-red-400'
          }`}
        >
          {result}
        </p>
      )}
    </div>
  )
}

import { ExperienceCard } from './ExperienceCard'
import { experiences } from '../data/experiences'
import { Badge } from './Badge'
import { ContactForm } from './ContactForm'

export default function MainContent() {
  return (
    <div className="container mx-auto px-4 mt-12 lg:mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column - Sticky */}
        <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-5rem)]">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold">Front End Developer</h1>
            <p className="text-xl">
              Specialising in building exceptional digital experiences with modern front end
              technologies
            </p>
            <div className="flex gap-1">
              <Badge>TypeScript</Badge>
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>CSS</Badge>
              <Badge>Git</Badge>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/tmoran18"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/t-moran"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Scrollable Content */}
        <div className="space-y-24">
          {/* About Section */}
          <section id="about" className="space-y-6 scroll-mt-20">
            <h2 className="text-2xl font-bold lg:pl-6">About</h2>
            <p className="lg:pl-6">
              With 5 years of commercial experience, I specialise in building modern web
              applications with a focus on exceptional user experiences. I've been instrumental in
              scaling a successful startup as their first employee, helping grow the team to 30+
              members and supporting over 1,000 client websites using Next.js, React, and other
              modern front-end technologies.
            </p>
          </section>

          {/* Experience Section */}
          <section id="experience" className="space-y-8 scroll-mt-20">
            <h2 className="text-2xl font-bold lg:pl-6">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
          </section>

          {/* Projects Section */}
          {/* <section id="projects" className="lg:pl-6 space-y-8 scroll-mt-20">
            <h2 className="text-2xl font-bold">Projects</h2>
          </section> */}

          {/* Contact Section */}
          <section id="contact" className="lg:pl-6 space-y-6 scroll-mt-20">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p>Get in touch for opportunities or just to say hi!</p>
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  )
}

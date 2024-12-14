import { ExperienceCard } from './ExperienceCard'
import { experiences } from '../data/experiences'
import { Badge } from './Badge'

export default function MainContent() {
  return (
    <div className="container mx-auto px-4 mt-12 lg:mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column - Sticky */}
        <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)]">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold">Front End Developer</h1>
            <p className="text-xl">
              Specialising in building exceptional digital experiences with Modern Front End
              Technologies
            </p>
            <Badge>TypeScript</Badge>
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
          </div>
        </div>

        {/* Right Column - Scrollable Content */}
        <div className="space-y-24">
          {/* About Section */}
          <section id="about" className="space-y-6 scroll-mt-20">
            <h2 className="text-2xl font-bold">About</h2>
            <p>
              With 5 years of commercial experience, I specialise in building modern web
              applications with a focus on exceptional user experiences. I've been instrumental in
              scaling a successful startup as their first employee, helping grow the team to 30+
              members and supporting over 1,000 client websites using Next.js, React, and other
              modern front-end technologies.
            </p>
          </section>

          {/* Experience Section */}
          <section id="experience" className="space-y-8 scroll-mt-20">
            <h2 className="text-2xl font-bold">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="space-y-8 scroll-mt-20">
            <h2 className="text-2xl font-bold">Projects</h2>
            {/* Project cards will go here */}
          </section>

          {/* Contact Section */}
          <section id="contact" className="space-y-6 scroll-mt-20">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p>Get in touch for opportunities or just to say hi!</p>
            {/* Contact info or form will go here */}
          </section>
        </div>
      </div>
    </div>
  )
}

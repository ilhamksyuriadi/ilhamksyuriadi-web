import Image from 'next/image'

const experiences = {
  engineering: [
    {
      role: 'Software Dev Engineer II',
      company: 'CSG International',
      duration: 'May 2023 - Present',
      logo: '/images/csg-logo.png',
      type: 'Full-time',
      description: 'Building and maintaining frontend solutions for enterprise-scale billing and revenue management systems.',
      stack: ['Angular', 'TypeScript'],
    },
    {
      role: 'Freelance Software Developer',
      company: 'Self-employed',
      duration: '2021 - 2023',
      logo: '/images/csg-logo.png',
      type: 'Full-time',
      description: 'Delivered web applications for various clients across different industries.',
      stack: ['React', 'Next.js', 'Tailwind CSS'],
    },
  ],
  mentoring: [
    {
      role: 'Mentor',
      company: 'Company A',
      duration: '2022 - 2023',
      logo: '/images/csg-logo.png',
      type: 'Full-time',
      description: 'Guided junior developers through frontend fundamentals and best practices.',
      stack: ['React', 'JavaScript', 'HTML/CSS'],
    },
    {
      role: 'Mentor',
      company: 'Company B',
      duration: '2021 - 2022',
      logo: '/images/csg-logo.png',
      type: 'Full-time',
      description: 'Mentored students in web development fundamentals and career guidance.',
      stack: ['JavaScript', 'HTML/CSS'],
    },
  ],
}

const ExperienceList = ({ items }: { items: typeof experiences.engineering }) => (
  <div className="flex flex-col">
    {items.map((exp, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row md:items-start gap-2 pb-6 last:pb-0 md:gap-12 mb-4 last:mb-0"
      >
        {/* Duration */}
        <span className="hidden md:block text-sm text-black md:w-32 shrink-0 md:pt-2">
          {exp.duration}
        </span>

        {/* Content */}
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex items-center gap-3">
            {exp.logo && (
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <div className="flex flex-col">
              <h3 className="text-base md:text-lg font-bold text-black">
                {exp.role}
              </h3>
              <p className="text-sm text-navyfont-medium">

                {exp.company}
                <span className="ml-2 text-xs font-medium px-2 py-0.5 rounded-full bg-lavender">
                  {exp.type}
                </span>
              </p>
            </div>
          </div>

          {/* Duration - mobile only, above description */}
          <span className="text-sm text-navy leading-relaxed md:hidden">
            {exp.duration}
          </span>

          <p className="text-sm text-black leading-relaxed">
            {exp.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-1">
            {exp.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium px-3 py-1 rounded-full bg-lavender text-navy"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default function ExperienceSection() {
  return (
    <section className="bg-transparent max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

      <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
        Experience
      </h2>
      <p className="text-sm md:text-base text-black mb-10 md:mb-14">
        A journey through the roles that shaped who I am today.
      </p>

      {/* Engineering */}
      <div className="mb-12">
        <h3 className="text-md font-bold uppercase tracking-widest text-gray-dark mb-4">
          SOFTWARE ENGINEER
        </h3>
        <ExperienceList items={experiences.engineering} />
      </div>

      {/* Mentoring */}
      <div>
        <h3 className="text-md font-bold uppercase tracking-widest text-gray-dark mb-4">
          MENTORING & TEACHING
        </h3>
        <ExperienceList items={experiences.mentoring} />
      </div>

    </section>
  )
}
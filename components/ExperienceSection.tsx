import Image from 'next/image'

const experiences = {
  engineering: [
    {
      role: 'Software Dev Engineer II',
      company: 'CSG International',
      duration: 'May 2023 - Present',
      logo: '/images/company/csg-logo.png',
      type: 'Full-time',
      location: 'Remote',
      address: 'Australia',
      description: 'Developed, debugged, and maintained CSG product applications by building new features, refactoring legacy code, and ensuring cross-platform compatibility. Contributed to quality assurance through release testing, Jest unit testing, and self-initiated efforts to improve test coverage and documentation.',
      stack: ['Angular', 'TypeScript', 'Tailwind CSS', 'Jest'],
    },
    {
      role: 'Frontend Developer',
      company: 'FinESG',
      duration: 'Sep 2024 - Sep 2025',
      logo: '/images/company/finesg-logo.png',
      type: 'Freelance',
      location: 'Remote',
      address: 'Singapore',
      description: 'Developed the front-end of an ESG report generation web application, implementing UI designs, complex dynamic forms, and backend integrations while also assisting with minor backend tasks. Additionally set up essential front-end tooling including styling libraries, authentication, and deployment configurations.',
      stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      role: 'Software Engineer - Web Platform',
      company: 'Tokopedia',
      duration: 'Feb 2021 - April 2023',
      logo: '/images/company/tokopedia-logo.png',
      type: 'Full-time',
      location: 'Hybrid',
      address: 'Jakarta, Indonesia',
      description: 'Developed and maintained responsive, high-performance web applications and internal tools for the Digital Goods and Enterprise tribes, while optimizing SEO, refactoring legacy code, and ensuring code quality through Jest unit testing. Also contributed beyond core responsibilities by mentoring interns, building a Flutter mobile app as an initiative, and providing web development guidance to other teams.',
      stack: ['React', 'Emotion CSS', 'TypeScript', 'Jest'],
    },
    {
      role: 'Frontend Developer',
      company: 'Alfabeta',
      duration: 'Oct 2020 - Dec 2020',
      logo: '/images/company/alfabeta-logo.png',
      type: 'Contract',
      location: 'Hybrid',
      address: 'Jakarta, Indonesia',
      description: 'Migrated and enhanced a front-end web analytics dashboard by developing reusable React components and implementing responsive layouts for improved functionality and performance.',
      stack: ['React', 'Material UI', 'JavaScript'],
    },
    {
      role: 'Frontend Developer',
      company: 'Paper Id',
      duration: 'Feb 2020 - June 2020',
      logo: '/images/company/paper-id-logo.png',
      type: 'Full-time',
      location: 'Hybrid',
      address: 'Jakarta, Indonesia',
      description: 'Developed and maintained web applications using Angular and Vue, resolving bugs and implementing improvements, while integrating tracking systems with Google Tag Manager and third-party analytics tools.',
      stack: ['Angular', 'Vue', 'TypeScript'],
    },
  ],

  mentoring: [
    {
      role: 'Frontend Facilitator',
      company: 'Binar Academy',
      duration: 'Nov 2022 - Mar 2023',
      logo: '/images/company/binar-logo.png',
      type: 'Contract',
      location: 'Remote',
      address: 'Tangerang Selatan, Indonesia',
      description: 'Designed and delivered engaging learning experiences for Binar Academy students, facilitating interactive sessions while assessing performance and providing constructive feedback.',
      stack: ['React', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      role: 'Mentor - React js',
      company: 'Dibimbing Id',
      duration: 'Mar 2022 - Jun 2022',
      logo: '/images/company/dibimbing-logo.png',
      type: 'Contract',
      location: 'Remote',
      address: 'Depok, Indonesia',
      description: 'Prepared and delivered hands-on React.js learning sessions, mentoring students through projects and evaluating assignments to track their progress.',
      stack: ['React', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      role: 'Instructor - Frontend Engineering',
      company: 'Ruangguru',
      duration: 'Feb 2022 - Jun 2022',
      logo: '/images/company/ruangguru-logo.png',
      type: 'Contract',
      location: 'Remote',
      address: 'Jakarta, Indonesia',
      description: 'Taught software engineering fundamentals and front-end web development while assessing assignments to monitor and support student progress.',
      stack: ['React', 'JavaScript', 'HTML', 'CSS'],
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
        <span className="hidden md:block text-sm text-black md:w-36 shrink-0 md:pt-2">
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
                <span className="text-gray-dark">
                  {' '}•{' '}
                </span>
                {exp.type}
                <span className="text-gray-dark">
                  {' '}•{' '}
                </span>
                {exp.location}
                <span className="text-gray-dark">
                  {' '}•{' '}
                </span>
                {exp.address}
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
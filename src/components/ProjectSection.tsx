import { useState } from 'react'
import { ExternalLinkIcon, GithubIcon } from 'lucide-react'
const projects = [
  {
    id: 1,
    title: 'Racing Academy Platform',
    category: 'Web Development',
    image:
      '/Image/Speed.png',
    description:
      'A full-featured racing academy platform with race training management, Track training management, and registration opportunity.',
    technologies: ['HTML', 'Bootstrap', 'CSS', 'Javascript'],
    liveLink: 'https://speedsterracingacademy.com/',
    githubLink: 'https://github.com/drix101/Speedster-Racing-Academy.git',
  },
  {
    id: 2,
    title: 'Task Management Application',
    category: 'Web Design',
    image:
      '/Image/task-manager.png',
    description:
      'A mobile application for managing daily tasks, with reminders and progress tracking.',
    technologies: ['React','Typescript', 'Zustand', 'TailwindCSS'],
    liveLink: 'https://task-management-beta-five.vercel.app/',
    githubLink: 'https://github.com/drix101/Task-Management.git',
  },
  {
    id: 3,
    title: 'Future-Build Construction Website',
    category: 'Web Development',
    image:
      '/Image/future-build.png',
    description:
      'A responsive construction website .',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Typescript'],
    liveLink: 'https://future-build-construction.vercel.app/',
    githubLink: 'https://github.com/drix101/future-build.git',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    category: 'Web Design',
    image: '/Image/weather.png',
    description:
      'A weather dashboard that provides current and forecasted weather information.',
    technologies: ['Next JS','Typescript', 'OpenWeather API', 'Chart.js'],
    liveLink: 'https://weather-dashboard-bay-zeta.vercel.app/',
    githubLink: 'https://github.com/drix101/Weather-Dashboard.git',
  },
  {
    id: 5,
    title: 'RealtyVest Investment Platform',
    category: 'Web Development',
    image: '/Image/RealtyVest.png',
    description:
      'A full-featured investment platform that allows users to buy, sell, and invest in real estate properties.',
    technologies: ['React', 'Tailwind', 'CSS', 'Javascript'],
    liveLink: 'https://realty-vest-investment-platform.vercel.app/',
    githubLink: 'https://github.com/drix101/RealtyVest-Investment-Platform.git',
  }
]
const categories = ['All', 'Web Development', 'Web Design']
export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)
  return (
    <section id="projects" className="py-20 min-h-screen flex items-center pt-16 bg-gradient-to-br from-[#111827] to-[#0f172a]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl text-cyan-300 md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-cyan-300 mx-auto mb-6"></div>
          <p className="text-white text-2xl">
            Here are some of my recent projects as each project showcases
            different skills and technologies.
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full ${activeCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'} transition-colors`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-100 duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-3 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span className="mr-1">View Project</span>
                    <ExternalLinkIcon size={16} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-slate-600 hover:text-cyan-500 transition-colors"
                  >
                    <span className="mr-1">View Code</span>
                    <GithubIcon size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/drix101"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}

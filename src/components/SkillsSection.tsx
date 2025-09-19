import React from 'react'
const skills = [
  {
    category: 'Frontend',
    items: [
      {
        name: 'HTML5',
        level: 95,
      },
      {
        name: 'CSS',
        level: 90,
      },
      {
        name: 'JavaScript',
        level: 92,
      },
      {
        name: 'React',
        level: 88,
      },
      {
        name: 'TypeScript',
        level: 85,
      },
      {
        name: 'Next.js',
        level: 65,
      },
      {
        name: 'Tailwind CSS',
        level: 85,
      },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      {
        name: 'Git & GitHub',
        level: 85,
      },
      {
        name: 'Figma',
        level: 82,
      },
      {
        name: 'Corel Draw',
        level: 78,
      },
      {
        name: 'Bootstrap',
        level: 85,
      }
    ],
  },
  {
    category: 'DevOps',
    items: [
      {
        name: 'Kubernetes',
        level: 73,
      },
      {
        name: 'Docker',
        level: 75,
      },
      {
        name: 'AWS',
        level: 68,
      },
      {
        name: 'GitLab',
        level: 93,
      },
      {
        name: 'Continous Integration',
        level: 89,
      },
      {
        name: 'Jenkins',
        level: 56,
      },
    ],
  },
]
export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-card bg-gradient-to-br from-[#111827] to-[#0f172a]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-cyan-300 text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-cyan-300 mx-auto mb-6"></div>
          <p className="text-white text-xl">
            I've worked with a variety of technologies and tools throughout my
            career. Here's an overview of my technical skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-6 text-center">
                {skillCategory.category}
              </h3>
              <div className="space-y-6">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-slate-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{
                          width: `${skill.level}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <h3 className="text-yellow-300 text-2xl font-bold text-center mb-8">
            Frameworks and Platforms I can Work With
          </h3>
          <div className="text-cyan-300 flex flex-wrap justify-center gap-8">
            {[
              {
                name: 'React',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
              },
              {
                name: 'JavaScript',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
              },
              {
                name: 'TypeScript',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
              },
              {
                name: 'Node.js',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
              },
              {
                name: 'Next.js',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
              },
              {
                name: 'TailwindCSS',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
              },
              {
                name: 'Framer Motion',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg',
              },
              {
                name: 'shadcn UI',
                icon: 'https://ui.shadcn.com/favicon.ico',
              },
              {
                name: 'Bootstrap',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
              },
              {
                name: 'Git',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
              },
              {
                name: 'AWS',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
              },
              {
                name: 'Docker',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
              },
              {
                name: 'Kubernetes',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg',
              },
              {
                name: 'GitHub',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
              },
              {
                name: 'GitLab',
                icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg',
              }
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={tech.icon} alt={tech.name} className="w-16 h-16" />
                <span className="mt-2 text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

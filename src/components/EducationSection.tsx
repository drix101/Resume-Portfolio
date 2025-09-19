import React from 'react'
import { GraduationCapIcon, CalendarIcon, MapPinIcon } from 'lucide-react'


const educationData = [
  {
    id: 1,
    degree: 'Higher National Diploma in Computer Science',
    institution: 'Lagos State Polytechnic',
    location: 'Lagos State, Nigeria',
    period: '2019 - 2021',
    achievements: [
      'Faculty Chairman - School of Technology ',
      'Student Union Goverment Publication Chairman',
      'Student Union Goverment Honorable Member',
      'Basketball Gold medalist - Nigeria Polytechnic Games 2021',
      'Team Silver Medalist - Nigeria Polytechnic Games 2019'
    ]
  },
  {
    id: 2,
    degree: 'National Diploma',
    institution: 'Lagos State Polytechnic',
    location: 'Lagos State, Nigeria',
    period: '2016-2018',
    gpa: null,
    description: 'Intensive 6-month program covering modern web technologies including React, Node.js, MongoDB, and cloud deployment.',
    achievements: [
      'Student Union Government, Lagos State Polytechnic',
      'Faculty Assistant General Secretary, School of Technology',
      'Department of Computer Science - Sport Director',
      'Table Tennis Team Silver Medalist - Nigeria Polytechnic Games 2017'
    ]
  },
  {
    id: 3,
    degree: 'Secondary School Leaving Certificate',
    institution: 'High Que High School',
    location: 'Lagos State, Nigeria',
    period: '2010 - 2016',
    achievements: [
      'Game Prefect',
      'Team Captain - Basketball & Table Tennis',
      'State Inter School Competition - 2nd Place'
    ]
  }
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-[#111827] to-[#0f172a]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-cyan-300 text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-cyan-300 mx-auto mb-4"></div>
          <p className="text-white text-2xl">
            My educational journey and academic achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200"></div>

            {educationData.map((education, index) => (
              <div key={education.id} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">
                          {education.degree}
                        </h3>
                        <div className="flex items-center text-blue-600 font-semibold mb-2">
                          <GraduationCapIcon size={16} className="mr-2" />
                          {education.institution}
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-slate-600">
                        <CalendarIcon size={16} className="mr-2" />
                        <span>{education.period}</span>
                      </div>
                      <div className="flex items-center text-slate-600">
                        <MapPinIcon size={16} className="mr-2" />
                        <span>{education.location}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {education.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-slate-600">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional certifications section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-cyan-300 text-2xl font-bold text-center mb-4">Certifications & Additional Learning</h3>
          <div className="w-20 h-1 bg-cyan-300 mx-auto mb-10"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Software Engineer - Frontend Development Certification',
                issuer: 'ALX Africa',
                year: '2025'
              },
              {
                title: 'Software Engineer - Frontend Development Certification',
                issuer: 'Udemy - Meta Academy',
                year: '2025'
              },
              {
                title: 'Cisco Certified Network Associates (CCNA)',
                issuer: 'Alison Academy',
                year: '2024'
              },
              {
                title: 'CompTIA A+ Certification',
                issuer: 'Alison Academy',
                year: '2025'
              },
              {
                title: 'Diploma in Interconnecting Cisco Networking Devices (ICND1) v3 CCNA',
                issuer: 'Alison Academy',
                year: '2025'
              },
              {
                title: 'AWS DevOps Continuous; Integration, Delivery and Deployment',
                issuer: 'Alison Academy',
                year: '2025'
              }
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCapIcon size={24} className="text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-1">{cert.title}</h4>
                <p className="text-slate-600 text-sm mb-1">{cert.issuer}</p>
                <p className="text-blue-600 text-sm font-medium">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
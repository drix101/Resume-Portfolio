import React from 'react'
export function AboutSection() {
  return (
    <section id="aboutme" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-[#111827] to-[#0f172a]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-cyan-300 text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5">
            <div className="relative">
              <div className="bg-cyan-100 absolute -top-2 -left-2 w-full h-full rounded-lg"></div>
              <img
                src="/Image/Oyinlola-Lawal.jpg"
                alt="About me"
                className="w-full rounded-lg relative z-10"
              />
            </div>
          </div>
          <div className="md:w-3/5 mt-8 md:mt-0">
            <h3 className="text-cyan-300 text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-white mb-4">
              I'm a DevOps & Digital Infrastructure Expert and Frontend Developer with experience in building and managing reliable,
              secure, and scalable IT systems. I specialize in setting up automated processes for software deployment, managing
              cloud services, and ensuring smooth, uninterrupted digital operations. <br />
              On the frontend side, I create responsive and user-friendly interfaces that deliver great user experiences. I have a strong
              understanding of frontend technologies such as HTML, CSS, and JavaScript, as well as modern frontend frameworks
              like React and Next.js.
            </p>
            <p className="text-white mb-6">
              I enjoy collaborating with different teams to ensure our technological solutions align with business goals
               while meeting security and operational standards. I'm passionate about leveraging modern DevOps
                practices, frontend frameworks, and emerging technologies to improve workflows, enhance services,
                 and deliver better outcomes for both businesses and users. <br />
                 I'm also a strong believer in the importance of continuous learning and staying up-to-date with the latest industry trends.
                 Whether it's exploring new technologies, participating in hackathons, or contributing to open-source projects, I'm always eager to expand my knowledge and skills.
            </p>

            <a
              href="https://drive.google.com/file/d/1Ysgf79Hb5IM8sCkjiIMI3SNTcMU1zQAl/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

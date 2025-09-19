import { useEffect, useRef } from 'react'
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react'
import Typed from 'typed.js'

export function HeroSection() {
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const options = {
      strings: ["Oyinlola Yusuf Lawal"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: false,
      showCursor: true,
      cursorChar: '|',
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy(); // Clean up the Typed instance on unmount
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-[#111827] to-[#0f172a]"
    >
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 mt-12 md:mt-0 md:pr-12">
            <p className="text-cyan-300 font-semibold mb-2">Hello, I'm</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              <span ref={typedElement}></span>
            </h1>
            <h2 className="bg-gradient-to-r from-cyan-300 to-yellow-300 bg-clip-text text-transparent text-3xl md:text-3xl font-bold mb-4">
              Dev Ops Engineer & Frontend Developer
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I craft responsive websites and web applications that provide
              intuitive, pixel-perfect user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-md font-bold transition-all duration-300 shadow-lg shadow-blue-500/20"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-gray-200 px-6 py-3 rounded-md font-bold transition-colors"
              >
                View My Projects
              </a>
            </div>
            <div className="mt-8 flex space-x-5">
              <a
                href="https://github.com/drix101"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/oyinlola-yusuf-lawal-4873b916b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon size={24} />
              </a>
              <a
                href="https://x.com/_Hendrix231"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <TwitterIcon size={24} />
              </a>
              <a
                href="mailto:hoyheenlawlarlawal@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <MailIcon size={24} />
              </a>
              <a href="https://wa.link/fzls8g" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-65 h-65 md:w-90 md:h-90 rounded-full overflow-hidden border-4 border-white/10 shadow-xl shadow-blue-500/10">
              <img
                src="/Image/dummy.png"
                alt="Oyinlola Lawal"
                className="w-full h-full object-cover"
              />
              <div className='absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

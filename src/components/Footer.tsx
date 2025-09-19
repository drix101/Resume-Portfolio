import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
} from 'lucide-react'
export function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-4">
      <div className="container mx-auto px-4 md:px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#" className="text-3xl font-bold">
            <div className="bg-gradient-to-r from-cyan-300 to-yellow-300 bg-clip-text text-transparent px-6 py-3 rounded-md flex items-center"> 
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2"> 
              <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center"> 
                <div className="w-3 h-3 rounded-full bg-white"></div> 
              </div> 
            </div> 
            <span className="bg-gradient-to-r from-cyan-300 to-yellow-300 bg-clip-text text-transparent font-bold text-2xl">Oyinlola Lawal</span> 
          </div>
            </a>
          </div>
          <div className="flex space-x-3">
            <a
              href="https://github.com/drix101"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/oyinlola-lawal-743789224/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="https://twitter.com/_Hendrix231"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              <TwitterIcon size={20} />
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
        <hr className="border-slate-700 my-6" />
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="text-slate-100 text-medium">
            © {new Date().getFullYear()} Oyinlola Lawal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

import { useEffect, useState } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Set scrolled state for background change
      setScrolled(currentScrollY > 50)
      
      // Hide/show header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false)
        setMobileMenuOpen(false) // Close mobile menu when hiding
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled 
          ? 'bg-[#111827]/90 backdrop-blur-md border-b border-gray-800 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white">
          <div className="bg-gradient-to-r from-cyan-300 to-yellow-300 bg-clip-text text-transparent px-6 py-3 rounded-md flex items-center"> 
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2"> 
              <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center"> 
                <div className="w-3 h-3 rounded-full bg-white"></div> 
              </div> 
            </div> 
            <span className="bg-gradient-to-r from-cyan-300 to-yellow-300 bg-clip-text text-transparent font-bold text-2xl">Oyinlola Lawal</span> 
          </div>
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { label: 'About Me', href: '#aboutme' },
            { label: 'Education', href: '#education' },
            { label: 'Projects', href: '#projects' },
            { label: 'Skills', href: '#skills' },
            { label: 'Contact Me', href: '#contact' }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-bold text-gray-100 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#0f172a] border-b border-gray-800 py-4 px-6 shadow-lg">
          {[
            { label: 'About Me', href: '#aboutme' },
            { label: 'Education', href: '#education' },
            { label: 'Projects', href: '#projects' },
            { label: 'Skills', href: '#skills' },
            { label: 'Contact Me', href: '#contactme' }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 font-medium text-gray-300 hover:text-white hover:bg-white/10 px-3 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { EducationSection } from './components/EducationSection'
import { ProjectsSection } from './components/ProjectSection'
import { SkillsSection } from './components/SkillsSection'
import ContactSection from './components/ContactSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen">
       <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

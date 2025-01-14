import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { ProjectCard } from '@/components/project-card'
import { AnimatedSection } from '@/components/animated-section'

const projects = [
  {
    title: 'Stooore – MERN Stack E-commerce Application',
    description: 'A responsive single-page e-commerce platform using the MERN stack, focused on seamless user experience. Deployed on AWS using Docker, managed via AWS ECS and ECR.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
    link: 'https://github.com/yourusername/stooore',
  },
  {
    title: 'NeuroAssess - AI-Assisted Support for Neurodivergent Students',
    description: 'An AI-driven MERN stack platform to diagnose and support neurodivergent students with personalized assessments and progress tracking.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['React', 'Node.js', 'MongoDB', 'AI', 'Machine Learning'],
    link: 'https://github.com/yourusername/neuroassess',
  },
  {
    title: 'Phishing Email Detection Application',
    description: 'A web application using Python and FastAPI to classify emails as phishing or safe, improving email security.',
    image: '/placeholder.svg?height=200&width=300',
    tags: ['Python', 'FastAPI', 'Machine Learning', 'NLP'],
    link: 'https://github.com/yourusername/phishing-detection',
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#f5f0eb] flex flex-col">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <AnimatedSection>
          <h1 className="text-4xl font-bold mb-8">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  )
}


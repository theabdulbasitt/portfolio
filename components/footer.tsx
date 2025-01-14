import { Phone, Mail, Twitter, Linkedin, Github, Instagram } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="border-t py-12 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-4">Call</h3>
          <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
            <Phone className="w-4 h-4" />
            123-456-7890
          </a>
        </div>
        <div>
          <h3 className="font-bold mb-4">Write</h3>
          <a href="mailto:abdul@example.com" className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
            <Mail className="w-4 h-4" />
            abdul@example.com
          </a>
        </div>
        <div>
          <h3 className="font-bold mb-4">Follow</h3>
          <div className="flex space-x-4">
            {[
              { icon: Twitter, href: 'https://twitter.com/abdulbasit', id: 'twitter-footer' },
              { icon: Github, href: 'https://github.com/abdulbasit', id: 'github-footer' },
              { icon: Linkedin, href: 'https://linkedin.com/in/abdulbasit', id: 'linkedin-footer' },
              { icon: Instagram, href: 'https://instagram.com/abdulbasit', id: 'instagram-footer' },
            ].map(({ icon: Icon, href, id }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} by Abdul Basit. All rights reserved.</p>
      </div>
    </footer>
  )
}


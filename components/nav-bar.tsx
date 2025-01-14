'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = ['RESUME', 'PROJECTS', 'CONTACT']

  return (
    <nav className="w-full py-4 px-6 md:px-12">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div 
            className="h-4 w-4 bg-blue-600"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
          <span className="text-sm md:text-base">
            Abdul Basit <span className="text-gray-500">/ FULL STACK DEVELOPER</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`/${item.toLowerCase()}`}
                className="text-sm hover:text-blue-600 transition-colors"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden absolute left-0 right-0 bg-white shadow-lg mt-4 py-4 px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {menuItems.map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`/${item.toLowerCase()}`}
                className="block py-2 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </nav>
  )
}


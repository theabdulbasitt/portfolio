'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export const HeroSection = () => {
  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/abdulbasit', id: 'twitter' },
    { icon: Github, href: 'https://github.com/abdulbasit', id: 'github' },
    { icon: Linkedin, href: 'https://linkedin.com/in/abdulbasit', id: 'linkedin' },
    { icon: Instagram, href: 'https://instagram.com/abdulbasit', id: 'instagram' },
  ]

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center">
      {/* Left Section with Background */}
      <motion.div 
        className="w-full md:w-1/2 bg-[#f5f0eb] min-h-[50vh] md:min-h-screen relative flex items-center justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="bg-white p-8 rounded-lg shadow-lg w-72 md:w-96 text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative w-32 h-32 mx-auto mb-4">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="Abdul Basit"
              width={128}
              height={128}
              className="rounded-full"
              priority
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">Abdul Basit</h2>
          <p className="text-gray-600 mb-6">FULL STACK DEVELOPER</p>
          <div className="flex justify-center space-x-4">
            {socialLinks.map(({ icon: Icon, href, id }) => (
              <motion.a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div 
        className="w-full md:w-1/2 p-8 md:p-16"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h1 
          className="text-6xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Hello
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Here's who I am & what I do
        </motion.p>
        <motion.div 
          className="flex space-x-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/resume">RESUME</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/projects">PROJECTS</Link>
          </Button>
        </motion.div>
        <motion.div 
          className="space-y-6 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p>
            Passionate Full Stack Developer with expertise in building modern web applications.
            Specialized in React, Next.js, and Node.js ecosystems.
          </p>
          <p>
            Creating innovative solutions and delivering exceptional user experiences
            through clean, efficient, and maintainable code.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}


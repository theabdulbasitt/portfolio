'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Card, CardContent } from '@/components/ui/card'
import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { AnimatedSection } from '@/components/animated-section'

export default function ResumePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Direct URL to the resume image
  const resumeUrl = "https://i.ibb.co/GJdgdRb/image.png"

  return (
    <div className="min-h-screen bg-[#f5f0eb]">
      <NavBar />
      <main className="container mx-auto px-4 py-12">
        <AnimatedSection>
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-blue-600"></div>
            <h1 className="text-4xl font-bold">Resume</h1>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="mr-2 h-4 w-4" />
            DOWNLOAD CV
          </Button>
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Card className="max-w-2xl mx-auto cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                  <Image
                    src={resumeUrl}
                    alt="Abdul Basit's Resume Preview"
                    width={800}
                    height={1130}
                    className="object-cover w-full h-full"
                    priority
                    unoptimized // Added for external URL
                  />
                  <div className="absolute inset-0 bg-black/5 hover:bg-black/10 transition-colors" />
                </div>
                <div className="mt-4 text-center">
                  <h2 className="text-xl font-semibold">Click to view full resume</h2>
                </div>
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-7xl h-[90vh]">
            <div className="relative w-full h-full">
              <Image
                src={resumeUrl}
                alt="Abdul Basit's Resume"
                width={1600}
                height={2260}
                className="object-contain w-full h-full"
                priority
                unoptimized // Added for external URL
              />
            </div>
          </DialogContent>
        </Dialog>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  )
}


import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-4 flex-grow">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}


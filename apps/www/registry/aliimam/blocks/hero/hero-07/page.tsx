/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState } from "react"
import { motion, Variants } from "framer-motion"

import { Photo } from "@/registry/aliimam/blocks/hero/hero-07/components/gallery"
import { GridPattern } from "@/registry/aliimam/components/grid-pattern"
import { Button } from "@/registry/aliimam/ui/button"

type Direction = "left" | "right"

export default function PhotoGallery({
  animationDelay = 0.5,
}: {
  animationDelay?: number
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // First make the container visible with a fade-in
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true)
    }, animationDelay * 1000)

    // Then start the photo animations after a short delay
    const animationTimer = setTimeout(
      () => {
        setIsLoaded(true)
      },
      (animationDelay + 0.4) * 1000
    ) // Add 0.4s for the opacity transition

    return () => {
      clearTimeout(visibilityTimer)
      clearTimeout(animationTimer)
    }
  }, [animationDelay])

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1, // Reduced from 0.3 to 0.1 since we already have the fade-in delay
      },
    },
  }

  // Animation variants for each photo
  const photoVariants: Variants = {
    hidden: () => ({
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    }),
    visible: (custom: {
      x: number | string
      y: number | string
      order: number
    }) => ({
      x: custom.x,
      y: custom.y,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        mass: 1,
        delay: custom.order * 0.15,
      },
    }),
  }

  // Photo positions - horizontal layout with random y offsets
  const photos = [
    {
      id: 1,
      order: 0,
      x: "-320px",
      y: "15px",
      zIndex: 50, // Highest z-index (on top)
      direction: "left" as Direction,
      src: "https://images.pexels.com/photos/33600936/pexels-photo-33600936.jpeg",
    },
    {
      id: 2,
      order: 1,
      x: "-160px",
      y: "32px",
      zIndex: 40,
      direction: "left" as Direction,
      src: "https://images.pexels.com/photos/31596551/pexels-photo-31596551/free-photo-of-winter-scene-with-lake-view-in-van-turkiye.jpeg",
    },
    {
      id: 3,
      order: 2,
      x: "0px",
      y: "8px",
      zIndex: 30,
      direction: "right" as Direction,
      src: "https://images.pexels.com/photos/15526696/pexels-photo-15526696.jpeg",
    },
    {
      id: 4,
      order: 3,
      x: "160px",
      y: "22px",
      zIndex: 20,
      direction: "right" as Direction,
      src: "https://images.pexels.com/photos/19936068/pexels-photo-19936068/free-photo-of-women-sitting-on-hilltop-with-clouds-below.jpeg",
    },
    {
      id: 5,
      order: 4,
      x: "320px",
      y: "44px",
      zIndex: 10, // Lowest z-index (at bottom)
      direction: "left" as Direction,
      src: "https://images.pexels.com/photos/20494995/pexels-photo-20494995/free-photo-of-head-of-peacock.jpeg",
    },
  ]

  return (
    <div className="relative flex min-h-svh w-full flex-col items-center justify-center overflow-y-auto">
      <GridPattern
        className="absolute inset-0 h-full w-full [mask-image:radial-gradient(900px_circle_at_center,transparent,white)]"
        width={100}
        height={10}
      />
      <p className="lg:text-md my-2 text-center text-xs font-light tracking-widest text-slate-600 uppercase dark:text-slate-400">
        A Journey Through Visual Stories
      </p>
      <h3 className="z-20 mx-auto max-w-2xl justify-center py-3 text-center text-4xl md:text-7xl">
        Welcome to My <span className="text-primary"> Stories</span>
      </h3>
      <div className="relative mb-8 h-[350px] w-full items-center justify-center lg:flex">
        <motion.div
          className="relative mx-auto flex w-full max-w-7xl justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative flex w-full justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <div className="relative h-[220px] w-[220px]">
              {/* Render photos in reverse order so that higher z-index photos are rendered later in the DOM */}
              {[...photos].reverse().map((photo) => (
                <motion.div
                  key={photo.id}
                  className="absolute top-0 left-0"
                  style={{ zIndex: photo.zIndex }} // Apply z-index directly in style
                  variants={photoVariants}
                  custom={{
                    x: photo.x,
                    y: photo.y,
                    order: photo.order,
                  }}
                >
                  <Photo
                    width={220}
                    height={220}
                    src={photo.src}
                    alt="Photo"
                    direction={photo.direction}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="flex w-full justify-center">
        <Button className="cursor-pointer">View All Stories</Button>
      </div>
    </div>
  )
}

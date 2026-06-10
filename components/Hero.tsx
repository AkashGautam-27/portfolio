"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Download, Send, Github, Linkedin, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants"
import { fadeInUp, staggerContainer, float } from "@/lib/animations"
import Image from "next/image"

const roles = ["Frontend Developer", "Backend Developer", "Java Developer", "Problem Solver"]

export function Hero() {
  const [displayedRole, setDisplayedRole] = useState("")
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayedRole === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayedRole === "") {
      setIsDeleting(false)
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      const nextDisplayed = isDeleting
        ? displayedRole.slice(0, -1)
        : currentRole.slice(0, displayedRole.length + 1)

      timeout = setTimeout(() => setDisplayedRole(nextDisplayed), isDeleting ? 50 : 100)
    }

    return () => clearTimeout(timeout)
  }, [displayedRole, isDeleting, currentRoleIndex])

  const containerVariants = staggerContainer

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-16 md:pt-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background/50 to-background"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            y: [20, -10, 20],
            x: [20, -20, 20],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            y: [-10, 20, -10],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0">
        <motion.div
          initial="initial"
          animate="animate"
          variants={containerVariants}
          className="flex flex-col items-center text-center space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <motion.div
              className="inline-block"
              animate={float.animate}
              transition={float.transition}
            >
              <span className="px-4 py-2 rounded-full glass text-sm font-semibold bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20">
                👋 Welcome to my portfolio
              </span>
            </motion.div>
          </motion.div>


          {/* Name */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <motion.img
              src="/Profile.jpg"
              alt="Akash Gautam"
              className="w-45 h-45 md:w-60 md:h-60 rounded-xl border-4 border-cyan-400 shadow-2xl object-cover"
              initial={{
                opacity: 0,
                scale: 0.5,
                x: -100
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: [0, -10, 0]
              }}
              transition={{
                opacity: { duration: 0.8 },
                scale: { duration: 0.8 },
                x: { duration: 0.8 },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
            <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="gradient-text">{SITE_CONFIG.name}</span>
            </motion.h1>
               <motion.div variants={fadeInUp} className="h-20 md:h-24">
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {displayedRole}
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>
          </div>
          </motion.div>
          {/* Typewriter Effect */}
         


          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed"
          >
            Computer Science Engineering student passionate about building modern web
            applications and solving real-world problems through code. Experienced in
            Full Stack Development with a strong foundation in DSA and competitive programming.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold"
              >
                <Send className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </Link>
            <a href="/Resume.pdf" download="Akash_Gautam_Resume.pdf" className="inline-flex h-11 px-8 items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-blue-500/20 bg-background hover:bg-blue-500/10">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex gap-4 pt-8"
          >
            {SOCIAL_LINKS.slice(0, 3).map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative px-4 py-2 bg-background rounded-lg flex items-center gap-2 group-hover:text-blue-400 transition">
                  {link.icon === "Github" && <Github className="w-5 h-5" />}
                  {link.icon === "Linkedin" && <Linkedin className="w-5 h-5" />}
                  {link.icon === "Code" && <Code className="w-5 h-5" />}
                  <span className="text-sm font-medium">{link.name}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={fadeInUp}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 md:bottom-20 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm text-muted-foreground">Scroll to explore</p>
              <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-2 bg-foreground/50 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

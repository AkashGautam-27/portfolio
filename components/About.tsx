"use client"

import { motion } from "framer-motion"
import { Calendar, GraduationCap, Zap } from "lucide-react"
import { staggerContainer, fadeInUp } from "@/lib/animations"
import { ABOUT_ME, EDUCATION } from "@/lib/constants"

export function About() {
  const containerVariants = staggerContainer

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-background/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know me better - my journey, passion, and what drives me
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            {ABOUT_ME.split("\n\n").map((paragraph, index) => (
              <motion.p
                key={index}
                variants={fadeInUp}
                className="text-foreground/80 leading-relaxed text-lg"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              <div className="glass p-4 rounded-lg border border-blue-500/20">
                <div className="text-2xl md:text-3xl font-bold gradient-text">10+</div>
                <p className="text-sm text-muted-foreground">Projects Built</p>
              </div>
              <div className="glass p-4 rounded-lg border border-purple-500/20">
                <div className="text-2xl md:text-3xl font-bold gradient-text-alt">150+</div>
                <p className="text-sm text-muted-foreground">DSA Problems</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Education Timeline */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            {/* Education Card */}
            <motion.div
              variants={fadeInUp}
              className="glass p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{EDUCATION.degree}</h3>
                  <p className="text-sm text-foreground/60 mb-2">
                    {EDUCATION.field}
                  </p>
                  <p className="text-sm font-medium text-blue-400">
                    {EDUCATION.university}, {EDUCATION.location}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education Details */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-3"
            >
              <div className="glass p-4 rounded-lg border border-border text-center">
                <div className="text-2xl font-bold gradient-text">
                  {EDUCATION.endYear}
                </div>
                <p className="text-xs text-muted-foreground">Graduation</p>
              </div>
              <div className="glass p-4 rounded-lg border border-border text-center">
                <div className="text-2xl font-bold gradient-text">
                  {EDUCATION.cgpa}
                </div>
                <p className="text-xs text-muted-foreground">CGPA</p>
              </div>
              <div className="glass p-4 rounded-lg border border-border text-center">
                <div className="text-2xl font-bold gradient-text">
                  Year {EDUCATION.currentYear}
                </div>
                <p className="text-xs text-muted-foreground">Current</p>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={fadeInUp}
              className="space-y-3 pt-4"
            >
              {EDUCATION.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/70">{highlight}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

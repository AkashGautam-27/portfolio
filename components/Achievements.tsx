"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { staggerContainer, fadeInUp } from "@/lib/animations"
import { ACHIEVEMENTS } from "@/lib/constants"
import * as Icons from "lucide-react"

interface AchievementCardProps {
  icon: string
  title: string
  description: string
  stat: string
}

function AchievementCard({ icon, title, description, stat }: AchievementCardProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  // Get icon from lucide-react
  const IconComponent = (Icons[icon as keyof typeof Icons] || Icons.Trophy) as React.ComponentType<{ className: string }>

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="glass p-6 md:p-8 rounded-lg border border-border hover:border-blue-500/40 transition-all duration-300 group text-center"
    >
      <div className="flex justify-center mb-4">
        <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all">
          <IconComponent className="w-8 h-8 text-blue-400" />
        </div>
      </div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold gradient-text mb-2"
      >
        {stat}
      </motion.div>

      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-foreground/70">{description}</p>
    </motion.div>
  )
}

export function Achievements() {
  const containerVariants = staggerContainer

  return (
    <section
      id="achievements"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background/50 via-background to-background"
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
            <span className="gradient-text">Achievements & Highlights</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Milestones and accomplishments in my journey
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {ACHIEVEMENTS.map((achievement) => (
            <AchievementCard key={achievement.title} {...achievement} />
          ))}
        </motion.div>

        {/* Motivation Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 glass p-8 rounded-lg border border-blue-500/20 text-center"
        >
          <p className="text-lg md:text-xl italic text-foreground/80 leading-relaxed">
            &quot;Every problem is an opportunity to learn and grow. I&apos;m passionate about
            continuous improvement and pushing myself to achieve excellence in everything I do.&quot;
          </p>
          <p className="text-sm text-muted-foreground mt-4">— Akash Gautam</p>
        </motion.div>
      </div>
    </section>
  )
}

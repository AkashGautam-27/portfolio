"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { staggerContainer, fadeInUp } from "@/lib/animations"
import { SKILLS } from "@/lib/constants"

interface SkillItemProps {
  name: string
  level: number
}

function SkillBar({ name, level }: SkillItemProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
        />
      </div>
    </motion.div>
  )
}

export function Skills() {
  const containerVariants = staggerContainer

  const skillCategories = [
    { title: "Frontend", icon: "🎨", skills: SKILLS.frontend },
    { title: "Backend", icon: "⚙️", skills: SKILLS.backend },
    { title: "Database", icon: "🗄️", skills: SKILLS.database },
    { title: "Languages", icon: "💻", skills: SKILLS.languages },
    { title: "Tools", icon: "🛠️", skills: SKILLS.tools },
  ]

  return (
    <section
      id="skills"
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
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My expertise across different technologies and domains
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-lg border border-border hover:border-blue-500/40 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 glass p-6 rounded-lg border border-blue-500/20 text-center"
        >
          <p className="text-foreground/80">
            ✨ I&apos;m continuously learning and exploring new technologies to stay updated with industry trends.
            Currently focused on <span className="font-semibold text-blue-400">Next.js</span>, <span className="font-semibold text-purple-400">TypeScript</span>, and <span className="font-semibold text-cyan-400">System Design</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, Award, TrendingUp } from "lucide-react"
import { staggerContainer, fadeInUp } from "@/lib/animations"
import { EDUCATION } from "@/lib/constants"

const educationDetails = [
  {
    icon: GraduationCap,
    label: "Degree",
    value: EDUCATION.degree,
  },
  {
    icon: BookOpen,
    label: "Field of Study",
    value: EDUCATION.field,
  },
  {
    icon: Award,
    label: "University",
    value: `${EDUCATION.university}, ${EDUCATION.location}`,
  },
  {
    icon: TrendingUp,
    label: "CGPA",
    value: EDUCATION.cgpa,
  },
]

export function Education() {
  const containerVariants = staggerContainer

  return (
    <section
      id="education"
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
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Timeline Visualization */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600" />

              {/* Timeline Events */}
              {[
                {
                  year: EDUCATION.startYear,
                  title: "Admission",
                  description: "Started my BTech journey",
                },
                {
                  year: `Year ${EDUCATION.currentYear}`,
                  title: "Current",
                  description: "Actively learning and building projects",
                  current: true,
                },
                {
                  year: EDUCATION.endYear,
                  title: "Graduation",
                  description: "Expected completion",
                },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex gap-6"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-sm font-bold ${
                        event.current
                          ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white animate-pulse"
                          : "bg-card border-2 border-blue-500/40 text-blue-400"
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {event.year}
                    </motion.div>
                  </div>

                  {/* Event Content */}
                  <div className="pt-2">
                    <h3 className={`font-semibold ${
                      event.current ? "text-blue-400" : "text-foreground"
                    }`}>
                      {event.title}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Details Grid */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-4"
          >
            {educationDetails.map((detail, index) => {
              const Icon = detail.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="glass p-6 rounded-lg border border-border hover:border-blue-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                        {detail.label}
                      </p>
                      <p className="text-lg font-semibold text-foreground mt-1">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Additional Info */}
            <motion.div
              variants={fadeInUp}
              className="glass p-6 rounded-lg border border-blue-500/20 mt-6"
            >
              <h3 className="font-semibold mb-3 text-blue-400">Key Achievements</h3>
              <ul className="space-y-2">
                {EDUCATION.highlights.map((highlight, index) => (
                  <li key={index} className="text-sm text-foreground/70 flex items-start gap-2">
                    <span className="text-cyan-400 font-bold mt-0.5">→</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

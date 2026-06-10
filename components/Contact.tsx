"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Send, Loader2, CheckCircle, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { staggerContainer, fadeInUp } from "@/lib/animations"
import { CONTACT_CONFIG, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants"

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      // Try to send email using Resend
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setSubmitMessage("Message sent successfully! I'll get back to you soon.")
        reset()
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage(
        "Failed to send message. Please try again or email me directly."
      )
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = staggerContainer

  return (
    <section
      id="contact"
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
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {CONTACT_CONFIG.description}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <motion.div variants={fadeInUp} className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: SITE_CONFIG.email,
                  href: `mailto:${SITE_CONFIG.email}`,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: SITE_CONFIG.phone,
                  href: `tel:${SITE_CONFIG.phone}`,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Satna, Madhya Pradesh, India",
                  href: "#",
                },
              ].map((contact, index) => {
                const Icon = contact.icon
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    variants={fadeInUp}
                    className="glass p-4 rounded-lg border border-border hover:border-blue-500/40 transition-all duration-300 group flex items-start gap-4"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold uppercase">
                        {contact.label}
                      </p>
                      <p className="text-foreground font-medium group-hover:text-blue-400 transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="space-y-3">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Connect With Me
              </p>
              <div className="grid grid-cols-2 gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-3 rounded-lg border border-border hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300 group text-center"
                  >
                    <p className="text-sm font-medium group-hover:text-blue-400 transition-colors">
                      {link.name}
                    </p>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              variants={fadeInUp}
              className="glass p-4 rounded-lg border border-cyan-500/20 bg-cyan-500/5"
            >
              <p className="text-sm text-foreground/80">
                <span className="font-semibold text-cyan-400">💬 Quick Response:</span> I typically
                respond within 24 hours. Feel free to reach out anytime!
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass p-6 md:p-8 rounded-lg border border-border"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  {...register("name")}
                  placeholder="Your name"
                  className="bg-background/50 border-border/50 focus:border-blue-500/50"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-background/50 border-border/50 focus:border-blue-500/50"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  {...register("subject")}
                  placeholder="What's this about?"
                  className="bg-background/50 border-border/50 focus:border-blue-500/50"
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  {...register("message")}
                  placeholder="Your message..."
                  rows={5}
                  className="bg-background/50 border-border/50 focus:border-blue-500/50 resize-none"
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center gap-2 text-green-400 text-sm"
                >
                  <CheckCircle className="w-5 h-5" />
                  {submitMessage}
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                >
                  {submitMessage}
                </motion.div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            {/* Alternative Contact */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                Prefer email? Reach out directly at{" "}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-blue-400 hover:underline"
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import {
  ChevronDown,
  Clock,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Twitter,
  Users,
} from "@aliimam/icons"

import { Button } from "@/registry/aliimam/ui/button"
import { Input } from "@/registry/aliimam/ui/input"
import { Textarea } from "@/registry/aliimam/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const faqs = [
    {
      question: "What's your typical response time?",
      answer:
        "We aim to respond to all inquiries within 24 business hours. For urgent matters, please call our phone line during business hours.",
    },
    {
      question: "Do you offer consulting services?",
      answer:
        "Yes, we offer comprehensive consulting services tailored to your specific needs. Contact our sales team to discuss your requirements.",
    },
    {
      question: "Can I schedule a meeting online?",
      answer:
        "Absolutely! We offer virtual meetings via Zoom, Google Meet, or your preferred platform. Let us know your preference when you reach out.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, bank transfers, and digital payment methods. Our team will work with you on flexible payment arrangements.",
    },
    {
      question: "Are there bulk discounts available?",
      answer:
        "Yes, we offer volume discounts for enterprise customers. Contact our sales team for a customized quote.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Sales Director",
      email: "sarah@company.com",
    },
    {
      name: "Michael Chen",
      role: "Support Lead",
      email: "michael@company.com",
    },
    {
      name: "Emma Rodriguez",
      role: "Account Manager",
      email: "emma@company.com",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="bg-primary/10 absolute -top-40 -right-40 h-80 w-80 rounded-full blur-3xl" />
          <div className="bg-accent/10 absolute -bottom-40 -left-40 h-80 w-80 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <div className="border-primary/20 bg-primary/5 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2">
            <MessageCircle className="text-primary h-4 w-4" />
            <span className="text-primary text-sm font-medium">
              We&apos;re here to help
            </span>
          </div>
          <h1 className="text-foreground mb-6 text-5xl font-bold text-balance md:text-6xl lg:text-7xl">
            Let&apos;s Connect
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl text-balance">
            Have a question? We&apos;d love to hear from you. Get in touch with
            our team and we&apos;ll respond as quickly as possible.
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="relative z-10 mx-auto -mt-12 mb-24 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <QuickContactCard
            icon={<Mail className="h-6 w-6" />}
            title="Email Us"
            value="hello@company.com"
            description="We respond within 24 hours"
            href="mailto:hello@company.com"
          />
          <QuickContactCard
            icon={<Phone className="h-6 w-6" />}
            title="Call Us"
            value="+1 (555) 123-4567"
            description="Mon-Fri, 9am-5pm EST"
            href="tel:+15551234567"
          />
          <QuickContactCard
            icon={<MapPin className="h-6 w-6" />}
            title="Visit Us"
            value="123 Main Street"
            description="New York, NY 10001"
            href="#"
          />
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-foreground mb-2 text-3xl font-bold">
                Send us a Message
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and our team will get back to you
                shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="text-foreground mb-2 block text-sm font-medium"
                  >
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="text-foreground mb-2 block text-sm font-medium"
                  >
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  rows={7}
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Benefits */}
          <div className="space-y-12">
            <div>
              <h2 className="text-foreground mb-8 text-3xl font-bold">
                Why Choose Us
              </h2>
              <div className="space-y-6">
                <BenefitCard
                  icon={<Clock className="h-5 w-5" />}
                  title="Fast Response"
                  description="Average response time of 2-4 hours during business days"
                />
                <BenefitCard
                  icon={<Users className="h-5 w-5" />}
                  title="Expert Team"
                  description="Dedicated professionals ready to assist with your needs"
                />
                <BenefitCard
                  icon={<MessageCircle className="h-5 w-5" />}
                  title="Multi-Channel Support"
                  description="Reach us via email, phone, chat, or in-person meetings"
                />
              </div>
            </div>

            {/* Team Highlights */}
            <div>
              <h3 className="text-foreground mb-4 text-xl font-semibold">
                Meet Our Team
              </h3>
              <div className="space-y-3">
                {team.map((member) => (
                  <div
                    key={member.email}
                    className="border-border/50 bg-card/50 hover:border-primary/50 hover:bg-card flex items-center gap-3 rounded-lg border p-4 transition-all"
                  >
                    <div className="from-primary to-accent h-10 w-10 rounded-full bg-gradient-to-br" />
                    <div className="min-w-0 flex-1">
                      <p className="text-foreground text-sm font-medium">
                        {member.name}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="text-foreground mb-3 text-3xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-border bg-card overflow-hidden rounded-lg border transition-all"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="hover:bg-secondary/50 flex w-full items-center justify-between gap-4 p-6 text-left transition-colors"
                >
                  <h3 className="text-foreground text-lg font-medium">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`text-primary h-5 w-5 flex-shrink-0 transition-transform ${expandedFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="border-border bg-secondary/20 border-t px-6 py-4">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-t px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% -10%, var(--primary) 0%, var(--background) 65%)",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 100% 55% at 50% 0%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)",
              backgroundImage:
                "radial-gradient(circle, var(--foreground) 1.5px, transparent 1.5px)",
              backgroundSize: "22px 22px",
              height: "55%",
              left: "0",
              maskImage:
                "radial-gradient(ellipse 100% 55% at 50% 0%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)",
              pointerEvents: "none",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-8">
            Don&apos;t hesitate to reach out. Our support team is here to help
            you succeed.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="default">
              Get in Touch
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Social Links Footer */}
      <section className="border-border border-t px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            <p className="text-muted-foreground">
              Follow us on social media for updates
            </p>
            <div className="flex gap-3">
              <SocialLink
                href="#"
                icon={<Linkedin className="h-5 w-5" />}
                label="LinkedIn"
              />
              <SocialLink
                href="#"
                icon={<Twitter className="h-5 w-5" />}
                label="Twitter"
              />
              <SocialLink
                href="#"
                icon={<Github className="h-5 w-5" />}
                label="GitHub"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

interface QuickContactCardProps {
  icon: React.ReactNode
  title: string
  value: string
  description: string
  href: string
}

function QuickContactCard({
  icon,
  title,
  value,
  description,
  href,
}: QuickContactCardProps) {
  return (
    <a href={href} className="group">
      <div className="border-border bg-card hover:border-primary/50 h-full rounded-lg border p-6 transition-all hover:shadow-lg">
        <div className="bg-primary/10 text-primary group-hover:bg-primary/20 mb-4 inline-flex rounded-lg p-3 transition-colors">
          {icon}
        </div>
        <h3 className="text-foreground mb-1 font-semibold">{title}</h3>
        <p className="text-primary mb-2 text-sm font-medium">{value}</p>
        <p className="text-muted-foreground text-xs">{description}</p>
      </div>
    </a>
  )
}

interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex gap-4">
      <div className="bg-primary/10 text-primary flex-shrink-0 rounded-lg p-3">
        {icon}
      </div>
      <div>
        <h3 className="text-foreground font-semibold">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="border-border bg-card text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all"
    >
      {icon}
    </a>
  )
}

"use client"

import * as React from "react"

import { Attraction } from "@/registry/aliimam/components/attraction"
import { RenderCanvas } from "@/registry/aliimam/components/render-canvas"

const designServices = {
  graphicDesign: [
    "Logos",
    "Branding",
    "Social Media",
    "Print",
    "Packaging",
    "Marketing",
    "Infographics",
    "Motion",
    "Illustration",
    "Presentations",
    "Newsletters",
    "Thumbnails",
    "Covers",
    "Signage",
    "Mascots",
  ],
  webDigitalDesign: [
    "Websites",
    "UI/UX",
    "Landing Pages",
    "Ads",
    "Emails",
    "Apps",
    "No-Code",
  ],
  productPackagingDesign: ["Mockups", "3D", "Prototypes", "Products"],
  otherTools: [
    "Cursor",
    "Photoshop",
    "Illustrator",
    "After Effects",
    "Premiere pro",
    "Figma",
    "Framer",
    "VS Code",
    "React",
    "Typescript",
    "Vercel",
    "Github",
    "Framer",
    "ChatGPT",
    "V0",
    "Grok",
    "Shadcn/UI",
  ],
}

const colors = [
  "bg-red-500",
  "bg-red-500",
  "bg-red-500",
  "bg-purple-500",
  "bg-purple-500",
  "bg-purple-500",
  "bg-blue-500",
  "bg-blue-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-green-500",
  "bg-green-500",
  "bg-orange-500",
  "bg-orange-500",
  "bg-orange-500",
  "bg-pink-500",
  "bg-pink-500",
  "bg-pink-500",
  "bg-teal-500",
  "bg-teal-500",
  "bg-teal-500",
  "bg-indigo-500",
  "bg-indigo-500",
  "bg-indigo-500",
  "bg-yellow-500",
  "bg-yellow-500",
  "bg-yellow-500",
  "bg-cyan-500",
  "bg-cyan-500",
  "bg-cyan-500",
  "bg-rose-500",
  "bg-rose-500",
  "bg-rose-500",
  "bg-emerald-500",
  "bg-emerald-500",
  "bg-emerald-500",
]

type ServiceItem = {
  service: string
  x: string
  y: string
  color: string
  angle: number
}

const Services = () => {
  const allServices = Object.values(designServices).flat()

  const [servicesWithProps, setServicesWithProps] = React.useState<
    ServiceItem[]
  >([])
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const servicesWithRandomProps = allServices.map((service, index) => ({
      service,
      x: `${10 + (index % 10) * 8}%`,
      y: `${10 + Math.floor(index / 10) * 15}%`,
      color: colors[Math.floor(Math.random() * colors.length)] || "bg-gray-500",
      angle: Math.random() * 30 - 15,
    }))

    setServicesWithProps(servicesWithRandomProps)
  }, [])

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 728)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const numRows = Math.ceil(allServices.length / 30)

  const containerHeight = isMobile ? numRows * 300 + 50 : numRows * 200 + 100

  if (servicesWithProps.length === 0) {
    return (
      <div className="container">
        <div
          className="flex items-center justify-center lg:border-x"
          style={{ height: `${containerHeight}px` }}
        >
          <div className="relative h-full w-full max-w-5xl overflow-hidden md:border-x">
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-7xl font-bold tracking-tighter uppercase md:text-9xl">
              Skills & Strengths
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-gray-900"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="md:container">
      <div
        className="flex items-center justify-center lg:border-x"
        style={{ height: `${containerHeight}px` }}
      >
        <div className="relative h-full w-full max-w-5xl overflow-hidden md:border-x">
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-7xl font-bold tracking-tighter uppercase md:text-9xl">
            Skills & Strengths
          </h1>

          <RenderCanvas lineWidth={20} trails={200} />
          <Attraction gravity={{ x: 0, y: 1 }}>
            {servicesWithProps.map(({ service, x, y, color, angle }, index) => (
              <div
                key={index}
                data-x={x}
                data-y={y}
                data-angle={angle}
                className={`${color} px-4 py-2 text-sm text-white uppercase hover:cursor-grab`}
              >
                {service}
              </div>
            ))}
          </Attraction>
        </div>
      </div>
    </div>
  )
}

export { Services }

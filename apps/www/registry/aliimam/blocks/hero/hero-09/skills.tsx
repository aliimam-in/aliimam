"use client"

import * as React from "react"

import { Attraction } from "@/registry/aliimam/components/attraction"

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
    "Premiere Pro",
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
  "bg-purple-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-orange-500",
  "bg-pink-500",
  "bg-teal-500",
  "bg-indigo-500",
  "bg-yellow-500",
  "bg-cyan-500",
  "bg-rose-500",
  "bg-emerald-500",
]

const getRandom = (min: number, max: number) =>
  Math.random() * (max - min) + min

const Skills = () => {
  const servicesWithProps = React.useMemo(() => {
    const allServices = Object.values(designServices).flat()

    return allServices.map((service, index) => ({
      service,
      x: getRandom(0, 600),
      y: getRandom(0, 400),
      angle: getRandom(0, 360),
      color: colors[index % colors.length],
    }))
  }, [])

  return (
    <div className="flex h-[600px] w-full items-center justify-center overflow-hidden">
      <Attraction gravity={{ x: 0, y: 1 }}>
        {servicesWithProps.map(({ service, x, y, color, angle }, index) => (
          <div
            key={index}
            data-x={x}
            data-y={y}
            data-angle={angle}
            className={`${color} cursor-grab rounded-md px-4 py-2 text-sm text-white uppercase select-none active:cursor-grabbing`}
          >
            {service}
          </div>
        ))}
      </Attraction>
    </div>
  )
}

export { Skills }

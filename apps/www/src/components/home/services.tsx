"use client";
import * as React from "react";
import { Gravity, MatterBody } from "@/src/components/ui/gravity";
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
};

const colors = [
  'bg-red-500', 'bg-red-500', 'bg-red-500',
  'bg-purple-500', 'bg-purple-500', 'bg-purple-500',
  'bg-blue-500', 'bg-blue-500', 'bg-blue-500',
  'bg-green-500', 'bg-green-500', 'bg-green-500',
  'bg-orange-500', 'bg-orange-500', 'bg-orange-500',
  'bg-pink-500', 'bg-pink-500', 'bg-pink-500',
  'bg-teal-500', 'bg-teal-500', 'bg-teal-500',
  'bg-indigo-500', 'bg-indigo-500', 'bg-indigo-500',
  'bg-yellow-500', 'bg-yellow-500', 'bg-yellow-500',
  'bg-cyan-500', 'bg-cyan-500', 'bg-cyan-500',
  'bg-rose-500', 'bg-rose-500', 'bg-rose-500',
  'bg-emerald-500', 'bg-emerald-500', 'bg-emerald-500',
];

const Services = () => {
  // Flatten services and assign positions and colors
  const allServices = Object.values(designServices).flat();
  const servicesWithProps = allServices.map((service, index) => ({
    service,
    x: `${10 + (index % 10) * 8}%`, // Spread horizontally
    y: `${10 + Math.floor(index / 10) * 15}%`, // Spread vertically
    color: colors[Math.floor(Math.random() * colors.length)], // Randomly select a color
    angle: Math.random() * 30 - 15, // Random angle between -15 and 15 degrees
  }));

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768); // md breakpoint
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const numRows = Math.ceil(allServices.length / 30);

  const containerHeight = isMobile
    ? numRows * 300 + 50 // 📱 mobile
    : numRows * 200 + 100; // 💻 desktop


  return (
    <div className="container" style={{ height: `${containerHeight}px` }}>
      <div className="w-full h-full border-x border-t rounded-t-3xl relative overflow-hidden">
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          Skills & Strengths
        </h1>
        <Gravity
          gravity={{ x: 0, y: 1 }}
          className="w-full h-full"
          debug={false}
          grabCursor={true}
          autoStart={true}
          addTopWall={true}
        >
          {servicesWithProps.map(({ service, x, y, color, angle }, index) => (
            <MatterBody
              key={index}
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x={x}
              y={y}
              angle={angle}
              bodyType="rectangle"
              isDraggable={true}
            >
              <div
                className={`${color} rounded-full px-4 py-2 text-sm text-white hover:cursor-grab transition-all duration-300 ease-in-out`}
              >
                {service}
              </div>
            </MatterBody>
          ))}
        </Gravity>
      </div>
    </div>
  );
};

export { Services };

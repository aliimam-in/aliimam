"use client";
import * as React from "react";
import { Gravity, MatterBody } from "@/src/components/ui/gravity";
import { RenderCanvas } from "@/registry/default/components/render-canvas";

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

// Define the type for service items
type ServiceItem = {
  service: string;
  x: string;
  y: string;
  color: string;
  angle: number;
};

const Services = () => {
  // Flatten services first
  const allServices = Object.values(designServices).flat();
  
  // State for services with random properties - properly typed
  const [servicesWithProps, setServicesWithProps] = React.useState<ServiceItem[]>([]);
  const [isMobile, setIsMobile] = React.useState(false);

  // Generate random properties only on client side
  React.useEffect(() => {
    const servicesWithRandomProps = allServices.map((service, index) => ({
      service,
      x: `${10 + (index % 10) * 8}%`, // Spread horizontally
      y: `${10 + Math.floor(index / 10) * 15}%`, // Spread vertically
      color: colors[Math.floor(Math.random() * colors.length)] || 'bg-gray-500', // Randomly select a color with fallback
      angle: Math.random() * 30 - 15, // Random angle between -15 and 15 degrees
    }));
    
    setServicesWithProps(servicesWithRandomProps);
  }, []); // Empty dependency array - runs once after mount

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

  // Show loading state while random properties are being generated
  if (servicesWithProps.length === 0) {
    return (
      <div className="container" style={{ height: `${containerHeight}px` }}>
        <div className="w-full h-full border-x border-t rounded-t-3xl relative overflow-hidden">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            Skills & Strengths
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ height: `${containerHeight}px` }}>
      <div className="w-full h-full border-x border-t rounded-t-3xl relative overflow-hidden">
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          Skills & Strengths
        </h1>
        <RenderCanvas lineWidth={20} trails={200} />
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
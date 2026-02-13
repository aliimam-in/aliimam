"use client"

import * as React from "react"
import { useState } from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/aliimam/blocks/header/header-05/components/navigation"

export function Menus() {
  type MenuName =
    | "design"
    | "dev"
    | "learning"
    | "community"
    | "resources"
    | "tools"
    | "services"
    | "company"
    | null

  const [activeMenu, setActiveMenu] = useState<MenuName>(null)

  const handleMouseEnter = (menuName: MenuName) => setActiveMenu(menuName)
  const handleMouseLeave = () => setActiveMenu(null)

  return (
    <div className="hidden md:block">
      <NavigationMenu>
        <NavigationMenuList>
          {/* 1. Design */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("design")}
            onMouseLeave={handleMouseLeave}
          >
            <NavigationMenuTrigger isActive={activeMenu === "design"}>
              Design
            </NavigationMenuTrigger>
            <NavigationMenuContent isOpen={activeMenu === "design"}>
              <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-5">
                <li>
                  <a href="#" className="group block">
                    <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                      UI/UX
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                      Branding
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                      Prototypes
                    </div>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* 2. Development */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("dev")}
            onMouseLeave={handleMouseLeave}
          >
            <NavigationMenuTrigger isActive={activeMenu === "dev"}>
              Development
            </NavigationMenuTrigger>
            <NavigationMenuContent isOpen={activeMenu === "dev"}>
              <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-5">
                <li>
                  <a href="#" className="group block">
                    <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                      Frontend
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                      Backend
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                      DevOps
                    </div>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* 3. Learning */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("learning")}
            onMouseLeave={handleMouseLeave}
          >
            <NavigationMenuTrigger isActive={activeMenu === "learning"}>
              Learning
            </NavigationMenuTrigger>
            <NavigationMenuContent isOpen={activeMenu === "learning"}>
              <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-5">
                <li>
                  <a href="#" className="group block">
                    <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                      Tutorials
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                      Courses
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                      Blogs
                    </div>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* 4. Community */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("community")}
            onMouseLeave={handleMouseLeave}
          >
            <NavigationMenuTrigger isActive={activeMenu === "community"}>
              Community
            </NavigationMenuTrigger>
            <NavigationMenuContent isOpen={activeMenu === "community"}>
              <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-5">
                <li>
                  <a href="#" className="group block">
                    <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                      Forums
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                      Discord
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                      GitHub
                    </div>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* 5. Resources */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
          >
            <NavigationMenuTrigger isActive={activeMenu === "resources"}>
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent isOpen={activeMenu === "resources"}>
              <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-5">
                <li>
                  <a href="#" className="group block">
                    <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                      Documentation
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                      API Reference
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                      Changelog
                    </div>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* 6. Tools */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("tools")}
            onMouseLeave={handleMouseLeave}
          >
            <NavigationMenuTrigger isActive={activeMenu === "tools"}>
              Tools
            </NavigationMenuTrigger>
            <NavigationMenuContent isOpen={activeMenu === "tools"}>
              <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-5">
                <li>
                  <a href="#" className="group block">
                    <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                      Figma
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                      Sketch
                    </div>
                  </a>
                  <a href="#" className="group block">
                    <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                      Photoshop
                    </div>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <div className="hidden lg:flex">
            <NavigationMenuItem
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <NavigationMenuTrigger isActive={activeMenu === "services"}>
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent isOpen={activeMenu === "services"}>
                <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-5">
                  <li>
                    <a href="#" className="group block">
                      <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                        Consulting
                      </div>
                    </a>
                    <a href="#" className="group block">
                      <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                        Workshops
                      </div>
                    </a>
                    <a href="#" className="group block">
                      <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                        Support
                      </div>
                    </a>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              <NavigationMenuTrigger isActive={activeMenu === "company"}>
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent isOpen={activeMenu === "company"}>
                <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-5">
                  <li>
                    <a href="#" className="group block">
                      <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                        About Us
                      </div>
                    </a>
                    <a href="#" className="group block">
                      <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                        Careers
                      </div>
                    </a>
                    <a href="#" className="group block">
                      <div className="hover:text-background text-background/80 mb-3 text-xl font-semibold">
                        Contact
                      </div>
                    </a>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

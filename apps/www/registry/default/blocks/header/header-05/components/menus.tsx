"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/default/blocks/header/header-05/components/navigation";
import { useState } from "react";

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
    | null;

  const [activeMenu, setActiveMenu] = useState<MenuName>(null);

  const handleMouseEnter = (menuName: MenuName) => setActiveMenu(menuName);
  const handleMouseLeave = () => setActiveMenu(null);

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
              <ul className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full">
                <li>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
                      UI/UX
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
                      Branding
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
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
              <ul className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full">
                <li>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
                      Frontend
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
                      Backend
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
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
              <ul className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full">
                <li>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
                      Tutorials
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
                      Courses
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
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
              <ul className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full">
                <li>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
                      Forums
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
                      Discord
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
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
              <ul className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full">
                <li>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
                      Documentation
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
                      API Reference
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
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
              <ul className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full">
                <li>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
                      Figma
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
                      Sketch
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
                      Photoshop
                    </div>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* 7. Services */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <NavigationMenuTrigger isActive={activeMenu === "services"}>
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent isOpen={activeMenu === "services"}>
              <ul className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full">
                <li>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
                      Consulting
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
                      Workshops
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
                      Support
                    </div>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* 8. Company */}
          <NavigationMenuItem
            onMouseEnter={() => handleMouseEnter("company")}
            onMouseLeave={handleMouseLeave}
          >
            <NavigationMenuTrigger isActive={activeMenu === "company"}>
              Company
            </NavigationMenuTrigger>
            <NavigationMenuContent isOpen={activeMenu === "company"}>
              <ul className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full">
                <li>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
                      About Us
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
                      Careers
                    </div>
                  </a>
                  <a href="#" className="block group">
                    <div className="mb-3 text-xl font-semibold hover:text-background text-background/80">
                      Contact
                    </div>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

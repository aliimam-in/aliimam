"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Download, Plus } from "lucide-react"

import { AppHeader } from "@/registry/default/blocks/dashboard-01/components/app-header"
import { AppSidebar } from "@/registry/default/blocks/dashboard-01/components/app-sidebar"
import { HomeContent } from "@/registry/default/blocks/dashboard-01/components/home-content"
import { Button } from "@/registry/default/ui/button"
import { SidebarInset, SidebarProvider } from "@/registry/default/ui/sidebar"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/default/ui/tabs"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="bg-background relative min-h-screen overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(120, 41, 190, 0.5) 0%, rgba(53, 71, 125, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
            "radial-gradient(circle at 30% 70%, rgba(233, 30, 99, 0.5) 0%, rgba(81, 45, 168, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
            "radial-gradient(circle at 70% 30%, rgba(76, 175, 80, 0.5) 0%, rgba(32, 119, 188, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
            "radial-gradient(circle at 50% 50%, rgba(120, 41, 190, 0.5) 0%, rgba(53, 71, 125, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
          ],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <AppHeader />
          <main className="flex-1 p-4 md:p-6">
            <Tabs
              defaultValue="home"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <TabsList className="grid w-full max-w-[600px] grid-cols-5 rounded-2xl p-1">
                  <TabsTrigger value="home" className="rounded-xl">
                    Home
                  </TabsTrigger>
                  <TabsTrigger value="apps" className="rounded-xl">
                    Apps
                  </TabsTrigger>
                  <TabsTrigger value="files" className="rounded-xl">
                    Files
                  </TabsTrigger>
                  <TabsTrigger value="projects" className="rounded-xl">
                    Projects
                  </TabsTrigger>
                  <TabsTrigger value="learn" className="rounded-xl">
                    Learn
                  </TabsTrigger>
                </TabsList>
                <div className="hidden gap-2 md:flex">
                  <Button variant="outline" className="rounded-2xl">
                    <Download className="mr-2 h-4 w-4" />
                    Install App
                  </Button>
                  <Button className="rounded-2xl">
                    <Plus className="mr-2 h-4 w-4" />
                    New Project
                  </Button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <TabsContent value="home" className="mt-0">
                    <HomeContent />
                  </TabsContent>
                  <TabsContent value="apps" className="mt-0">
                    <div className="flex h-96 items-center justify-center rounded-3xl border border-dashed">
                      <p className="text-muted-foreground">
                        Apps content will go here
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="files" className="mt-0">
                    <div className="flex h-96 items-center justify-center rounded-3xl border border-dashed">
                      <p className="text-muted-foreground">
                        Files content will go here
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="projects" className="mt-0">
                    <div className="flex h-96 items-center justify-center rounded-3xl border border-dashed">
                      <p className="text-muted-foreground">
                        Projects content will go here
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="learn" className="mt-0">
                    <div className="flex h-96 items-center justify-center rounded-3xl border border-dashed">
                      <p className="text-muted-foreground">
                        Learn content will go here
                      </p>
                    </div>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}

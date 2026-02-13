"use client"

import { Connected } from "@/registry/aliimam/pages/home/home-01/components/connected"
import { Deploy } from "@/registry/aliimam/pages/home/home-01/components/deploy"
import { Gateway } from "@/registry/aliimam/pages/home/home-01/components/gateway"
import { Hero } from "@/registry/aliimam/pages/home/home-01/components/hero"
import { Ovservality } from "@/registry/aliimam/pages/home/home-01/components/ovservality"
import { Ready } from "@/registry/aliimam/pages/home/home-01/components/ready"
import { Scale } from "@/registry/aliimam/pages/home/home-01/components/scale"
import { Footer } from "@/registry/aliimam/pages/home/home-01/layout/footer"
import { Header } from "@/registry/aliimam/pages/home/home-01/layout/header"

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Deploy />
      <Connected />
      <Ovservality />
      <Gateway />
      <Scale />
      <Ready />
      <Footer />
    </div>
  )
}

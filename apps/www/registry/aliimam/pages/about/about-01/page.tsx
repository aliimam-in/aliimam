import { Connect } from "@/registry/aliimam/pages/about/about-01/components/connect"
import { Craete } from "@/registry/aliimam/pages/about/about-01/components/create"
import { Journey } from "@/registry/aliimam/pages/about/about-01/components/journey"
import { Me } from "@/registry/aliimam/pages/about/about-01/components/me"

export default function AboutPage() {
  return (
    <div>
      <Me />
      <Journey />
      <Craete />
      <Connect />
    </div>
  )
}

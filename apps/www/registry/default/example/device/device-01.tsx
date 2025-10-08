import { Device } from "@/registry/default/components/device"

export default function Component() {
  return (
    <div className="relative">
      <Device variant="imac" width={400} src="/images/device/display.jpg" />
    </div>
  )
}

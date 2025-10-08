import { Device } from "@/registry/default/components/device"

export default function Component() {
  return (
    <div className="relative">
      <Device variant="ipad" width={400} src="/images/device/ipad.jpg" />
    </div>
  )
}

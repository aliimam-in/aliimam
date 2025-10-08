import { Device } from "@/registry/default/components/device"

export default function Component() {
  return (
    <div className="relative">
      <Device variant="macbook" width={400} src="/images/device/macbook.jpg" />
    </div>
  )
}

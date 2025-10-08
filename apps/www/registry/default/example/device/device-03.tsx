import { Device } from "@/registry/default/components/device"

export default function Component() {
  return (
    <div className="relative">
      <Device variant="iphone" width={400} src="/images/device/iphone.png" />
    </div>
  )
}

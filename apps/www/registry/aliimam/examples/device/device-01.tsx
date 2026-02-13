import { Device } from "@/registry/aliimam/components/device"

export default function Component() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Device variant="imac" width={400} src="/images/device/display.jpg" />
    </div>
  )
}

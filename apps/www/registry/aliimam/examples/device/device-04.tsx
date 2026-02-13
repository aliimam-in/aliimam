import { Device } from "@/registry/aliimam/components/device"

export default function Component() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Device variant="macbook" width={400} src="/images/device/macbook.jpg" />
    </div>
  )
}

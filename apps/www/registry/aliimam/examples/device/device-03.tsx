import { Device } from "@/registry/aliimam/components/device"

export default function Component() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Device variant="iphone" width={400} src="/images/device/iphone.png" />
    </div>
  )
}

import { Button } from "@/registry/aliimam/ui/button"

export function Header() {
  return (
    <div className="absolute top-0 left-0 z-20 flex h-12 w-full items-center justify-center px-6 sm:h-14 sm:px-8 md:h-16 md:px-12 lg:px-0">
      <div className="border-muted absolute top-6 left-0 h-0 w-full border-t sm:top-7 md:top-8"></div>

      <div className="bg-muted relative z-30 flex h-10 w-full max-w-[calc(100%-32px)] items-center justify-between overflow-hidden rounded-md border px-3 py-1.5 pr-2 backdrop-blur-sm sm:h-11 sm:max-w-[calc(100%-48px)] sm:px-4 sm:py-2 sm:pr-3 md:h-12 md:max-w-[calc(100%-64px)] md:px-2 lg:w-[700px] lg:max-w-[700px]">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-start">
            <div className="flex flex-col justify-center pl-2 text-sm leading-5 font-medium sm:text-base md:text-lg lg:text-xl">
              AI
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-2 pl-3 sm:flex sm:gap-3 sm:pl-4 md:gap-4 md:pl-5 lg:gap-4 lg:pl-5">
            <div className="flex items-center justify-start">
              <div className="text-muted-foreground flex flex-col justify-center text-xs font-medium md:text-[13px]">
                Products
              </div>
            </div>
            <div className="flex items-center justify-start">
              <div className="text-muted-foreground flex flex-col justify-center text-xs font-medium md:text-[13px]">
                Pricing
              </div>
            </div>
            <div className="flex items-center justify-start">
              <div className="text-muted-foreground flex flex-col justify-center text-xs font-medium md:text-[13px]">
                Docs
              </div>
            </div>
          </div>
        </div>
        <Button size={"sm"}>Log in</Button>
      </div>
    </div>
  )
}

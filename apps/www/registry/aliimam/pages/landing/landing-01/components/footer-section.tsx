import { Apple, Github, LinkedIn, X } from "@aliimam/logos"

export default function FooterSection() {
  return (
    <div className="flex w-full flex-col items-start justify-start pt-10">
      <div className="flex h-auto flex-col items-stretch justify-between self-stretch pt-0 pr-0 pb-8 md:flex-row">
        <div className="flex h-auto flex-col items-start justify-start gap-8 p-4 md:p-8">
          <div className="flex items-center justify-start gap-3 self-stretch">
            <div className="text-center text-xl leading-4 font-semibold">
              <Apple className="text-primary" />
            </div>
          </div>
          <div className="text-sm font-medium">
            <h1 className="text-lg font-medium">Design without limits</h1>
            <p className="text-muted-foreground max-w-md">
              I create digital experiences that connect and inspire. I build
              apps, websites, brands, and products end-to-end.
            </p>
          </div>
          <div className="flex items-start justify-start gap-6">
            <LinkedIn className="w-6" />
            <X className="w-6" />
            <Github className="w-6" />
          </div>
        </div>

        <div className="flex flex-col flex-wrap items-start justify-start gap-6 self-stretch p-4 sm:flex-row sm:justify-between md:gap-8 md:p-8">
          <div className="flex min-w-40 flex-1 flex-col items-start justify-start gap-3">
            <div className="self-stretch text-sm leading-5 font-medium">
              Product
            </div>
            <div className="flex flex-col items-start justify-end gap-2">
              <div className="text-muted-foreground hover:text-primary cursor-pointer text-sm leading-5 font-normal transition-colors">
                Features
              </div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer text-sm leading-5 font-normal transition-colors">
                Pricing
              </div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer text-sm leading-5 font-normal transition-colors">
                Live Previews
              </div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer text-sm leading-5 font-normal transition-colors">
                Real-time Previews
              </div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer text-sm leading-5 font-normal transition-colors">
                AI Agents
              </div>
            </div>
          </div>

          <div className="flex min-w-40 flex-1 flex-col items-start justify-start gap-3">
            <div className="text-sm leading-5 font-medium">Company</div>
            <div className="flex flex-col items-start justify-center gap-2">
              <div className="text-muted-foreground hover:text-primary cursor-pointer text-sm leading-5 font-normal transition-colors">
                About us
              </div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer text-sm leading-5 font-normal transition-colors">
                Our team
              </div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer text-sm leading-5 font-normal transition-colors">
                Careers
              </div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer text-sm leading-5 font-normal transition-colors">
                Brand
              </div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer text-sm leading-5 font-normal transition-colors">
                Contact
              </div>
            </div>
          </div>

          <div className="flex min-w-40 flex-1 flex-col items-start justify-start gap-3">
            <div className="text-sm leading-5 font-medium">Resources</div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="text-muted-foreground hover:text-primary cursor-pointer self-stretch text-sm leading-5 font-normal transition-colors">
                Terms of use
              </div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer self-stretch text-sm leading-5 font-normal transition-colors">
                API Reference
              </div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer self-stretch text-sm leading-5 font-normal transition-colors">
                Documentation
              </div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer self-stretch text-sm leading-5 font-normal transition-colors">
                Community
              </div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer self-stretch text-sm leading-5 font-normal transition-colors">
                Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

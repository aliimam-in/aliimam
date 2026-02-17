import { LoginForm } from "@/registry/aliimam/blocks/login/login-02/components/login-form"

export default function Page() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" aria-label="home" className="flex items-center gap-2">
            <img
              src="/ai-logo-white.png"
              alt="Your Image"
              height={50}
              width={50}
              className="z-10 hidden h-10 w-full object-contain dark:block"
            />
            <img
              src="/ai-logo-black.png"
              alt="Your Image"
              height={50}
              width={50}
              className="z-10 block h-10 w-full object-contain dark:hidden"
            />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block"></div>
    </div>
  )
}

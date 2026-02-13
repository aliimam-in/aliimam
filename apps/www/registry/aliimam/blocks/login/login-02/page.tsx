import { LoginForm } from "@/registry/aliimam/blocks/login/login-02/components/login-form"

export default function Page() {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-lg">
        <LoginForm />
      </div>
    </div>
  )
}

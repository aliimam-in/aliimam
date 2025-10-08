import { LoginForm } from "@/registry/default/blocks/login/login-01/components/login-form";
import { ShaderRipple } from "@/registry/default/components/shader-ripple";

export default function Page() {
  return (
    <div className="h-screen flex items-center justify-center relative">
      <div className="w-full z-10 relative max-w-sm">
        <LoginForm />
      </div>
      <ShaderRipple className="absolute -z-0 inset-0 h-screen" />
    </div>
  );
}

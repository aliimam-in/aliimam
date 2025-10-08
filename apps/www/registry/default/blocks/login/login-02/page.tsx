import { LoginForm } from "@/registry/default/blocks/login/login-02/components/login-form";
import { GradientMesh } from "@/registry/default/components/gradient-mesh";

export default function Page() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" aria-label="home" className="flex gap-2 items-center">
            <img
              src="/ai-logo-white.png"
              alt="Your Image"
              height={50}
              width={50}
              className="h-10 z-10 w-full hidden dark:block object-contain"
            />
            <img
              src="/ai-logo-black.png"
              alt="Your Image"
              height={50}
              width={50}
              className="h-10 z-10 w-full dark:hidden block object-contain"
            />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <GradientMesh
          colors={["#bcecf6", "#00aaff", "#ffd447"]}
          distortion={8}
          swirl={0.2}
          speed={1}
          rotation={90}
          waveAmp={0.2}
          waveFreq={20}
          waveSpeed={0.2}
          grain={0.06}
        />
      </div>
    </div>
  );
}

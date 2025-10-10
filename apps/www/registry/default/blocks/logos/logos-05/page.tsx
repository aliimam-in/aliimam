import { GradientMesh } from "@/registry/default/components/gradient-mesh";
import {
  ClaudeAI,
  Cursor,
  Gemini,
  Github,
  Google,
  Grok,
  OpenAI,
  Replicate,
  Resend,
  PerplexityAI,
  YouTube,
  Suno,
} from "@aliimam/logos";

export default function Logos04() {
  return (
    <div className="py-20 flex min-h-screen flex-col relative items-center justify-center">
      <div className="mx-auto z-10 max-w-6xl flex justify-center flex-col px-6">
        <h1 className="mb-10 px-20 text-muted-foreground text-center text-sm font-medium">
          Trusted by the world’s most creative companies.
        </h1>
        <div className="mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 lg:grid-cols-6">
          {[
            <OpenAI type="wordmark" key="openai" size={80} />,
            <ClaudeAI type="wordmark" key="claude" size={80} />,
            <Replicate type="wordmark" key="replicate" size={80} />,
            <Cursor type="wordmark" key="cursor" size={80} />,
            <Gemini type="wordmark" key="gemini" size={80} />,
            <Github type="wordmark" key="github" size={80} />,
            <Grok type="wordmark" key="grok" size={80} />,
            <Google type="wordmark" key="google" size={80} />,
            <Suno type="wordmark" key="suno" size={80} />,
            <Resend type="wordmark" key="resend" size={80} />,
            <YouTube type="wordmark" key="youtube" size={80} />,
            <PerplexityAI type="wordmark" key="perp" size={80} />,
          ].map((Logo, i) => (
            <div
              key={i}
              className="bg-code flex h-20 w-30 items-center justify-center shadow-2xl rounded-sm md:h-24 md:w-40"
            >
              {Logo}
            </div>
          ))}
        </div>
      </div>
      <GradientMesh
        colors={["#ffffff", "#000000", "#000000"]}
        distortion={3}
        swirl={0.5}
        speed={1}
        rotation={90}
        waveAmp={0.1}
        waveFreq={7}
        waveSpeed={0.2}
        grain={0.06}
      />
    </div>
  );
}

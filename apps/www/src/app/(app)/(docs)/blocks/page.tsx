import { BlockDisplay } from "@/src/components/docs/blocks/block-display";
import { DocThemeSelector } from "@/src/components/docs/theme-selector";

const FEATURED_BLOCKS = [
  "dashboard-01",
  "login-01",
  "logos-03",
  "pricing-01",
  "call-to-action-02",
];

export default function BlocksPage() {
  return (
    <div
      data-slot="blocks"
      className="flex items-stretch text-[1.05rem] mt-3 sm:text-[15px] xl:w-full"
    >
      <div className="flex px-6 lg:px-10 min-w-0 gap-10 pb-10 md:gap-20 flex-1 border rounded-md flex-col">
        <div className="h-(--top-spacing) shrink-0" />
        <div className="space-y-6 my-6 md:my-10 text-center px-6">
          <h2 className="font-extrabold tracking-tighter text-5xl md:text-7xl lg:text-9xl">
            Blocks
          </h2>
          <p className="text-muted-foreground font-light text-sm md:text-xl">
            Coming Soon!
          </p>
        </div>
        {FEATURED_BLOCKS.map((name) => (
          <BlockDisplay name={name} key={name} />
        ))}
      </div>
      <div className="sticky top-24 z-30 ml-auto hidden h-[calc(100svh-var(--footer-height)+2rem)] w-64 flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
        <div className="h-(--top-spacing) shrink-0" />
        <DocThemeSelector className="hidden py-3 md:flex" />
      </div>
    </div>
  );
}

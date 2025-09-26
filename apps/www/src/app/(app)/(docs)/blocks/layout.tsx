import { SidebarProvider } from "@/registry/default/ui/sidebar";
import { BlockSidebar } from "@/src/components/docs/blocks/block-sidebar";
import { BlocksNav } from "@/src/components/docs/blocks/blocks-nav";
import {
  BlockThemeSelector,
  DocThemeSelector,
} from "@/src/components/docs/theme-selector";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="space-y-6 pt-40 text-center px-6">
            <h2 className="font-extrabold tracking-tighter text-5xl md:text-7xl lg:text-9xl">
              Blocks
            </h2>
            <p className="text-muted-foreground font-light text-sm md:text-xl">
              Coming Soon!
            </p>
          </div>
      <div
        className="flex items-center justify-between border-b py-3"
        id="blocks"
      >
        <BlocksNav />
        <BlockThemeSelector className="hidden py-3 md:flex" />
      </div>
      <div className="h-full w-full">{children}</div>
    </div>
  );
}

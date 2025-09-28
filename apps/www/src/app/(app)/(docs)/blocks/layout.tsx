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
    <div className="pt-20">
       
      <div
        className="flex py-3 items-center justify-between border-y"
        id="blocks"
      >
        <BlocksNav />
        <BlockThemeSelector className="hidden md:flex" />
      </div>
      <div className="h-full mx-auto max-w-7xl w-full">{children}</div>
    </div>
  );
}

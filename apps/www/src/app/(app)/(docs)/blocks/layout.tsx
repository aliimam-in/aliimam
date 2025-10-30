import { Button } from "@/registry/default/ui/button";
import { BlocksNav } from "@/src/components/docs/blocks/blocks-nav";
import { BlockThemeSelector } from "@/src/components/docs/theme-selector";
import Link from "next/link";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div className="h-20 fixed w-screen z-30 bg-background/20 backdrop-blur-lg" />
      <div
        className="sticky top-20 z-30 flex bg-background py-3 items-center justify-between border-y"
        id="blocks"
      >
        <BlocksNav />
        <BlockThemeSelector />
      </div>
      <div className="h-full pt-20 mx-auto max-w-[1400px] w-full">
        {children}
      </div>
      <Link
        className="flex justify-center"
        target="_blank"
        href="https://21st.dev/community/aliimam"
      >
        <Button className="h-14 cursor-pointer rounded-full px-10">
          See All Blocks
        </Button>
      </Link>
    </div>
  );
}

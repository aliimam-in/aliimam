import { getColors } from "@/src/lib/colors";
import { CommandMenu } from "./command-menu";
import { ClientHeader } from "./nav-header";
import { source } from "@/src/lib/source";
import { ModeToggle } from "./mode-toggle";  
import { getBlocksCount, getComponentsCount } from "./count";

const componentsCount = await getComponentsCount()
const blocksCount = await getBlocksCount()

export const Header = () => {
  const colors = getColors();
  const pageTree = source.pageTree;
  return (
    <div>
      <ClientHeader blocksCount={blocksCount} componentsCount={componentsCount}>
        <CommandMenu tree={pageTree} colors={colors} />
        <ModeToggle />
      </ClientHeader>
    </div>
  );
};
 
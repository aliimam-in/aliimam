import { Tabs, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";
import Link from "next/link";

export function TabsNav() {
  return (
    <div className="flex pb-20 max-w-sm ">
      <Tabs >
        <TabsList>
          <TabsTrigger value="icons">
            <Link href={"/icons"}>Icons</Link>
          </TabsTrigger>
          <TabsTrigger value="logos">
            <Link href={"/logos"}>Logos</Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}

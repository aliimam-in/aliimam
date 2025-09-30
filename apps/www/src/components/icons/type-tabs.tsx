import { TabsList, TabsTrigger } from "@/registry/default/ui/tabs";

export function IconsTypeTabs() {
  return (
    <div className="hidden md:block">
      <TabsList>
        <TabsTrigger className="px-4" value="stroke">
          Stroke
        </TabsTrigger>
        <TabsTrigger className="px-4" value="solid">
          Solid
        </TabsTrigger>
         <TabsTrigger className="px-4" value="duotone">
          Duotone
        </TabsTrigger>
         <TabsTrigger className="px-4" value="twotone">
          Twotone
        </TabsTrigger>
         <TabsTrigger className="px-4" value="bulk">
          Bulk
        </TabsTrigger>
      </TabsList>
    </div>
  );
}

export function LogosTypeTabs() {
  return (
    <div className="hidden md:block">
      <TabsList>
        <TabsTrigger className="px-4" value="icon">
          Icon
        </TabsTrigger>
        <TabsTrigger className="px-4" value="wordmark">
          Wordmark
        </TabsTrigger> 
      </TabsList>
    </div>
  );
}
 
import { Avatar, AvatarImage, AvatarFallback } from "@/registry/default/ui/avatar";

export function AvatarWithLabelDemo() {
  return (
    <div className="flex items-center space-x-3">
      <Avatar className="border">
        <AvatarImage src="/ali.jpg" alt="Ali Imam" />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p className="text-sm font-medium leading-none">Ali Imam</p>
        <p className="text-xs text-muted-foreground">@aliimam</p>
      </div>
    </div>
  );
}

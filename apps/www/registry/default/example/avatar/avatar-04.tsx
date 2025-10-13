import { Avatar, AvatarImage, AvatarFallback } from "@/registry/default/ui/avatar";

export function AvatarSizesDemo() {
  const sizes = ["size-6", "size-8", "size-10", "size-12"];

  return (
    <div className="flex items-center gap-4">
      {sizes.map((size, i) => (
        <Avatar key={i} className={size}>
          <AvatarImage src="/ali.jpg" alt="Ali Imam" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}

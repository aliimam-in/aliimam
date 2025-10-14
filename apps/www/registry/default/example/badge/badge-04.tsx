import { Badge } from "@/registry/default/ui/badge";

export function BadgeTagsDemo() {
  const tags = ["Design", "Next.js", "Branding", "UI/UX"];
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge key={tag} variant="secondary">
          {tag}
        </Badge>
      ))}
    </div>
  );
}

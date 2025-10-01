import { Button } from "@/registry/default/ui/button";

export default function ButtonDemo() {
  return (
    <div className="flex gap-3">
      <Button variant={"destructive"}>Destructive</Button>
      <Button variant={"outline"}>Outline</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"link"}>Link</Button>
    </div>
  );
}

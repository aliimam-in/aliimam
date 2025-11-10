import Link from "next/link";
import { Badge } from "@/registry/default/ui/badge";

export default function Badge03() {
  return (
    <Badge asChild variant="outline">
      <Link href="https://aliimam.in" target="_blank">
        aliimam.in
      </Link>
    </Badge>
  );
}

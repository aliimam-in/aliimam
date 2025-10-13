import { Info } from "@aliimam/icons";
import { Alert, AlertDescription } from "@/registry/default/ui/alert";

export function AlertInline() {
  return (
    <Alert className="border-transparent bg-muted/40 text-muted-foreground flex items-center gap-2">
      <Info size={16}/>
      <AlertDescription>
        Changes you make here will only affect this session.
      </AlertDescription>
    </Alert>
  );
}

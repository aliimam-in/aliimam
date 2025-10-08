import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/default/ui/alert";
import { CheckCircle2 } from "lucide-react";

export function Alert02() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <Alert>
        <CheckCircle2 />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>
    </div>
  );
}

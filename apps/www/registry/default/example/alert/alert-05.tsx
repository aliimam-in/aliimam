import { CircleX } from "@aliimam/icons";
import { Button } from "@/registry/default/ui/button";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/default/ui/alert";

export function AlertErrorRetry() {
  return (
    <Alert variant="destructive">
      <CircleX size={16} />
      <div className="flex flex-col gap-2">
        <AlertTitle>Something went wrong!</AlertTitle>
        <AlertDescription>
          The server could not process your request. Please try again later.
        </AlertDescription>
        <Button variant="destructive" size="sm" className="w-fit">
          Retry
        </Button>
      </div>
    </Alert>
  );
}

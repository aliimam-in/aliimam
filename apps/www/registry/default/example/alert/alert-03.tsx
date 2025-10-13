import { CircleCheck } from "@aliimam/icons";
import { Button } from "@/registry/default/ui/button"; // or your existing Button
import { Alert, AlertDescription, AlertTitle } from "@/registry/default/ui/alert";

export function AlertSuccessAction() {
  return (
    <Alert className="border-green-500/30 bg-green-50 text-green-900 dark:bg-green-950 dark:text-green-200">
      <CircleCheck size={18} />
      <div className="flex flex-col gap-2">
        <AlertTitle>Operation completed!</AlertTitle>
        <AlertDescription>
          Your account settings have been updated successfully.
        </AlertDescription>
        <Button variant="outline" size="sm" className="mt-1 w-fit">
          View details
        </Button>
      </div>
    </Alert>
  );
}

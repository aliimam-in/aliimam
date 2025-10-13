"use client"

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/registry/default/ui/alert-dialog"
import { Button } from "@/registry/default/ui/button"
import { Settings } from "@aliimam/icons"

export function AlertDialogCustomLayout() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">
          <Settings className="h-4 w-4" /> Reset Settings
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Reset all settings?</AlertDialogTitle>
          <AlertDialogDescription>
            <span>This will revert all preferences to their default values.</span>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>Theme will reset to light</li>
              <li>Shortcuts will revert</li>
              <li>Custom layouts will be cleared</li>
            </ul>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Reset</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

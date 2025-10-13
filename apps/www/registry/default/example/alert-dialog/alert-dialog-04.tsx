"use client"

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
} from "@/registry/default/ui/alert-dialog"
import { Button } from "@/registry/default/ui/button"
import { CircleCheck } from "@aliimam/icons"

export function AlertDialogSuccess() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="secondary">Show Success</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="flex flex-col justify-center items-center text-center border-green-400/40 bg-green-50 dark:bg-green-950">
        <AlertDialogHeader>
          <div className="flex flex-col justify-center items-center text-center">
            <CircleCheck className="h-10 w-10 text-green-600 mb-2" />
            <AlertDialogTitle>Success!</AlertDialogTitle>
            <AlertDialogDescription>
              Your project has been successfully created.
            </AlertDialogDescription>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="bg-green-600 hover:bg-green-700 text-white">
            Okay
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

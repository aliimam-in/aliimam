"use client"

import * as React from "react"
import { Check, CheckIcon, ClipboardIcon, Copy } from "lucide-react"

import { Event, trackEvent } from "@/src/lib/events"
import { cn } from "@/src/lib/utils"
import { Button } from "@/registry/aliimam/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/aliimam/ui/tooltip"

export function copyToClipboardWithMeta(value: string, event?: Event) {
  navigator.clipboard.writeText(value)
  if (event) {
    trackEvent(event)
  }
}

export function CopyButton({
  value,
  className,
  variant = "ghost",
  event,
  ...props
}: React.ComponentProps<typeof Button> & {
  value: string
  src?: string
  event?: Event["name"]
}) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [])

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          data-slot="copy-button"
          size="icon"
          variant={variant}
          className={cn(
            "bg-code absolute top-3 right-2 z-10 size-7 hover:opacity-100 focus-visible:opacity-100",
            className
          )}
          onClick={() => {
            copyToClipboardWithMeta(
              value,
              event
                ? {
                    name: event,
                    properties: {
                      code: value,
                    },
                  }
                : undefined
            )
            setHasCopied(true)
          }}
          {...props}
        >
          <span className="sr-only">Copy</span>
          {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        {hasCopied ? "Copied" : "Copy to Clipboard"}
      </TooltipContent>
    </Tooltip>
  )
}

export function ContentCopyButton({
  value,
  className,
  variant = "outline",
  event,
  ...props
}: React.ComponentProps<typeof Button> & {
  value: string;
  src?: string;
  event?: Event["name"];
}) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (!hasCopied) return;
    const timer = setTimeout(() => {
      setHasCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [hasCopied]);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          data-slot="copy-button"
          variant={variant}
          className={cn("", className)}
          onClick={() => {
            copyToClipboardWithMeta(
              value,
              event
                ? {
                    name: event,
                    properties: {
                      code: value,
                    },
                  }
                : undefined
            );
            setHasCopied(true);
          }}
          {...props}
        >
          <span className="sr-only">Copy</span>
          {value}
          {hasCopied ? <Check /> : <Copy />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        {hasCopied ? "Copied" : "Copy to Clipboard"}
      </TooltipContent>
    </Tooltip>
  );
}

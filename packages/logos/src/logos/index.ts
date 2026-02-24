
import * as React from "react"

import { Paper as IconPaper } from "./icon/design/Paper"
export const Paper = React.forwardRef(
  ({ variant = "icon", ...props }, ref) => {
    if (variant === "icon") return <IconPaper ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { DetailedLogo as IconDetailedLogo } from "./icon/design/DetailedLogo"
export const DetailedLogo = React.forwardRef(
  ({ variant = "icon", ...props }, ref) => {
    if (variant === "icon") return <IconDetailedLogo ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { XAIGrok as IconXAIGrok } from "./icon/ai/XAIGrok"
export const XAIGrok = React.forwardRef(
  ({ variant = "icon", ...props }, ref) => {
    if (variant === "icon") return <IconXAIGrok ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Github as WordmarkGithub } from "./wordmark/ai/Github"
export const Github = React.forwardRef(
  ({ variant = "wordmark", ...props }, ref) => {
    if (variant === "wordmark") return <WordmarkGithub ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Nextjs as WordmarkNextjs } from "./wordmark/ai/Nextjs"
export const Nextjs = React.forwardRef(
  ({ variant = "wordmark", ...props }, ref) => {
    if (variant === "wordmark") return <WordmarkNextjs ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Vercel as WordmarkVercel } from "./wordmark/ai/Vercel"
export const Vercel = React.forwardRef(
  ({ variant = "wordmark", ...props }, ref) => {
    if (variant === "wordmark") return <WordmarkVercel ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AArrowUp as WordmarkAArrowUp } from "./wordmark/arrows/AArrowUp"
export const AArrowUp = React.forwardRef(
  ({ variant = "wordmark", ...props }, ref) => {
    if (variant === "wordmark") return <WordmarkAArrowUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AArrop as WordmarkAArrop } from "./wordmark/arrows/AArrop"
export const AArrop = React.forwardRef(
  ({ variant = "wordmark", ...props }, ref) => {
    if (variant === "wordmark") return <WordmarkAArrop ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


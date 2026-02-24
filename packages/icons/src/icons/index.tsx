
import * as React from "react"

import { AArrowDown as StrokeAArrowDown } from "./stroke/interface/AArrowDown"
export const AArrowDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAArrowDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AArrowUp as StrokeAArrowUp } from "./stroke/arrows/AArrowUp"
export const AArrowUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAArrowUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ALargeSmall as StrokeALargeSmall } from "./stroke/interface/ALargeSmall"
export const ALargeSmall = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeALargeSmall ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Accessibility as StrokeAccessibility } from "./stroke/interface/Accessibility"
export const Accessibility = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAccessibility ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Activity as StrokeActivity } from "./stroke/interface/Activity"
export const Activity = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeActivity ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AirVent as StrokeAirVent } from "./stroke/interface/AirVent"
export const AirVent = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAirVent ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Airplay as StrokeAirplay } from "./stroke/media/Airplay"
export const Airplay = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAirplay ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlarmClock as StrokeAlarmClock } from "./stroke/time/AlarmClock"
export const AlarmClock = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlarmClock ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlarmClockCheck as StrokeAlarmClockCheck } from "./stroke/time/AlarmClockCheck"
export const AlarmClockCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlarmClockCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlarmClockMinus as StrokeAlarmClockMinus } from "./stroke/time/AlarmClockMinus"
export const AlarmClockMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlarmClockMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlarmClockOff as StrokeAlarmClockOff } from "./stroke/time/AlarmClockOff"
export const AlarmClockOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlarmClockOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlarmClockPlus as StrokeAlarmClockPlus } from "./stroke/time/AlarmClockPlus"
export const AlarmClockPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlarmClockPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlarmSmoke as StrokeAlarmSmoke } from "./stroke/time/AlarmSmoke"
export const AlarmSmoke = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlarmSmoke ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Album as StrokeAlbum } from "./stroke/interface/Album"
export const Album = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlbum ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignCenter as StrokeAlignCenter } from "./stroke/interface/AlignCenter"
export const AlignCenter = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignCenter ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignCenterHorizontal as StrokeAlignCenterHorizontal } from "./stroke/interface/AlignCenterHorizontal"
export const AlignCenterHorizontal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignCenterHorizontal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignCenterVertical as StrokeAlignCenterVertical } from "./stroke/interface/AlignCenterVertical"
export const AlignCenterVertical = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignCenterVertical ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignEndHorizontal as StrokeAlignEndHorizontal } from "./stroke/interface/AlignEndHorizontal"
export const AlignEndHorizontal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignEndHorizontal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignEndVertical as StrokeAlignEndVertical } from "./stroke/interface/AlignEndVertical"
export const AlignEndVertical = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignEndVertical ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignHorizontalDistributeCenter as StrokeAlignHorizontalDistributeCenter } from "./stroke/interface/AlignHorizontalDistributeCenter"
export const AlignHorizontalDistributeCenter = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignHorizontalDistributeCenter ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignHorizontalDistributeEnd as StrokeAlignHorizontalDistributeEnd } from "./stroke/interface/AlignHorizontalDistributeEnd"
export const AlignHorizontalDistributeEnd = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignHorizontalDistributeEnd ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignHorizontalDistributeStart as StrokeAlignHorizontalDistributeStart } from "./stroke/favorites/AlignHorizontalDistributeStart"
export const AlignHorizontalDistributeStart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignHorizontalDistributeStart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignHorizontalJustifyCenter as StrokeAlignHorizontalJustifyCenter } from "./stroke/interface/AlignHorizontalJustifyCenter"
export const AlignHorizontalJustifyCenter = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignHorizontalJustifyCenter ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignHorizontalJustifyEnd as StrokeAlignHorizontalJustifyEnd } from "./stroke/interface/AlignHorizontalJustifyEnd"
export const AlignHorizontalJustifyEnd = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignHorizontalJustifyEnd ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignHorizontalJustifyStart as StrokeAlignHorizontalJustifyStart } from "./stroke/favorites/AlignHorizontalJustifyStart"
export const AlignHorizontalJustifyStart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignHorizontalJustifyStart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignHorizontalSpaceAround as StrokeAlignHorizontalSpaceAround } from "./stroke/interface/AlignHorizontalSpaceAround"
export const AlignHorizontalSpaceAround = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignHorizontalSpaceAround ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignHorizontalSpaceBetween as StrokeAlignHorizontalSpaceBetween } from "./stroke/interface/AlignHorizontalSpaceBetween"
export const AlignHorizontalSpaceBetween = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignHorizontalSpaceBetween ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignJustify as StrokeAlignJustify } from "./stroke/interface/AlignJustify"
export const AlignJustify = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignJustify ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignLeft as StrokeAlignLeft } from "./stroke/interface/AlignLeft"
export const AlignLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignRight as StrokeAlignRight } from "./stroke/interface/AlignRight"
export const AlignRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignStartHorizontal as StrokeAlignStartHorizontal } from "./stroke/favorites/AlignStartHorizontal"
export const AlignStartHorizontal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignStartHorizontal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignStartVertical as StrokeAlignStartVertical } from "./stroke/favorites/AlignStartVertical"
export const AlignStartVertical = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignStartVertical ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignVerticalDistributeCenter as StrokeAlignVerticalDistributeCenter } from "./stroke/interface/AlignVerticalDistributeCenter"
export const AlignVerticalDistributeCenter = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignVerticalDistributeCenter ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignVerticalDistributeEnd as StrokeAlignVerticalDistributeEnd } from "./stroke/interface/AlignVerticalDistributeEnd"
export const AlignVerticalDistributeEnd = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignVerticalDistributeEnd ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignVerticalDistributeStart as StrokeAlignVerticalDistributeStart } from "./stroke/favorites/AlignVerticalDistributeStart"
export const AlignVerticalDistributeStart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignVerticalDistributeStart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignVerticalJustifyCenter as StrokeAlignVerticalJustifyCenter } from "./stroke/interface/AlignVerticalJustifyCenter"
export const AlignVerticalJustifyCenter = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignVerticalJustifyCenter ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignVerticalJustifyEnd as StrokeAlignVerticalJustifyEnd } from "./stroke/interface/AlignVerticalJustifyEnd"
export const AlignVerticalJustifyEnd = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignVerticalJustifyEnd ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignVerticalJustifyStart as StrokeAlignVerticalJustifyStart } from "./stroke/favorites/AlignVerticalJustifyStart"
export const AlignVerticalJustifyStart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignVerticalJustifyStart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignVerticalSpaceAround as StrokeAlignVerticalSpaceAround } from "./stroke/interface/AlignVerticalSpaceAround"
export const AlignVerticalSpaceAround = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignVerticalSpaceAround ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AlignVerticalSpaceBetween as StrokeAlignVerticalSpaceBetween } from "./stroke/interface/AlignVerticalSpaceBetween"
export const AlignVerticalSpaceBetween = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAlignVerticalSpaceBetween ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Ambulance as StrokeAmbulance } from "./stroke/interface/Ambulance"
export const Ambulance = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAmbulance ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Ampersand as StrokeAmpersand } from "./stroke/interface/Ampersand"
export const Ampersand = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAmpersand ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Ampersands as StrokeAmpersands } from "./stroke/interface/Ampersands"
export const Ampersands = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAmpersands ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Amphora as StrokeAmphora } from "./stroke/interface/Amphora"
export const Amphora = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAmphora ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Anchor as StrokeAnchor } from "./stroke/interface/Anchor"
export const Anchor = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAnchor ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Angry as StrokeAngry } from "./stroke/interface/Angry"
export const Angry = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAngry ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Annoyed as StrokeAnnoyed } from "./stroke/interface/Annoyed"
export const Annoyed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAnnoyed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Antenna as StrokeAntenna } from "./stroke/interface/Antenna"
export const Antenna = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAntenna ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Anvil as StrokeAnvil } from "./stroke/interface/Anvil"
export const Anvil = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAnvil ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Aperture as StrokeAperture } from "./stroke/interface/Aperture"
export const Aperture = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAperture ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AppWindow as StrokeAppWindow } from "./stroke/interface/AppWindow"
export const AppWindow = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAppWindow ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AppWindowMac as StrokeAppWindowMac } from "./stroke/interface/AppWindowMac"
export const AppWindowMac = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAppWindowMac ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Apple as StrokeApple } from "./stroke/interface/Apple"
export const Apple = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeApple ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Archive as StrokeArchive } from "./stroke/interface/Archive"
export const Archive = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArchive ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArchiveRestore as StrokeArchiveRestore } from "./stroke/interface/ArchiveRestore"
export const ArchiveRestore = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArchiveRestore ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArchiveX as StrokeArchiveX } from "./stroke/interface/ArchiveX"
export const ArchiveX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArchiveX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AreaChart as StrokeAreaChart } from "./stroke/interface/AreaChart"
export const AreaChart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAreaChart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Armchair as StrokeArmchair } from "./stroke/interface/Armchair"
export const Armchair = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArmchair ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowBigDown as StrokeArrowBigDown } from "./stroke/arrows/ArrowBigDown"
export const ArrowBigDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowBigDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowBigDownDash as StrokeArrowBigDownDash } from "./stroke/arrows/ArrowBigDownDash"
export const ArrowBigDownDash = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowBigDownDash ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowBigLeft as StrokeArrowBigLeft } from "./stroke/arrows/ArrowBigLeft"
export const ArrowBigLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowBigLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowBigLeftDash as StrokeArrowBigLeftDash } from "./stroke/arrows/ArrowBigLeftDash"
export const ArrowBigLeftDash = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowBigLeftDash ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowBigRight as StrokeArrowBigRight } from "./stroke/arrows/ArrowBigRight"
export const ArrowBigRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowBigRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowBigRightDash as StrokeArrowBigRightDash } from "./stroke/arrows/ArrowBigRightDash"
export const ArrowBigRightDash = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowBigRightDash ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowBigUp as StrokeArrowBigUp } from "./stroke/arrows/ArrowBigUp"
export const ArrowBigUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowBigUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowBigUpDash as StrokeArrowBigUpDash } from "./stroke/arrows/ArrowBigUpDash"
export const ArrowBigUpDash = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowBigUpDash ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowDown as StrokeArrowDown } from "./stroke/arrows/ArrowDown"
export const ArrowDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowDown01 as StrokeArrowDown01 } from "./stroke/arrows/ArrowDown01"
export const ArrowDown01 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowDown01 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowDown10 as StrokeArrowDown10 } from "./stroke/arrows/ArrowDown10"
export const ArrowDown10 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowDown10 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowDownAZ as StrokeArrowDownAZ } from "./stroke/arrows/ArrowDownAZ"
export const ArrowDownAZ = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowDownAZ ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowDownFromLine as StrokeArrowDownFromLine } from "./stroke/arrows/ArrowDownFromLine"
export const ArrowDownFromLine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowDownFromLine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowDownLeft as StrokeArrowDownLeft } from "./stroke/arrows/ArrowDownLeft"
export const ArrowDownLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowDownLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowDownNarrowWide as StrokeArrowDownNarrowWide } from "./stroke/arrows/ArrowDownNarrowWide"
export const ArrowDownNarrowWide = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowDownNarrowWide ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowDownRight as StrokeArrowDownRight } from "./stroke/arrows/ArrowDownRight"
export const ArrowDownRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowDownRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowDownToDot as StrokeArrowDownToDot } from "./stroke/arrows/ArrowDownToDot"
export const ArrowDownToDot = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowDownToDot ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowDownToLine as StrokeArrowDownToLine } from "./stroke/arrows/ArrowDownToLine"
export const ArrowDownToLine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowDownToLine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowDownUp as StrokeArrowDownUp } from "./stroke/arrows/ArrowDownUp"
export const ArrowDownUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowDownUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowDownWideNarrow as StrokeArrowDownWideNarrow } from "./stroke/arrows/ArrowDownWideNarrow"
export const ArrowDownWideNarrow = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowDownWideNarrow ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowDownZA as StrokeArrowDownZA } from "./stroke/arrows/ArrowDownZA"
export const ArrowDownZA = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowDownZA ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowLeft as StrokeArrowLeft } from "./stroke/arrows/ArrowLeft"
export const ArrowLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowLeftFromLine as StrokeArrowLeftFromLine } from "./stroke/arrows/ArrowLeftFromLine"
export const ArrowLeftFromLine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowLeftFromLine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowLeftRight as StrokeArrowLeftRight } from "./stroke/arrows/ArrowLeftRight"
export const ArrowLeftRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowLeftRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowLeftToLine as StrokeArrowLeftToLine } from "./stroke/arrows/ArrowLeftToLine"
export const ArrowLeftToLine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowLeftToLine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowRight as StrokeArrowRight } from "./stroke/arrows/ArrowRight"
export const ArrowRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowRightFromLine as StrokeArrowRightFromLine } from "./stroke/arrows/ArrowRightFromLine"
export const ArrowRightFromLine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowRightFromLine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowRightLeft as StrokeArrowRightLeft } from "./stroke/arrows/ArrowRightLeft"
export const ArrowRightLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowRightLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowRightToLine as StrokeArrowRightToLine } from "./stroke/arrows/ArrowRightToLine"
export const ArrowRightToLine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowRightToLine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowUp as StrokeArrowUp } from "./stroke/arrows/ArrowUp"
export const ArrowUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowUp01 as StrokeArrowUp01 } from "./stroke/arrows/ArrowUp01"
export const ArrowUp01 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowUp01 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowUp10 as StrokeArrowUp10 } from "./stroke/arrows/ArrowUp10"
export const ArrowUp10 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowUp10 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowUpAZ as StrokeArrowUpAZ } from "./stroke/arrows/ArrowUpAZ"
export const ArrowUpAZ = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowUpAZ ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowUpDown as StrokeArrowUpDown } from "./stroke/arrows/ArrowUpDown"
export const ArrowUpDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowUpDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowUpFromDot as StrokeArrowUpFromDot } from "./stroke/arrows/ArrowUpFromDot"
export const ArrowUpFromDot = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowUpFromDot ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowUpFromLine as StrokeArrowUpFromLine } from "./stroke/arrows/ArrowUpFromLine"
export const ArrowUpFromLine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowUpFromLine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowUpLeft as StrokeArrowUpLeft } from "./stroke/arrows/ArrowUpLeft"
export const ArrowUpLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowUpLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowUpNarrowWide as StrokeArrowUpNarrowWide } from "./stroke/arrows/ArrowUpNarrowWide"
export const ArrowUpNarrowWide = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowUpNarrowWide ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowUpRight as StrokeArrowUpRight } from "./stroke/arrows/ArrowUpRight"
export const ArrowUpRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowUpRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowUpToLine as StrokeArrowUpToLine } from "./stroke/arrows/ArrowUpToLine"
export const ArrowUpToLine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowUpToLine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowUpWideNarrow as StrokeArrowUpWideNarrow } from "./stroke/arrows/ArrowUpWideNarrow"
export const ArrowUpWideNarrow = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowUpWideNarrow ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowUpZA as StrokeArrowUpZA } from "./stroke/arrows/ArrowUpZA"
export const ArrowUpZA = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowUpZA ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ArrowsUpFromLine as StrokeArrowsUpFromLine } from "./stroke/arrows/ArrowsUpFromLine"
export const ArrowsUpFromLine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeArrowsUpFromLine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Asterisk as StrokeAsterisk } from "./stroke/interface/Asterisk"
export const Asterisk = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAsterisk ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AtSign as StrokeAtSign } from "./stroke/interface/AtSign"
export const AtSign = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAtSign ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Atom as StrokeAtom } from "./stroke/interface/Atom"
export const Atom = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAtom ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AudioLines as StrokeAudioLines } from "./stroke/interface/AudioLines"
export const AudioLines = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAudioLines ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AudioWaveform as StrokeAudioWaveform } from "./stroke/interface/AudioWaveform"
export const AudioWaveform = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAudioWaveform ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Award as StrokeAward } from "./stroke/interface/Award"
export const Award = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAward ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Axe as StrokeAxe } from "./stroke/interface/Axe"
export const Axe = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAxe ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Axis3d as StrokeAxis3d } from "./stroke/interface/Axis3d"
export const Axis3d = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeAxis3d ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Baby as StrokeBaby } from "./stroke/interface/Baby"
export const Baby = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBaby ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Backpack as StrokeBackpack } from "./stroke/interface/Backpack"
export const Backpack = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBackpack ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Badge as StrokeBadge } from "./stroke/interface/Badge"
export const Badge = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBadge ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BadgeAlert as StrokeBadgeAlert } from "./stroke/interface/BadgeAlert"
export const BadgeAlert = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBadgeAlert ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BadgeCent as StrokeBadgeCent } from "./stroke/interface/BadgeCent"
export const BadgeCent = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBadgeCent ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BadgeCheck as StrokeBadgeCheck } from "./stroke/interface/BadgeCheck"
export const BadgeCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBadgeCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BadgeDollarSign as StrokeBadgeDollarSign } from "./stroke/interface/BadgeDollarSign"
export const BadgeDollarSign = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBadgeDollarSign ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BadgeEuro as StrokeBadgeEuro } from "./stroke/interface/BadgeEuro"
export const BadgeEuro = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBadgeEuro ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BadgeIndianRupee as StrokeBadgeIndianRupee } from "./stroke/interface/BadgeIndianRupee"
export const BadgeIndianRupee = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBadgeIndianRupee ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BadgeInfo as StrokeBadgeInfo } from "./stroke/interface/BadgeInfo"
export const BadgeInfo = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBadgeInfo ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BadgeJapaneseYen as StrokeBadgeJapaneseYen } from "./stroke/interface/BadgeJapaneseYen"
export const BadgeJapaneseYen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBadgeJapaneseYen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BadgeMinus as StrokeBadgeMinus } from "./stroke/interface/BadgeMinus"
export const BadgeMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBadgeMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BadgePercent as StrokeBadgePercent } from "./stroke/interface/BadgePercent"
export const BadgePercent = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBadgePercent ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BadgePlus as StrokeBadgePlus } from "./stroke/interface/BadgePlus"
export const BadgePlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBadgePlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BadgePoundSterling as StrokeBadgePoundSterling } from "./stroke/interface/BadgePoundSterling"
export const BadgePoundSterling = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBadgePoundSterling ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BadgeQuestionMark as StrokeBadgeQuestionMark } from "./stroke/interface/BadgeQuestionMark"
export const BadgeQuestionMark = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBadgeQuestionMark ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BadgeRussianRuble as StrokeBadgeRussianRuble } from "./stroke/interface/BadgeRussianRuble"
export const BadgeRussianRuble = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBadgeRussianRuble ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BadgeSwissFranc as StrokeBadgeSwissFranc } from "./stroke/interface/BadgeSwissFranc"
export const BadgeSwissFranc = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBadgeSwissFranc ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BadgeTurkishLira as StrokeBadgeTurkishLira } from "./stroke/interface/BadgeTurkishLira"
export const BadgeTurkishLira = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBadgeTurkishLira ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BadgeX as StrokeBadgeX } from "./stroke/interface/BadgeX"
export const BadgeX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBadgeX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BaggageClaim as StrokeBaggageClaim } from "./stroke/interface/BaggageClaim"
export const BaggageClaim = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBaggageClaim ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Balloon as StrokeBalloon } from "./stroke/interface/Balloon"
export const Balloon = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBalloon ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Ban as StrokeBan } from "./stroke/interface/Ban"
export const Ban = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBan ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Banana as StrokeBanana } from "./stroke/interface/Banana"
export const Banana = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBanana ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Bandage as StrokeBandage } from "./stroke/interface/Bandage"
export const Bandage = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBandage ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Banknote as StrokeBanknote } from "./stroke/interface/Banknote"
export const Banknote = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBanknote ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BanknoteArrowDown as StrokeBanknoteArrowDown } from "./stroke/arrows/BanknoteArrowDown"
export const BanknoteArrowDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBanknoteArrowDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BanknoteArrowUp as StrokeBanknoteArrowUp } from "./stroke/arrows/BanknoteArrowUp"
export const BanknoteArrowUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBanknoteArrowUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BanknoteX as StrokeBanknoteX } from "./stroke/interface/BanknoteX"
export const BanknoteX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBanknoteX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BarChart3 as StrokeBarChart3 } from "./stroke/interface/BarChart3"
export const BarChart3 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBarChart3 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BarChart4 as StrokeBarChart4 } from "./stroke/interface/BarChart4"
export const BarChart4 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBarChart4 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BarChartBig as StrokeBarChartBig } from "./stroke/interface/BarChartBig"
export const BarChartBig = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBarChartBig ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BarChartHorizontal as StrokeBarChartHorizontal } from "./stroke/interface/BarChartHorizontal"
export const BarChartHorizontal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBarChartHorizontal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BarChartHorizontalBig as StrokeBarChartHorizontalBig } from "./stroke/interface/BarChartHorizontalBig"
export const BarChartHorizontalBig = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBarChartHorizontalBig ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Barcode as StrokeBarcode } from "./stroke/interface/Barcode"
export const Barcode = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBarcode ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Barrel as StrokeBarrel } from "./stroke/interface/Barrel"
export const Barrel = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBarrel ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Baseline as StrokeBaseline } from "./stroke/interface/Baseline"
export const Baseline = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBaseline ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Bath as StrokeBath } from "./stroke/interface/Bath"
export const Bath = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBath ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Battery as StrokeBattery } from "./stroke/interface/Battery"
export const Battery = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBattery ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BatteryCharging as StrokeBatteryCharging } from "./stroke/interface/BatteryCharging"
export const BatteryCharging = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBatteryCharging ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BatteryFull as StrokeBatteryFull } from "./stroke/interface/BatteryFull"
export const BatteryFull = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBatteryFull ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BatteryLow as StrokeBatteryLow } from "./stroke/interface/BatteryLow"
export const BatteryLow = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBatteryLow ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BatteryMedium as StrokeBatteryMedium } from "./stroke/interface/BatteryMedium"
export const BatteryMedium = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBatteryMedium ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BatteryPlus as StrokeBatteryPlus } from "./stroke/interface/BatteryPlus"
export const BatteryPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBatteryPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BatteryWarning as StrokeBatteryWarning } from "./stroke/interface/BatteryWarning"
export const BatteryWarning = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBatteryWarning ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Beaker as StrokeBeaker } from "./stroke/interface/Beaker"
export const Beaker = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBeaker ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Bean as StrokeBean } from "./stroke/interface/Bean"
export const Bean = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBean ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BeanOff as StrokeBeanOff } from "./stroke/interface/BeanOff"
export const BeanOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBeanOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Bed as StrokeBed } from "./stroke/interface/Bed"
export const Bed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BedDouble as StrokeBedDouble } from "./stroke/interface/BedDouble"
export const BedDouble = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBedDouble ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BedSingle as StrokeBedSingle } from "./stroke/interface/BedSingle"
export const BedSingle = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBedSingle ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Beef as StrokeBeef } from "./stroke/interface/Beef"
export const Beef = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBeef ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Beer as StrokeBeer } from "./stroke/interface/Beer"
export const Beer = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBeer ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BeerOff as StrokeBeerOff } from "./stroke/interface/BeerOff"
export const BeerOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBeerOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Bell as StrokeBell } from "./stroke/interface/Bell"
export const Bell = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBell ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BellDot as StrokeBellDot } from "./stroke/interface/BellDot"
export const BellDot = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBellDot ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BellElectric as StrokeBellElectric } from "./stroke/interface/BellElectric"
export const BellElectric = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBellElectric ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BellMinus as StrokeBellMinus } from "./stroke/interface/BellMinus"
export const BellMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBellMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BellOff as StrokeBellOff } from "./stroke/interface/BellOff"
export const BellOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBellOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BellPlus as StrokeBellPlus } from "./stroke/interface/BellPlus"
export const BellPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBellPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BellRing as StrokeBellRing } from "./stroke/interface/BellRing"
export const BellRing = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBellRing ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BetweenHorizontalEnd as StrokeBetweenHorizontalEnd } from "./stroke/interface/BetweenHorizontalEnd"
export const BetweenHorizontalEnd = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBetweenHorizontalEnd ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BetweenHorizontalStart as StrokeBetweenHorizontalStart } from "./stroke/favorites/BetweenHorizontalStart"
export const BetweenHorizontalStart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBetweenHorizontalStart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BetweenVerticalEnd as StrokeBetweenVerticalEnd } from "./stroke/interface/BetweenVerticalEnd"
export const BetweenVerticalEnd = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBetweenVerticalEnd ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BetweenVerticalStart as StrokeBetweenVerticalStart } from "./stroke/favorites/BetweenVerticalStart"
export const BetweenVerticalStart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBetweenVerticalStart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BicepsFlexed as StrokeBicepsFlexed } from "./stroke/interface/BicepsFlexed"
export const BicepsFlexed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBicepsFlexed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Bike as StrokeBike } from "./stroke/interface/Bike"
export const Bike = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBike ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Binary as StrokeBinary } from "./stroke/interface/Binary"
export const Binary = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBinary ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Binoculars as StrokeBinoculars } from "./stroke/interface/Binoculars"
export const Binoculars = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBinoculars ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Biohazard as StrokeBiohazard } from "./stroke/interface/Biohazard"
export const Biohazard = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBiohazard ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Bird as StrokeBird } from "./stroke/interface/Bird"
export const Bird = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBird ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Birdhouse as StrokeBirdhouse } from "./stroke/interface/Birdhouse"
export const Birdhouse = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBirdhouse ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Bitcoin as StrokeBitcoin } from "./stroke/interface/Bitcoin"
export const Bitcoin = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBitcoin ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Blend as StrokeBlend } from "./stroke/interface/Blend"
export const Blend = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBlend ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Blinds as StrokeBlinds } from "./stroke/interface/Blinds"
export const Blinds = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBlinds ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Blocks as StrokeBlocks } from "./stroke/interface/Blocks"
export const Blocks = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBlocks ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Bluetooth as StrokeBluetooth } from "./stroke/interface/Bluetooth"
export const Bluetooth = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBluetooth ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BluetoothConnected as StrokeBluetoothConnected } from "./stroke/interface/BluetoothConnected"
export const BluetoothConnected = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBluetoothConnected ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BluetoothOff as StrokeBluetoothOff } from "./stroke/interface/BluetoothOff"
export const BluetoothOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBluetoothOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BluetoothSearching as StrokeBluetoothSearching } from "./stroke/tools/BluetoothSearching"
export const BluetoothSearching = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBluetoothSearching ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Bold as StrokeBold } from "./stroke/interface/Bold"
export const Bold = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBold ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Bolt as StrokeBolt } from "./stroke/interface/Bolt"
export const Bolt = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBolt ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Bomb as StrokeBomb } from "./stroke/interface/Bomb"
export const Bomb = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBomb ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Bone as StrokeBone } from "./stroke/interface/Bone"
export const Bone = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBone ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Book as StrokeBook } from "./stroke/interface/Book"
export const Book = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBook ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookA as StrokeBookA } from "./stroke/interface/BookA"
export const BookA = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookA ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookAlert as StrokeBookAlert } from "./stroke/interface/BookAlert"
export const BookAlert = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookAlert ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookAudio as StrokeBookAudio } from "./stroke/interface/BookAudio"
export const BookAudio = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookAudio ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookCheck as StrokeBookCheck } from "./stroke/interface/BookCheck"
export const BookCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookCopy as StrokeBookCopy } from "./stroke/interface/BookCopy"
export const BookCopy = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookCopy ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookDashed as StrokeBookDashed } from "./stroke/interface/BookDashed"
export const BookDashed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookDashed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookDown as StrokeBookDown } from "./stroke/interface/BookDown"
export const BookDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookHeadphones as StrokeBookHeadphones } from "./stroke/interface/BookHeadphones"
export const BookHeadphones = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookHeadphones ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookHeart as StrokeBookHeart } from "./stroke/favorites/BookHeart"
export const BookHeart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookHeart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookImage as StrokeBookImage } from "./stroke/interface/BookImage"
export const BookImage = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookImage ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookKey as StrokeBookKey } from "./stroke/interface/BookKey"
export const BookKey = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookKey ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookLock as StrokeBookLock } from "./stroke/interface/BookLock"
export const BookLock = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookLock ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookMarked as StrokeBookMarked } from "./stroke/interface/BookMarked"
export const BookMarked = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookMarked ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookMinus as StrokeBookMinus } from "./stroke/interface/BookMinus"
export const BookMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookOpen as StrokeBookOpen } from "./stroke/interface/BookOpen"
export const BookOpen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookOpen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookOpenCheck as StrokeBookOpenCheck } from "./stroke/interface/BookOpenCheck"
export const BookOpenCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookOpenCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookOpenText as StrokeBookOpenText } from "./stroke/interface/BookOpenText"
export const BookOpenText = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookOpenText ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookPlus as StrokeBookPlus } from "./stroke/interface/BookPlus"
export const BookPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookSearch as StrokeBookSearch } from "./stroke/tools/BookSearch"
export const BookSearch = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookSearch ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookText as StrokeBookText } from "./stroke/interface/BookText"
export const BookText = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookText ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookType as StrokeBookType } from "./stroke/interface/BookType"
export const BookType = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookType ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookUp as StrokeBookUp } from "./stroke/interface/BookUp"
export const BookUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookUp2 as StrokeBookUp2 } from "./stroke/interface/BookUp2"
export const BookUp2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookUp2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookUser as StrokeBookUser } from "./stroke/users/BookUser"
export const BookUser = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookUser ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookX as StrokeBookX } from "./stroke/interface/BookX"
export const BookX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Bookmark as StrokeBookmark } from "./stroke/favorites/Bookmark"
export const Bookmark = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookmark ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookmarkCheck as StrokeBookmarkCheck } from "./stroke/favorites/BookmarkCheck"
export const BookmarkCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookmarkCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookmarkMinus as StrokeBookmarkMinus } from "./stroke/favorites/BookmarkMinus"
export const BookmarkMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookmarkMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookmarkPlus as StrokeBookmarkPlus } from "./stroke/favorites/BookmarkPlus"
export const BookmarkPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookmarkPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BookmarkX as StrokeBookmarkX } from "./stroke/favorites/BookmarkX"
export const BookmarkX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBookmarkX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BoomBox as StrokeBoomBox } from "./stroke/interface/BoomBox"
export const BoomBox = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBoomBox ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Bot as StrokeBot } from "./stroke/interface/Bot"
export const Bot = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBot ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BotMessageSquare as StrokeBotMessageSquare } from "./stroke/communication/BotMessageSquare"
export const BotMessageSquare = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBotMessageSquare ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BotOff as StrokeBotOff } from "./stroke/interface/BotOff"
export const BotOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBotOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BottleWine as StrokeBottleWine } from "./stroke/interface/BottleWine"
export const BottleWine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBottleWine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BowArrow as StrokeBowArrow } from "./stroke/arrows/BowArrow"
export const BowArrow = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBowArrow ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Box as StrokeBox } from "./stroke/interface/Box"
export const Box = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBox ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Boxes as StrokeBoxes } from "./stroke/interface/Boxes"
export const Boxes = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBoxes ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Braces as StrokeBraces } from "./stroke/interface/Braces"
export const Braces = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBraces ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Brackets as StrokeBrackets } from "./stroke/interface/Brackets"
export const Brackets = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBrackets ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Brain as StrokeBrain } from "./stroke/interface/Brain"
export const Brain = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBrain ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BrainCircuit as StrokeBrainCircuit } from "./stroke/interface/BrainCircuit"
export const BrainCircuit = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBrainCircuit ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BrainCog as StrokeBrainCog } from "./stroke/tools/BrainCog"
export const BrainCog = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBrainCog ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BrickWall as StrokeBrickWall } from "./stroke/interface/BrickWall"
export const BrickWall = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBrickWall ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BrickWallFire as StrokeBrickWallFire } from "./stroke/interface/BrickWallFire"
export const BrickWallFire = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBrickWallFire ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BrickWallShield as StrokeBrickWallShield } from "./stroke/interface/BrickWallShield"
export const BrickWallShield = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBrickWallShield ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Briefcase as StrokeBriefcase } from "./stroke/interface/Briefcase"
export const Briefcase = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBriefcase ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BriefcaseBusiness as StrokeBriefcaseBusiness } from "./stroke/interface/BriefcaseBusiness"
export const BriefcaseBusiness = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBriefcaseBusiness ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BriefcaseConveyorBelt as StrokeBriefcaseConveyorBelt } from "./stroke/interface/BriefcaseConveyorBelt"
export const BriefcaseConveyorBelt = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBriefcaseConveyorBelt ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BriefcaseMedical as StrokeBriefcaseMedical } from "./stroke/interface/BriefcaseMedical"
export const BriefcaseMedical = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBriefcaseMedical ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BringToFront as StrokeBringToFront } from "./stroke/interface/BringToFront"
export const BringToFront = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBringToFront ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Brush as StrokeBrush } from "./stroke/interface/Brush"
export const Brush = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBrush ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BrushCleaning as StrokeBrushCleaning } from "./stroke/interface/BrushCleaning"
export const BrushCleaning = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBrushCleaning ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Bubbles as StrokeBubbles } from "./stroke/interface/Bubbles"
export const Bubbles = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBubbles ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Bug as StrokeBug } from "./stroke/interface/Bug"
export const Bug = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBug ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BugOff as StrokeBugOff } from "./stroke/interface/BugOff"
export const BugOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBugOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BugPlay as StrokeBugPlay } from "./stroke/media/BugPlay"
export const BugPlay = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBugPlay ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Building as StrokeBuilding } from "./stroke/interface/Building"
export const Building = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBuilding ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Building2 as StrokeBuilding2 } from "./stroke/interface/Building2"
export const Building2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBuilding2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Bus as StrokeBus } from "./stroke/interface/Bus"
export const Bus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { BusFront as StrokeBusFront } from "./stroke/interface/BusFront"
export const BusFront = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeBusFront ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Cable as StrokeCable } from "./stroke/interface/Cable"
export const Cable = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCable ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CableCar as StrokeCableCar } from "./stroke/interface/CableCar"
export const CableCar = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCableCar ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Cake as StrokeCake } from "./stroke/interface/Cake"
export const Cake = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCake ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CakeSlice as StrokeCakeSlice } from "./stroke/interface/CakeSlice"
export const CakeSlice = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCakeSlice ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Calculator as StrokeCalculator } from "./stroke/interface/Calculator"
export const Calculator = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalculator ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Calendar as StrokeCalendar } from "./stroke/interface/Calendar"
export const Calendar = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendar ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Calendar1 as StrokeCalendar1 } from "./stroke/interface/Calendar1"
export const Calendar1 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendar1 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CalendarArrowDown as StrokeCalendarArrowDown } from "./stroke/arrows/CalendarArrowDown"
export const CalendarArrowDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendarArrowDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CalendarArrowUp as StrokeCalendarArrowUp } from "./stroke/arrows/CalendarArrowUp"
export const CalendarArrowUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendarArrowUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CalendarCheck as StrokeCalendarCheck } from "./stroke/interface/CalendarCheck"
export const CalendarCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendarCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CalendarCheck2 as StrokeCalendarCheck2 } from "./stroke/interface/CalendarCheck2"
export const CalendarCheck2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendarCheck2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CalendarClock as StrokeCalendarClock } from "./stroke/time/CalendarClock"
export const CalendarClock = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendarClock ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CalendarCog as StrokeCalendarCog } from "./stroke/tools/CalendarCog"
export const CalendarCog = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendarCog ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CalendarDays as StrokeCalendarDays } from "./stroke/interface/CalendarDays"
export const CalendarDays = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendarDays ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CalendarFold as StrokeCalendarFold } from "./stroke/interface/CalendarFold"
export const CalendarFold = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendarFold ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CalendarHeart as StrokeCalendarHeart } from "./stroke/favorites/CalendarHeart"
export const CalendarHeart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendarHeart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CalendarMinus as StrokeCalendarMinus } from "./stroke/interface/CalendarMinus"
export const CalendarMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendarMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CalendarMinus2 as StrokeCalendarMinus2 } from "./stroke/interface/CalendarMinus2"
export const CalendarMinus2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendarMinus2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CalendarOff as StrokeCalendarOff } from "./stroke/interface/CalendarOff"
export const CalendarOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendarOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CalendarPlus as StrokeCalendarPlus } from "./stroke/interface/CalendarPlus"
export const CalendarPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendarPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CalendarPlus2 as StrokeCalendarPlus2 } from "./stroke/interface/CalendarPlus2"
export const CalendarPlus2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendarPlus2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CalendarRange as StrokeCalendarRange } from "./stroke/interface/CalendarRange"
export const CalendarRange = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendarRange ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CalendarSearch as StrokeCalendarSearch } from "./stroke/tools/CalendarSearch"
export const CalendarSearch = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendarSearch ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CalendarSync as StrokeCalendarSync } from "./stroke/interface/CalendarSync"
export const CalendarSync = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendarSync ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CalendarX as StrokeCalendarX } from "./stroke/interface/CalendarX"
export const CalendarX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendarX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CalendarX2 as StrokeCalendarX2 } from "./stroke/interface/CalendarX2"
export const CalendarX2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendarX2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Calendars as StrokeCalendars } from "./stroke/interface/Calendars"
export const Calendars = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCalendars ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Camera as StrokeCamera } from "./stroke/interface/Camera"
export const Camera = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCamera ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CameraOff as StrokeCameraOff } from "./stroke/interface/CameraOff"
export const CameraOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCameraOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CandlestickChart as StrokeCandlestickChart } from "./stroke/interface/CandlestickChart"
export const CandlestickChart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCandlestickChart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Candy as StrokeCandy } from "./stroke/interface/Candy"
export const Candy = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCandy ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CandyCane as StrokeCandyCane } from "./stroke/interface/CandyCane"
export const CandyCane = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCandyCane ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CandyOff as StrokeCandyOff } from "./stroke/interface/CandyOff"
export const CandyOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCandyOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Cannabis as StrokeCannabis } from "./stroke/interface/Cannabis"
export const Cannabis = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCannabis ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CannabisOff as StrokeCannabisOff } from "./stroke/interface/CannabisOff"
export const CannabisOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCannabisOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Captions as StrokeCaptions } from "./stroke/interface/Captions"
export const Captions = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCaptions ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CaptionsOff as StrokeCaptionsOff } from "./stroke/interface/CaptionsOff"
export const CaptionsOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCaptionsOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Car as StrokeCar } from "./stroke/interface/Car"
export const Car = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCar ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CarFront as StrokeCarFront } from "./stroke/interface/CarFront"
export const CarFront = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCarFront ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CarTaxiFront as StrokeCarTaxiFront } from "./stroke/interface/CarTaxiFront"
export const CarTaxiFront = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCarTaxiFront ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Caravan as StrokeCaravan } from "./stroke/interface/Caravan"
export const Caravan = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCaravan ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CardSim as StrokeCardSim } from "./stroke/interface/CardSim"
export const CardSim = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCardSim ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Carrot as StrokeCarrot } from "./stroke/interface/Carrot"
export const Carrot = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCarrot ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CaseLower as StrokeCaseLower } from "./stroke/interface/CaseLower"
export const CaseLower = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCaseLower ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CaseSensitive as StrokeCaseSensitive } from "./stroke/interface/CaseSensitive"
export const CaseSensitive = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCaseSensitive ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CaseUpper as StrokeCaseUpper } from "./stroke/interface/CaseUpper"
export const CaseUpper = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCaseUpper ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CassetteTape as StrokeCassetteTape } from "./stroke/interface/CassetteTape"
export const CassetteTape = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCassetteTape ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Cast as StrokeCast } from "./stroke/interface/Cast"
export const Cast = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCast ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Castle as StrokeCastle } from "./stroke/interface/Castle"
export const Castle = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCastle ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Cat as StrokeCat } from "./stroke/interface/Cat"
export const Cat = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCat ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Cctv as StrokeCctv } from "./stroke/interface/Cctv"
export const Cctv = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCctv ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartArea as StrokeChartArea } from "./stroke/interface/ChartArea"
export const ChartArea = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartArea ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartBar as StrokeChartBar } from "./stroke/interface/ChartBar"
export const ChartBar = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartBar ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartBarBig as StrokeChartBarBig } from "./stroke/interface/ChartBarBig"
export const ChartBarBig = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartBarBig ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartBarDecreasing as StrokeChartBarDecreasing } from "./stroke/interface/ChartBarDecreasing"
export const ChartBarDecreasing = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartBarDecreasing ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartBarIncreasing as StrokeChartBarIncreasing } from "./stroke/interface/ChartBarIncreasing"
export const ChartBarIncreasing = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartBarIncreasing ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartBarStacked as StrokeChartBarStacked } from "./stroke/interface/ChartBarStacked"
export const ChartBarStacked = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartBarStacked ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartCandlestick as StrokeChartCandlestick } from "./stroke/interface/ChartCandlestick"
export const ChartCandlestick = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartCandlestick ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartColumn as StrokeChartColumn } from "./stroke/interface/ChartColumn"
export const ChartColumn = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartColumn ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartColumnBig as StrokeChartColumnBig } from "./stroke/interface/ChartColumnBig"
export const ChartColumnBig = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartColumnBig ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartColumnDecreasing as StrokeChartColumnDecreasing } from "./stroke/interface/ChartColumnDecreasing"
export const ChartColumnDecreasing = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartColumnDecreasing ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartColumnIncreasing as StrokeChartColumnIncreasing } from "./stroke/interface/ChartColumnIncreasing"
export const ChartColumnIncreasing = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartColumnIncreasing ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartColumnStacked as StrokeChartColumnStacked } from "./stroke/interface/ChartColumnStacked"
export const ChartColumnStacked = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartColumnStacked ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartGantt as StrokeChartGantt } from "./stroke/interface/ChartGantt"
export const ChartGantt = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartGantt ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartLine as StrokeChartLine } from "./stroke/interface/ChartLine"
export const ChartLine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartLine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartNetwork as StrokeChartNetwork } from "./stroke/interface/ChartNetwork"
export const ChartNetwork = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartNetwork ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartNoAxesColumn as StrokeChartNoAxesColumn } from "./stroke/interface/ChartNoAxesColumn"
export const ChartNoAxesColumn = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartNoAxesColumn ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartNoAxesColumnDecreasing as StrokeChartNoAxesColumnDecreasing } from "./stroke/interface/ChartNoAxesColumnDecreasing"
export const ChartNoAxesColumnDecreasing = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartNoAxesColumnDecreasing ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartNoAxesColumnIncreasing as StrokeChartNoAxesColumnIncreasing } from "./stroke/interface/ChartNoAxesColumnIncreasing"
export const ChartNoAxesColumnIncreasing = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartNoAxesColumnIncreasing ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartNoAxesCombined as StrokeChartNoAxesCombined } from "./stroke/interface/ChartNoAxesCombined"
export const ChartNoAxesCombined = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartNoAxesCombined ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartNoAxesGantt as StrokeChartNoAxesGantt } from "./stroke/interface/ChartNoAxesGantt"
export const ChartNoAxesGantt = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartNoAxesGantt ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartPie as StrokeChartPie } from "./stroke/interface/ChartPie"
export const ChartPie = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartPie ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartScatter as StrokeChartScatter } from "./stroke/interface/ChartScatter"
export const ChartScatter = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartScatter ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChartSpline as StrokeChartSpline } from "./stroke/interface/ChartSpline"
export const ChartSpline = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChartSpline ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Check as StrokeCheck } from "./stroke/interface/Check"
export const Check = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CheckCheck as StrokeCheckCheck } from "./stroke/interface/CheckCheck"
export const CheckCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCheckCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CheckLine as StrokeCheckLine } from "./stroke/interface/CheckLine"
export const CheckLine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCheckLine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChefHat as StrokeChefHat } from "./stroke/interface/ChefHat"
export const ChefHat = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChefHat ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Cherry as StrokeCherry } from "./stroke/interface/Cherry"
export const Cherry = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCherry ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChessBishop as StrokeChessBishop } from "./stroke/interface/ChessBishop"
export const ChessBishop = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChessBishop ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChessKing as StrokeChessKing } from "./stroke/interface/ChessKing"
export const ChessKing = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChessKing ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChessKnight as StrokeChessKnight } from "./stroke/interface/ChessKnight"
export const ChessKnight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChessKnight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChessPawn as StrokeChessPawn } from "./stroke/interface/ChessPawn"
export const ChessPawn = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChessPawn ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChessQueen as StrokeChessQueen } from "./stroke/interface/ChessQueen"
export const ChessQueen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChessQueen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChessRook as StrokeChessRook } from "./stroke/interface/ChessRook"
export const ChessRook = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChessRook ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChevronDown as StrokeChevronDown } from "./stroke/interface/ChevronDown"
export const ChevronDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChevronDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChevronFirst as StrokeChevronFirst } from "./stroke/interface/ChevronFirst"
export const ChevronFirst = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChevronFirst ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChevronLast as StrokeChevronLast } from "./stroke/interface/ChevronLast"
export const ChevronLast = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChevronLast ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChevronLeft as StrokeChevronLeft } from "./stroke/interface/ChevronLeft"
export const ChevronLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChevronLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChevronRight as StrokeChevronRight } from "./stroke/interface/ChevronRight"
export const ChevronRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChevronRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChevronUp as StrokeChevronUp } from "./stroke/interface/ChevronUp"
export const ChevronUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChevronUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChevronsDown as StrokeChevronsDown } from "./stroke/interface/ChevronsDown"
export const ChevronsDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChevronsDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChevronsDownUp as StrokeChevronsDownUp } from "./stroke/interface/ChevronsDownUp"
export const ChevronsDownUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChevronsDownUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChevronsLeft as StrokeChevronsLeft } from "./stroke/interface/ChevronsLeft"
export const ChevronsLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChevronsLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChevronsLeftRight as StrokeChevronsLeftRight } from "./stroke/interface/ChevronsLeftRight"
export const ChevronsLeftRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChevronsLeftRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChevronsLeftRightEllipsis as StrokeChevronsLeftRightEllipsis } from "./stroke/interface/ChevronsLeftRightEllipsis"
export const ChevronsLeftRightEllipsis = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChevronsLeftRightEllipsis ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChevronsRight as StrokeChevronsRight } from "./stroke/interface/ChevronsRight"
export const ChevronsRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChevronsRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChevronsRightLeft as StrokeChevronsRightLeft } from "./stroke/interface/ChevronsRightLeft"
export const ChevronsRightLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChevronsRightLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChevronsUp as StrokeChevronsUp } from "./stroke/interface/ChevronsUp"
export const ChevronsUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChevronsUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ChevronsUpDown as StrokeChevronsUpDown } from "./stroke/interface/ChevronsUpDown"
export const ChevronsUpDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChevronsUpDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Chrome as StrokeChrome } from "./stroke/interface/Chrome"
export const Chrome = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChrome ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Chromium as StrokeChromium } from "./stroke/interface/Chromium"
export const Chromium = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChromium ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Church as StrokeChurch } from "./stroke/interface/Church"
export const Church = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeChurch ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Cigarette as StrokeCigarette } from "./stroke/interface/Cigarette"
export const Cigarette = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCigarette ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CigaretteOff as StrokeCigaretteOff } from "./stroke/interface/CigaretteOff"
export const CigaretteOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCigaretteOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Circle as StrokeCircle } from "./stroke/interface/Circle"
export const Circle = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircle ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleAlert as StrokeCircleAlert } from "./stroke/interface/CircleAlert"
export const CircleAlert = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleAlert ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleArrowDown as StrokeCircleArrowDown } from "./stroke/arrows/CircleArrowDown"
export const CircleArrowDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleArrowDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleArrowLeft as StrokeCircleArrowLeft } from "./stroke/arrows/CircleArrowLeft"
export const CircleArrowLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleArrowLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleArrowOutDownLeft as StrokeCircleArrowOutDownLeft } from "./stroke/arrows/CircleArrowOutDownLeft"
export const CircleArrowOutDownLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleArrowOutDownLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleArrowOutDownRight as StrokeCircleArrowOutDownRight } from "./stroke/arrows/CircleArrowOutDownRight"
export const CircleArrowOutDownRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleArrowOutDownRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleArrowOutUpLeft as StrokeCircleArrowOutUpLeft } from "./stroke/arrows/CircleArrowOutUpLeft"
export const CircleArrowOutUpLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleArrowOutUpLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleArrowOutUpRight as StrokeCircleArrowOutUpRight } from "./stroke/arrows/CircleArrowOutUpRight"
export const CircleArrowOutUpRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleArrowOutUpRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleArrowRight as StrokeCircleArrowRight } from "./stroke/arrows/CircleArrowRight"
export const CircleArrowRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleArrowRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleArrowUp as StrokeCircleArrowUp } from "./stroke/arrows/CircleArrowUp"
export const CircleArrowUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleArrowUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleCheck as StrokeCircleCheck } from "./stroke/interface/CircleCheck"
export const CircleCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleCheckBig as StrokeCircleCheckBig } from "./stroke/interface/CircleCheckBig"
export const CircleCheckBig = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleCheckBig ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleChevronDown as StrokeCircleChevronDown } from "./stroke/interface/CircleChevronDown"
export const CircleChevronDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleChevronDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleChevronLeft as StrokeCircleChevronLeft } from "./stroke/interface/CircleChevronLeft"
export const CircleChevronLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleChevronLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleChevronRight as StrokeCircleChevronRight } from "./stroke/interface/CircleChevronRight"
export const CircleChevronRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleChevronRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleChevronUp as StrokeCircleChevronUp } from "./stroke/interface/CircleChevronUp"
export const CircleChevronUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleChevronUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleDashed as StrokeCircleDashed } from "./stroke/interface/CircleDashed"
export const CircleDashed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleDashed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleDivide as StrokeCircleDivide } from "./stroke/interface/CircleDivide"
export const CircleDivide = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleDivide ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleDollarSign as StrokeCircleDollarSign } from "./stroke/interface/CircleDollarSign"
export const CircleDollarSign = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleDollarSign ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleDot as StrokeCircleDot } from "./stroke/interface/CircleDot"
export const CircleDot = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleDot ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleDotDashed as StrokeCircleDotDashed } from "./stroke/interface/CircleDotDashed"
export const CircleDotDashed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleDotDashed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleEllipsis as StrokeCircleEllipsis } from "./stroke/interface/CircleEllipsis"
export const CircleEllipsis = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleEllipsis ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleEqual as StrokeCircleEqual } from "./stroke/interface/CircleEqual"
export const CircleEqual = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleEqual ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleFadingArrowUp as StrokeCircleFadingArrowUp } from "./stroke/arrows/CircleFadingArrowUp"
export const CircleFadingArrowUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleFadingArrowUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleFadingPlus as StrokeCircleFadingPlus } from "./stroke/interface/CircleFadingPlus"
export const CircleFadingPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleFadingPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleGauge as StrokeCircleGauge } from "./stroke/interface/CircleGauge"
export const CircleGauge = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleGauge ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleMinus as StrokeCircleMinus } from "./stroke/interface/CircleMinus"
export const CircleMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleOff as StrokeCircleOff } from "./stroke/interface/CircleOff"
export const CircleOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleParking as StrokeCircleParking } from "./stroke/interface/CircleParking"
export const CircleParking = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleParking ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleParkingOff as StrokeCircleParkingOff } from "./stroke/interface/CircleParkingOff"
export const CircleParkingOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleParkingOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CirclePause as StrokeCirclePause } from "./stroke/media/CirclePause"
export const CirclePause = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCirclePause ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CirclePercent as StrokeCirclePercent } from "./stroke/interface/CirclePercent"
export const CirclePercent = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCirclePercent ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CirclePile as StrokeCirclePile } from "./stroke/interface/CirclePile"
export const CirclePile = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCirclePile ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CirclePlay as StrokeCirclePlay } from "./stroke/media/CirclePlay"
export const CirclePlay = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCirclePlay ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CirclePlus as StrokeCirclePlus } from "./stroke/interface/CirclePlus"
export const CirclePlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCirclePlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CirclePoundSterling as StrokeCirclePoundSterling } from "./stroke/interface/CirclePoundSterling"
export const CirclePoundSterling = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCirclePoundSterling ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CirclePower as StrokeCirclePower } from "./stroke/interface/CirclePower"
export const CirclePower = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCirclePower ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleQuestionMark as StrokeCircleQuestionMark } from "./stroke/interface/CircleQuestionMark"
export const CircleQuestionMark = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleQuestionMark ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleSlash as StrokeCircleSlash } from "./stroke/interface/CircleSlash"
export const CircleSlash = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleSlash ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleSlash2 as StrokeCircleSlash2 } from "./stroke/interface/CircleSlash2"
export const CircleSlash2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleSlash2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleSmall as StrokeCircleSmall } from "./stroke/interface/CircleSmall"
export const CircleSmall = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleSmall ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleStar as StrokeCircleStar } from "./stroke/favorites/CircleStar"
export const CircleStar = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleStar ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleStop as StrokeCircleStop } from "./stroke/interface/CircleStop"
export const CircleStop = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleStop ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleUser as StrokeCircleUser } from "./stroke/users/CircleUser"
export const CircleUser = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleUser ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleUserRound as StrokeCircleUserRound } from "./stroke/users/CircleUserRound"
export const CircleUserRound = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleUserRound ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircleX as StrokeCircleX } from "./stroke/interface/CircleX"
export const CircleX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircleX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CircuitBoard as StrokeCircuitBoard } from "./stroke/interface/CircuitBoard"
export const CircuitBoard = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCircuitBoard ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Citrus as StrokeCitrus } from "./stroke/interface/Citrus"
export const Citrus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCitrus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Clapperboard as StrokeClapperboard } from "./stroke/interface/Clapperboard"
export const Clapperboard = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClapperboard ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Clipboard as StrokeClipboard } from "./stroke/interface/Clipboard"
export const Clipboard = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClipboard ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ClipboardCheck as StrokeClipboardCheck } from "./stroke/interface/ClipboardCheck"
export const ClipboardCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClipboardCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ClipboardClock as StrokeClipboardClock } from "./stroke/time/ClipboardClock"
export const ClipboardClock = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClipboardClock ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ClipboardCopy as StrokeClipboardCopy } from "./stroke/interface/ClipboardCopy"
export const ClipboardCopy = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClipboardCopy ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ClipboardList as StrokeClipboardList } from "./stroke/interface/ClipboardList"
export const ClipboardList = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClipboardList ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ClipboardMinus as StrokeClipboardMinus } from "./stroke/interface/ClipboardMinus"
export const ClipboardMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClipboardMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ClipboardPaste as StrokeClipboardPaste } from "./stroke/interface/ClipboardPaste"
export const ClipboardPaste = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClipboardPaste ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ClipboardPen as StrokeClipboardPen } from "./stroke/interface/ClipboardPen"
export const ClipboardPen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClipboardPen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ClipboardPenLine as StrokeClipboardPenLine } from "./stroke/interface/ClipboardPenLine"
export const ClipboardPenLine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClipboardPenLine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ClipboardPlus as StrokeClipboardPlus } from "./stroke/interface/ClipboardPlus"
export const ClipboardPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClipboardPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ClipboardType as StrokeClipboardType } from "./stroke/interface/ClipboardType"
export const ClipboardType = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClipboardType ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ClipboardX as StrokeClipboardX } from "./stroke/interface/ClipboardX"
export const ClipboardX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClipboardX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Clock as StrokeClock } from "./stroke/time/Clock"
export const Clock = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClock ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Clock1 as StrokeClock1 } from "./stroke/time/Clock1"
export const Clock1 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClock1 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Clock10 as StrokeClock10 } from "./stroke/time/Clock10"
export const Clock10 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClock10 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Clock11 as StrokeClock11 } from "./stroke/time/Clock11"
export const Clock11 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClock11 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Clock12 as StrokeClock12 } from "./stroke/time/Clock12"
export const Clock12 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClock12 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Clock2 as StrokeClock2 } from "./stroke/time/Clock2"
export const Clock2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClock2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Clock3 as StrokeClock3 } from "./stroke/time/Clock3"
export const Clock3 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClock3 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Clock4 as StrokeClock4 } from "./stroke/time/Clock4"
export const Clock4 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClock4 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Clock5 as StrokeClock5 } from "./stroke/time/Clock5"
export const Clock5 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClock5 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Clock6 as StrokeClock6 } from "./stroke/time/Clock6"
export const Clock6 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClock6 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Clock7 as StrokeClock7 } from "./stroke/time/Clock7"
export const Clock7 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClock7 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Clock8 as StrokeClock8 } from "./stroke/time/Clock8"
export const Clock8 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClock8 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Clock9 as StrokeClock9 } from "./stroke/time/Clock9"
export const Clock9 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClock9 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ClockAlert as StrokeClockAlert } from "./stroke/time/ClockAlert"
export const ClockAlert = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClockAlert ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ClockArrowDown as StrokeClockArrowDown } from "./stroke/arrows/ClockArrowDown"
export const ClockArrowDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClockArrowDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ClockArrowUp as StrokeClockArrowUp } from "./stroke/arrows/ClockArrowUp"
export const ClockArrowUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClockArrowUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ClockCheck as StrokeClockCheck } from "./stroke/time/ClockCheck"
export const ClockCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClockCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ClockFading as StrokeClockFading } from "./stroke/time/ClockFading"
export const ClockFading = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClockFading ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ClockPlus as StrokeClockPlus } from "./stroke/time/ClockPlus"
export const ClockPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClockPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ClosedCaption as StrokeClosedCaption } from "./stroke/interface/ClosedCaption"
export const ClosedCaption = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClosedCaption ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Cloud as StrokeCloud } from "./stroke/interface/Cloud"
export const Cloud = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCloud ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CloudAlert as StrokeCloudAlert } from "./stroke/interface/CloudAlert"
export const CloudAlert = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCloudAlert ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CloudBackup as StrokeCloudBackup } from "./stroke/interface/CloudBackup"
export const CloudBackup = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCloudBackup ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CloudCheck as StrokeCloudCheck } from "./stroke/interface/CloudCheck"
export const CloudCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCloudCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CloudCog as StrokeCloudCog } from "./stroke/tools/CloudCog"
export const CloudCog = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCloudCog ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CloudDownload as StrokeCloudDownload } from "./stroke/interface/CloudDownload"
export const CloudDownload = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCloudDownload ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CloudDrizzle as StrokeCloudDrizzle } from "./stroke/interface/CloudDrizzle"
export const CloudDrizzle = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCloudDrizzle ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CloudFog as StrokeCloudFog } from "./stroke/interface/CloudFog"
export const CloudFog = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCloudFog ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CloudHail as StrokeCloudHail } from "./stroke/interface/CloudHail"
export const CloudHail = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCloudHail ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CloudLightning as StrokeCloudLightning } from "./stroke/interface/CloudLightning"
export const CloudLightning = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCloudLightning ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CloudMoon as StrokeCloudMoon } from "./stroke/interface/CloudMoon"
export const CloudMoon = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCloudMoon ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CloudMoonRain as StrokeCloudMoonRain } from "./stroke/interface/CloudMoonRain"
export const CloudMoonRain = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCloudMoonRain ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CloudOff as StrokeCloudOff } from "./stroke/interface/CloudOff"
export const CloudOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCloudOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CloudRain as StrokeCloudRain } from "./stroke/interface/CloudRain"
export const CloudRain = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCloudRain ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CloudRainWind as StrokeCloudRainWind } from "./stroke/interface/CloudRainWind"
export const CloudRainWind = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCloudRainWind ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CloudSnow as StrokeCloudSnow } from "./stroke/interface/CloudSnow"
export const CloudSnow = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCloudSnow ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CloudSun as StrokeCloudSun } from "./stroke/interface/CloudSun"
export const CloudSun = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCloudSun ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CloudSunRain as StrokeCloudSunRain } from "./stroke/interface/CloudSunRain"
export const CloudSunRain = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCloudSunRain ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CloudSync as StrokeCloudSync } from "./stroke/interface/CloudSync"
export const CloudSync = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCloudSync ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CloudUpload as StrokeCloudUpload } from "./stroke/interface/CloudUpload"
export const CloudUpload = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCloudUpload ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Cloudy as StrokeCloudy } from "./stroke/interface/Cloudy"
export const Cloudy = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCloudy ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Clover as StrokeClover } from "./stroke/interface/Clover"
export const Clover = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClover ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Club as StrokeClub } from "./stroke/interface/Club"
export const Club = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeClub ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Code as StrokeCode } from "./stroke/interface/Code"
export const Code = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCode ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CodeXml as StrokeCodeXml } from "./stroke/interface/CodeXml"
export const CodeXml = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCodeXml ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Codepen as StrokeCodepen } from "./stroke/interface/Codepen"
export const Codepen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCodepen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Codesandbox as StrokeCodesandbox } from "./stroke/interface/Codesandbox"
export const Codesandbox = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCodesandbox ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Coffee as StrokeCoffee } from "./stroke/interface/Coffee"
export const Coffee = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCoffee ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Cog as StrokeCog } from "./stroke/tools/Cog"
export const Cog = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCog ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Coins as StrokeCoins } from "./stroke/interface/Coins"
export const Coins = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCoins ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Columns2 as StrokeColumns2 } from "./stroke/interface/Columns2"
export const Columns2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeColumns2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Columns3 as StrokeColumns3 } from "./stroke/interface/Columns3"
export const Columns3 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeColumns3 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Columns3Cog as StrokeColumns3Cog } from "./stroke/tools/Columns3Cog"
export const Columns3Cog = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeColumns3Cog ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Columns4 as StrokeColumns4 } from "./stroke/interface/Columns4"
export const Columns4 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeColumns4 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Combine as StrokeCombine } from "./stroke/interface/Combine"
export const Combine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCombine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Command as StrokeCommand } from "./stroke/interface/Command"
export const Command = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCommand ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Compass as StrokeCompass } from "./stroke/interface/Compass"
export const Compass = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCompass ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Component as StrokeComponent } from "./stroke/interface/Component"
export const Component = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeComponent ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Computer as StrokeComputer } from "./stroke/interface/Computer"
export const Computer = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeComputer ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ConciergeBell as StrokeConciergeBell } from "./stroke/interface/ConciergeBell"
export const ConciergeBell = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeConciergeBell ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Cone as StrokeCone } from "./stroke/interface/Cone"
export const Cone = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCone ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Construction as StrokeConstruction } from "./stroke/interface/Construction"
export const Construction = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeConstruction ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Contact as StrokeContact } from "./stroke/interface/Contact"
export const Contact = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeContact ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ContactRound as StrokeContactRound } from "./stroke/interface/ContactRound"
export const ContactRound = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeContactRound ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Container as StrokeContainer } from "./stroke/interface/Container"
export const Container = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeContainer ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Contrast as StrokeContrast } from "./stroke/interface/Contrast"
export const Contrast = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeContrast ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Cookie as StrokeCookie } from "./stroke/interface/Cookie"
export const Cookie = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCookie ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CookingPot as StrokeCookingPot } from "./stroke/interface/CookingPot"
export const CookingPot = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCookingPot ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Copy as StrokeCopy } from "./stroke/interface/Copy"
export const Copy = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCopy ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CopyCheck as StrokeCopyCheck } from "./stroke/interface/CopyCheck"
export const CopyCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCopyCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CopyMinus as StrokeCopyMinus } from "./stroke/interface/CopyMinus"
export const CopyMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCopyMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CopyPlus as StrokeCopyPlus } from "./stroke/interface/CopyPlus"
export const CopyPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCopyPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CopySlash as StrokeCopySlash } from "./stroke/interface/CopySlash"
export const CopySlash = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCopySlash ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CopyX as StrokeCopyX } from "./stroke/interface/CopyX"
export const CopyX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCopyX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Copyleft as StrokeCopyleft } from "./stroke/interface/Copyleft"
export const Copyleft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCopyleft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Copyright as StrokeCopyright } from "./stroke/interface/Copyright"
export const Copyright = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCopyright ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CornerDownLeft as StrokeCornerDownLeft } from "./stroke/interface/CornerDownLeft"
export const CornerDownLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCornerDownLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CornerDownRight as StrokeCornerDownRight } from "./stroke/interface/CornerDownRight"
export const CornerDownRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCornerDownRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CornerLeftDown as StrokeCornerLeftDown } from "./stroke/interface/CornerLeftDown"
export const CornerLeftDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCornerLeftDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CornerLeftUp as StrokeCornerLeftUp } from "./stroke/interface/CornerLeftUp"
export const CornerLeftUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCornerLeftUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CornerRightDown as StrokeCornerRightDown } from "./stroke/interface/CornerRightDown"
export const CornerRightDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCornerRightDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CornerRightUp as StrokeCornerRightUp } from "./stroke/interface/CornerRightUp"
export const CornerRightUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCornerRightUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CornerUpLeft as StrokeCornerUpLeft } from "./stroke/interface/CornerUpLeft"
export const CornerUpLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCornerUpLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CornerUpRight as StrokeCornerUpRight } from "./stroke/interface/CornerUpRight"
export const CornerUpRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCornerUpRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Cpu as StrokeCpu } from "./stroke/interface/Cpu"
export const Cpu = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCpu ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CreativeCommons as StrokeCreativeCommons } from "./stroke/interface/CreativeCommons"
export const CreativeCommons = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCreativeCommons ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CreditCard as StrokeCreditCard } from "./stroke/interface/CreditCard"
export const CreditCard = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCreditCard ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Croissant as StrokeCroissant } from "./stroke/interface/Croissant"
export const Croissant = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCroissant ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Crop as StrokeCrop } from "./stroke/interface/Crop"
export const Crop = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCrop ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Cross as StrokeCross } from "./stroke/interface/Cross"
export const Cross = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCross ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Crosshair as StrokeCrosshair } from "./stroke/interface/Crosshair"
export const Crosshair = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCrosshair ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Crown as StrokeCrown } from "./stroke/interface/Crown"
export const Crown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCrown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Cuboid as StrokeCuboid } from "./stroke/interface/Cuboid"
export const Cuboid = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCuboid ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { CupSoda as StrokeCupSoda } from "./stroke/interface/CupSoda"
export const CupSoda = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCupSoda ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Currency as StrokeCurrency } from "./stroke/interface/Currency"
export const Currency = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCurrency ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Cylinder as StrokeCylinder } from "./stroke/interface/Cylinder"
export const Cylinder = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeCylinder ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Dam as StrokeDam } from "./stroke/interface/Dam"
export const Dam = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDam ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Database as StrokeDatabase } from "./stroke/interface/Database"
export const Database = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDatabase ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { DatabaseBackup as StrokeDatabaseBackup } from "./stroke/interface/DatabaseBackup"
export const DatabaseBackup = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDatabaseBackup ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { DatabaseSearch as StrokeDatabaseSearch } from "./stroke/tools/DatabaseSearch"
export const DatabaseSearch = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDatabaseSearch ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { DatabaseZap as StrokeDatabaseZap } from "./stroke/interface/DatabaseZap"
export const DatabaseZap = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDatabaseZap ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { DecimalsArrowLeft as StrokeDecimalsArrowLeft } from "./stroke/arrows/DecimalsArrowLeft"
export const DecimalsArrowLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDecimalsArrowLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { DecimalsArrowRight as StrokeDecimalsArrowRight } from "./stroke/arrows/DecimalsArrowRight"
export const DecimalsArrowRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDecimalsArrowRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Delete as StrokeDelete } from "./stroke/interface/Delete"
export const Delete = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDelete ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Dessert as StrokeDessert } from "./stroke/interface/Dessert"
export const Dessert = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDessert ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Diameter as StrokeDiameter } from "./stroke/interface/Diameter"
export const Diameter = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDiameter ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Diamond as StrokeDiamond } from "./stroke/interface/Diamond"
export const Diamond = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDiamond ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { DiamondMinus as StrokeDiamondMinus } from "./stroke/interface/DiamondMinus"
export const DiamondMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDiamondMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { DiamondPercent as StrokeDiamondPercent } from "./stroke/interface/DiamondPercent"
export const DiamondPercent = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDiamondPercent ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { DiamondPlus as StrokeDiamondPlus } from "./stroke/interface/DiamondPlus"
export const DiamondPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDiamondPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Dice1 as StrokeDice1 } from "./stroke/interface/Dice1"
export const Dice1 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDice1 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Dice2 as StrokeDice2 } from "./stroke/interface/Dice2"
export const Dice2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDice2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Dice3 as StrokeDice3 } from "./stroke/interface/Dice3"
export const Dice3 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDice3 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Dice4 as StrokeDice4 } from "./stroke/interface/Dice4"
export const Dice4 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDice4 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Dice5 as StrokeDice5 } from "./stroke/interface/Dice5"
export const Dice5 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDice5 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Dice6 as StrokeDice6 } from "./stroke/interface/Dice6"
export const Dice6 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDice6 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Dices as StrokeDices } from "./stroke/interface/Dices"
export const Dices = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDices ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Diff as StrokeDiff } from "./stroke/interface/Diff"
export const Diff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDiff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Disc as StrokeDisc } from "./stroke/interface/Disc"
export const Disc = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDisc ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Disc2 as StrokeDisc2 } from "./stroke/interface/Disc2"
export const Disc2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDisc2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Disc3 as StrokeDisc3 } from "./stroke/interface/Disc3"
export const Disc3 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDisc3 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { DiscAlbum as StrokeDiscAlbum } from "./stroke/interface/DiscAlbum"
export const DiscAlbum = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDiscAlbum ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Divide as StrokeDivide } from "./stroke/interface/Divide"
export const Divide = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDivide ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Dna as StrokeDna } from "./stroke/interface/Dna"
export const Dna = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDna ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { DnaOff as StrokeDnaOff } from "./stroke/interface/DnaOff"
export const DnaOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDnaOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Dock as StrokeDock } from "./stroke/files/Dock"
export const Dock = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDock ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Dog as StrokeDog } from "./stroke/interface/Dog"
export const Dog = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDog ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { DollarSign as StrokeDollarSign } from "./stroke/interface/DollarSign"
export const DollarSign = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDollarSign ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Donut as StrokeDonut } from "./stroke/interface/Donut"
export const Donut = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDonut ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { DoorClosed as StrokeDoorClosed } from "./stroke/interface/DoorClosed"
export const DoorClosed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDoorClosed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { DoorClosedLocked as StrokeDoorClosedLocked } from "./stroke/interface/DoorClosedLocked"
export const DoorClosedLocked = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDoorClosedLocked ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { DoorOpen as StrokeDoorOpen } from "./stroke/interface/DoorOpen"
export const DoorOpen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDoorOpen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Dot as StrokeDot } from "./stroke/interface/Dot"
export const Dot = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDot ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Download as StrokeDownload } from "./stroke/interface/Download"
export const Download = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDownload ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { DraftingCompass as StrokeDraftingCompass } from "./stroke/interface/DraftingCompass"
export const DraftingCompass = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDraftingCompass ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Drama as StrokeDrama } from "./stroke/interface/Drama"
export const Drama = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDrama ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Dribbble as StrokeDribbble } from "./stroke/interface/Dribbble"
export const Dribbble = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDribbble ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Drill as StrokeDrill } from "./stroke/interface/Drill"
export const Drill = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDrill ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Drone as StrokeDrone } from "./stroke/interface/Drone"
export const Drone = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDrone ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Droplet as StrokeDroplet } from "./stroke/interface/Droplet"
export const Droplet = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDroplet ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { DropletOff as StrokeDropletOff } from "./stroke/interface/DropletOff"
export const DropletOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDropletOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Droplets as StrokeDroplets } from "./stroke/interface/Droplets"
export const Droplets = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDroplets ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Drum as StrokeDrum } from "./stroke/interface/Drum"
export const Drum = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDrum ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Drumstick as StrokeDrumstick } from "./stroke/interface/Drumstick"
export const Drumstick = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDrumstick ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Dumbbell as StrokeDumbbell } from "./stroke/interface/Dumbbell"
export const Dumbbell = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeDumbbell ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Ear as StrokeEar } from "./stroke/interface/Ear"
export const Ear = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeEar ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { EarOff as StrokeEarOff } from "./stroke/interface/EarOff"
export const EarOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeEarOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Earth as StrokeEarth } from "./stroke/interface/Earth"
export const Earth = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeEarth ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { EarthLock as StrokeEarthLock } from "./stroke/interface/EarthLock"
export const EarthLock = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeEarthLock ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Eclipse as StrokeEclipse } from "./stroke/interface/Eclipse"
export const Eclipse = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeEclipse ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Egg as StrokeEgg } from "./stroke/interface/Egg"
export const Egg = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeEgg ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { EggFried as StrokeEggFried } from "./stroke/interface/EggFried"
export const EggFried = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeEggFried ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { EggOff as StrokeEggOff } from "./stroke/interface/EggOff"
export const EggOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeEggOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Ellipsis as StrokeEllipsis } from "./stroke/interface/Ellipsis"
export const Ellipsis = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeEllipsis ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { EllipsisVertical as StrokeEllipsisVertical } from "./stroke/interface/EllipsisVertical"
export const EllipsisVertical = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeEllipsisVertical ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Equal as StrokeEqual } from "./stroke/interface/Equal"
export const Equal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeEqual ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { EqualApproximately as StrokeEqualApproximately } from "./stroke/interface/EqualApproximately"
export const EqualApproximately = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeEqualApproximately ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { EqualNot as StrokeEqualNot } from "./stroke/interface/EqualNot"
export const EqualNot = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeEqualNot ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Eraser as StrokeEraser } from "./stroke/interface/Eraser"
export const Eraser = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeEraser ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { EthernetPort as StrokeEthernetPort } from "./stroke/interface/EthernetPort"
export const EthernetPort = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeEthernetPort ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Euro as StrokeEuro } from "./stroke/interface/Euro"
export const Euro = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeEuro ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { EvCharger as StrokeEvCharger } from "./stroke/interface/EvCharger"
export const EvCharger = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeEvCharger ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Expand as StrokeExpand } from "./stroke/interface/Expand"
export const Expand = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeExpand ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ExternalLink as StrokeExternalLink } from "./stroke/interface/ExternalLink"
export const ExternalLink = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeExternalLink ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Eye as StrokeEye } from "./stroke/interface/Eye"
export const Eye = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeEye ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { EyeClosed as StrokeEyeClosed } from "./stroke/interface/EyeClosed"
export const EyeClosed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeEyeClosed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { EyeOff as StrokeEyeOff } from "./stroke/interface/EyeOff"
export const EyeOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeEyeOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Facebook as StrokeFacebook } from "./stroke/interface/Facebook"
export const Facebook = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFacebook ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Factory as StrokeFactory } from "./stroke/interface/Factory"
export const Factory = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFactory ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Fan as StrokeFan } from "./stroke/interface/Fan"
export const Fan = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFan ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FastForward as StrokeFastForward } from "./stroke/interface/FastForward"
export const FastForward = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFastForward ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Feather as StrokeFeather } from "./stroke/interface/Feather"
export const Feather = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFeather ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Fence as StrokeFence } from "./stroke/interface/Fence"
export const Fence = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFence ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FerrisWheel as StrokeFerrisWheel } from "./stroke/interface/FerrisWheel"
export const FerrisWheel = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFerrisWheel ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Figma as StrokeFigma } from "./stroke/interface/Figma"
export const Figma = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFigma ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { File as StrokeFile } from "./stroke/files/File"
export const File = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFile ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileArchive as StrokeFileArchive } from "./stroke/files/FileArchive"
export const FileArchive = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileArchive ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileAudio as StrokeFileAudio } from "./stroke/files/FileAudio"
export const FileAudio = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileAudio ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileAudio2 as StrokeFileAudio2 } from "./stroke/files/FileAudio2"
export const FileAudio2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileAudio2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileAxis3d as StrokeFileAxis3d } from "./stroke/files/FileAxis3d"
export const FileAxis3d = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileAxis3d ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileBadge as StrokeFileBadge } from "./stroke/files/FileBadge"
export const FileBadge = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileBadge ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileBadge2 as StrokeFileBadge2 } from "./stroke/files/FileBadge2"
export const FileBadge2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileBadge2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileBox as StrokeFileBox } from "./stroke/files/FileBox"
export const FileBox = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileBox ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileBraces as StrokeFileBraces } from "./stroke/files/FileBraces"
export const FileBraces = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileBraces ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileBracesCorner as StrokeFileBracesCorner } from "./stroke/files/FileBracesCorner"
export const FileBracesCorner = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileBracesCorner ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileChartColumn as StrokeFileChartColumn } from "./stroke/files/FileChartColumn"
export const FileChartColumn = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileChartColumn ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileChartColumnIncreasing as StrokeFileChartColumnIncreasing } from "./stroke/files/FileChartColumnIncreasing"
export const FileChartColumnIncreasing = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileChartColumnIncreasing ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileChartLine as StrokeFileChartLine } from "./stroke/files/FileChartLine"
export const FileChartLine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileChartLine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileChartPie as StrokeFileChartPie } from "./stroke/files/FileChartPie"
export const FileChartPie = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileChartPie ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileCheck as StrokeFileCheck } from "./stroke/files/FileCheck"
export const FileCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileCheck2 as StrokeFileCheck2 } from "./stroke/files/FileCheck2"
export const FileCheck2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileCheck2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileCheckCorner as StrokeFileCheckCorner } from "./stroke/files/FileCheckCorner"
export const FileCheckCorner = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileCheckCorner ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileClock as StrokeFileClock } from "./stroke/time/FileClock"
export const FileClock = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileClock ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileCode as StrokeFileCode } from "./stroke/files/FileCode"
export const FileCode = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileCode ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileCode2 as StrokeFileCode2 } from "./stroke/files/FileCode2"
export const FileCode2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileCode2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileCodeCorner as StrokeFileCodeCorner } from "./stroke/files/FileCodeCorner"
export const FileCodeCorner = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileCodeCorner ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileCog as StrokeFileCog } from "./stroke/files/FileCog"
export const FileCog = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileCog ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileDiff as StrokeFileDiff } from "./stroke/files/FileDiff"
export const FileDiff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileDiff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileDigit as StrokeFileDigit } from "./stroke/files/FileDigit"
export const FileDigit = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileDigit ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileDown as StrokeFileDown } from "./stroke/files/FileDown"
export const FileDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileExclamationPoint as StrokeFileExclamationPoint } from "./stroke/files/FileExclamationPoint"
export const FileExclamationPoint = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileExclamationPoint ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileHeadphone as StrokeFileHeadphone } from "./stroke/files/FileHeadphone"
export const FileHeadphone = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileHeadphone ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileHeart as StrokeFileHeart } from "./stroke/files/FileHeart"
export const FileHeart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileHeart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileImage as StrokeFileImage } from "./stroke/files/FileImage"
export const FileImage = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileImage ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileInput as StrokeFileInput } from "./stroke/files/FileInput"
export const FileInput = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileInput ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileJson as StrokeFileJson } from "./stroke/files/FileJson"
export const FileJson = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileJson ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileJson2 as StrokeFileJson2 } from "./stroke/files/FileJson2"
export const FileJson2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileJson2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileKey as StrokeFileKey } from "./stroke/files/FileKey"
export const FileKey = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileKey ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileKey2 as StrokeFileKey2 } from "./stroke/files/FileKey2"
export const FileKey2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileKey2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileLock as StrokeFileLock } from "./stroke/files/FileLock"
export const FileLock = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileLock ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileLock2 as StrokeFileLock2 } from "./stroke/files/FileLock2"
export const FileLock2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileLock2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileMinus as StrokeFileMinus } from "./stroke/files/FileMinus"
export const FileMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileMinus2 as StrokeFileMinus2 } from "./stroke/files/FileMinus2"
export const FileMinus2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileMinus2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileMinusCorner as StrokeFileMinusCorner } from "./stroke/files/FileMinusCorner"
export const FileMinusCorner = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileMinusCorner ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileMusic as StrokeFileMusic } from "./stroke/files/FileMusic"
export const FileMusic = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileMusic ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileOutput as StrokeFileOutput } from "./stroke/files/FileOutput"
export const FileOutput = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileOutput ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FilePen as StrokeFilePen } from "./stroke/files/FilePen"
export const FilePen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFilePen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FilePenLine as StrokeFilePenLine } from "./stroke/files/FilePenLine"
export const FilePenLine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFilePenLine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FilePieChart as StrokeFilePieChart } from "./stroke/files/FilePieChart"
export const FilePieChart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFilePieChart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FilePlay as StrokeFilePlay } from "./stroke/media/FilePlay"
export const FilePlay = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFilePlay ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FilePlus as StrokeFilePlus } from "./stroke/files/FilePlus"
export const FilePlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFilePlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FilePlus2 as StrokeFilePlus2 } from "./stroke/files/FilePlus2"
export const FilePlus2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFilePlus2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FilePlusCorner as StrokeFilePlusCorner } from "./stroke/files/FilePlusCorner"
export const FilePlusCorner = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFilePlusCorner ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileQuestionMark as StrokeFileQuestionMark } from "./stroke/files/FileQuestionMark"
export const FileQuestionMark = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileQuestionMark ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileScan as StrokeFileScan } from "./stroke/files/FileScan"
export const FileScan = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileScan ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileSearch as StrokeFileSearch } from "./stroke/files/FileSearch"
export const FileSearch = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileSearch ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileSearch2 as StrokeFileSearch2 } from "./stroke/files/FileSearch2"
export const FileSearch2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileSearch2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileSearchCorner as StrokeFileSearchCorner } from "./stroke/files/FileSearchCorner"
export const FileSearchCorner = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileSearchCorner ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileSignal as StrokeFileSignal } from "./stroke/files/FileSignal"
export const FileSignal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileSignal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileSliders as StrokeFileSliders } from "./stroke/files/FileSliders"
export const FileSliders = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileSliders ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileSpreadsheet as StrokeFileSpreadsheet } from "./stroke/files/FileSpreadsheet"
export const FileSpreadsheet = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileSpreadsheet ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileStack as StrokeFileStack } from "./stroke/files/FileStack"
export const FileStack = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileStack ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileSymlink as StrokeFileSymlink } from "./stroke/files/FileSymlink"
export const FileSymlink = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileSymlink ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileTerminal as StrokeFileTerminal } from "./stroke/files/FileTerminal"
export const FileTerminal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileTerminal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileText as StrokeFileText } from "./stroke/files/FileText"
export const FileText = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileText ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileType as StrokeFileType } from "./stroke/files/FileType"
export const FileType = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileType ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileType2 as StrokeFileType2 } from "./stroke/files/FileType2"
export const FileType2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileType2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileTypeCorner as StrokeFileTypeCorner } from "./stroke/files/FileTypeCorner"
export const FileTypeCorner = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileTypeCorner ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileUp as StrokeFileUp } from "./stroke/files/FileUp"
export const FileUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileUser as StrokeFileUser } from "./stroke/users/FileUser"
export const FileUser = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileUser ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileVideoCamera as StrokeFileVideoCamera } from "./stroke/files/FileVideoCamera"
export const FileVideoCamera = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileVideoCamera ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileVolume as StrokeFileVolume } from "./stroke/files/FileVolume"
export const FileVolume = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileVolume ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileVolume2 as StrokeFileVolume2 } from "./stroke/files/FileVolume2"
export const FileVolume2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileVolume2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileWarning as StrokeFileWarning } from "./stroke/files/FileWarning"
export const FileWarning = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileWarning ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileX as StrokeFileX } from "./stroke/files/FileX"
export const FileX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileX2 as StrokeFileX2 } from "./stroke/files/FileX2"
export const FileX2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileX2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FileXCorner as StrokeFileXCorner } from "./stroke/files/FileXCorner"
export const FileXCorner = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFileXCorner ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Files as StrokeFiles } from "./stroke/files/Files"
export const Files = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFiles ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Film as StrokeFilm } from "./stroke/interface/Film"
export const Film = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFilm ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Filter as StrokeFilter } from "./stroke/tools/Filter"
export const Filter = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFilter ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FilterX as StrokeFilterX } from "./stroke/tools/FilterX"
export const FilterX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFilterX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FingerprintPattern as StrokeFingerprintPattern } from "./stroke/interface/FingerprintPattern"
export const FingerprintPattern = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFingerprintPattern ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FireExtinguisher as StrokeFireExtinguisher } from "./stroke/interface/FireExtinguisher"
export const FireExtinguisher = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFireExtinguisher ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Fish as StrokeFish } from "./stroke/interface/Fish"
export const Fish = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFish ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FishOff as StrokeFishOff } from "./stroke/interface/FishOff"
export const FishOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFishOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FishSymbol as StrokeFishSymbol } from "./stroke/interface/FishSymbol"
export const FishSymbol = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFishSymbol ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FishingHook as StrokeFishingHook } from "./stroke/interface/FishingHook"
export const FishingHook = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFishingHook ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Flag as StrokeFlag } from "./stroke/interface/Flag"
export const Flag = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFlag ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FlagOff as StrokeFlagOff } from "./stroke/interface/FlagOff"
export const FlagOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFlagOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FlagTriangleLeft as StrokeFlagTriangleLeft } from "./stroke/interface/FlagTriangleLeft"
export const FlagTriangleLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFlagTriangleLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FlagTriangleRight as StrokeFlagTriangleRight } from "./stroke/interface/FlagTriangleRight"
export const FlagTriangleRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFlagTriangleRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Flame as StrokeFlame } from "./stroke/interface/Flame"
export const Flame = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFlame ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FlameKindling as StrokeFlameKindling } from "./stroke/interface/FlameKindling"
export const FlameKindling = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFlameKindling ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Flashlight as StrokeFlashlight } from "./stroke/interface/Flashlight"
export const Flashlight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFlashlight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FlashlightOff as StrokeFlashlightOff } from "./stroke/interface/FlashlightOff"
export const FlashlightOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFlashlightOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FlaskConical as StrokeFlaskConical } from "./stroke/interface/FlaskConical"
export const FlaskConical = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFlaskConical ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FlaskConicalOff as StrokeFlaskConicalOff } from "./stroke/interface/FlaskConicalOff"
export const FlaskConicalOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFlaskConicalOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FlaskRound as StrokeFlaskRound } from "./stroke/interface/FlaskRound"
export const FlaskRound = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFlaskRound ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FlipHorizontal2 as StrokeFlipHorizontal2 } from "./stroke/interface/FlipHorizontal2"
export const FlipHorizontal2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFlipHorizontal2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FlipVertical2 as StrokeFlipVertical2 } from "./stroke/interface/FlipVertical2"
export const FlipVertical2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFlipVertical2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Flower as StrokeFlower } from "./stroke/interface/Flower"
export const Flower = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFlower ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Flower2 as StrokeFlower2 } from "./stroke/interface/Flower2"
export const Flower2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFlower2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Focus as StrokeFocus } from "./stroke/interface/Focus"
export const Focus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFocus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FoldHorizontal as StrokeFoldHorizontal } from "./stroke/interface/FoldHorizontal"
export const FoldHorizontal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFoldHorizontal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FoldVertical as StrokeFoldVertical } from "./stroke/interface/FoldVertical"
export const FoldVertical = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFoldVertical ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Folder as StrokeFolder } from "./stroke/files/Folder"
export const Folder = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolder ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderArchive as StrokeFolderArchive } from "./stroke/files/FolderArchive"
export const FolderArchive = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderArchive ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderCheck as StrokeFolderCheck } from "./stroke/files/FolderCheck"
export const FolderCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderClock as StrokeFolderClock } from "./stroke/time/FolderClock"
export const FolderClock = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderClock ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderClosed as StrokeFolderClosed } from "./stroke/files/FolderClosed"
export const FolderClosed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderClosed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderCode as StrokeFolderCode } from "./stroke/files/FolderCode"
export const FolderCode = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderCode ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderCog as StrokeFolderCog } from "./stroke/files/FolderCog"
export const FolderCog = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderCog ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderDot as StrokeFolderDot } from "./stroke/files/FolderDot"
export const FolderDot = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderDot ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderDown as StrokeFolderDown } from "./stroke/files/FolderDown"
export const FolderDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderGit as StrokeFolderGit } from "./stroke/files/FolderGit"
export const FolderGit = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderGit ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderGit2 as StrokeFolderGit2 } from "./stroke/files/FolderGit2"
export const FolderGit2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderGit2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderHeart as StrokeFolderHeart } from "./stroke/files/FolderHeart"
export const FolderHeart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderHeart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderInput as StrokeFolderInput } from "./stroke/files/FolderInput"
export const FolderInput = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderInput ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderKanban as StrokeFolderKanban } from "./stroke/files/FolderKanban"
export const FolderKanban = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderKanban ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderKey as StrokeFolderKey } from "./stroke/files/FolderKey"
export const FolderKey = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderKey ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderLock as StrokeFolderLock } from "./stroke/files/FolderLock"
export const FolderLock = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderLock ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderMinus as StrokeFolderMinus } from "./stroke/files/FolderMinus"
export const FolderMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderOpen as StrokeFolderOpen } from "./stroke/files/FolderOpen"
export const FolderOpen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderOpen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderOpenDot as StrokeFolderOpenDot } from "./stroke/files/FolderOpenDot"
export const FolderOpenDot = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderOpenDot ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderOutput as StrokeFolderOutput } from "./stroke/files/FolderOutput"
export const FolderOutput = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderOutput ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderPen as StrokeFolderPen } from "./stroke/files/FolderPen"
export const FolderPen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderPen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderPlus as StrokeFolderPlus } from "./stroke/files/FolderPlus"
export const FolderPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderRoot as StrokeFolderRoot } from "./stroke/files/FolderRoot"
export const FolderRoot = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderRoot ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderSearch as StrokeFolderSearch } from "./stroke/files/FolderSearch"
export const FolderSearch = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderSearch ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderSearch2 as StrokeFolderSearch2 } from "./stroke/files/FolderSearch2"
export const FolderSearch2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderSearch2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderSymlink as StrokeFolderSymlink } from "./stroke/files/FolderSymlink"
export const FolderSymlink = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderSymlink ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderSync as StrokeFolderSync } from "./stroke/files/FolderSync"
export const FolderSync = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderSync ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderTree as StrokeFolderTree } from "./stroke/files/FolderTree"
export const FolderTree = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderTree ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderUp as StrokeFolderUp } from "./stroke/files/FolderUp"
export const FolderUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FolderX as StrokeFolderX } from "./stroke/files/FolderX"
export const FolderX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolderX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Folders as StrokeFolders } from "./stroke/files/Folders"
export const Folders = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFolders ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Footprints as StrokeFootprints } from "./stroke/interface/Footprints"
export const Footprints = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFootprints ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Forklift as StrokeForklift } from "./stroke/interface/Forklift"
export const Forklift = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeForklift ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Form as StrokeForm } from "./stroke/interface/Form"
export const Form = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeForm ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Forward as StrokeForward } from "./stroke/interface/Forward"
export const Forward = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeForward ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Frame as StrokeFrame } from "./stroke/interface/Frame"
export const Frame = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFrame ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Framer as StrokeFramer } from "./stroke/interface/Framer"
export const Framer = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFramer ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Frown as StrokeFrown } from "./stroke/interface/Frown"
export const Frown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFrown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Fuel as StrokeFuel } from "./stroke/interface/Fuel"
export const Fuel = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFuel ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Fullscreen as StrokeFullscreen } from "./stroke/interface/Fullscreen"
export const Fullscreen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFullscreen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Funnel as StrokeFunnel } from "./stroke/interface/Funnel"
export const Funnel = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFunnel ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FunnelPlus as StrokeFunnelPlus } from "./stroke/interface/FunnelPlus"
export const FunnelPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFunnelPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { FunnelX as StrokeFunnelX } from "./stroke/interface/FunnelX"
export const FunnelX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeFunnelX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GalleryHorizontal as StrokeGalleryHorizontal } from "./stroke/interface/GalleryHorizontal"
export const GalleryHorizontal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGalleryHorizontal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GalleryHorizontalEnd as StrokeGalleryHorizontalEnd } from "./stroke/interface/GalleryHorizontalEnd"
export const GalleryHorizontalEnd = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGalleryHorizontalEnd ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GalleryThumbnails as StrokeGalleryThumbnails } from "./stroke/interface/GalleryThumbnails"
export const GalleryThumbnails = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGalleryThumbnails ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GalleryVertical as StrokeGalleryVertical } from "./stroke/interface/GalleryVertical"
export const GalleryVertical = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGalleryVertical ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GalleryVerticalEnd as StrokeGalleryVerticalEnd } from "./stroke/interface/GalleryVerticalEnd"
export const GalleryVerticalEnd = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGalleryVerticalEnd ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Gamepad as StrokeGamepad } from "./stroke/interface/Gamepad"
export const Gamepad = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGamepad ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Gamepad2 as StrokeGamepad2 } from "./stroke/interface/Gamepad2"
export const Gamepad2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGamepad2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GamepadDirectional as StrokeGamepadDirectional } from "./stroke/interface/GamepadDirectional"
export const GamepadDirectional = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGamepadDirectional ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Gauge as StrokeGauge } from "./stroke/interface/Gauge"
export const Gauge = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGauge ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Gavel as StrokeGavel } from "./stroke/interface/Gavel"
export const Gavel = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGavel ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Gem as StrokeGem } from "./stroke/interface/Gem"
export const Gem = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGem ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GeorgianLari as StrokeGeorgianLari } from "./stroke/interface/GeorgianLari"
export const GeorgianLari = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGeorgianLari ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Ghost as StrokeGhost } from "./stroke/interface/Ghost"
export const Ghost = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGhost ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Gift as StrokeGift } from "./stroke/interface/Gift"
export const Gift = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGift ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GitBranch as StrokeGitBranch } from "./stroke/interface/GitBranch"
export const GitBranch = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGitBranch ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GitBranchMinus as StrokeGitBranchMinus } from "./stroke/interface/GitBranchMinus"
export const GitBranchMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGitBranchMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GitBranchPlus as StrokeGitBranchPlus } from "./stroke/interface/GitBranchPlus"
export const GitBranchPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGitBranchPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GitCommitHorizontal as StrokeGitCommitHorizontal } from "./stroke/interface/GitCommitHorizontal"
export const GitCommitHorizontal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGitCommitHorizontal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GitCommitVertical as StrokeGitCommitVertical } from "./stroke/interface/GitCommitVertical"
export const GitCommitVertical = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGitCommitVertical ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GitCompare as StrokeGitCompare } from "./stroke/interface/GitCompare"
export const GitCompare = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGitCompare ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GitCompareArrows as StrokeGitCompareArrows } from "./stroke/arrows/GitCompareArrows"
export const GitCompareArrows = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGitCompareArrows ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GitFork as StrokeGitFork } from "./stroke/interface/GitFork"
export const GitFork = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGitFork ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GitGraph as StrokeGitGraph } from "./stroke/interface/GitGraph"
export const GitGraph = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGitGraph ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GitMerge as StrokeGitMerge } from "./stroke/interface/GitMerge"
export const GitMerge = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGitMerge ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GitMergeConflict as StrokeGitMergeConflict } from "./stroke/interface/GitMergeConflict"
export const GitMergeConflict = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGitMergeConflict ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GitPullRequest as StrokeGitPullRequest } from "./stroke/interface/GitPullRequest"
export const GitPullRequest = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGitPullRequest ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GitPullRequestArrow as StrokeGitPullRequestArrow } from "./stroke/arrows/GitPullRequestArrow"
export const GitPullRequestArrow = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGitPullRequestArrow ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GitPullRequestClosed as StrokeGitPullRequestClosed } from "./stroke/interface/GitPullRequestClosed"
export const GitPullRequestClosed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGitPullRequestClosed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GitPullRequestCreate as StrokeGitPullRequestCreate } from "./stroke/interface/GitPullRequestCreate"
export const GitPullRequestCreate = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGitPullRequestCreate ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GitPullRequestCreateArrow as StrokeGitPullRequestCreateArrow } from "./stroke/arrows/GitPullRequestCreateArrow"
export const GitPullRequestCreateArrow = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGitPullRequestCreateArrow ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GitPullRequestDraft as StrokeGitPullRequestDraft } from "./stroke/interface/GitPullRequestDraft"
export const GitPullRequestDraft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGitPullRequestDraft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Github as StrokeGithub } from "./stroke/interface/Github"
export const Github = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGithub ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Gitlab as StrokeGitlab } from "./stroke/interface/Gitlab"
export const Gitlab = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGitlab ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GlassWater as StrokeGlassWater } from "./stroke/interface/GlassWater"
export const GlassWater = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGlassWater ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Glasses as StrokeGlasses } from "./stroke/interface/Glasses"
export const Glasses = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGlasses ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Globe as StrokeGlobe } from "./stroke/interface/Globe"
export const Globe = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGlobe ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GlobeLock as StrokeGlobeLock } from "./stroke/interface/GlobeLock"
export const GlobeLock = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGlobeLock ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GlobeOff as StrokeGlobeOff } from "./stroke/interface/GlobeOff"
export const GlobeOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGlobeOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GlobeX as StrokeGlobeX } from "./stroke/interface/GlobeX"
export const GlobeX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGlobeX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Goal as StrokeGoal } from "./stroke/interface/Goal"
export const Goal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGoal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Gpu as StrokeGpu } from "./stroke/interface/Gpu"
export const Gpu = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGpu ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GraduationCap as StrokeGraduationCap } from "./stroke/interface/GraduationCap"
export const GraduationCap = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGraduationCap ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Grape as StrokeGrape } from "./stroke/interface/Grape"
export const Grape = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGrape ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Grid2x2 as StrokeGrid2x2 } from "./stroke/interface/Grid2x2"
export const Grid2x2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGrid2x2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Grid2x2Check as StrokeGrid2x2Check } from "./stroke/interface/Grid2x2Check"
export const Grid2x2Check = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGrid2x2Check ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Grid2x2Plus as StrokeGrid2x2Plus } from "./stroke/interface/Grid2x2Plus"
export const Grid2x2Plus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGrid2x2Plus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Grid2x2X as StrokeGrid2x2X } from "./stroke/interface/Grid2x2X"
export const Grid2x2X = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGrid2x2X ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Grid3x2 as StrokeGrid3x2 } from "./stroke/interface/Grid3x2"
export const Grid3x2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGrid3x2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Grid3x3 as StrokeGrid3x3 } from "./stroke/interface/Grid3x3"
export const Grid3x3 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGrid3x3 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Grip as StrokeGrip } from "./stroke/interface/Grip"
export const Grip = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGrip ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GripHorizontal as StrokeGripHorizontal } from "./stroke/interface/GripHorizontal"
export const GripHorizontal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGripHorizontal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { GripVertical as StrokeGripVertical } from "./stroke/interface/GripVertical"
export const GripVertical = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGripVertical ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Group as StrokeGroup } from "./stroke/interface/Group"
export const Group = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGroup ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Guitar as StrokeGuitar } from "./stroke/interface/Guitar"
export const Guitar = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeGuitar ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Ham as StrokeHam } from "./stroke/interface/Ham"
export const Ham = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHam ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Hamburger as StrokeHamburger } from "./stroke/interface/Hamburger"
export const Hamburger = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHamburger ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Hammer as StrokeHammer } from "./stroke/interface/Hammer"
export const Hammer = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHammer ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Hand as StrokeHand } from "./stroke/interface/Hand"
export const Hand = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHand ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HandCoins as StrokeHandCoins } from "./stroke/interface/HandCoins"
export const HandCoins = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHandCoins ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HandFist as StrokeHandFist } from "./stroke/interface/HandFist"
export const HandFist = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHandFist ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HandGrab as StrokeHandGrab } from "./stroke/interface/HandGrab"
export const HandGrab = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHandGrab ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HandHeart as StrokeHandHeart } from "./stroke/favorites/HandHeart"
export const HandHeart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHandHeart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HandHelping as StrokeHandHelping } from "./stroke/interface/HandHelping"
export const HandHelping = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHandHelping ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HandMetal as StrokeHandMetal } from "./stroke/interface/HandMetal"
export const HandMetal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHandMetal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HandPlatter as StrokeHandPlatter } from "./stroke/interface/HandPlatter"
export const HandPlatter = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHandPlatter ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Handbag as StrokeHandbag } from "./stroke/interface/Handbag"
export const Handbag = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHandbag ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Handshake as StrokeHandshake } from "./stroke/interface/Handshake"
export const Handshake = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHandshake ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HardDrive as StrokeHardDrive } from "./stroke/interface/HardDrive"
export const HardDrive = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHardDrive ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HardDriveDownload as StrokeHardDriveDownload } from "./stroke/interface/HardDriveDownload"
export const HardDriveDownload = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHardDriveDownload ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HardDriveUpload as StrokeHardDriveUpload } from "./stroke/interface/HardDriveUpload"
export const HardDriveUpload = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHardDriveUpload ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HardHat as StrokeHardHat } from "./stroke/interface/HardHat"
export const HardHat = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHardHat ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Hash as StrokeHash } from "./stroke/interface/Hash"
export const Hash = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHash ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HatGlasses as StrokeHatGlasses } from "./stroke/interface/HatGlasses"
export const HatGlasses = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHatGlasses ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Haze as StrokeHaze } from "./stroke/interface/Haze"
export const Haze = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHaze ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Hd as StrokeHd } from "./stroke/interface/Hd"
export const Hd = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHd ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HdmiPort as StrokeHdmiPort } from "./stroke/interface/HdmiPort"
export const HdmiPort = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHdmiPort ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Heading as StrokeHeading } from "./stroke/interface/Heading"
export const Heading = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHeading ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Heading1 as StrokeHeading1 } from "./stroke/interface/Heading1"
export const Heading1 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHeading1 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Heading2 as StrokeHeading2 } from "./stroke/interface/Heading2"
export const Heading2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHeading2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Heading3 as StrokeHeading3 } from "./stroke/interface/Heading3"
export const Heading3 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHeading3 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Heading4 as StrokeHeading4 } from "./stroke/interface/Heading4"
export const Heading4 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHeading4 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Heading5 as StrokeHeading5 } from "./stroke/interface/Heading5"
export const Heading5 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHeading5 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Heading6 as StrokeHeading6 } from "./stroke/interface/Heading6"
export const Heading6 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHeading6 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HeadphoneOff as StrokeHeadphoneOff } from "./stroke/interface/HeadphoneOff"
export const HeadphoneOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHeadphoneOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Headphones as StrokeHeadphones } from "./stroke/interface/Headphones"
export const Headphones = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHeadphones ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Headset as StrokeHeadset } from "./stroke/interface/Headset"
export const Headset = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHeadset ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Heart as StrokeHeart } from "./stroke/favorites/Heart"
export const Heart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHeart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HeartCrack as StrokeHeartCrack } from "./stroke/favorites/HeartCrack"
export const HeartCrack = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHeartCrack ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HeartHandshake as StrokeHeartHandshake } from "./stroke/favorites/HeartHandshake"
export const HeartHandshake = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHeartHandshake ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HeartMinus as StrokeHeartMinus } from "./stroke/favorites/HeartMinus"
export const HeartMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHeartMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HeartOff as StrokeHeartOff } from "./stroke/favorites/HeartOff"
export const HeartOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHeartOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HeartPlus as StrokeHeartPlus } from "./stroke/favorites/HeartPlus"
export const HeartPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHeartPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HeartPulse as StrokeHeartPulse } from "./stroke/favorites/HeartPulse"
export const HeartPulse = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHeartPulse ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Heater as StrokeHeater } from "./stroke/interface/Heater"
export const Heater = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHeater ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Helicopter as StrokeHelicopter } from "./stroke/interface/Helicopter"
export const Helicopter = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHelicopter ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Hexagon as StrokeHexagon } from "./stroke/interface/Hexagon"
export const Hexagon = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHexagon ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Highlighter as StrokeHighlighter } from "./stroke/interface/Highlighter"
export const Highlighter = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHighlighter ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { History as StrokeHistory } from "./stroke/interface/History"
export const History = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHistory ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Hop as StrokeHop } from "./stroke/interface/Hop"
export const Hop = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHop ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HopOff as StrokeHopOff } from "./stroke/interface/HopOff"
export const HopOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHopOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Hospital as StrokeHospital } from "./stroke/interface/Hospital"
export const Hospital = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHospital ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Hotel as StrokeHotel } from "./stroke/interface/Hotel"
export const Hotel = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHotel ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Hourglass as StrokeHourglass } from "./stroke/interface/Hourglass"
export const Hourglass = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHourglass ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { House as StrokeHouse } from "./stroke/interface/House"
export const House = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHouse ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HouseHeart as StrokeHouseHeart } from "./stroke/favorites/HouseHeart"
export const HouseHeart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHouseHeart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HousePlug as StrokeHousePlug } from "./stroke/interface/HousePlug"
export const HousePlug = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHousePlug ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HousePlus as StrokeHousePlus } from "./stroke/interface/HousePlus"
export const HousePlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHousePlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { HouseWifi as StrokeHouseWifi } from "./stroke/interface/HouseWifi"
export const HouseWifi = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeHouseWifi ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { IceCreamBowl as StrokeIceCreamBowl } from "./stroke/interface/IceCreamBowl"
export const IceCreamBowl = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeIceCreamBowl ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { IceCreamCone as StrokeIceCreamCone } from "./stroke/interface/IceCreamCone"
export const IceCreamCone = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeIceCreamCone ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { IdCard as StrokeIdCard } from "./stroke/interface/IdCard"
export const IdCard = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeIdCard ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { IdCardLanyard as StrokeIdCardLanyard } from "./stroke/interface/IdCardLanyard"
export const IdCardLanyard = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeIdCardLanyard ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Image as StrokeImage } from "./stroke/interface/Image"
export const Image = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeImage ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ImageDown as StrokeImageDown } from "./stroke/interface/ImageDown"
export const ImageDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeImageDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ImageMinus as StrokeImageMinus } from "./stroke/interface/ImageMinus"
export const ImageMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeImageMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ImageOff as StrokeImageOff } from "./stroke/interface/ImageOff"
export const ImageOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeImageOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ImagePlay as StrokeImagePlay } from "./stroke/media/ImagePlay"
export const ImagePlay = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeImagePlay ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ImagePlus as StrokeImagePlus } from "./stroke/interface/ImagePlus"
export const ImagePlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeImagePlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ImageUp as StrokeImageUp } from "./stroke/interface/ImageUp"
export const ImageUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeImageUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ImageUpscale as StrokeImageUpscale } from "./stroke/interface/ImageUpscale"
export const ImageUpscale = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeImageUpscale ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Images as StrokeImages } from "./stroke/interface/Images"
export const Images = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeImages ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Import as StrokeImport } from "./stroke/interface/Import"
export const Import = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeImport ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Inbox as StrokeInbox } from "./stroke/communication/Inbox"
export const Inbox = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeInbox ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { IndentDecrease as StrokeIndentDecrease } from "./stroke/interface/IndentDecrease"
export const IndentDecrease = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeIndentDecrease ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { IndentIncrease as StrokeIndentIncrease } from "./stroke/interface/IndentIncrease"
export const IndentIncrease = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeIndentIncrease ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { IndianRupee as StrokeIndianRupee } from "./stroke/interface/IndianRupee"
export const IndianRupee = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeIndianRupee ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Infinity as StrokeInfinity } from "./stroke/interface/Infinity"
export const Infinity = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeInfinity ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Info as StrokeInfo } from "./stroke/interface/Info"
export const Info = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeInfo ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { InspectionPanel as StrokeInspectionPanel } from "./stroke/interface/InspectionPanel"
export const InspectionPanel = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeInspectionPanel ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Instagram as StrokeInstagram } from "./stroke/interface/Instagram"
export const Instagram = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeInstagram ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Italic as StrokeItalic } from "./stroke/interface/Italic"
export const Italic = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeItalic ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { IterationCcw as StrokeIterationCcw } from "./stroke/interface/IterationCcw"
export const IterationCcw = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeIterationCcw ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { IterationCw as StrokeIterationCw } from "./stroke/interface/IterationCw"
export const IterationCw = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeIterationCw ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { JapaneseYen as StrokeJapaneseYen } from "./stroke/interface/JapaneseYen"
export const JapaneseYen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeJapaneseYen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Joystick as StrokeJoystick } from "./stroke/interface/Joystick"
export const Joystick = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeJoystick ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Kanban as StrokeKanban } from "./stroke/interface/Kanban"
export const Kanban = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeKanban ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Kayak as StrokeKayak } from "./stroke/interface/Kayak"
export const Kayak = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeKayak ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Key as StrokeKey } from "./stroke/interface/Key"
export const Key = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeKey ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { KeyRound as StrokeKeyRound } from "./stroke/interface/KeyRound"
export const KeyRound = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeKeyRound ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { KeySquare as StrokeKeySquare } from "./stroke/interface/KeySquare"
export const KeySquare = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeKeySquare ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Keyboard as StrokeKeyboard } from "./stroke/interface/Keyboard"
export const Keyboard = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeKeyboard ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { KeyboardMusic as StrokeKeyboardMusic } from "./stroke/interface/KeyboardMusic"
export const KeyboardMusic = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeKeyboardMusic ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { KeyboardOff as StrokeKeyboardOff } from "./stroke/interface/KeyboardOff"
export const KeyboardOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeKeyboardOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Lamp as StrokeLamp } from "./stroke/interface/Lamp"
export const Lamp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLamp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LampCeiling as StrokeLampCeiling } from "./stroke/interface/LampCeiling"
export const LampCeiling = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLampCeiling ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LampDesk as StrokeLampDesk } from "./stroke/interface/LampDesk"
export const LampDesk = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLampDesk ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LampFloor as StrokeLampFloor } from "./stroke/interface/LampFloor"
export const LampFloor = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLampFloor ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LampWallDown as StrokeLampWallDown } from "./stroke/interface/LampWallDown"
export const LampWallDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLampWallDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LampWallUp as StrokeLampWallUp } from "./stroke/interface/LampWallUp"
export const LampWallUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLampWallUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LandPlot as StrokeLandPlot } from "./stroke/interface/LandPlot"
export const LandPlot = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLandPlot ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Landmark as StrokeLandmark } from "./stroke/interface/Landmark"
export const Landmark = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLandmark ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Languages as StrokeLanguages } from "./stroke/interface/Languages"
export const Languages = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLanguages ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Laptop as StrokeLaptop } from "./stroke/interface/Laptop"
export const Laptop = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLaptop ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LaptopMinimal as StrokeLaptopMinimal } from "./stroke/interface/LaptopMinimal"
export const LaptopMinimal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLaptopMinimal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LaptopMinimalCheck as StrokeLaptopMinimalCheck } from "./stroke/interface/LaptopMinimalCheck"
export const LaptopMinimalCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLaptopMinimalCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Lasso as StrokeLasso } from "./stroke/interface/Lasso"
export const Lasso = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLasso ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LassoSelect as StrokeLassoSelect } from "./stroke/interface/LassoSelect"
export const LassoSelect = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLassoSelect ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Laugh as StrokeLaugh } from "./stroke/interface/Laugh"
export const Laugh = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLaugh ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Layers as StrokeLayers } from "./stroke/interface/Layers"
export const Layers = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLayers ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Layers2 as StrokeLayers2 } from "./stroke/interface/Layers2"
export const Layers2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLayers2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Layers3 as StrokeLayers3 } from "./stroke/interface/Layers3"
export const Layers3 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLayers3 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LayersPlus as StrokeLayersPlus } from "./stroke/interface/LayersPlus"
export const LayersPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLayersPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LayoutDashboard as StrokeLayoutDashboard } from "./stroke/interface/LayoutDashboard"
export const LayoutDashboard = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLayoutDashboard ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LayoutGrid as StrokeLayoutGrid } from "./stroke/interface/LayoutGrid"
export const LayoutGrid = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLayoutGrid ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LayoutList as StrokeLayoutList } from "./stroke/interface/LayoutList"
export const LayoutList = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLayoutList ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LayoutPanelLeft as StrokeLayoutPanelLeft } from "./stroke/interface/LayoutPanelLeft"
export const LayoutPanelLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLayoutPanelLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LayoutPanelTop as StrokeLayoutPanelTop } from "./stroke/interface/LayoutPanelTop"
export const LayoutPanelTop = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLayoutPanelTop ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LayoutTemplate as StrokeLayoutTemplate } from "./stroke/interface/LayoutTemplate"
export const LayoutTemplate = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLayoutTemplate ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Leaf as StrokeLeaf } from "./stroke/interface/Leaf"
export const Leaf = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLeaf ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LeafyGreen as StrokeLeafyGreen } from "./stroke/interface/LeafyGreen"
export const LeafyGreen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLeafyGreen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Lectern as StrokeLectern } from "./stroke/interface/Lectern"
export const Lectern = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLectern ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LensConcave as StrokeLensConcave } from "./stroke/interface/LensConcave"
export const LensConcave = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLensConcave ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LensConvex as StrokeLensConvex } from "./stroke/interface/LensConvex"
export const LensConvex = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLensConvex ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LetterText as StrokeLetterText } from "./stroke/interface/LetterText"
export const LetterText = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLetterText ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Library as StrokeLibrary } from "./stroke/interface/Library"
export const Library = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLibrary ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LibraryBig as StrokeLibraryBig } from "./stroke/interface/LibraryBig"
export const LibraryBig = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLibraryBig ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LifeBuoy as StrokeLifeBuoy } from "./stroke/interface/LifeBuoy"
export const LifeBuoy = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLifeBuoy ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Ligature as StrokeLigature } from "./stroke/interface/Ligature"
export const Ligature = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLigature ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Lightbulb as StrokeLightbulb } from "./stroke/interface/Lightbulb"
export const Lightbulb = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLightbulb ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LightbulbOff as StrokeLightbulbOff } from "./stroke/interface/LightbulbOff"
export const LightbulbOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLightbulbOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LineChart as StrokeLineChart } from "./stroke/interface/LineChart"
export const LineChart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLineChart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LineDotRightHorizontal as StrokeLineDotRightHorizontal } from "./stroke/interface/LineDotRightHorizontal"
export const LineDotRightHorizontal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLineDotRightHorizontal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LineSquiggle as StrokeLineSquiggle } from "./stroke/interface/LineSquiggle"
export const LineSquiggle = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLineSquiggle ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Link as StrokeLink } from "./stroke/interface/Link"
export const Link = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLink ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Link2 as StrokeLink2 } from "./stroke/interface/Link2"
export const Link2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLink2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Link2Off as StrokeLink2Off } from "./stroke/interface/Link2Off"
export const Link2Off = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLink2Off ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Linkedin as StrokeLinkedin } from "./stroke/interface/Linkedin"
export const Linkedin = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLinkedin ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { List as StrokeList } from "./stroke/interface/List"
export const List = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeList ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ListCheck as StrokeListCheck } from "./stroke/interface/ListCheck"
export const ListCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeListCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ListChecks as StrokeListChecks } from "./stroke/interface/ListChecks"
export const ListChecks = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeListChecks ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ListChevronsDownUp as StrokeListChevronsDownUp } from "./stroke/interface/ListChevronsDownUp"
export const ListChevronsDownUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeListChevronsDownUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ListChevronsUpDown as StrokeListChevronsUpDown } from "./stroke/interface/ListChevronsUpDown"
export const ListChevronsUpDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeListChevronsUpDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ListCollapse as StrokeListCollapse } from "./stroke/interface/ListCollapse"
export const ListCollapse = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeListCollapse ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ListEnd as StrokeListEnd } from "./stroke/interface/ListEnd"
export const ListEnd = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeListEnd ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ListFilter as StrokeListFilter } from "./stroke/tools/ListFilter"
export const ListFilter = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeListFilter ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ListFilterPlus as StrokeListFilterPlus } from "./stroke/tools/ListFilterPlus"
export const ListFilterPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeListFilterPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ListIndentDecrease as StrokeListIndentDecrease } from "./stroke/interface/ListIndentDecrease"
export const ListIndentDecrease = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeListIndentDecrease ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ListIndentIncrease as StrokeListIndentIncrease } from "./stroke/interface/ListIndentIncrease"
export const ListIndentIncrease = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeListIndentIncrease ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ListMinus as StrokeListMinus } from "./stroke/interface/ListMinus"
export const ListMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeListMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ListMusic as StrokeListMusic } from "./stroke/interface/ListMusic"
export const ListMusic = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeListMusic ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ListOrdered as StrokeListOrdered } from "./stroke/interface/ListOrdered"
export const ListOrdered = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeListOrdered ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ListPlus as StrokeListPlus } from "./stroke/interface/ListPlus"
export const ListPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeListPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ListRestart as StrokeListRestart } from "./stroke/favorites/ListRestart"
export const ListRestart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeListRestart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ListStart as StrokeListStart } from "./stroke/favorites/ListStart"
export const ListStart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeListStart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ListTodo as StrokeListTodo } from "./stroke/interface/ListTodo"
export const ListTodo = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeListTodo ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ListTree as StrokeListTree } from "./stroke/interface/ListTree"
export const ListTree = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeListTree ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ListVideo as StrokeListVideo } from "./stroke/interface/ListVideo"
export const ListVideo = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeListVideo ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ListX as StrokeListX } from "./stroke/interface/ListX"
export const ListX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeListX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Loader as StrokeLoader } from "./stroke/interface/Loader"
export const Loader = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLoader ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LoaderCircle as StrokeLoaderCircle } from "./stroke/interface/LoaderCircle"
export const LoaderCircle = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLoaderCircle ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LoaderPinwheel as StrokeLoaderPinwheel } from "./stroke/interface/LoaderPinwheel"
export const LoaderPinwheel = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLoaderPinwheel ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Locate as StrokeLocate } from "./stroke/interface/Locate"
export const Locate = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLocate ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LocateFixed as StrokeLocateFixed } from "./stroke/interface/LocateFixed"
export const LocateFixed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLocateFixed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LocateOff as StrokeLocateOff } from "./stroke/interface/LocateOff"
export const LocateOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLocateOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Lock as StrokeLock } from "./stroke/interface/Lock"
export const Lock = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLock ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LockKeyhole as StrokeLockKeyhole } from "./stroke/interface/LockKeyhole"
export const LockKeyhole = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLockKeyhole ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LockKeyholeOpen as StrokeLockKeyholeOpen } from "./stroke/interface/LockKeyholeOpen"
export const LockKeyholeOpen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLockKeyholeOpen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LockOpen as StrokeLockOpen } from "./stroke/interface/LockOpen"
export const LockOpen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLockOpen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LogIn as StrokeLogIn } from "./stroke/interface/LogIn"
export const LogIn = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLogIn ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { LogOut as StrokeLogOut } from "./stroke/interface/LogOut"
export const LogOut = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLogOut ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Logs as StrokeLogs } from "./stroke/interface/Logs"
export const Logs = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLogs ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Lollipop as StrokeLollipop } from "./stroke/interface/Lollipop"
export const Lollipop = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLollipop ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Luggage as StrokeLuggage } from "./stroke/interface/Luggage"
export const Luggage = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeLuggage ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Magnet as StrokeMagnet } from "./stroke/interface/Magnet"
export const Magnet = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMagnet ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Mail as StrokeMail } from "./stroke/communication/Mail"
export const Mail = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMail ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MailCheck as StrokeMailCheck } from "./stroke/communication/MailCheck"
export const MailCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMailCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MailMinus as StrokeMailMinus } from "./stroke/communication/MailMinus"
export const MailMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMailMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MailOpen as StrokeMailOpen } from "./stroke/communication/MailOpen"
export const MailOpen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMailOpen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MailPlus as StrokeMailPlus } from "./stroke/communication/MailPlus"
export const MailPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMailPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MailQuestionMark as StrokeMailQuestionMark } from "./stroke/communication/MailQuestionMark"
export const MailQuestionMark = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMailQuestionMark ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MailSearch as StrokeMailSearch } from "./stroke/communication/MailSearch"
export const MailSearch = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMailSearch ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MailWarning as StrokeMailWarning } from "./stroke/communication/MailWarning"
export const MailWarning = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMailWarning ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MailX as StrokeMailX } from "./stroke/communication/MailX"
export const MailX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMailX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Mailbox as StrokeMailbox } from "./stroke/communication/Mailbox"
export const Mailbox = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMailbox ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Mails as StrokeMails } from "./stroke/communication/Mails"
export const Mails = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMails ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Map as StrokeMap } from "./stroke/interface/Map"
export const Map = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMap ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MapMinus as StrokeMapMinus } from "./stroke/interface/MapMinus"
export const MapMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMapMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MapPin as StrokeMapPin } from "./stroke/interface/MapPin"
export const MapPin = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMapPin ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MapPinCheck as StrokeMapPinCheck } from "./stroke/interface/MapPinCheck"
export const MapPinCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMapPinCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MapPinCheckInside as StrokeMapPinCheckInside } from "./stroke/interface/MapPinCheckInside"
export const MapPinCheckInside = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMapPinCheckInside ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MapPinHouse as StrokeMapPinHouse } from "./stroke/interface/MapPinHouse"
export const MapPinHouse = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMapPinHouse ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MapPinMinus as StrokeMapPinMinus } from "./stroke/interface/MapPinMinus"
export const MapPinMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMapPinMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MapPinMinusInside as StrokeMapPinMinusInside } from "./stroke/interface/MapPinMinusInside"
export const MapPinMinusInside = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMapPinMinusInside ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MapPinOff as StrokeMapPinOff } from "./stroke/interface/MapPinOff"
export const MapPinOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMapPinOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MapPinPen as StrokeMapPinPen } from "./stroke/interface/MapPinPen"
export const MapPinPen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMapPinPen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MapPinPlus as StrokeMapPinPlus } from "./stroke/interface/MapPinPlus"
export const MapPinPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMapPinPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MapPinPlusInside as StrokeMapPinPlusInside } from "./stroke/interface/MapPinPlusInside"
export const MapPinPlusInside = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMapPinPlusInside ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MapPinX as StrokeMapPinX } from "./stroke/interface/MapPinX"
export const MapPinX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMapPinX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MapPinXInside as StrokeMapPinXInside } from "./stroke/interface/MapPinXInside"
export const MapPinXInside = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMapPinXInside ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MapPinned as StrokeMapPinned } from "./stroke/interface/MapPinned"
export const MapPinned = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMapPinned ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MapPlus as StrokeMapPlus } from "./stroke/interface/MapPlus"
export const MapPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMapPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Mars as StrokeMars } from "./stroke/interface/Mars"
export const Mars = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMars ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MarsStroke as StrokeMarsStroke } from "./stroke/interface/MarsStroke"
export const MarsStroke = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMarsStroke ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Martini as StrokeMartini } from "./stroke/interface/Martini"
export const Martini = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMartini ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Maximize as StrokeMaximize } from "./stroke/interface/Maximize"
export const Maximize = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMaximize ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Maximize2 as StrokeMaximize2 } from "./stroke/interface/Maximize2"
export const Maximize2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMaximize2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Medal as StrokeMedal } from "./stroke/interface/Medal"
export const Medal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMedal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Megaphone as StrokeMegaphone } from "./stroke/interface/Megaphone"
export const Megaphone = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMegaphone ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MegaphoneOff as StrokeMegaphoneOff } from "./stroke/interface/MegaphoneOff"
export const MegaphoneOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMegaphoneOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Meh as StrokeMeh } from "./stroke/interface/Meh"
export const Meh = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMeh ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MemoryStick as StrokeMemoryStick } from "./stroke/interface/MemoryStick"
export const MemoryStick = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMemoryStick ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Menu as StrokeMenu } from "./stroke/interface/Menu"
export const Menu = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMenu ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Merge as StrokeMerge } from "./stroke/interface/Merge"
export const Merge = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMerge ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageCircle as StrokeMessageCircle } from "./stroke/communication/MessageCircle"
export const MessageCircle = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageCircle ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageCircleCheck as StrokeMessageCircleCheck } from "./stroke/communication/MessageCircleCheck"
export const MessageCircleCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageCircleCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageCircleCode as StrokeMessageCircleCode } from "./stroke/communication/MessageCircleCode"
export const MessageCircleCode = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageCircleCode ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageCircleDashed as StrokeMessageCircleDashed } from "./stroke/communication/MessageCircleDashed"
export const MessageCircleDashed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageCircleDashed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageCircleHeart as StrokeMessageCircleHeart } from "./stroke/communication/MessageCircleHeart"
export const MessageCircleHeart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageCircleHeart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageCircleMore as StrokeMessageCircleMore } from "./stroke/communication/MessageCircleMore"
export const MessageCircleMore = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageCircleMore ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageCircleOff as StrokeMessageCircleOff } from "./stroke/communication/MessageCircleOff"
export const MessageCircleOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageCircleOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageCirclePlus as StrokeMessageCirclePlus } from "./stroke/communication/MessageCirclePlus"
export const MessageCirclePlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageCirclePlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageCircleQuestionMark as StrokeMessageCircleQuestionMark } from "./stroke/communication/MessageCircleQuestionMark"
export const MessageCircleQuestionMark = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageCircleQuestionMark ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageCircleReply as StrokeMessageCircleReply } from "./stroke/communication/MessageCircleReply"
export const MessageCircleReply = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageCircleReply ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageCircleWarning as StrokeMessageCircleWarning } from "./stroke/communication/MessageCircleWarning"
export const MessageCircleWarning = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageCircleWarning ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageCircleX as StrokeMessageCircleX } from "./stroke/communication/MessageCircleX"
export const MessageCircleX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageCircleX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageSquare as StrokeMessageSquare } from "./stroke/communication/MessageSquare"
export const MessageSquare = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageSquare ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageSquareCheck as StrokeMessageSquareCheck } from "./stroke/communication/MessageSquareCheck"
export const MessageSquareCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageSquareCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageSquareCode as StrokeMessageSquareCode } from "./stroke/communication/MessageSquareCode"
export const MessageSquareCode = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageSquareCode ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageSquareDashed as StrokeMessageSquareDashed } from "./stroke/communication/MessageSquareDashed"
export const MessageSquareDashed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageSquareDashed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageSquareDiff as StrokeMessageSquareDiff } from "./stroke/communication/MessageSquareDiff"
export const MessageSquareDiff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageSquareDiff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageSquareDot as StrokeMessageSquareDot } from "./stroke/communication/MessageSquareDot"
export const MessageSquareDot = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageSquareDot ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageSquareHeart as StrokeMessageSquareHeart } from "./stroke/communication/MessageSquareHeart"
export const MessageSquareHeart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageSquareHeart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageSquareLock as StrokeMessageSquareLock } from "./stroke/communication/MessageSquareLock"
export const MessageSquareLock = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageSquareLock ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageSquareMore as StrokeMessageSquareMore } from "./stroke/communication/MessageSquareMore"
export const MessageSquareMore = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageSquareMore ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageSquareOff as StrokeMessageSquareOff } from "./stroke/communication/MessageSquareOff"
export const MessageSquareOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageSquareOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageSquarePlus as StrokeMessageSquarePlus } from "./stroke/communication/MessageSquarePlus"
export const MessageSquarePlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageSquarePlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageSquareQuote as StrokeMessageSquareQuote } from "./stroke/communication/MessageSquareQuote"
export const MessageSquareQuote = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageSquareQuote ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageSquareReply as StrokeMessageSquareReply } from "./stroke/communication/MessageSquareReply"
export const MessageSquareReply = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageSquareReply ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageSquareShare as StrokeMessageSquareShare } from "./stroke/communication/MessageSquareShare"
export const MessageSquareShare = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageSquareShare ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageSquareText as StrokeMessageSquareText } from "./stroke/communication/MessageSquareText"
export const MessageSquareText = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageSquareText ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageSquareWarning as StrokeMessageSquareWarning } from "./stroke/communication/MessageSquareWarning"
export const MessageSquareWarning = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageSquareWarning ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessageSquareX as StrokeMessageSquareX } from "./stroke/communication/MessageSquareX"
export const MessageSquareX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessageSquareX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MessagesSquare as StrokeMessagesSquare } from "./stroke/communication/MessagesSquare"
export const MessagesSquare = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMessagesSquare ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Metronome as StrokeMetronome } from "./stroke/interface/Metronome"
export const Metronome = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMetronome ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Mic as StrokeMic } from "./stroke/interface/Mic"
export const Mic = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMic ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MicOff as StrokeMicOff } from "./stroke/interface/MicOff"
export const MicOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMicOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MicVocal as StrokeMicVocal } from "./stroke/interface/MicVocal"
export const MicVocal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMicVocal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Microchip as StrokeMicrochip } from "./stroke/interface/Microchip"
export const Microchip = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMicrochip ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Microscope as StrokeMicroscope } from "./stroke/interface/Microscope"
export const Microscope = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMicroscope ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Microwave as StrokeMicrowave } from "./stroke/interface/Microwave"
export const Microwave = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMicrowave ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Milestone as StrokeMilestone } from "./stroke/interface/Milestone"
export const Milestone = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMilestone ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Milk as StrokeMilk } from "./stroke/interface/Milk"
export const Milk = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMilk ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MilkOff as StrokeMilkOff } from "./stroke/interface/MilkOff"
export const MilkOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMilkOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Minimize as StrokeMinimize } from "./stroke/interface/Minimize"
export const Minimize = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMinimize ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Minimize2 as StrokeMinimize2 } from "./stroke/interface/Minimize2"
export const Minimize2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMinimize2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Minus as StrokeMinus } from "./stroke/interface/Minus"
export const Minus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MirrorRectangular as StrokeMirrorRectangular } from "./stroke/interface/MirrorRectangular"
export const MirrorRectangular = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMirrorRectangular ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MirrorRound as StrokeMirrorRound } from "./stroke/interface/MirrorRound"
export const MirrorRound = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMirrorRound ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Monitor as StrokeMonitor } from "./stroke/interface/Monitor"
export const Monitor = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMonitor ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MonitorCheck as StrokeMonitorCheck } from "./stroke/interface/MonitorCheck"
export const MonitorCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMonitorCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MonitorCloud as StrokeMonitorCloud } from "./stroke/interface/MonitorCloud"
export const MonitorCloud = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMonitorCloud ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MonitorCog as StrokeMonitorCog } from "./stroke/tools/MonitorCog"
export const MonitorCog = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMonitorCog ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MonitorDot as StrokeMonitorDot } from "./stroke/interface/MonitorDot"
export const MonitorDot = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMonitorDot ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MonitorDown as StrokeMonitorDown } from "./stroke/interface/MonitorDown"
export const MonitorDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMonitorDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MonitorOff as StrokeMonitorOff } from "./stroke/interface/MonitorOff"
export const MonitorOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMonitorOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MonitorPause as StrokeMonitorPause } from "./stroke/media/MonitorPause"
export const MonitorPause = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMonitorPause ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MonitorPlay as StrokeMonitorPlay } from "./stroke/media/MonitorPlay"
export const MonitorPlay = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMonitorPlay ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MonitorSmartphone as StrokeMonitorSmartphone } from "./stroke/interface/MonitorSmartphone"
export const MonitorSmartphone = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMonitorSmartphone ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MonitorSpeaker as StrokeMonitorSpeaker } from "./stroke/interface/MonitorSpeaker"
export const MonitorSpeaker = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMonitorSpeaker ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MonitorStop as StrokeMonitorStop } from "./stroke/interface/MonitorStop"
export const MonitorStop = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMonitorStop ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MonitorUp as StrokeMonitorUp } from "./stroke/interface/MonitorUp"
export const MonitorUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMonitorUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MonitorX as StrokeMonitorX } from "./stroke/interface/MonitorX"
export const MonitorX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMonitorX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Moon as StrokeMoon } from "./stroke/interface/Moon"
export const Moon = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMoon ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MoonStar as StrokeMoonStar } from "./stroke/favorites/MoonStar"
export const MoonStar = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMoonStar ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Motorbike as StrokeMotorbike } from "./stroke/interface/Motorbike"
export const Motorbike = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMotorbike ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Mountain as StrokeMountain } from "./stroke/interface/Mountain"
export const Mountain = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMountain ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MountainSnow as StrokeMountainSnow } from "./stroke/interface/MountainSnow"
export const MountainSnow = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMountainSnow ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Mouse as StrokeMouse } from "./stroke/interface/Mouse"
export const Mouse = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMouse ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MouseLeft as StrokeMouseLeft } from "./stroke/interface/MouseLeft"
export const MouseLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMouseLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MouseOff as StrokeMouseOff } from "./stroke/interface/MouseOff"
export const MouseOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMouseOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MousePointer as StrokeMousePointer } from "./stroke/interface/MousePointer"
export const MousePointer = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMousePointer ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MousePointer2 as StrokeMousePointer2 } from "./stroke/interface/MousePointer2"
export const MousePointer2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMousePointer2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MousePointer2Off as StrokeMousePointer2Off } from "./stroke/interface/MousePointer2Off"
export const MousePointer2Off = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMousePointer2Off ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MousePointerBan as StrokeMousePointerBan } from "./stroke/interface/MousePointerBan"
export const MousePointerBan = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMousePointerBan ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MousePointerClick as StrokeMousePointerClick } from "./stroke/interface/MousePointerClick"
export const MousePointerClick = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMousePointerClick ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MouseRight as StrokeMouseRight } from "./stroke/interface/MouseRight"
export const MouseRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMouseRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Move as StrokeMove } from "./stroke/interface/Move"
export const Move = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMove ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Move3d as StrokeMove3d } from "./stroke/interface/Move3d"
export const Move3d = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMove3d ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MoveDiagonal as StrokeMoveDiagonal } from "./stroke/interface/MoveDiagonal"
export const MoveDiagonal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMoveDiagonal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MoveDiagonal2 as StrokeMoveDiagonal2 } from "./stroke/interface/MoveDiagonal2"
export const MoveDiagonal2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMoveDiagonal2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MoveDown as StrokeMoveDown } from "./stroke/interface/MoveDown"
export const MoveDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMoveDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MoveDownLeft as StrokeMoveDownLeft } from "./stroke/interface/MoveDownLeft"
export const MoveDownLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMoveDownLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MoveDownRight as StrokeMoveDownRight } from "./stroke/interface/MoveDownRight"
export const MoveDownRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMoveDownRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MoveHorizontal as StrokeMoveHorizontal } from "./stroke/interface/MoveHorizontal"
export const MoveHorizontal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMoveHorizontal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MoveLeft as StrokeMoveLeft } from "./stroke/interface/MoveLeft"
export const MoveLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMoveLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MoveRight as StrokeMoveRight } from "./stroke/interface/MoveRight"
export const MoveRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMoveRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MoveUp as StrokeMoveUp } from "./stroke/interface/MoveUp"
export const MoveUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMoveUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MoveUpLeft as StrokeMoveUpLeft } from "./stroke/interface/MoveUpLeft"
export const MoveUpLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMoveUpLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MoveUpRight as StrokeMoveUpRight } from "./stroke/interface/MoveUpRight"
export const MoveUpRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMoveUpRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { MoveVertical as StrokeMoveVertical } from "./stroke/interface/MoveVertical"
export const MoveVertical = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMoveVertical ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Music as StrokeMusic } from "./stroke/interface/Music"
export const Music = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMusic ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Music2 as StrokeMusic2 } from "./stroke/interface/Music2"
export const Music2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMusic2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Music3 as StrokeMusic3 } from "./stroke/interface/Music3"
export const Music3 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMusic3 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Music4 as StrokeMusic4 } from "./stroke/interface/Music4"
export const Music4 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeMusic4 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Navigation as StrokeNavigation } from "./stroke/interface/Navigation"
export const Navigation = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeNavigation ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Navigation2 as StrokeNavigation2 } from "./stroke/interface/Navigation2"
export const Navigation2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeNavigation2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Navigation2Off as StrokeNavigation2Off } from "./stroke/interface/Navigation2Off"
export const Navigation2Off = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeNavigation2Off ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { NavigationOff as StrokeNavigationOff } from "./stroke/interface/NavigationOff"
export const NavigationOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeNavigationOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Network as StrokeNetwork } from "./stroke/interface/Network"
export const Network = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeNetwork ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Newspaper as StrokeNewspaper } from "./stroke/interface/Newspaper"
export const Newspaper = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeNewspaper ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Nfc as StrokeNfc } from "./stroke/interface/Nfc"
export const Nfc = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeNfc ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { NonBinary as StrokeNonBinary } from "./stroke/interface/NonBinary"
export const NonBinary = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeNonBinary ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Notebook as StrokeNotebook } from "./stroke/interface/Notebook"
export const Notebook = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeNotebook ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { NotebookPen as StrokeNotebookPen } from "./stroke/interface/NotebookPen"
export const NotebookPen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeNotebookPen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { NotebookTabs as StrokeNotebookTabs } from "./stroke/interface/NotebookTabs"
export const NotebookTabs = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeNotebookTabs ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { NotebookText as StrokeNotebookText } from "./stroke/interface/NotebookText"
export const NotebookText = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeNotebookText ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { NotepadText as StrokeNotepadText } from "./stroke/interface/NotepadText"
export const NotepadText = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeNotepadText ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { NotepadTextDashed as StrokeNotepadTextDashed } from "./stroke/interface/NotepadTextDashed"
export const NotepadTextDashed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeNotepadTextDashed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Nut as StrokeNut } from "./stroke/interface/Nut"
export const Nut = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeNut ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { NutOff as StrokeNutOff } from "./stroke/interface/NutOff"
export const NutOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeNutOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Octagon as StrokeOctagon } from "./stroke/interface/Octagon"
export const Octagon = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeOctagon ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { OctagonAlert as StrokeOctagonAlert } from "./stroke/interface/OctagonAlert"
export const OctagonAlert = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeOctagonAlert ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { OctagonMinus as StrokeOctagonMinus } from "./stroke/interface/OctagonMinus"
export const OctagonMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeOctagonMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { OctagonPause as StrokeOctagonPause } from "./stroke/media/OctagonPause"
export const OctagonPause = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeOctagonPause ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { OctagonX as StrokeOctagonX } from "./stroke/interface/OctagonX"
export const OctagonX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeOctagonX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Omega as StrokeOmega } from "./stroke/interface/Omega"
export const Omega = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeOmega ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Option as StrokeOption } from "./stroke/interface/Option"
export const Option = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeOption ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Orbit as StrokeOrbit } from "./stroke/interface/Orbit"
export const Orbit = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeOrbit ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Origami as StrokeOrigami } from "./stroke/interface/Origami"
export const Origami = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeOrigami ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Package as StrokePackage } from "./stroke/interface/Package"
export const Package = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePackage ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Package2 as StrokePackage2 } from "./stroke/interface/Package2"
export const Package2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePackage2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PackageCheck as StrokePackageCheck } from "./stroke/interface/PackageCheck"
export const PackageCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePackageCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PackageMinus as StrokePackageMinus } from "./stroke/interface/PackageMinus"
export const PackageMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePackageMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PackageOpen as StrokePackageOpen } from "./stroke/interface/PackageOpen"
export const PackageOpen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePackageOpen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PackagePlus as StrokePackagePlus } from "./stroke/interface/PackagePlus"
export const PackagePlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePackagePlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PackageSearch as StrokePackageSearch } from "./stroke/tools/PackageSearch"
export const PackageSearch = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePackageSearch ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PackageX as StrokePackageX } from "./stroke/interface/PackageX"
export const PackageX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePackageX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PaintBucket as StrokePaintBucket } from "./stroke/interface/PaintBucket"
export const PaintBucket = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePaintBucket ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PaintRoller as StrokePaintRoller } from "./stroke/interface/PaintRoller"
export const PaintRoller = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePaintRoller ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Paintbrush as StrokePaintbrush } from "./stroke/interface/Paintbrush"
export const Paintbrush = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePaintbrush ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PaintbrushVertical as StrokePaintbrushVertical } from "./stroke/interface/PaintbrushVertical"
export const PaintbrushVertical = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePaintbrushVertical ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Palette as StrokePalette } from "./stroke/interface/Palette"
export const Palette = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePalette ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Panda as StrokePanda } from "./stroke/interface/Panda"
export const Panda = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanda ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PanelBottom as StrokePanelBottom } from "./stroke/interface/PanelBottom"
export const PanelBottom = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanelBottom ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PanelBottomClose as StrokePanelBottomClose } from "./stroke/interface/PanelBottomClose"
export const PanelBottomClose = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanelBottomClose ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PanelBottomDashed as StrokePanelBottomDashed } from "./stroke/interface/PanelBottomDashed"
export const PanelBottomDashed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanelBottomDashed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PanelBottomOpen as StrokePanelBottomOpen } from "./stroke/interface/PanelBottomOpen"
export const PanelBottomOpen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanelBottomOpen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PanelLeft as StrokePanelLeft } from "./stroke/interface/PanelLeft"
export const PanelLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanelLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PanelLeftClose as StrokePanelLeftClose } from "./stroke/interface/PanelLeftClose"
export const PanelLeftClose = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanelLeftClose ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PanelLeftDashed as StrokePanelLeftDashed } from "./stroke/interface/PanelLeftDashed"
export const PanelLeftDashed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanelLeftDashed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PanelLeftOpen as StrokePanelLeftOpen } from "./stroke/interface/PanelLeftOpen"
export const PanelLeftOpen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanelLeftOpen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PanelLeftRightDashed as StrokePanelLeftRightDashed } from "./stroke/interface/PanelLeftRightDashed"
export const PanelLeftRightDashed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanelLeftRightDashed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PanelRight as StrokePanelRight } from "./stroke/interface/PanelRight"
export const PanelRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanelRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PanelRightClose as StrokePanelRightClose } from "./stroke/interface/PanelRightClose"
export const PanelRightClose = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanelRightClose ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PanelRightDashed as StrokePanelRightDashed } from "./stroke/interface/PanelRightDashed"
export const PanelRightDashed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanelRightDashed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PanelRightOpen as StrokePanelRightOpen } from "./stroke/interface/PanelRightOpen"
export const PanelRightOpen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanelRightOpen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PanelTop as StrokePanelTop } from "./stroke/interface/PanelTop"
export const PanelTop = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanelTop ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PanelTopBottomDashed as StrokePanelTopBottomDashed } from "./stroke/interface/PanelTopBottomDashed"
export const PanelTopBottomDashed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanelTopBottomDashed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PanelTopClose as StrokePanelTopClose } from "./stroke/interface/PanelTopClose"
export const PanelTopClose = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanelTopClose ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PanelTopDashed as StrokePanelTopDashed } from "./stroke/interface/PanelTopDashed"
export const PanelTopDashed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanelTopDashed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PanelTopOpen as StrokePanelTopOpen } from "./stroke/interface/PanelTopOpen"
export const PanelTopOpen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanelTopOpen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PanelsLeftBottom as StrokePanelsLeftBottom } from "./stroke/interface/PanelsLeftBottom"
export const PanelsLeftBottom = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanelsLeftBottom ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PanelsRightBottom as StrokePanelsRightBottom } from "./stroke/interface/PanelsRightBottom"
export const PanelsRightBottom = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanelsRightBottom ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PanelsTopLeft as StrokePanelsTopLeft } from "./stroke/interface/PanelsTopLeft"
export const PanelsTopLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePanelsTopLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Paperclip as StrokePaperclip } from "./stroke/interface/Paperclip"
export const Paperclip = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePaperclip ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Parentheses as StrokeParentheses } from "./stroke/interface/Parentheses"
export const Parentheses = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeParentheses ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ParkingMeter as StrokeParkingMeter } from "./stroke/interface/ParkingMeter"
export const ParkingMeter = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeParkingMeter ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PartyPopper as StrokePartyPopper } from "./stroke/interface/PartyPopper"
export const PartyPopper = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePartyPopper ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Pause as StrokePause } from "./stroke/media/Pause"
export const Pause = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePause ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PawPrint as StrokePawPrint } from "./stroke/interface/PawPrint"
export const PawPrint = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePawPrint ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PcCase as StrokePcCase } from "./stroke/interface/PcCase"
export const PcCase = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePcCase ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Pen as StrokePen } from "./stroke/interface/Pen"
export const Pen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PenLine as StrokePenLine } from "./stroke/interface/PenLine"
export const PenLine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePenLine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PenOff as StrokePenOff } from "./stroke/interface/PenOff"
export const PenOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePenOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PenTool as StrokePenTool } from "./stroke/interface/PenTool"
export const PenTool = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePenTool ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Pencil as StrokePencil } from "./stroke/interface/Pencil"
export const Pencil = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePencil ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PencilLine as StrokePencilLine } from "./stroke/interface/PencilLine"
export const PencilLine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePencilLine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PencilOff as StrokePencilOff } from "./stroke/interface/PencilOff"
export const PencilOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePencilOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PencilRuler as StrokePencilRuler } from "./stroke/interface/PencilRuler"
export const PencilRuler = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePencilRuler ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Pentagon as StrokePentagon } from "./stroke/interface/Pentagon"
export const Pentagon = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePentagon ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Percent as StrokePercent } from "./stroke/interface/Percent"
export const Percent = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePercent ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PersonStanding as StrokePersonStanding } from "./stroke/users/PersonStanding"
export const PersonStanding = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePersonStanding ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PhilippinePeso as StrokePhilippinePeso } from "./stroke/interface/PhilippinePeso"
export const PhilippinePeso = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePhilippinePeso ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Phone as StrokePhone } from "./stroke/interface/Phone"
export const Phone = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePhone ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PhoneCall as StrokePhoneCall } from "./stroke/interface/PhoneCall"
export const PhoneCall = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePhoneCall ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PhoneForwarded as StrokePhoneForwarded } from "./stroke/interface/PhoneForwarded"
export const PhoneForwarded = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePhoneForwarded ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PhoneIncoming as StrokePhoneIncoming } from "./stroke/interface/PhoneIncoming"
export const PhoneIncoming = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePhoneIncoming ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PhoneMissed as StrokePhoneMissed } from "./stroke/interface/PhoneMissed"
export const PhoneMissed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePhoneMissed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PhoneOff as StrokePhoneOff } from "./stroke/interface/PhoneOff"
export const PhoneOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePhoneOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PhoneOutgoing as StrokePhoneOutgoing } from "./stroke/interface/PhoneOutgoing"
export const PhoneOutgoing = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePhoneOutgoing ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Pi as StrokePi } from "./stroke/interface/Pi"
export const Pi = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePi ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Piano as StrokePiano } from "./stroke/interface/Piano"
export const Piano = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePiano ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Pickaxe as StrokePickaxe } from "./stroke/interface/Pickaxe"
export const Pickaxe = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePickaxe ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PictureInPicture as StrokePictureInPicture } from "./stroke/interface/PictureInPicture"
export const PictureInPicture = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePictureInPicture ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PictureInPicture2 as StrokePictureInPicture2 } from "./stroke/interface/PictureInPicture2"
export const PictureInPicture2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePictureInPicture2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PieChart as StrokePieChart } from "./stroke/interface/PieChart"
export const PieChart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePieChart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PiggyBank as StrokePiggyBank } from "./stroke/interface/PiggyBank"
export const PiggyBank = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePiggyBank ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Pilcrow as StrokePilcrow } from "./stroke/interface/Pilcrow"
export const Pilcrow = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePilcrow ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PilcrowLeft as StrokePilcrowLeft } from "./stroke/interface/PilcrowLeft"
export const PilcrowLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePilcrowLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PilcrowRight as StrokePilcrowRight } from "./stroke/interface/PilcrowRight"
export const PilcrowRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePilcrowRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Pill as StrokePill } from "./stroke/interface/Pill"
export const Pill = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePill ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PillBottle as StrokePillBottle } from "./stroke/interface/PillBottle"
export const PillBottle = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePillBottle ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Pin as StrokePin } from "./stroke/interface/Pin"
export const Pin = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePin ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PinOff as StrokePinOff } from "./stroke/interface/PinOff"
export const PinOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePinOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Pipette as StrokePipette } from "./stroke/interface/Pipette"
export const Pipette = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePipette ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Pizza as StrokePizza } from "./stroke/interface/Pizza"
export const Pizza = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePizza ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Plane as StrokePlane } from "./stroke/interface/Plane"
export const Plane = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePlane ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PlaneLanding as StrokePlaneLanding } from "./stroke/interface/PlaneLanding"
export const PlaneLanding = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePlaneLanding ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PlaneTakeoff as StrokePlaneTakeoff } from "./stroke/interface/PlaneTakeoff"
export const PlaneTakeoff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePlaneTakeoff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Play as StrokePlay } from "./stroke/media/Play"
export const Play = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePlay ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Plug as StrokePlug } from "./stroke/interface/Plug"
export const Plug = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePlug ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Plug2 as StrokePlug2 } from "./stroke/interface/Plug2"
export const Plug2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePlug2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PlugZap as StrokePlugZap } from "./stroke/interface/PlugZap"
export const PlugZap = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePlugZap ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Plus as StrokePlus } from "./stroke/interface/Plus"
export const Plus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Pocket as StrokePocket } from "./stroke/interface/Pocket"
export const Pocket = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePocket ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PocketKnife as StrokePocketKnife } from "./stroke/interface/PocketKnife"
export const PocketKnife = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePocketKnife ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Podcast as StrokePodcast } from "./stroke/interface/Podcast"
export const Podcast = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePodcast ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Pointer as StrokePointer } from "./stroke/interface/Pointer"
export const Pointer = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePointer ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PointerOff as StrokePointerOff } from "./stroke/interface/PointerOff"
export const PointerOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePointerOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Popcorn as StrokePopcorn } from "./stroke/interface/Popcorn"
export const Popcorn = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePopcorn ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Popsicle as StrokePopsicle } from "./stroke/interface/Popsicle"
export const Popsicle = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePopsicle ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PoundSterling as StrokePoundSterling } from "./stroke/interface/PoundSterling"
export const PoundSterling = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePoundSterling ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Power as StrokePower } from "./stroke/interface/Power"
export const Power = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePower ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PowerOff as StrokePowerOff } from "./stroke/interface/PowerOff"
export const PowerOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePowerOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Presentation as StrokePresentation } from "./stroke/interface/Presentation"
export const Presentation = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePresentation ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Printer as StrokePrinter } from "./stroke/interface/Printer"
export const Printer = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePrinter ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PrinterCheck as StrokePrinterCheck } from "./stroke/interface/PrinterCheck"
export const PrinterCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePrinterCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { PrinterX as StrokePrinterX } from "./stroke/interface/PrinterX"
export const PrinterX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePrinterX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Projector as StrokeProjector } from "./stroke/interface/Projector"
export const Projector = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeProjector ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Proportions as StrokeProportions } from "./stroke/interface/Proportions"
export const Proportions = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeProportions ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Puzzle as StrokePuzzle } from "./stroke/interface/Puzzle"
export const Puzzle = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePuzzle ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Pyramid as StrokePyramid } from "./stroke/interface/Pyramid"
export const Pyramid = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokePyramid ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { QrCode as StrokeQrCode } from "./stroke/interface/QrCode"
export const QrCode = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeQrCode ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Quote as StrokeQuote } from "./stroke/interface/Quote"
export const Quote = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeQuote ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Rabbit as StrokeRabbit } from "./stroke/interface/Rabbit"
export const Rabbit = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRabbit ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Radar as StrokeRadar } from "./stroke/interface/Radar"
export const Radar = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRadar ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Radiation as StrokeRadiation } from "./stroke/interface/Radiation"
export const Radiation = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRadiation ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Radical as StrokeRadical } from "./stroke/interface/Radical"
export const Radical = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRadical ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Radio as StrokeRadio } from "./stroke/interface/Radio"
export const Radio = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRadio ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RadioReceiver as StrokeRadioReceiver } from "./stroke/interface/RadioReceiver"
export const RadioReceiver = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRadioReceiver ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RadioTower as StrokeRadioTower } from "./stroke/interface/RadioTower"
export const RadioTower = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRadioTower ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Radius as StrokeRadius } from "./stroke/interface/Radius"
export const Radius = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRadius ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RailSymbol as StrokeRailSymbol } from "./stroke/interface/RailSymbol"
export const RailSymbol = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRailSymbol ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Rainbow as StrokeRainbow } from "./stroke/interface/Rainbow"
export const Rainbow = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRainbow ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Rat as StrokeRat } from "./stroke/interface/Rat"
export const Rat = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRat ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Ratio as StrokeRatio } from "./stroke/interface/Ratio"
export const Ratio = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRatio ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Receipt as StrokeReceipt } from "./stroke/interface/Receipt"
export const Receipt = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeReceipt ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ReceiptCent as StrokeReceiptCent } from "./stroke/interface/ReceiptCent"
export const ReceiptCent = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeReceiptCent ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ReceiptEuro as StrokeReceiptEuro } from "./stroke/interface/ReceiptEuro"
export const ReceiptEuro = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeReceiptEuro ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ReceiptIndianRupee as StrokeReceiptIndianRupee } from "./stroke/interface/ReceiptIndianRupee"
export const ReceiptIndianRupee = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeReceiptIndianRupee ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ReceiptJapaneseYen as StrokeReceiptJapaneseYen } from "./stroke/interface/ReceiptJapaneseYen"
export const ReceiptJapaneseYen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeReceiptJapaneseYen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ReceiptPoundSterling as StrokeReceiptPoundSterling } from "./stroke/interface/ReceiptPoundSterling"
export const ReceiptPoundSterling = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeReceiptPoundSterling ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ReceiptRussianRuble as StrokeReceiptRussianRuble } from "./stroke/interface/ReceiptRussianRuble"
export const ReceiptRussianRuble = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeReceiptRussianRuble ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ReceiptSwissFranc as StrokeReceiptSwissFranc } from "./stroke/interface/ReceiptSwissFranc"
export const ReceiptSwissFranc = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeReceiptSwissFranc ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ReceiptText as StrokeReceiptText } from "./stroke/interface/ReceiptText"
export const ReceiptText = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeReceiptText ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ReceiptTurkishLira as StrokeReceiptTurkishLira } from "./stroke/interface/ReceiptTurkishLira"
export const ReceiptTurkishLira = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeReceiptTurkishLira ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RectangleCircle as StrokeRectangleCircle } from "./stroke/interface/RectangleCircle"
export const RectangleCircle = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRectangleCircle ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RectangleEllipsis as StrokeRectangleEllipsis } from "./stroke/interface/RectangleEllipsis"
export const RectangleEllipsis = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRectangleEllipsis ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RectangleGoggles as StrokeRectangleGoggles } from "./stroke/interface/RectangleGoggles"
export const RectangleGoggles = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRectangleGoggles ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RectangleHorizontal as StrokeRectangleHorizontal } from "./stroke/interface/RectangleHorizontal"
export const RectangleHorizontal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRectangleHorizontal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RectangleVertical as StrokeRectangleVertical } from "./stroke/interface/RectangleVertical"
export const RectangleVertical = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRectangleVertical ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Recycle as StrokeRecycle } from "./stroke/interface/Recycle"
export const Recycle = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRecycle ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Redo as StrokeRedo } from "./stroke/interface/Redo"
export const Redo = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRedo ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Redo2 as StrokeRedo2 } from "./stroke/interface/Redo2"
export const Redo2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRedo2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RedoDot as StrokeRedoDot } from "./stroke/interface/RedoDot"
export const RedoDot = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRedoDot ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RefreshCcw as StrokeRefreshCcw } from "./stroke/interface/RefreshCcw"
export const RefreshCcw = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRefreshCcw ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RefreshCcwDot as StrokeRefreshCcwDot } from "./stroke/interface/RefreshCcwDot"
export const RefreshCcwDot = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRefreshCcwDot ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RefreshCw as StrokeRefreshCw } from "./stroke/interface/RefreshCw"
export const RefreshCw = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRefreshCw ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RefreshCwOff as StrokeRefreshCwOff } from "./stroke/interface/RefreshCwOff"
export const RefreshCwOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRefreshCwOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Refrigerator as StrokeRefrigerator } from "./stroke/interface/Refrigerator"
export const Refrigerator = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRefrigerator ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Regex as StrokeRegex } from "./stroke/interface/Regex"
export const Regex = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRegex ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RemoveFormatting as StrokeRemoveFormatting } from "./stroke/interface/RemoveFormatting"
export const RemoveFormatting = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRemoveFormatting ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Repeat as StrokeRepeat } from "./stroke/interface/Repeat"
export const Repeat = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRepeat ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Repeat1 as StrokeRepeat1 } from "./stroke/interface/Repeat1"
export const Repeat1 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRepeat1 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Repeat2 as StrokeRepeat2 } from "./stroke/interface/Repeat2"
export const Repeat2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRepeat2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Replace as StrokeReplace } from "./stroke/interface/Replace"
export const Replace = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeReplace ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ReplaceAll as StrokeReplaceAll } from "./stroke/interface/ReplaceAll"
export const ReplaceAll = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeReplaceAll ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Reply as StrokeReply } from "./stroke/interface/Reply"
export const Reply = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeReply ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ReplyAll as StrokeReplyAll } from "./stroke/interface/ReplyAll"
export const ReplyAll = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeReplyAll ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Rewind as StrokeRewind } from "./stroke/media/Rewind"
export const Rewind = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRewind ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Ribbon as StrokeRibbon } from "./stroke/interface/Ribbon"
export const Ribbon = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRibbon ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Rocket as StrokeRocket } from "./stroke/interface/Rocket"
export const Rocket = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRocket ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RockingChair as StrokeRockingChair } from "./stroke/interface/RockingChair"
export const RockingChair = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRockingChair ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RollerCoaster as StrokeRollerCoaster } from "./stroke/interface/RollerCoaster"
export const RollerCoaster = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRollerCoaster ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Rose as StrokeRose } from "./stroke/interface/Rose"
export const Rose = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRose ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Rotate3d as StrokeRotate3d } from "./stroke/interface/Rotate3d"
export const Rotate3d = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRotate3d ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RotateCcw as StrokeRotateCcw } from "./stroke/interface/RotateCcw"
export const RotateCcw = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRotateCcw ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RotateCcwKey as StrokeRotateCcwKey } from "./stroke/interface/RotateCcwKey"
export const RotateCcwKey = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRotateCcwKey ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RotateCcwSquare as StrokeRotateCcwSquare } from "./stroke/interface/RotateCcwSquare"
export const RotateCcwSquare = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRotateCcwSquare ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RotateCw as StrokeRotateCw } from "./stroke/interface/RotateCw"
export const RotateCw = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRotateCw ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RotateCwSquare as StrokeRotateCwSquare } from "./stroke/interface/RotateCwSquare"
export const RotateCwSquare = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRotateCwSquare ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Route as StrokeRoute } from "./stroke/interface/Route"
export const Route = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRoute ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RouteOff as StrokeRouteOff } from "./stroke/interface/RouteOff"
export const RouteOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRouteOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Router as StrokeRouter } from "./stroke/interface/Router"
export const Router = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRouter ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Rows2 as StrokeRows2 } from "./stroke/interface/Rows2"
export const Rows2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRows2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Rows3 as StrokeRows3 } from "./stroke/interface/Rows3"
export const Rows3 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRows3 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Rows4 as StrokeRows4 } from "./stroke/interface/Rows4"
export const Rows4 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRows4 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Rss as StrokeRss } from "./stroke/interface/Rss"
export const Rss = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRss ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Ruler as StrokeRuler } from "./stroke/interface/Ruler"
export const Ruler = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRuler ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RulerDimensionLine as StrokeRulerDimensionLine } from "./stroke/interface/RulerDimensionLine"
export const RulerDimensionLine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRulerDimensionLine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { RussianRuble as StrokeRussianRuble } from "./stroke/interface/RussianRuble"
export const RussianRuble = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeRussianRuble ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Sailboat as StrokeSailboat } from "./stroke/interface/Sailboat"
export const Sailboat = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSailboat ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Salad as StrokeSalad } from "./stroke/interface/Salad"
export const Salad = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSalad ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Sandwich as StrokeSandwich } from "./stroke/interface/Sandwich"
export const Sandwich = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSandwich ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Satellite as StrokeSatellite } from "./stroke/interface/Satellite"
export const Satellite = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSatellite ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SatelliteDish as StrokeSatelliteDish } from "./stroke/interface/SatelliteDish"
export const SatelliteDish = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSatelliteDish ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SaudiRiyal as StrokeSaudiRiyal } from "./stroke/interface/SaudiRiyal"
export const SaudiRiyal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSaudiRiyal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Save as StrokeSave } from "./stroke/interface/Save"
export const Save = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSave ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SaveAll as StrokeSaveAll } from "./stroke/interface/SaveAll"
export const SaveAll = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSaveAll ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SaveOff as StrokeSaveOff } from "./stroke/interface/SaveOff"
export const SaveOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSaveOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Scale as StrokeScale } from "./stroke/interface/Scale"
export const Scale = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeScale ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Scale3d as StrokeScale3d } from "./stroke/interface/Scale3d"
export const Scale3d = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeScale3d ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Scaling as StrokeScaling } from "./stroke/interface/Scaling"
export const Scaling = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeScaling ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Scan as StrokeScan } from "./stroke/interface/Scan"
export const Scan = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeScan ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ScanBarcode as StrokeScanBarcode } from "./stroke/interface/ScanBarcode"
export const ScanBarcode = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeScanBarcode ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ScanEye as StrokeScanEye } from "./stroke/interface/ScanEye"
export const ScanEye = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeScanEye ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ScanFace as StrokeScanFace } from "./stroke/interface/ScanFace"
export const ScanFace = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeScanFace ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ScanHeart as StrokeScanHeart } from "./stroke/favorites/ScanHeart"
export const ScanHeart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeScanHeart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ScanLine as StrokeScanLine } from "./stroke/interface/ScanLine"
export const ScanLine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeScanLine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ScanQrCode as StrokeScanQrCode } from "./stroke/interface/ScanQrCode"
export const ScanQrCode = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeScanQrCode ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ScanSearch as StrokeScanSearch } from "./stroke/tools/ScanSearch"
export const ScanSearch = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeScanSearch ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ScanText as StrokeScanText } from "./stroke/interface/ScanText"
export const ScanText = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeScanText ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ScatterChart as StrokeScatterChart } from "./stroke/interface/ScatterChart"
export const ScatterChart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeScatterChart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { School as StrokeSchool } from "./stroke/interface/School"
export const School = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSchool ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Scissors as StrokeScissors } from "./stroke/interface/Scissors"
export const Scissors = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeScissors ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ScissorsLineDashed as StrokeScissorsLineDashed } from "./stroke/interface/ScissorsLineDashed"
export const ScissorsLineDashed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeScissorsLineDashed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Scooter as StrokeScooter } from "./stroke/interface/Scooter"
export const Scooter = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeScooter ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ScreenShare as StrokeScreenShare } from "./stroke/interface/ScreenShare"
export const ScreenShare = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeScreenShare ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ScreenShareOff as StrokeScreenShareOff } from "./stroke/interface/ScreenShareOff"
export const ScreenShareOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeScreenShareOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Scroll as StrokeScroll } from "./stroke/interface/Scroll"
export const Scroll = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeScroll ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ScrollText as StrokeScrollText } from "./stroke/interface/ScrollText"
export const ScrollText = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeScrollText ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Search as StrokeSearch } from "./stroke/tools/Search"
export const Search = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSearch ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SearchAlert as StrokeSearchAlert } from "./stroke/tools/SearchAlert"
export const SearchAlert = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSearchAlert ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SearchCheck as StrokeSearchCheck } from "./stroke/tools/SearchCheck"
export const SearchCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSearchCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SearchCode as StrokeSearchCode } from "./stroke/tools/SearchCode"
export const SearchCode = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSearchCode ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SearchLarge as StrokeSearchLarge } from "./stroke/tools/SearchLarge"
export const SearchLarge = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSearchLarge ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SearchSlash as StrokeSearchSlash } from "./stroke/tools/SearchSlash"
export const SearchSlash = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSearchSlash ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SearchX as StrokeSearchX } from "./stroke/tools/SearchX"
export const SearchX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSearchX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Section as StrokeSection } from "./stroke/interface/Section"
export const Section = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSection ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Send as StrokeSend } from "./stroke/interface/Send"
export const Send = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSend ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SendHorizontal as StrokeSendHorizontal } from "./stroke/interface/SendHorizontal"
export const SendHorizontal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSendHorizontal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SendToBack as StrokeSendToBack } from "./stroke/interface/SendToBack"
export const SendToBack = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSendToBack ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SeparatorHorizontal as StrokeSeparatorHorizontal } from "./stroke/interface/SeparatorHorizontal"
export const SeparatorHorizontal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSeparatorHorizontal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SeparatorVertical as StrokeSeparatorVertical } from "./stroke/interface/SeparatorVertical"
export const SeparatorVertical = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSeparatorVertical ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Server as StrokeServer } from "./stroke/interface/Server"
export const Server = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeServer ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ServerCog as StrokeServerCog } from "./stroke/tools/ServerCog"
export const ServerCog = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeServerCog ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ServerCrash as StrokeServerCrash } from "./stroke/interface/ServerCrash"
export const ServerCrash = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeServerCrash ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ServerOff as StrokeServerOff } from "./stroke/interface/ServerOff"
export const ServerOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeServerOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Settings as StrokeSettings } from "./stroke/tools/Settings"
export const Settings = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSettings ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Settings2 as StrokeSettings2 } from "./stroke/tools/Settings2"
export const Settings2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSettings2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Shapes as StrokeShapes } from "./stroke/interface/Shapes"
export const Shapes = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShapes ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Share as StrokeShare } from "./stroke/interface/Share"
export const Share = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShare ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Share2 as StrokeShare2 } from "./stroke/interface/Share2"
export const Share2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShare2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Sheet as StrokeSheet } from "./stroke/files/Sheet"
export const Sheet = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSheet ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Shell as StrokeShell } from "./stroke/interface/Shell"
export const Shell = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShell ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ShelvingUnit as StrokeShelvingUnit } from "./stroke/interface/ShelvingUnit"
export const ShelvingUnit = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShelvingUnit ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Shield as StrokeShield } from "./stroke/interface/Shield"
export const Shield = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShield ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ShieldAlert as StrokeShieldAlert } from "./stroke/interface/ShieldAlert"
export const ShieldAlert = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShieldAlert ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ShieldBan as StrokeShieldBan } from "./stroke/interface/ShieldBan"
export const ShieldBan = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShieldBan ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ShieldCheck as StrokeShieldCheck } from "./stroke/interface/ShieldCheck"
export const ShieldCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShieldCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ShieldEllipsis as StrokeShieldEllipsis } from "./stroke/interface/ShieldEllipsis"
export const ShieldEllipsis = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShieldEllipsis ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ShieldHalf as StrokeShieldHalf } from "./stroke/interface/ShieldHalf"
export const ShieldHalf = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShieldHalf ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ShieldMinus as StrokeShieldMinus } from "./stroke/interface/ShieldMinus"
export const ShieldMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShieldMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ShieldOff as StrokeShieldOff } from "./stroke/interface/ShieldOff"
export const ShieldOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShieldOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ShieldPlus as StrokeShieldPlus } from "./stroke/interface/ShieldPlus"
export const ShieldPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShieldPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ShieldQuestionMark as StrokeShieldQuestionMark } from "./stroke/interface/ShieldQuestionMark"
export const ShieldQuestionMark = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShieldQuestionMark ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ShieldUser as StrokeShieldUser } from "./stroke/users/ShieldUser"
export const ShieldUser = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShieldUser ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ShieldX as StrokeShieldX } from "./stroke/interface/ShieldX"
export const ShieldX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShieldX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Ship as StrokeShip } from "./stroke/interface/Ship"
export const Ship = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShip ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ShipWheel as StrokeShipWheel } from "./stroke/interface/ShipWheel"
export const ShipWheel = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShipWheel ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Shirt as StrokeShirt } from "./stroke/interface/Shirt"
export const Shirt = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShirt ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ShoppingBag as StrokeShoppingBag } from "./stroke/interface/ShoppingBag"
export const ShoppingBag = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShoppingBag ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ShoppingBasket as StrokeShoppingBasket } from "./stroke/interface/ShoppingBasket"
export const ShoppingBasket = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShoppingBasket ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ShoppingCart as StrokeShoppingCart } from "./stroke/interface/ShoppingCart"
export const ShoppingCart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShoppingCart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Shovel as StrokeShovel } from "./stroke/interface/Shovel"
export const Shovel = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShovel ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ShowerHead as StrokeShowerHead } from "./stroke/interface/ShowerHead"
export const ShowerHead = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShowerHead ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Shredder as StrokeShredder } from "./stroke/interface/Shredder"
export const Shredder = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShredder ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Shrimp as StrokeShrimp } from "./stroke/interface/Shrimp"
export const Shrimp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShrimp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Shrink as StrokeShrink } from "./stroke/interface/Shrink"
export const Shrink = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShrink ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Shrub as StrokeShrub } from "./stroke/interface/Shrub"
export const Shrub = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShrub ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Shuffle as StrokeShuffle } from "./stroke/interface/Shuffle"
export const Shuffle = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeShuffle ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Sigma as StrokeSigma } from "./stroke/interface/Sigma"
export const Sigma = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSigma ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Signal as StrokeSignal } from "./stroke/interface/Signal"
export const Signal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSignal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SignalHigh as StrokeSignalHigh } from "./stroke/interface/SignalHigh"
export const SignalHigh = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSignalHigh ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SignalLow as StrokeSignalLow } from "./stroke/interface/SignalLow"
export const SignalLow = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSignalLow ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SignalMedium as StrokeSignalMedium } from "./stroke/interface/SignalMedium"
export const SignalMedium = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSignalMedium ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SignalZero as StrokeSignalZero } from "./stroke/interface/SignalZero"
export const SignalZero = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSignalZero ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Signature as StrokeSignature } from "./stroke/interface/Signature"
export const Signature = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSignature ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Signpost as StrokeSignpost } from "./stroke/interface/Signpost"
export const Signpost = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSignpost ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SignpostBig as StrokeSignpostBig } from "./stroke/interface/SignpostBig"
export const SignpostBig = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSignpostBig ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Siren as StrokeSiren } from "./stroke/interface/Siren"
export const Siren = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSiren ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SkipBack as StrokeSkipBack } from "./stroke/media/SkipBack"
export const SkipBack = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSkipBack ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SkipForward as StrokeSkipForward } from "./stroke/media/SkipForward"
export const SkipForward = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSkipForward ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Skull as StrokeSkull } from "./stroke/interface/Skull"
export const Skull = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSkull ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Slack as StrokeSlack } from "./stroke/interface/Slack"
export const Slack = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSlack ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Slash as StrokeSlash } from "./stroke/interface/Slash"
export const Slash = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSlash ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Slice as StrokeSlice } from "./stroke/interface/Slice"
export const Slice = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSlice ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SlidersHorizontal as StrokeSlidersHorizontal } from "./stroke/interface/SlidersHorizontal"
export const SlidersHorizontal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSlidersHorizontal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SlidersVertical as StrokeSlidersVertical } from "./stroke/interface/SlidersVertical"
export const SlidersVertical = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSlidersVertical ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Smartphone as StrokeSmartphone } from "./stroke/interface/Smartphone"
export const Smartphone = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSmartphone ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SmartphoneCharging as StrokeSmartphoneCharging } from "./stroke/interface/SmartphoneCharging"
export const SmartphoneCharging = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSmartphoneCharging ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SmartphoneNfc as StrokeSmartphoneNfc } from "./stroke/interface/SmartphoneNfc"
export const SmartphoneNfc = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSmartphoneNfc ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Smile as StrokeSmile } from "./stroke/interface/Smile"
export const Smile = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSmile ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SmilePlus as StrokeSmilePlus } from "./stroke/interface/SmilePlus"
export const SmilePlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSmilePlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Snail as StrokeSnail } from "./stroke/interface/Snail"
export const Snail = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSnail ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Snowflake as StrokeSnowflake } from "./stroke/interface/Snowflake"
export const Snowflake = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSnowflake ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SoapDispenserDroplet as StrokeSoapDispenserDroplet } from "./stroke/interface/SoapDispenserDroplet"
export const SoapDispenserDroplet = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSoapDispenserDroplet ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Sofa as StrokeSofa } from "./stroke/interface/Sofa"
export const Sofa = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSofa ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SolarPanel as StrokeSolarPanel } from "./stroke/interface/SolarPanel"
export const SolarPanel = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSolarPanel ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Soup as StrokeSoup } from "./stroke/interface/Soup"
export const Soup = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSoup ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Space as StrokeSpace } from "./stroke/interface/Space"
export const Space = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSpace ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Spade as StrokeSpade } from "./stroke/interface/Spade"
export const Spade = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSpade ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Sparkle as StrokeSparkle } from "./stroke/interface/Sparkle"
export const Sparkle = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSparkle ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Sparkles as StrokeSparkles } from "./stroke/interface/Sparkles"
export const Sparkles = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSparkles ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Speaker as StrokeSpeaker } from "./stroke/interface/Speaker"
export const Speaker = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSpeaker ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Speech as StrokeSpeech } from "./stroke/interface/Speech"
export const Speech = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSpeech ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SpellCheck as StrokeSpellCheck } from "./stroke/interface/SpellCheck"
export const SpellCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSpellCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SpellCheck2 as StrokeSpellCheck2 } from "./stroke/interface/SpellCheck2"
export const SpellCheck2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSpellCheck2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Spline as StrokeSpline } from "./stroke/interface/Spline"
export const Spline = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSpline ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SplinePointer as StrokeSplinePointer } from "./stroke/interface/SplinePointer"
export const SplinePointer = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSplinePointer ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Split as StrokeSplit } from "./stroke/interface/Split"
export const Split = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSplit ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Spool as StrokeSpool } from "./stroke/interface/Spool"
export const Spool = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSpool ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Spotlight as StrokeSpotlight } from "./stroke/interface/Spotlight"
export const Spotlight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSpotlight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SprayCan as StrokeSprayCan } from "./stroke/interface/SprayCan"
export const SprayCan = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSprayCan ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Sprout as StrokeSprout } from "./stroke/interface/Sprout"
export const Sprout = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSprout ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Square as StrokeSquare } from "./stroke/interface/Square"
export const Square = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquare ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareActivity as StrokeSquareActivity } from "./stroke/interface/SquareActivity"
export const SquareActivity = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareActivity ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareArrowDown as StrokeSquareArrowDown } from "./stroke/arrows/SquareArrowDown"
export const SquareArrowDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareArrowDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareArrowDownLeft as StrokeSquareArrowDownLeft } from "./stroke/arrows/SquareArrowDownLeft"
export const SquareArrowDownLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareArrowDownLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareArrowDownRight as StrokeSquareArrowDownRight } from "./stroke/arrows/SquareArrowDownRight"
export const SquareArrowDownRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareArrowDownRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareArrowLeft as StrokeSquareArrowLeft } from "./stroke/arrows/SquareArrowLeft"
export const SquareArrowLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareArrowLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareArrowOutDownLeft as StrokeSquareArrowOutDownLeft } from "./stroke/arrows/SquareArrowOutDownLeft"
export const SquareArrowOutDownLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareArrowOutDownLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareArrowOutDownRight as StrokeSquareArrowOutDownRight } from "./stroke/arrows/SquareArrowOutDownRight"
export const SquareArrowOutDownRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareArrowOutDownRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareArrowOutUpLeft as StrokeSquareArrowOutUpLeft } from "./stroke/arrows/SquareArrowOutUpLeft"
export const SquareArrowOutUpLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareArrowOutUpLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareArrowOutUpRight as StrokeSquareArrowOutUpRight } from "./stroke/arrows/SquareArrowOutUpRight"
export const SquareArrowOutUpRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareArrowOutUpRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareArrowRight as StrokeSquareArrowRight } from "./stroke/arrows/SquareArrowRight"
export const SquareArrowRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareArrowRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareArrowRightEnter as StrokeSquareArrowRightEnter } from "./stroke/arrows/SquareArrowRightEnter"
export const SquareArrowRightEnter = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareArrowRightEnter ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareArrowRightExit as StrokeSquareArrowRightExit } from "./stroke/arrows/SquareArrowRightExit"
export const SquareArrowRightExit = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareArrowRightExit ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareArrowUp as StrokeSquareArrowUp } from "./stroke/arrows/SquareArrowUp"
export const SquareArrowUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareArrowUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareArrowUpLeft as StrokeSquareArrowUpLeft } from "./stroke/arrows/SquareArrowUpLeft"
export const SquareArrowUpLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareArrowUpLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareArrowUpRight as StrokeSquareArrowUpRight } from "./stroke/arrows/SquareArrowUpRight"
export const SquareArrowUpRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareArrowUpRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareAsterisk as StrokeSquareAsterisk } from "./stroke/interface/SquareAsterisk"
export const SquareAsterisk = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareAsterisk ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareBottomDashedScissors as StrokeSquareBottomDashedScissors } from "./stroke/interface/SquareBottomDashedScissors"
export const SquareBottomDashedScissors = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareBottomDashedScissors ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareCenterlineDashedHorizontal as StrokeSquareCenterlineDashedHorizontal } from "./stroke/interface/SquareCenterlineDashedHorizontal"
export const SquareCenterlineDashedHorizontal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareCenterlineDashedHorizontal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareCenterlineDashedVertical as StrokeSquareCenterlineDashedVertical } from "./stroke/interface/SquareCenterlineDashedVertical"
export const SquareCenterlineDashedVertical = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareCenterlineDashedVertical ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareChartGantt as StrokeSquareChartGantt } from "./stroke/interface/SquareChartGantt"
export const SquareChartGantt = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareChartGantt ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareCheck as StrokeSquareCheck } from "./stroke/interface/SquareCheck"
export const SquareCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareCheckBig as StrokeSquareCheckBig } from "./stroke/interface/SquareCheckBig"
export const SquareCheckBig = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareCheckBig ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareChevronDown as StrokeSquareChevronDown } from "./stroke/interface/SquareChevronDown"
export const SquareChevronDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareChevronDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareChevronLeft as StrokeSquareChevronLeft } from "./stroke/interface/SquareChevronLeft"
export const SquareChevronLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareChevronLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareChevronRight as StrokeSquareChevronRight } from "./stroke/interface/SquareChevronRight"
export const SquareChevronRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareChevronRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareChevronUp as StrokeSquareChevronUp } from "./stroke/interface/SquareChevronUp"
export const SquareChevronUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareChevronUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareCode as StrokeSquareCode } from "./stroke/interface/SquareCode"
export const SquareCode = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareCode ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareDashed as StrokeSquareDashed } from "./stroke/interface/SquareDashed"
export const SquareDashed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareDashed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareDashedBottom as StrokeSquareDashedBottom } from "./stroke/interface/SquareDashedBottom"
export const SquareDashedBottom = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareDashedBottom ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareDashedBottomCode as StrokeSquareDashedBottomCode } from "./stroke/interface/SquareDashedBottomCode"
export const SquareDashedBottomCode = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareDashedBottomCode ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareDashedKanban as StrokeSquareDashedKanban } from "./stroke/interface/SquareDashedKanban"
export const SquareDashedKanban = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareDashedKanban ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareDashedMousePointer as StrokeSquareDashedMousePointer } from "./stroke/interface/SquareDashedMousePointer"
export const SquareDashedMousePointer = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareDashedMousePointer ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareDashedTopSolid as StrokeSquareDashedTopSolid } from "./stroke/interface/SquareDashedTopSolid"
export const SquareDashedTopSolid = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareDashedTopSolid ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareDivide as StrokeSquareDivide } from "./stroke/interface/SquareDivide"
export const SquareDivide = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareDivide ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareDot as StrokeSquareDot } from "./stroke/interface/SquareDot"
export const SquareDot = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareDot ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareEqual as StrokeSquareEqual } from "./stroke/interface/SquareEqual"
export const SquareEqual = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareEqual ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareFunction as StrokeSquareFunction } from "./stroke/interface/SquareFunction"
export const SquareFunction = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareFunction ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareKanban as StrokeSquareKanban } from "./stroke/interface/SquareKanban"
export const SquareKanban = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareKanban ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareLibrary as StrokeSquareLibrary } from "./stroke/interface/SquareLibrary"
export const SquareLibrary = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareLibrary ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareM as StrokeSquareM } from "./stroke/interface/SquareM"
export const SquareM = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareM ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareMenu as StrokeSquareMenu } from "./stroke/interface/SquareMenu"
export const SquareMenu = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareMenu ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareMinus as StrokeSquareMinus } from "./stroke/interface/SquareMinus"
export const SquareMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareMousePointer as StrokeSquareMousePointer } from "./stroke/interface/SquareMousePointer"
export const SquareMousePointer = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareMousePointer ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareParking as StrokeSquareParking } from "./stroke/interface/SquareParking"
export const SquareParking = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareParking ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareParkingOff as StrokeSquareParkingOff } from "./stroke/interface/SquareParkingOff"
export const SquareParkingOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareParkingOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquarePause as StrokeSquarePause } from "./stroke/media/SquarePause"
export const SquarePause = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquarePause ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquarePen as StrokeSquarePen } from "./stroke/interface/SquarePen"
export const SquarePen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquarePen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquarePercent as StrokeSquarePercent } from "./stroke/interface/SquarePercent"
export const SquarePercent = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquarePercent ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquarePi as StrokeSquarePi } from "./stroke/interface/SquarePi"
export const SquarePi = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquarePi ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquarePilcrow as StrokeSquarePilcrow } from "./stroke/interface/SquarePilcrow"
export const SquarePilcrow = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquarePilcrow ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquarePlay as StrokeSquarePlay } from "./stroke/media/SquarePlay"
export const SquarePlay = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquarePlay ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquarePlus as StrokeSquarePlus } from "./stroke/interface/SquarePlus"
export const SquarePlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquarePlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquarePower as StrokeSquarePower } from "./stroke/interface/SquarePower"
export const SquarePower = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquarePower ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareRadical as StrokeSquareRadical } from "./stroke/interface/SquareRadical"
export const SquareRadical = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareRadical ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareRoundCorner as StrokeSquareRoundCorner } from "./stroke/interface/SquareRoundCorner"
export const SquareRoundCorner = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareRoundCorner ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareScissors as StrokeSquareScissors } from "./stroke/interface/SquareScissors"
export const SquareScissors = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareScissors ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareSigma as StrokeSquareSigma } from "./stroke/interface/SquareSigma"
export const SquareSigma = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareSigma ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareSlash as StrokeSquareSlash } from "./stroke/interface/SquareSlash"
export const SquareSlash = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareSlash ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareSplitHorizontal as StrokeSquareSplitHorizontal } from "./stroke/interface/SquareSplitHorizontal"
export const SquareSplitHorizontal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareSplitHorizontal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareSplitVertical as StrokeSquareSplitVertical } from "./stroke/interface/SquareSplitVertical"
export const SquareSplitVertical = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareSplitVertical ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareSquare as StrokeSquareSquare } from "./stroke/interface/SquareSquare"
export const SquareSquare = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareSquare ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareStack as StrokeSquareStack } from "./stroke/interface/SquareStack"
export const SquareStack = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareStack ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareStar as StrokeSquareStar } from "./stroke/favorites/SquareStar"
export const SquareStar = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareStar ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareStop as StrokeSquareStop } from "./stroke/interface/SquareStop"
export const SquareStop = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareStop ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareTerminal as StrokeSquareTerminal } from "./stroke/interface/SquareTerminal"
export const SquareTerminal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareTerminal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareUser as StrokeSquareUser } from "./stroke/users/SquareUser"
export const SquareUser = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareUser ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareUserRound as StrokeSquareUserRound } from "./stroke/users/SquareUserRound"
export const SquareUserRound = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareUserRound ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquareX as StrokeSquareX } from "./stroke/interface/SquareX"
export const SquareX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquareX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquaresExclude as StrokeSquaresExclude } from "./stroke/interface/SquaresExclude"
export const SquaresExclude = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquaresExclude ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquaresIntersect as StrokeSquaresIntersect } from "./stroke/interface/SquaresIntersect"
export const SquaresIntersect = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquaresIntersect ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquaresSubtract as StrokeSquaresSubtract } from "./stroke/interface/SquaresSubtract"
export const SquaresSubtract = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquaresSubtract ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquaresUnite as StrokeSquaresUnite } from "./stroke/interface/SquaresUnite"
export const SquaresUnite = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquaresUnite ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Squircle as StrokeSquircle } from "./stroke/interface/Squircle"
export const Squircle = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquircle ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SquircleDashed as StrokeSquircleDashed } from "./stroke/interface/SquircleDashed"
export const SquircleDashed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquircleDashed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Squirrel as StrokeSquirrel } from "./stroke/interface/Squirrel"
export const Squirrel = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSquirrel ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Stamp as StrokeStamp } from "./stroke/interface/Stamp"
export const Stamp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeStamp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Star as StrokeStar } from "./stroke/favorites/Star"
export const Star = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeStar ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { StarHalf as StrokeStarHalf } from "./stroke/favorites/StarHalf"
export const StarHalf = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeStarHalf ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { StarOff as StrokeStarOff } from "./stroke/favorites/StarOff"
export const StarOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeStarOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { StepBack as StrokeStepBack } from "./stroke/interface/StepBack"
export const StepBack = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeStepBack ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { StepForward as StrokeStepForward } from "./stroke/interface/StepForward"
export const StepForward = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeStepForward ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Stethoscope as StrokeStethoscope } from "./stroke/interface/Stethoscope"
export const Stethoscope = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeStethoscope ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Sticker as StrokeSticker } from "./stroke/interface/Sticker"
export const Sticker = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSticker ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { StickyNote as StrokeStickyNote } from "./stroke/interface/StickyNote"
export const StickyNote = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeStickyNote ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Stone as StrokeStone } from "./stroke/interface/Stone"
export const Stone = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeStone ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Store as StrokeStore } from "./stroke/interface/Store"
export const Store = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeStore ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { StretchHorizontal as StrokeStretchHorizontal } from "./stroke/interface/StretchHorizontal"
export const StretchHorizontal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeStretchHorizontal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { StretchVertical as StrokeStretchVertical } from "./stroke/interface/StretchVertical"
export const StretchVertical = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeStretchVertical ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Strikethrough as StrokeStrikethrough } from "./stroke/interface/Strikethrough"
export const Strikethrough = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeStrikethrough ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Subscript as StrokeSubscript } from "./stroke/interface/Subscript"
export const Subscript = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSubscript ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Sun as StrokeSun } from "./stroke/interface/Sun"
export const Sun = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSun ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SunDim as StrokeSunDim } from "./stroke/interface/SunDim"
export const SunDim = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSunDim ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SunMedium as StrokeSunMedium } from "./stroke/interface/SunMedium"
export const SunMedium = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSunMedium ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SunMoon as StrokeSunMoon } from "./stroke/interface/SunMoon"
export const SunMoon = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSunMoon ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SunSnow as StrokeSunSnow } from "./stroke/interface/SunSnow"
export const SunSnow = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSunSnow ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Sunrise as StrokeSunrise } from "./stroke/interface/Sunrise"
export const Sunrise = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSunrise ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Sunset as StrokeSunset } from "./stroke/interface/Sunset"
export const Sunset = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSunset ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Superscript as StrokeSuperscript } from "./stroke/interface/Superscript"
export const Superscript = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSuperscript ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SwatchBook as StrokeSwatchBook } from "./stroke/interface/SwatchBook"
export const SwatchBook = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSwatchBook ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SwissFranc as StrokeSwissFranc } from "./stroke/interface/SwissFranc"
export const SwissFranc = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSwissFranc ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { SwitchCamera as StrokeSwitchCamera } from "./stroke/interface/SwitchCamera"
export const SwitchCamera = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSwitchCamera ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Sword as StrokeSword } from "./stroke/interface/Sword"
export const Sword = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSword ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Swords as StrokeSwords } from "./stroke/interface/Swords"
export const Swords = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSwords ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Syringe as StrokeSyringe } from "./stroke/interface/Syringe"
export const Syringe = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeSyringe ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Table as StrokeTable } from "./stroke/interface/Table"
export const Table = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTable ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Table2 as StrokeTable2 } from "./stroke/interface/Table2"
export const Table2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTable2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TableCellsMerge as StrokeTableCellsMerge } from "./stroke/interface/TableCellsMerge"
export const TableCellsMerge = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTableCellsMerge ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TableCellsSplit as StrokeTableCellsSplit } from "./stroke/interface/TableCellsSplit"
export const TableCellsSplit = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTableCellsSplit ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TableColumnsSplit as StrokeTableColumnsSplit } from "./stroke/interface/TableColumnsSplit"
export const TableColumnsSplit = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTableColumnsSplit ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TableOfContents as StrokeTableOfContents } from "./stroke/interface/TableOfContents"
export const TableOfContents = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTableOfContents ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TableProperties as StrokeTableProperties } from "./stroke/interface/TableProperties"
export const TableProperties = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTableProperties ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TableRowsSplit as StrokeTableRowsSplit } from "./stroke/interface/TableRowsSplit"
export const TableRowsSplit = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTableRowsSplit ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Tablet as StrokeTablet } from "./stroke/interface/Tablet"
export const Tablet = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTablet ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TabletSmartphone as StrokeTabletSmartphone } from "./stroke/interface/TabletSmartphone"
export const TabletSmartphone = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTabletSmartphone ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Tablets as StrokeTablets } from "./stroke/interface/Tablets"
export const Tablets = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTablets ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Tag as StrokeTag } from "./stroke/interface/Tag"
export const Tag = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTag ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Tags as StrokeTags } from "./stroke/interface/Tags"
export const Tags = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTags ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Tally1 as StrokeTally1 } from "./stroke/interface/Tally1"
export const Tally1 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTally1 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Tally2 as StrokeTally2 } from "./stroke/interface/Tally2"
export const Tally2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTally2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Tally3 as StrokeTally3 } from "./stroke/interface/Tally3"
export const Tally3 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTally3 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Tally4 as StrokeTally4 } from "./stroke/interface/Tally4"
export const Tally4 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTally4 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Tally5 as StrokeTally5 } from "./stroke/interface/Tally5"
export const Tally5 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTally5 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Tangent as StrokeTangent } from "./stroke/interface/Tangent"
export const Tangent = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTangent ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Target as StrokeTarget } from "./stroke/interface/Target"
export const Target = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTarget ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Telescope as StrokeTelescope } from "./stroke/interface/Telescope"
export const Telescope = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTelescope ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Tent as StrokeTent } from "./stroke/interface/Tent"
export const Tent = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTent ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TentTree as StrokeTentTree } from "./stroke/interface/TentTree"
export const TentTree = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTentTree ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Terminal as StrokeTerminal } from "./stroke/interface/Terminal"
export const Terminal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTerminal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TestTube as StrokeTestTube } from "./stroke/interface/TestTube"
export const TestTube = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTestTube ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TestTubeDiagonal as StrokeTestTubeDiagonal } from "./stroke/interface/TestTubeDiagonal"
export const TestTubeDiagonal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTestTubeDiagonal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TestTubes as StrokeTestTubes } from "./stroke/interface/TestTubes"
export const TestTubes = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTestTubes ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Text as StrokeText } from "./stroke/interface/Text"
export const Text = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeText ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TextAlignCenter as StrokeTextAlignCenter } from "./stroke/interface/TextAlignCenter"
export const TextAlignCenter = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTextAlignCenter ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TextAlignEnd as StrokeTextAlignEnd } from "./stroke/interface/TextAlignEnd"
export const TextAlignEnd = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTextAlignEnd ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TextAlignJustify as StrokeTextAlignJustify } from "./stroke/interface/TextAlignJustify"
export const TextAlignJustify = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTextAlignJustify ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TextAlignStart as StrokeTextAlignStart } from "./stroke/favorites/TextAlignStart"
export const TextAlignStart = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTextAlignStart ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TextCursor as StrokeTextCursor } from "./stroke/interface/TextCursor"
export const TextCursor = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTextCursor ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TextCursorInput as StrokeTextCursorInput } from "./stroke/interface/TextCursorInput"
export const TextCursorInput = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTextCursorInput ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TextInitial as StrokeTextInitial } from "./stroke/interface/TextInitial"
export const TextInitial = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTextInitial ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TextQuote as StrokeTextQuote } from "./stroke/interface/TextQuote"
export const TextQuote = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTextQuote ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TextSearch as StrokeTextSearch } from "./stroke/tools/TextSearch"
export const TextSearch = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTextSearch ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TextSelect as StrokeTextSelect } from "./stroke/interface/TextSelect"
export const TextSelect = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTextSelect ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TextWrap as StrokeTextWrap } from "./stroke/interface/TextWrap"
export const TextWrap = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTextWrap ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Theater as StrokeTheater } from "./stroke/interface/Theater"
export const Theater = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTheater ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Thermometer as StrokeThermometer } from "./stroke/interface/Thermometer"
export const Thermometer = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeThermometer ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ThermometerSnowflake as StrokeThermometerSnowflake } from "./stroke/interface/ThermometerSnowflake"
export const ThermometerSnowflake = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeThermometerSnowflake ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ThermometerSun as StrokeThermometerSun } from "./stroke/interface/ThermometerSun"
export const ThermometerSun = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeThermometerSun ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ThumbsDown as StrokeThumbsDown } from "./stroke/interface/ThumbsDown"
export const ThumbsDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeThumbsDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ThumbsUp as StrokeThumbsUp } from "./stroke/interface/ThumbsUp"
export const ThumbsUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeThumbsUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Ticket as StrokeTicket } from "./stroke/interface/Ticket"
export const Ticket = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTicket ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TicketCheck as StrokeTicketCheck } from "./stroke/interface/TicketCheck"
export const TicketCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTicketCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TicketMinus as StrokeTicketMinus } from "./stroke/interface/TicketMinus"
export const TicketMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTicketMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TicketPercent as StrokeTicketPercent } from "./stroke/interface/TicketPercent"
export const TicketPercent = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTicketPercent ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TicketPlus as StrokeTicketPlus } from "./stroke/interface/TicketPlus"
export const TicketPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTicketPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TicketSlash as StrokeTicketSlash } from "./stroke/interface/TicketSlash"
export const TicketSlash = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTicketSlash ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TicketX as StrokeTicketX } from "./stroke/interface/TicketX"
export const TicketX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTicketX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Tickets as StrokeTickets } from "./stroke/interface/Tickets"
export const Tickets = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTickets ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TicketsPlane as StrokeTicketsPlane } from "./stroke/interface/TicketsPlane"
export const TicketsPlane = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTicketsPlane ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Timer as StrokeTimer } from "./stroke/time/Timer"
export const Timer = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTimer ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TimerOff as StrokeTimerOff } from "./stroke/time/TimerOff"
export const TimerOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTimerOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TimerReset as StrokeTimerReset } from "./stroke/time/TimerReset"
export const TimerReset = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTimerReset ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ToggleLeft as StrokeToggleLeft } from "./stroke/interface/ToggleLeft"
export const ToggleLeft = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeToggleLeft ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ToggleRight as StrokeToggleRight } from "./stroke/interface/ToggleRight"
export const ToggleRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeToggleRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Toilet as StrokeToilet } from "./stroke/interface/Toilet"
export const Toilet = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeToilet ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ToolCase as StrokeToolCase } from "./stroke/interface/ToolCase"
export const ToolCase = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeToolCase ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Toolbox as StrokeToolbox } from "./stroke/interface/Toolbox"
export const Toolbox = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeToolbox ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Tornado as StrokeTornado } from "./stroke/interface/Tornado"
export const Tornado = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTornado ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Torus as StrokeTorus } from "./stroke/interface/Torus"
export const Torus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTorus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Touchpad as StrokeTouchpad } from "./stroke/interface/Touchpad"
export const Touchpad = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTouchpad ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TouchpadOff as StrokeTouchpadOff } from "./stroke/interface/TouchpadOff"
export const TouchpadOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTouchpadOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TowelRack as StrokeTowelRack } from "./stroke/interface/TowelRack"
export const TowelRack = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTowelRack ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TowerControl as StrokeTowerControl } from "./stroke/interface/TowerControl"
export const TowerControl = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTowerControl ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ToyBrick as StrokeToyBrick } from "./stroke/interface/ToyBrick"
export const ToyBrick = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeToyBrick ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Tractor as StrokeTractor } from "./stroke/interface/Tractor"
export const Tractor = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTractor ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TrafficCone as StrokeTrafficCone } from "./stroke/interface/TrafficCone"
export const TrafficCone = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTrafficCone ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TrainFront as StrokeTrainFront } from "./stroke/interface/TrainFront"
export const TrainFront = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTrainFront ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TrainFrontTunnel as StrokeTrainFrontTunnel } from "./stroke/interface/TrainFrontTunnel"
export const TrainFrontTunnel = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTrainFrontTunnel ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TrainTrack as StrokeTrainTrack } from "./stroke/interface/TrainTrack"
export const TrainTrack = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTrainTrack ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TramFront as StrokeTramFront } from "./stroke/interface/TramFront"
export const TramFront = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTramFront ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Transgender as StrokeTransgender } from "./stroke/interface/Transgender"
export const Transgender = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTransgender ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Trash as StrokeTrash } from "./stroke/interface/Trash"
export const Trash = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTrash ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Trash2 as StrokeTrash2 } from "./stroke/interface/Trash2"
export const Trash2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTrash2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TreeDeciduous as StrokeTreeDeciduous } from "./stroke/interface/TreeDeciduous"
export const TreeDeciduous = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTreeDeciduous ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TreePalm as StrokeTreePalm } from "./stroke/interface/TreePalm"
export const TreePalm = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTreePalm ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TreePine as StrokeTreePine } from "./stroke/interface/TreePine"
export const TreePine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTreePine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Trees as StrokeTrees } from "./stroke/interface/Trees"
export const Trees = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTrees ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Trello as StrokeTrello } from "./stroke/interface/Trello"
export const Trello = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTrello ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TrendingDown as StrokeTrendingDown } from "./stroke/interface/TrendingDown"
export const TrendingDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTrendingDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TrendingUp as StrokeTrendingUp } from "./stroke/interface/TrendingUp"
export const TrendingUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTrendingUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TrendingUpDown as StrokeTrendingUpDown } from "./stroke/interface/TrendingUpDown"
export const TrendingUpDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTrendingUpDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Triangle as StrokeTriangle } from "./stroke/interface/Triangle"
export const Triangle = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTriangle ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TriangleAlert as StrokeTriangleAlert } from "./stroke/interface/TriangleAlert"
export const TriangleAlert = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTriangleAlert ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TriangleDashed as StrokeTriangleDashed } from "./stroke/interface/TriangleDashed"
export const TriangleDashed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTriangleDashed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TriangleRight as StrokeTriangleRight } from "./stroke/interface/TriangleRight"
export const TriangleRight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTriangleRight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Trophy as StrokeTrophy } from "./stroke/interface/Trophy"
export const Trophy = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTrophy ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Truck as StrokeTruck } from "./stroke/interface/Truck"
export const Truck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTruck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TruckElectric as StrokeTruckElectric } from "./stroke/interface/TruckElectric"
export const TruckElectric = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTruckElectric ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TurkishLira as StrokeTurkishLira } from "./stroke/interface/TurkishLira"
export const TurkishLira = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTurkishLira ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Turntable as StrokeTurntable } from "./stroke/interface/Turntable"
export const Turntable = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTurntable ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Turtle as StrokeTurtle } from "./stroke/interface/Turtle"
export const Turtle = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTurtle ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Tv as StrokeTv } from "./stroke/interface/Tv"
export const Tv = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTv ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TvMinimal as StrokeTvMinimal } from "./stroke/interface/TvMinimal"
export const TvMinimal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTvMinimal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TvMinimalPlay as StrokeTvMinimalPlay } from "./stroke/media/TvMinimalPlay"
export const TvMinimalPlay = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTvMinimalPlay ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Twitch as StrokeTwitch } from "./stroke/interface/Twitch"
export const Twitch = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTwitch ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Twitter as StrokeTwitter } from "./stroke/interface/Twitter"
export const Twitter = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTwitter ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Type as StrokeType } from "./stroke/interface/Type"
export const Type = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeType ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { TypeOutline as StrokeTypeOutline } from "./stroke/interface/TypeOutline"
export const TypeOutline = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeTypeOutline ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Umbrella as StrokeUmbrella } from "./stroke/interface/Umbrella"
export const Umbrella = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUmbrella ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UmbrellaOff as StrokeUmbrellaOff } from "./stroke/interface/UmbrellaOff"
export const UmbrellaOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUmbrellaOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Underline as StrokeUnderline } from "./stroke/interface/Underline"
export const Underline = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUnderline ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Undo as StrokeUndo } from "./stroke/interface/Undo"
export const Undo = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUndo ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Undo2 as StrokeUndo2 } from "./stroke/interface/Undo2"
export const Undo2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUndo2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UndoDot as StrokeUndoDot } from "./stroke/interface/UndoDot"
export const UndoDot = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUndoDot ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UnfoldHorizontal as StrokeUnfoldHorizontal } from "./stroke/interface/UnfoldHorizontal"
export const UnfoldHorizontal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUnfoldHorizontal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UnfoldVertical as StrokeUnfoldVertical } from "./stroke/interface/UnfoldVertical"
export const UnfoldVertical = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUnfoldVertical ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Ungroup as StrokeUngroup } from "./stroke/interface/Ungroup"
export const Ungroup = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUngroup ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { University as StrokeUniversity } from "./stroke/interface/University"
export const University = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUniversity ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Unlink as StrokeUnlink } from "./stroke/interface/Unlink"
export const Unlink = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUnlink ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Unlink2 as StrokeUnlink2 } from "./stroke/interface/Unlink2"
export const Unlink2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUnlink2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Unplug as StrokeUnplug } from "./stroke/interface/Unplug"
export const Unplug = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUnplug ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Upload as StrokeUpload } from "./stroke/interface/Upload"
export const Upload = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUpload ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Usb as StrokeUsb } from "./stroke/interface/Usb"
export const Usb = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUsb ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { User as StrokeUser } from "./stroke/users/User"
export const User = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUser ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UserCheck as StrokeUserCheck } from "./stroke/users/UserCheck"
export const UserCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUserCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UserCog as StrokeUserCog } from "./stroke/users/UserCog"
export const UserCog = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUserCog ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UserKey as StrokeUserKey } from "./stroke/users/UserKey"
export const UserKey = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUserKey ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UserLock as StrokeUserLock } from "./stroke/users/UserLock"
export const UserLock = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUserLock ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UserMinus as StrokeUserMinus } from "./stroke/users/UserMinus"
export const UserMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUserMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UserPen as StrokeUserPen } from "./stroke/users/UserPen"
export const UserPen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUserPen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UserPlus as StrokeUserPlus } from "./stroke/users/UserPlus"
export const UserPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUserPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UserRound as StrokeUserRound } from "./stroke/users/UserRound"
export const UserRound = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUserRound ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UserRoundCheck as StrokeUserRoundCheck } from "./stroke/users/UserRoundCheck"
export const UserRoundCheck = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUserRoundCheck ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UserRoundCog as StrokeUserRoundCog } from "./stroke/users/UserRoundCog"
export const UserRoundCog = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUserRoundCog ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UserRoundKey as StrokeUserRoundKey } from "./stroke/users/UserRoundKey"
export const UserRoundKey = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUserRoundKey ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UserRoundMinus as StrokeUserRoundMinus } from "./stroke/users/UserRoundMinus"
export const UserRoundMinus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUserRoundMinus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UserRoundPen as StrokeUserRoundPen } from "./stroke/users/UserRoundPen"
export const UserRoundPen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUserRoundPen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UserRoundPlus as StrokeUserRoundPlus } from "./stroke/users/UserRoundPlus"
export const UserRoundPlus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUserRoundPlus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UserRoundSearch as StrokeUserRoundSearch } from "./stroke/users/UserRoundSearch"
export const UserRoundSearch = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUserRoundSearch ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UserRoundX as StrokeUserRoundX } from "./stroke/users/UserRoundX"
export const UserRoundX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUserRoundX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UserSearch as StrokeUserSearch } from "./stroke/users/UserSearch"
export const UserSearch = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUserSearch ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UserStar as StrokeUserStar } from "./stroke/users/UserStar"
export const UserStar = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUserStar ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UserX as StrokeUserX } from "./stroke/users/UserX"
export const UserX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUserX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Users as StrokeUsers } from "./stroke/users/Users"
export const Users = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUsers ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UsersRound as StrokeUsersRound } from "./stroke/users/UsersRound"
export const UsersRound = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUsersRound ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Utensils as StrokeUtensils } from "./stroke/interface/Utensils"
export const Utensils = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUtensils ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UtensilsCrossed as StrokeUtensilsCrossed } from "./stroke/interface/UtensilsCrossed"
export const UtensilsCrossed = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUtensilsCrossed ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { UtilityPole as StrokeUtilityPole } from "./stroke/interface/UtilityPole"
export const UtilityPole = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeUtilityPole ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Van as StrokeVan } from "./stroke/interface/Van"
export const Van = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeVan ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Variable as StrokeVariable } from "./stroke/interface/Variable"
export const Variable = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeVariable ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Vault as StrokeVault } from "./stroke/interface/Vault"
export const Vault = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeVault ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { VectorSquare as StrokeVectorSquare } from "./stroke/interface/VectorSquare"
export const VectorSquare = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeVectorSquare ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Vegan as StrokeVegan } from "./stroke/interface/Vegan"
export const Vegan = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeVegan ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { VenetianMask as StrokeVenetianMask } from "./stroke/interface/VenetianMask"
export const VenetianMask = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeVenetianMask ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Venus as StrokeVenus } from "./stroke/interface/Venus"
export const Venus = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeVenus ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { VenusAndMars as StrokeVenusAndMars } from "./stroke/interface/VenusAndMars"
export const VenusAndMars = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeVenusAndMars ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Vibrate as StrokeVibrate } from "./stroke/interface/Vibrate"
export const Vibrate = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeVibrate ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { VibrateOff as StrokeVibrateOff } from "./stroke/interface/VibrateOff"
export const VibrateOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeVibrateOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Video as StrokeVideo } from "./stroke/interface/Video"
export const Video = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeVideo ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { VideoOff as StrokeVideoOff } from "./stroke/interface/VideoOff"
export const VideoOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeVideoOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Videotape as StrokeVideotape } from "./stroke/interface/Videotape"
export const Videotape = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeVideotape ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { View as StrokeView } from "./stroke/interface/View"
export const View = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeView ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Voicemail as StrokeVoicemail } from "./stroke/communication/Voicemail"
export const Voicemail = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeVoicemail ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Volleyball as StrokeVolleyball } from "./stroke/interface/Volleyball"
export const Volleyball = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeVolleyball ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Volume as StrokeVolume } from "./stroke/interface/Volume"
export const Volume = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeVolume ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Volume1 as StrokeVolume1 } from "./stroke/interface/Volume1"
export const Volume1 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeVolume1 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Volume2 as StrokeVolume2 } from "./stroke/interface/Volume2"
export const Volume2 = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeVolume2 ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { VolumeOff as StrokeVolumeOff } from "./stroke/interface/VolumeOff"
export const VolumeOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeVolumeOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { VolumeX as StrokeVolumeX } from "./stroke/interface/VolumeX"
export const VolumeX = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeVolumeX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Vote as StrokeVote } from "./stroke/interface/Vote"
export const Vote = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeVote ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Wallet as StrokeWallet } from "./stroke/interface/Wallet"
export const Wallet = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWallet ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { WalletCards as StrokeWalletCards } from "./stroke/interface/WalletCards"
export const WalletCards = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWalletCards ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { WalletMinimal as StrokeWalletMinimal } from "./stroke/interface/WalletMinimal"
export const WalletMinimal = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWalletMinimal ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Wallpaper as StrokeWallpaper } from "./stroke/interface/Wallpaper"
export const Wallpaper = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWallpaper ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Wand as StrokeWand } from "./stroke/interface/Wand"
export const Wand = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWand ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { WandSparkles as StrokeWandSparkles } from "./stroke/interface/WandSparkles"
export const WandSparkles = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWandSparkles ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Warehouse as StrokeWarehouse } from "./stroke/interface/Warehouse"
export const Warehouse = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWarehouse ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { WashingMachine as StrokeWashingMachine } from "./stroke/interface/WashingMachine"
export const WashingMachine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWashingMachine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Watch as StrokeWatch } from "./stroke/interface/Watch"
export const Watch = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWatch ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Waves as StrokeWaves } from "./stroke/interface/Waves"
export const Waves = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWaves ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { WavesArrowDown as StrokeWavesArrowDown } from "./stroke/arrows/WavesArrowDown"
export const WavesArrowDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWavesArrowDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { WavesArrowUp as StrokeWavesArrowUp } from "./stroke/arrows/WavesArrowUp"
export const WavesArrowUp = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWavesArrowUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { WavesLadder as StrokeWavesLadder } from "./stroke/interface/WavesLadder"
export const WavesLadder = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWavesLadder ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Waypoints as StrokeWaypoints } from "./stroke/interface/Waypoints"
export const Waypoints = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWaypoints ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Webcam as StrokeWebcam } from "./stroke/interface/Webcam"
export const Webcam = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWebcam ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Webhook as StrokeWebhook } from "./stroke/interface/Webhook"
export const Webhook = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWebhook ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { WebhookOff as StrokeWebhookOff } from "./stroke/interface/WebhookOff"
export const WebhookOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWebhookOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Weight as StrokeWeight } from "./stroke/interface/Weight"
export const Weight = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWeight ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { WeightTilde as StrokeWeightTilde } from "./stroke/interface/WeightTilde"
export const WeightTilde = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWeightTilde ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Wheat as StrokeWheat } from "./stroke/interface/Wheat"
export const Wheat = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWheat ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { WheatOff as StrokeWheatOff } from "./stroke/interface/WheatOff"
export const WheatOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWheatOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { WholeWord as StrokeWholeWord } from "./stroke/interface/WholeWord"
export const WholeWord = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWholeWord ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Wifi as StrokeWifi } from "./stroke/interface/Wifi"
export const Wifi = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWifi ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { WifiCog as StrokeWifiCog } from "./stroke/tools/WifiCog"
export const WifiCog = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWifiCog ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { WifiHigh as StrokeWifiHigh } from "./stroke/interface/WifiHigh"
export const WifiHigh = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWifiHigh ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { WifiLow as StrokeWifiLow } from "./stroke/interface/WifiLow"
export const WifiLow = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWifiLow ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { WifiOff as StrokeWifiOff } from "./stroke/interface/WifiOff"
export const WifiOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWifiOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { WifiPen as StrokeWifiPen } from "./stroke/interface/WifiPen"
export const WifiPen = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWifiPen ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { WifiSync as StrokeWifiSync } from "./stroke/interface/WifiSync"
export const WifiSync = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWifiSync ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { WifiZero as StrokeWifiZero } from "./stroke/interface/WifiZero"
export const WifiZero = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWifiZero ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Wind as StrokeWind } from "./stroke/interface/Wind"
export const Wind = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWind ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { WindArrowDown as StrokeWindArrowDown } from "./stroke/arrows/WindArrowDown"
export const WindArrowDown = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWindArrowDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Wine as StrokeWine } from "./stroke/interface/Wine"
export const Wine = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWine ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { WineOff as StrokeWineOff } from "./stroke/interface/WineOff"
export const WineOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWineOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Workflow as StrokeWorkflow } from "./stroke/interface/Workflow"
export const Workflow = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWorkflow ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Worm as StrokeWorm } from "./stroke/interface/Worm"
export const Worm = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWorm ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { WrapText as StrokeWrapText } from "./stroke/interface/WrapText"
export const WrapText = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWrapText ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Wrench as StrokeWrench } from "./stroke/interface/Wrench"
export const Wrench = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeWrench ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { X as StrokeX } from "./stroke/interface/X"
export const X = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeX ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { XLineTop as StrokeXLineTop } from "./stroke/interface/XLineTop"
export const XLineTop = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeXLineTop ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Youtube as StrokeYoutube } from "./stroke/interface/Youtube"
export const Youtube = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeYoutube ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { Zap as StrokeZap } from "./stroke/interface/Zap"
export const Zap = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeZap ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ZapOff as StrokeZapOff } from "./stroke/interface/ZapOff"
export const ZapOff = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeZapOff ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ZoomIn as StrokeZoomIn } from "./stroke/interface/ZoomIn"
export const ZoomIn = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeZoomIn ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { ZoomOut as StrokeZoomOut } from "./stroke/interface/ZoomOut"
export const ZoomOut = React.forwardRef(
  ({ variant = "stroke", ...props }, ref) => {
    if (variant === "stroke") return <StrokeZoomOut ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AArrowDown as SolidAArrowDown } from "./solid/interface/AArrowDown"
export const AArrowDown = React.forwardRef(
  ({ variant = "solid", ...props }, ref) => {
    if (variant === "solid") return <SolidAArrowDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AArrowUp as SolidAArrowUp } from "./solid/arrows/AArrowUp"
export const AArrowUp = React.forwardRef(
  ({ variant = "solid", ...props }, ref) => {
    if (variant === "solid") return <SolidAArrowUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AArrowDown as PixelAArrowDown } from "./pixel/interface/AArrowDown"
export const AArrowDown = React.forwardRef(
  ({ variant = "pixel", ...props }, ref) => {
    if (variant === "pixel") return <PixelAArrowDown ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AArrowUp as PixelAArrowUp } from "./pixel/arrows/AArrowUp"
export const AArrowUp = React.forwardRef(
  ({ variant = "pixel", ...props }, ref) => {
    if (variant === "pixel") return <PixelAArrowUp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { AppStack as GlassAppStack } from "./glass/app/AppStack"
export const AppStack = React.forwardRef(
  ({ variant = "glass", ...props }, ref) => {
    if (variant === "glass") return <GlassAppStack ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


import { App as GlassApp } from "./glass/arrows/App"
export const App = React.forwardRef(
  ({ variant = "glass", ...props }, ref) => {
    if (variant === "glass") return <GlassApp ref={ref} {...props} />
    return null // will fallback to other variants if needed
  }
)


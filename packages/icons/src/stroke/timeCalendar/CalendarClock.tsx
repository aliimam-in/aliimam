import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CalendarClock: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CalendarClock(
  {
    color = "currentColor",
    fill,
    size = 24,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    strokeDasharray,
    opacity,
    className,
    ...props
  },
  forwardedRef,
) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      strokeDasharray={strokeDasharray}
      opacity={opacity}
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M16 14V16.2L17.6 17.2M16 2V6M21 7.5V6C21 5.47 20.789 4.961 20.414 4.586 20.039 4.211 19.53 4 19 4H5C4.47 4 3.961 4.211 3.586 4.586 3.211 4.961 3 5.47 3 6V20C3 20.53 3.211 21.039 3.586 21.414 3.961 21.789 4.47 22 5 22H8.5M3 10H8M8 2V6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CalendarClock.displayName = "CalendarClock";

CalendarClock.metadata = {
  name: "CalendarClock",
  category: "stroke/timeCalendar",
  tags: ["calendar", "clock", "icon"],
  description: "CalendarClock icon from stroke/timeCalendar category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CalendarClock;

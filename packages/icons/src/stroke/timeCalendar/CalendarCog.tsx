import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CalendarCog: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CalendarCog(
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
        d="M15.228 16.852 14.305 16.469M15.228 19.148 14.305 19.531M16 2V6M16.47 14.305 16.852 15.228M16.852 20.772 16.469 21.696M19.148 15.228 19.531 14.305M19.53 21.696 19.148 20.772M20.772 16.852 21.696 16.469M20.772 19.148 21.696 19.531M21 10.592V6C21 5.47 20.789 4.961 20.414 4.586 20.039 4.211 19.53 4 19 4H5C4.47 4 3.961 4.211 3.586 4.586 3.211 4.961 3 5.47 3 6V20C3 20.53 3.211 21.039 3.586 21.414 3.961 21.789 4.47 22 5 22H11M3 10H21M8 2V6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CalendarCog.displayName = "CalendarCog";

CalendarCog.metadata = {
  name: "CalendarCog",
  category: "stroke/timeCalendar",
  tags: ["calendar", "cog", "icon"],
  description: "CalendarCog icon from stroke/timeCalendar category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CalendarCog;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CalendarRange: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CalendarRange(
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
        d="M19 4H5C3.895 4 3 4.895 3 6V20C3 21.105 3.895 22 5 22H19C20.105 22 21 21.105 21 20V6C21 4.895 20.105 4 19 4ZM16 2V6M3 10H21M8 2V6M17 14H11M13 18H7M7 14H7.01M17 18H17.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CalendarRange.displayName = "CalendarRange";

CalendarRange.metadata = {
  name: "CalendarRange",
  category: "stroke/timeCalendar",
  tags: ["calendar", "range", "icon"],
  description: "CalendarRange icon from stroke/timeCalendar category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CalendarRange;

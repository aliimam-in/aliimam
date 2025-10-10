import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CalendarCheck: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CalendarCheck(
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
        d="M8 2V6M16 2V6M19 4H5C3.895 4 3 4.895 3 6V20C3 21.105 3.895 22 5 22H19C20.105 22 21 21.105 21 20V6C21 4.895 20.105 4 19 4ZM3 10H21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 16L11 18L15 14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CalendarCheck.displayName = "CalendarCheck";

CalendarCheck.metadata = {
  name: "CalendarCheck",
  category: "stroke/timeCalendar",
  tags: ["calendar", "check", "icon"],
  description: "CalendarCheck icon from stroke/timeCalendar category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CalendarCheck;

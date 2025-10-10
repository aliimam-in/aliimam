import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Calendar1: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Calendar1(
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
        d="M11 14H12V18M16 2V6M3 10H21M8 2V6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Calendar1.displayName = "Calendar1";

Calendar1.metadata = {
  name: "Calendar1",
  category: "stroke/timeCalendar",
  tags: ["calendar", "icon"],
  description: "Calendar1 icon from stroke/timeCalendar category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Calendar1;

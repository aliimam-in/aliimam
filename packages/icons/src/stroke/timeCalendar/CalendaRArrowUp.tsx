import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CalendaRArrowUp: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CalendaRArrowUp(
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
        d="M14 18 18 14 22 18M16 2V6M18 22V14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 11.343V6C21 5.47 20.789 4.961 20.414 4.586 20.039 4.211 19.53 4 19 4H5C4.47 4 3.961 4.211 3.586 4.586 3.211 4.961 3 5.47 3 6V20C3 20.53 3.211 21.039 3.586 21.414 3.961 21.789 4.47 22 5 22H14M3 10H21M8 2V6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CalendaRArrowUp.displayName = "CalendaRArrowUp";

CalendaRArrowUp.metadata = {
  name: "CalendaRArrowUp",
  category: "stroke/timeCalendar",
  tags: ["calenda", "rarrow", "up", "icon"],
  description: "CalendaRArrowUp icon from stroke/timeCalendar category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CalendaRArrowUp;

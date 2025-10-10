import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CalendarOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CalendarOff(
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
        d="M4.2 4.2C3.848 4.353 3.548 4.605 3.336 4.924 3.123 5.243 3.006 5.616 3 6V20C3 20.53 3.211 21.039 3.586 21.414 3.961 21.789 4.47 22 5 22H19C19.385 21.999 19.761 21.887 20.084 21.678 20.407 21.469 20.662 21.171 20.82 20.82M21 15.5V6C21 5.47 20.789 4.961 20.414 4.586 20.039 4.211 19.53 4 19 4H9.5M16 2V6M3 10H10M21 10H15.5M2 2 22 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CalendarOff.displayName = "CalendarOff";

CalendarOff.metadata = {
  name: "CalendarOff",
  category: "stroke/timeCalendar",
  tags: ["calendar", "off", "icon"],
  description: "CalendarOff icon from stroke/timeCalendar category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CalendarOff;

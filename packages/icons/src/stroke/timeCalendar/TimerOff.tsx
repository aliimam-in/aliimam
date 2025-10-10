import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TimerOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TimerOff(
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
        d="M10 2H14M4.6 11C3.994 12.456 3.832 14.059 4.135 15.607 4.437 17.155 5.191 18.579 6.3 19.7 7.421 20.809 8.845 21.563 10.393 21.865 11.941 22.168 13.544 22.006 15 21.4M7.4 7.4C8.957 6.32 10.847 5.827 12.733 6.01 14.62 6.193 16.38 7.04 17.7 8.4 19.019 9.727 19.831 11.474 19.996 13.337 20.16 15.201 19.666 17.063 18.6 18.6M2 2 22 22M12 12V10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TimerOff.displayName = "TimerOff";

TimerOff.metadata = {
  name: "TimerOff",
  category: "stroke/timeCalendar",
  tags: ["timer", "off", "icon"],
  description: "TimerOff icon from stroke/timeCalendar category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TimerOff;

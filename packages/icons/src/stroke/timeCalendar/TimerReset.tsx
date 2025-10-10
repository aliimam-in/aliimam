import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TimerReset: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TimerReset(
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
        d="M10 2H14M12 14V10M4 13C4.245 11.056 5.195 9.269 6.669 7.979 8.144 6.689 10.041 5.985 12 6 13.294 6.001 14.568 6.317 15.714 6.919 16.859 7.521 17.842 8.392 18.576 9.457 19.311 10.522 19.777 11.75 19.933 13.034 20.089 14.319 19.932 15.622 19.473 16.832 19.015 18.043 18.27 19.124 17.303 19.983 16.335 20.842 15.173 21.453 13.917 21.765 12.661 22.076 11.348 22.078 10.091 21.771 8.834 21.464 7.671 20.856 6.7 20L4 17.6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 17H4V22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TimerReset.displayName = "TimerReset";

TimerReset.metadata = {
  name: "TimerReset",
  category: "stroke/timeCalendar",
  tags: ["timer", "reset", "icon"],
  description: "TimerReset icon from stroke/timeCalendar category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TimerReset;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ClockPlus: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ClockPlus(
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
        d="M12 6V12L15.644 13.822M16 19H22M19 16V22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.92 13.267C22.1842 11.1977 21.7946 9.09756 20.8058 7.26068C19.8171 5.4238 18.2786 3.94213 16.4058 3.02314C14.5331 2.10414 12.4198 1.79383 10.3619 2.13566C8.304 2.47749 6.40452 3.45434 4.92943 4.92943C3.45434 6.40452 2.47749 8.304 2.13566 10.3619C1.79383 12.4198 2.10414 14.5331 3.02314 16.4058C3.94213 18.2786 5.4238 19.8171 7.26068 20.8058C9.09756 21.7946 11.1977 22.1842 13.267 21.92"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ClockPlus.displayName = "ClockPlus";

ClockPlus.metadata = {
  name: "ClockPlus",
  category: "stroke/timeCalendar",
  tags: ["clock", "plus", "icon"],
  description: "ClockPlus icon from stroke/timeCalendar category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ClockPlus;

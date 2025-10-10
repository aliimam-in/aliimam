import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ClockAlert: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ClockAlert(
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
        d="M12 6V12L16 14M20 12V17M20 21H20.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.2502 8.20002C20.4959 6.3614 19.2109 4.78922 17.5591 3.68415C15.9073 2.57908 13.9637 1.99123 11.9764 1.99563C9.98905 2.00003 8.04809 2.59648 6.40123 3.70886C4.75437 4.82124 3.4763 6.39909 2.73014 8.24104C1.98398 10.083 1.80357 12.1055 2.21193 14.0504C2.6203 15.9954 3.59892 17.7745 5.0229 19.1608C6.44687 20.5471 8.25162 21.4777 10.2068 21.8338C12.162 22.1899 14.1789 21.9553 16.0002 21.16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ClockAlert.displayName = "ClockAlert";

ClockAlert.metadata = {
  name: "ClockAlert",
  category: "stroke/timeCalendar",
  tags: ["clock", "alert", "icon"],
  description: "ClockAlert icon from stroke/timeCalendar category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ClockAlert;

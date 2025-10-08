import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const AlarmClockOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function AlarmClockOff(
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
        d="M6.87 6.87C6.008 7.579 5.303 8.46 4.802 9.458 4.3 10.455 4.013 11.546 3.959 12.661 3.905 13.776 4.084 14.89 4.486 15.931 4.888 16.973 5.503 17.918 6.293 18.708 7.082 19.497 8.028 20.112 9.069 20.514 10.11 20.916 11.224 21.096 12.339 21.041 13.454 20.987 14.545 20.7 15.543 20.198 16.54 19.697 17.421 18.993 18.13 18.13M19.9 14.25C20.097 13.004 19.996 11.728 19.606 10.528 19.216 9.328 18.547 8.237 17.655 7.345 16.763 6.453 15.672 5.784 14.472 5.394 13.272 5.004 11.996 4.903 10.75 5.1M22 6 19 3M6.26 18.67 4 21M2 2 22 22M4 4 2 6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

AlarmClockOff.displayName = "AlarmClockOff";

AlarmClockOff.metadata = {
  name: "AlarmClockOff",
  category: "stroke/devices",
  tags: ["alarm", "clock", "off", "icon"],
  description: "AlarmClockOff icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AlarmClockOff;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CalendarSync: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CalendarSync(
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
        d="M11 10V14H15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 14 12.535 12.395C13.109 11.843 13.807 11.437 14.569 11.209 15.332 10.981 16.139 10.939 16.921 11.086 17.704 11.232 18.44 11.564 19.068 12.053 19.697 12.541 20.2 13.173 20.535 13.895M16 2V6M21 18 19.465 19.605C18.891 20.157 18.194 20.563 17.431 20.791 16.668 21.019 15.861 21.061 15.079 20.914 14.296 20.768 13.56 20.436 12.932 19.948 12.303 19.459 11.8 18.827 11.465 18.105"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 22V18H17M21 8.5V6C21 5.47 20.789 4.961 20.414 4.586 20.039 4.211 19.53 4 19 4H5C4.47 4 3.961 4.211 3.586 4.586 3.211 4.961 3 5.47 3 6V20C3 20.53 3.211 21.039 3.586 21.414 3.961 21.789 4.47 22 5 22H9.3M3 10H7M8 2V6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CalendarSync.displayName = "CalendarSync";

CalendarSync.metadata = {
  name: "CalendarSync",
  category: "stroke/arrows",
  tags: ["calendar", "sync", "icon"],
  description: "CalendarSync icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CalendarSync;

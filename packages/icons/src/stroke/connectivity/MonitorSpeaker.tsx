import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MonitorSpeaker: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MonitorSpeaker(
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
        d="M5.5 20H8M17 9H17.01M20 4H14C12.895 4 12 4.895 12 6V18C12 19.105 12.895 20 14 20H20C21.105 20 22 19.105 22 18V6C22 4.895 21.105 4 20 4ZM8 6H4C3.47 6 2.961 6.211 2.586 6.586 2.211 6.961 2 7.47 2 8V14C2 14.53 2.211 15.039 2.586 15.414 2.961 15.789 3.47 16 4 16H8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 16C17.5523 16 18 15.5523 18 15C18 14.4477 17.5523 14 17 14C16.4477 14 16 14.4477 16 15C16 15.5523 16.4477 16 17 16Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MonitorSpeaker.displayName = "MonitorSpeaker";

MonitorSpeaker.metadata = {
  name: "MonitorSpeaker",
  category: "stroke/connectivity",
  tags: ["monitor", "speaker", "icon"],
  description: "MonitorSpeaker icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MonitorSpeaker;

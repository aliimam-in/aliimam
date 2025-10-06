import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MonitorPause: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MonitorPause(
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
        d="M10 13V7M14 13V7M20 3H4C2.895 3 2 3.895 2 5V15C2 16.105 2.895 17 4 17H20C21.105 17 22 16.105 22 15V5C22 3.895 21.105 3 20 3ZM12 17V21M8 21H16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MonitorPause.displayName = "MonitorPause";

MonitorPause.metadata = {
  name: "MonitorPause",
  category: "stroke/connectivity",
  tags: ["monitor", "pause", "icon"],
  description: "MonitorPause icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MonitorPause;

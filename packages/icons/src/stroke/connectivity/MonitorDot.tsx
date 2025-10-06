import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MonitorDot: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MonitorDot(
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
        d="M12 17V21M22 12.307V15C22 15.53 21.789 16.039 21.414 16.414 21.039 16.789 20.53 17 20 17H4C3.47 17 2.961 16.789 2.586 16.414 2.211 16.039 2 15.53 2 15V5C2 4.47 2.211 3.961 2.586 3.586 2.961 3.211 3.47 3 4 3H12.693M8 21H16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 9C20.6569 9 22 7.65685 22 6C22 4.34315 20.6569 3 19 3C17.3431 3 16 4.34315 16 6C16 7.65685 17.3431 9 19 9Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MonitorDot.displayName = "MonitorDot";

MonitorDot.metadata = {
  name: "MonitorDot",
  category: "stroke/connectivity",
  tags: ["monitor", "dot", "icon"],
  description: "MonitorDot icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MonitorDot;

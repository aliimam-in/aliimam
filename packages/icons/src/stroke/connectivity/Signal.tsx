import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Signal: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Signal(
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
          d="M2 20H2.01M7 20V16M12 20V12M17 20V8M22 4V20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Signal.displayName = "Signal";

Signal.metadata = {
  name: "Signal",
  category: "stroke/connectivity",
  tags: ["signal", "icon"],
  description: "Signal icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Signal;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Logs: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Logs(
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
          d="M3 5H4M3 12H4M3 19H4M8 5H9M8 12H9M8 19H9M13 5H21M13 12H21M13 19H21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Logs.displayName = "Logs";

Logs.metadata = {
  name: "Logs",
  category: "stroke/textFormatting",
  tags: ["logs", "icon"],
  description: "Logs icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Logs;

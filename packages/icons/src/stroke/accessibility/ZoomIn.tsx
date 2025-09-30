import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ZoomIn: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function ZoomIn(
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
          d="M11 19C15.418 19 19 15.418 19 11 19 6.582 15.418 3 11 3 6.582 3 3 6.582 3 11 3 15.418 6.582 19 11 19ZM21 21 16.65 16.65M11 8V14M8 11H14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

ZoomIn.displayName = "ZoomIn";

ZoomIn.metadata = {
  name: "ZoomIn",
  category: "stroke/accessibility",
  tags: ["zoom", "in", "icon"],
  description: "ZoomIn icon from stroke/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ZoomIn;

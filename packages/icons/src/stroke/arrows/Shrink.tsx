import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Shrink: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Shrink(
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
          d="M15 15 21 21M15 15V19.8M15 15H19.8M9 19.8V15M9 15H4.2M9 15 3 21M15 4.2V9M15 9H19.8M15 9 21 3M9 4.2V9M9 9H4.2M9 9 3 3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Shrink.displayName = "Shrink";

Shrink.metadata = {
  name: "Shrink",
  category: "stroke/arrows",
  tags: ["shrink", "icon"],
  description: "Shrink icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Shrink;

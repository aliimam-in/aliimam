import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Dot: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Dot(
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
          d="M12.1001 13.1C12.6524 13.1 13.1001 12.6523 13.1001 12.1C13.1001 11.5477 12.6524 11.1 12.1001 11.1C11.5478 11.1 11.1001 11.5477 11.1001 12.1C11.1001 12.6523 11.5478 13.1 12.1001 13.1Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Dot.displayName = "Dot";

Dot.metadata = {
  name: "Dot",
  category: "stroke/textFormatting",
  tags: ["dot", "icon"],
  description: "Dot icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Dot;

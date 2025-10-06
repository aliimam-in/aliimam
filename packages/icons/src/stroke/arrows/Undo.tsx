import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Undo: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Undo(
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
          d="M3 7V13H9"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 17C21 14.6131 20.0518 12.3239 18.364 10.636C16.6761 8.94821 14.3869 8 12 8C9.78512 8.00226 7.64885 8.82116 6 10.3L3 13"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Undo.displayName = "Undo";

Undo.metadata = {
  name: "Undo",
  category: "stroke/arrows",
  tags: ["undo", "icon"],
  description: "Undo icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Undo;

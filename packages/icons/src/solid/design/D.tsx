import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const D: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function D(
    {
      color = "currentColor",
      fill,
      strokeWidth,
      strokeLinecap,
      strokeLinejoin,
      strokeDasharray,
      opacity,
      className,
      variant = "stroke",
      ...props
    },
    forwardedRef,
  ) {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
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
        <path d="M7.5 1L15 14H0L7.5 1Z" fill={color} />
      </svg>
    );
  },
);

D.displayName = "D";

D.metadata = {
  name: "D",
  category: "",
  tags: ["icon"],
  description: "D icon from  category",
  variants: ["stroke", "solid"],
} as IconMetadata;

export default D;

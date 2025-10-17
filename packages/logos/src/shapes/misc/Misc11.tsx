import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Misc11: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Misc11(
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
        <path d="M24 12L12 0V8.4H0V15.6H12V24L24 12Z" fill="currentColor" />
      </svg>
    );
  },
);

Misc11.displayName = "Misc11";

Misc11.metadata = {
  name: "Misc11",
  category: "shapes/misc",
  tags: ["misc", "11", "icon"],
  description: "Misc11 icon from shapes/misc category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Misc11;

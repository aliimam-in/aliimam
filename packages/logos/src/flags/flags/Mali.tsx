import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Mali: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Mali(
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
        viewBox="0 0 32 32"
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
        <path d="M10 4H22V28H10V4Z" fill="#f6d44a" />
        <path
          d="M5 4H11V28H5C2.792 28 1 26.208 1 24V8C1 5.792 2.792 4 5 4Z"
          fill="#53b44b"
        />
        <path
          d="M27 28H21L21 4H27C29.208 4 31 5.792 31 8L31 24C31 26.208 29.208 28 27 28Z"
          fill="#be2a2c"
        />
      </svg>
    );
  },
);

Mali.displayName = "Mali";

Mali.metadata = {
  name: "Mali",
  category: "flags/flags",
  tags: ["mali", "icon"],
  description: "Mali icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Mali;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Moon13: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Moon13(
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
          d="M0 0C-2.89694e-07 6.62742 5.37258 12 12 12C5.37258 12 0 17.3726 0 24C6.62742 24 12 18.6274 12 12C12 18.6274 17.3726 24 24 24C24 17.3735 18.629 12.0016 12.0029 12C18.629 11.9984 24 6.62645 24 5.24537e-07C17.3726 5.24537e-07 12 5.37258 12 12C12 5.37258 6.62742 2.89694e-07 0 0Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

Moon13.displayName = "Moon13";

Moon13.metadata = {
  name: "Moon13",
  category: "shapes/moon",
  tags: ["moon", "13", "icon"],
  description: "Moon13 icon from shapes/moon category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Moon13;

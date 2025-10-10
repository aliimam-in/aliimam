import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Anchor: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Anchor(
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
          d="M12 22V8M5 12H2C2 14.652 3.054 17.196 4.929 19.071 6.804 20.946 9.348 22 12 22 14.652 22 17.196 20.946 19.071 19.071 20.946 17.196 22 14.652 22 12H19M12 8C13.657 8 15 6.657 15 5 15 3.343 13.657 2 12 2 10.343 2 9 3.343 9 5 9 6.657 10.343 8 12 8Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Anchor.displayName = "Anchor";

Anchor.metadata = {
  name: "Anchor",
  category: "stroke/textFormatting",
  tags: ["anchor", "icon"],
  description: "Anchor icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Anchor;

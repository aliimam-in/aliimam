import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Misc10: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Misc10(
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
          d="M16.32 0L12 4.32L7.68 3.35704e-07H7.1337e-07V7.68L4.32 12L0 16.32L3.77666e-07 24H7.68L12 19.68L16.32 24H24V16.32L19.68 12L24 7.68V3.35704e-07L16.32 0Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

Misc10.displayName = "Misc10";

Misc10.metadata = {
  name: "Misc10",
  category: "shapes/misc",
  tags: ["misc", "10", "icon"],
  description: "Misc10 icon from shapes/misc category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Misc10;

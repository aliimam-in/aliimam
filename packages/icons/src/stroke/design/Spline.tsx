import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Spline: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Spline(
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
          d="M19 7C20.105 7 21 6.105 21 5 21 3.895 20.105 3 19 3 17.895 3 17 3.895 17 5 17 6.105 17.895 7 19 7ZM5 21C6.105 21 7 20.105 7 19 7 17.895 6.105 17 5 17 3.895 17 3 17.895 3 19 3 20.105 3.895 21 5 21ZM5 17C5 13.817 6.264 10.765 8.515 8.515 10.765 6.264 13.817 5 17 5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Spline.displayName = "Spline";

Spline.metadata = {
  name: "Spline",
  category: "stroke/design",
  tags: ["spline", "icon"],
  description: "Spline icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Spline;

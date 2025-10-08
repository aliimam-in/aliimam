import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Beaker: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Beaker(
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
          d="M4.5 3H19.5M6 3V19C6 19.53 6.211 20.039 6.586 20.414 6.961 20.789 7.47 21 8 21H16C16.53 21 17.039 20.789 17.414 20.414 17.789 20.039 18 19.53 18 19V3M6 14H18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Beaker.displayName = "Beaker";

Beaker.metadata = {
  name: "Beaker",
  category: "stroke/gaming",
  tags: ["beaker", "icon"],
  description: "Beaker icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Beaker;

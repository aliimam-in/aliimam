import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Castle: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Castle(
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
          d="M10 5V3M14 5V3M15 21V18C15 17.204 14.684 16.441 14.121 15.879 13.559 15.316 12.796 15 12 15 11.204 15 10.441 15.316 9.879 15.879 9.316 16.441 9 17.204 9 18V21M18 3V11M18 5H6M22 11H2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 9V19C22 19.53 21.789 20.039 21.414 20.414 21.039 20.789 20.53 21 20 21H4C3.47 21 2.961 20.789 2.586 20.414 2.211 20.039 2 19.53 2 19V9M6 3V11"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Castle.displayName = "Castle";

Castle.metadata = {
  name: "Castle",
  category: "stroke/buildings",
  tags: ["castle", "icon"],
  description: "Castle icon from stroke/buildings category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Castle;

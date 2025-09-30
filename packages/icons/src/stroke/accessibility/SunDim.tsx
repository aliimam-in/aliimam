import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SunDim: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function SunDim(
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
          d="M12 16C14.209 16 16 14.209 16 12 16 9.791 14.209 8 12 8 9.791 8 8 9.791 8 12 8 14.209 9.791 16 12 16ZM12 4H12.01M20 12H20.01M12 20H12.01M4 12H4.01M17.657 6.343H17.667M17.657 17.657H17.667M6.343 17.657H6.353M6.343 6.343H6.353"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

SunDim.displayName = "SunDim";

SunDim.metadata = {
  name: "SunDim",
  category: "stroke/accessibility",
  tags: ["sun", "dim", "icon"],
  description: "SunDim icon from stroke/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SunDim;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Disc3: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Disc3(
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
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 12C6 10.3 6.7 8.8 7.8 7.8M12 14C13.105 14 14 13.105 14 12 14 10.895 13.105 10 12 10 10.895 10 10 10.895 10 12 10 13.105 10.895 14 12 14ZM18 12C18 13.7 17.3 15.2 16.2 16.2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Disc3.displayName = "Disc3";

Disc3.metadata = {
  name: "Disc3",
  category: "stroke/devices",
  tags: ["disc", "icon"],
  description: "Disc3 icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Disc3;

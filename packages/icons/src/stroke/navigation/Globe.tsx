import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Globe: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Globe(
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
          d="M12 2C9.432 4.696 8 8.277 8 12 8 15.723 9.432 19.304 12 22 14.568 19.304 16 15.723 16 12 16 8.277 14.568 4.696 12 2ZM2 12H22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Globe.displayName = "Globe";

Globe.metadata = {
  name: "Globe",
  category: "stroke/navigation",
  tags: ["globe", "icon"],
  description: "Globe icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Globe;

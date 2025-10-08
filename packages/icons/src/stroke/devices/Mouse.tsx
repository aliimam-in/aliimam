import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Mouse: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Mouse(
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
          d="M19 9C19 5.134 15.866 2 12 2 8.134 2 5 5.134 5 9V15C5 18.866 8.134 22 12 22 15.866 22 19 18.866 19 15V9ZM12 6V10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Mouse.displayName = "Mouse";

Mouse.metadata = {
  name: "Mouse",
  category: "stroke/devices",
  tags: ["mouse", "icon"],
  description: "Mouse icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Mouse;

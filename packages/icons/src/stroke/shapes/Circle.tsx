import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Circle: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Circle(
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
      </svg>
    );
  },
);

Circle.displayName = "Circle";

Circle.metadata = {
  name: "Circle",
  category: "stroke/shapes",
  tags: ["circle", "icon"],
  description: "Circle icon from stroke/shapes category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Circle;

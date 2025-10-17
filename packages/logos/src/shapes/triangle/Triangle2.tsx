import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Triangle2: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Triangle2(
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
      <g clipPath="url(#undefined-clip0_2068_228)">
        <path
          d="M6.11289 0L0 24L12 24L6.11289 0ZM12 24H24L18.116 0L12 24Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_228">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Triangle2.displayName = "Triangle2";

Triangle2.metadata = {
  name: "Triangle2",
  category: "shapes/triangle",
  tags: ["triangle", "icon"],
  description: "Triangle2 icon from shapes/triangle category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Triangle2;

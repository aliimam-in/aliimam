import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Polygon2: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Polygon2(
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
      <g clipPath="url(#undefined-clip0_2068_493)">
        <path d="M24 12L18 0H6L0 12L6 24L18 24L24 12Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_493">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Polygon2.displayName = "Polygon2";

Polygon2.metadata = {
  name: "Polygon2",
  category: "shapes/polygon",
  tags: ["polygon", "icon"],
  description: "Polygon2 icon from shapes/polygon category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Polygon2;

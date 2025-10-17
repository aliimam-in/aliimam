import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Polygon4: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Polygon4(
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
      <g clipPath="url(#undefined-clip0_2068_489)">
        <path
          d="M16.9564 0L23.99 7.01946L24 16.9564L16.9805 23.99L7.04355 24L0.00997986 16.9805L0 7.04355L7.01946 0.00997986L16.9564 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_489">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Polygon4.displayName = "Polygon4";

Polygon4.metadata = {
  name: "Polygon4",
  category: "shapes/polygon",
  tags: ["polygon", "icon"],
  description: "Polygon4 icon from shapes/polygon category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Polygon4;

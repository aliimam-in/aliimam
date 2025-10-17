import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Polygon8: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Polygon8(
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
      <g clipPath="url(#undefined-clip0_2068_486)">
        <path d="M12 0L0 6V18L12 24L24 18V6L12 0Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_486">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Polygon8.displayName = "Polygon8";

Polygon8.metadata = {
  name: "Polygon8",
  category: "shapes/polygon",
  tags: ["polygon", "icon"],
  description: "Polygon8 icon from shapes/polygon category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Polygon8;

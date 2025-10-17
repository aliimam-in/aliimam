import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Flower6: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Flower6(
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
      <g clipPath="url(#undefined-clip0_2068_580)">
        <path
          d="M14.9383 9.06169C20.1453 9.29229 24 10.1849 24 12C24 13.8151 20.1453 14.7077 14.9383 14.9383C14.7077 20.1453 13.8151 24 12 24C10.1849 24 9.29229 20.1453 9.06169 14.9383C3.85474 14.7077 -2.28201e-07 13.8151 0 12C7.93403e-08 10.1849 3.85474 9.29229 9.06169 9.06169C9.29229 3.85474 10.1849 0 12 0C13.8151 0 14.7077 3.85474 14.9383 9.06169Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_580">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Flower6.displayName = "Flower6";

Flower6.metadata = {
  name: "Flower6",
  category: "shapes/flower",
  tags: ["flower", "icon"],
  description: "Flower6 icon from shapes/flower category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Flower6;

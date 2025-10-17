import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Flower8: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Flower8(
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
      <g clipPath="url(#undefined-clip0_2068_586)">
        <path
          d="M6.99382e-07 4.8C-1.1114e-06 2.14903 5.37258 9.30272e-07 12 1.2779e-06C18.6274 1.62554e-06 24 2.14903 24 4.8C24 6.23363 22.4287 7.52047 19.9375 8.4C22.4287 9.27953 24 10.5664 24 12C24 13.4336 22.4287 14.7205 19.9375 15.6C22.4287 16.4795 24 17.7664 24 19.2C24 21.851 18.6274 24 12 24C5.37258 24 7.82809e-08 21.851 1.74845e-07 19.2C-1.68028e-06 17.7664 1.57126 16.4795 4.06253 15.6C1.57126 14.7205 3.84892e-07 13.4336 4.37114e-07 12C-1.41801e-06 10.5664 1.57126 9.27953 4.06253 8.4C1.57126 7.52047 6.4716e-07 6.23363 6.99382e-07 4.8Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_586">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Flower8.displayName = "Flower8";

Flower8.metadata = {
  name: "Flower8",
  category: "shapes/flower",
  tags: ["flower", "icon"],
  description: "Flower8 icon from shapes/flower category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Flower8;

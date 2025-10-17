import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Flower1: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Flower1(
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
      <g clipPath="url(#undefined-clip0_2068_583)">
        <path
          d="M18.0006 15.7243C26.0023 20.6895 12.0009 29.3794 12.0009 19.4482C12.0009 29.3794 -1.99798 20.6895 6.00128 15.7243C-2.00043 20.6895 -2.00043 3.31051 6.00127 8.27568C-2.00043 3.31051 12.0009 -5.37943 12.0009 4.5518C12.0009 -5.37943 25.9998 3.31051 18.0006 8.27568C25.9998 3.31051 25.9998 20.6895 18.0006 15.7243Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_583">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Flower1.displayName = "Flower1";

Flower1.metadata = {
  name: "Flower1",
  category: "shapes/flower",
  tags: ["flower", "icon"],
  description: "Flower1 icon from shapes/flower category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Flower1;

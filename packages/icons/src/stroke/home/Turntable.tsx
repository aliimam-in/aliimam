import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Turntable: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Turntable(
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
        d="M10 12.01H10.01M18 8V12C18.001 13.404 17.632 14.784 16.93 16M10 16C12.209 16 14 14.209 14 12 14 9.791 12.209 8 10 8 7.791 8 6 9.791 6 12 6 14.209 7.791 16 10 16Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Turntable.displayName = "Turntable";

Turntable.metadata = {
  name: "Turntable",
  category: "stroke/home",
  tags: ["turntable", "icon"],
  description: "Turntable icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Turntable;

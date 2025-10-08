import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Banana: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Banana(
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
          d="M4 13C7.5 11 12 11 14 15C14.8461 14.568 15.7897 14.3625 16.7389 14.4036C17.688 14.4447 18.6103 14.731 19.4159 15.2345C20.2216 15.738 20.883 16.4416 21.3359 17.2768C21.7887 18.1119 22.0175 19.0501 22 20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.15 17.89C10.67 16.37 13.8 11 12.15 5.89C11.55 4 11.5 2 13 2C16.22 2 18 7.5 18 10C18 16.5 13.8 22 7.51 22C5.11 22 2 22 2 20C2 18.5 3.14 18.45 5.15 17.89Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Banana.displayName = "Banana";

Banana.metadata = {
  name: "Banana",
  category: "stroke/foodBeverage",
  tags: ["banana", "icon"],
  description: "Banana icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Banana;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Barrel: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Barrel(
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
          d="M10 3C8.667 8.926 8.667 15.074 10 21M14 3C15.333 8.926 15.333 15.074 14 21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 3C17.335 3.001 17.664 3.085 17.957 3.246 18.251 3.407 18.499 3.638 18.68 3.92 20.194 6.343 20.997 9.143 20.997 12 20.997 14.857 20.194 17.657 18.68 20.08 18.499 20.362 18.251 20.594 17.957 20.754 17.664 20.915 17.335 20.999 17 21H7C6.665 20.999 6.336 20.915 6.043 20.754 5.749 20.594 5.501 20.362 5.32 20.08 3.806 17.657 3.004 14.857 3.004 12 3.004 9.143 3.806 6.343 5.32 3.92 5.501 3.638 5.749 3.407 6.043 3.246 6.336 3.085 6.665 3.001 7 3H17ZM3.84 17H20.16M3.84 7H20.16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Barrel.displayName = "Barrel";

Barrel.metadata = {
  name: "Barrel",
  category: "stroke/foodBeverage",
  tags: ["barrel", "icon"],
  description: "Barrel icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Barrel;

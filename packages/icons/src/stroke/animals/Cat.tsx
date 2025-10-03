import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Cat: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Cat(
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
          d="M12 5C12.67 5 13.35 5.09 14 5.26 15.78 3.26 19.03 2.42 20.42 3 21.82 3.58 20 10 20 10 20.57 11.07 21 12.24 21 13.44 21 17.9 16.97 21 12 21 7.03 21 3 18 3 13.44 3 12.19 3.5 11.04 4 10 4 10 2.11 3.58 3.5 3 4.89 2.42 8.22 3.23 10 5.23 10.656 5.079 11.327 5.002 12 5ZM8 14V14.5M16 14V14.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.25 16.25H12.75L12 17L11.25 16.25Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Cat.displayName = "Cat";

Cat.metadata = {
  name: "Cat",
  category: "stroke/animals",
  tags: ["cat", "icon"],
  description: "Cat icon from stroke/animals category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Cat;

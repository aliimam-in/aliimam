import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Soup: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Soup(
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
          d="M12 21C14.387 21 16.676 20.052 18.364 18.364 20.052 16.676 21 14.387 21 12H3C3 14.387 3.948 16.676 5.636 18.364 7.324 20.052 9.613 21 12 21ZM7 21H17M19.5 12 22 6M16.25 3C16.52 3.1 17.05 3.53 17 4.36 16.94 5.19 16.07 5.56 16 6.38 15.95 7.16 16.34 7.62 16.73 8M11.25 3C11.52 3.1 12.05 3.53 11.99 4.36 11.94 5.19 11.06 5.56 11.01 6.38 10.95 7.16 11.34 7.62 11.73 8M6.25 3C6.52 3.1 7.05 3.53 7 4.36 6.94 5.19 6.07 5.56 6 6.38 5.95 7.16 6.34 7.62 6.74 8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Soup.displayName = "Soup";

Soup.metadata = {
  name: "Soup",
  category: "stroke/foodBeverage",
  tags: ["soup", "icon"],
  description: "Soup icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Soup;

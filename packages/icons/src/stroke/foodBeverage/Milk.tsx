import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Milk: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Milk(
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
          d="M8 2H16M9 2V4.789C9 5.579 8.766 6.351 8.328 7.008L7.672 7.992C7.234 8.649 7 9.422 7 10.212V20C7 20.53 7.211 21.039 7.586 21.414 7.961 21.789 8.47 22 9 22H15C15.53 22 16.039 21.789 16.414 21.414 16.789 21.039 17 20.53 17 20V10.211C17 9.421 16.766 8.649 16.328 7.992L15.672 7.008C15.234 6.351 15 5.578 15 4.788V2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 15C7.79177 14.6684 8.6416 14.4977 9.5 14.4977C10.3584 14.4977 11.2082 14.6684 12 15C12.7917 15.3317 13.6416 15.5025 14.5 15.5025C15.3584 15.5025 16.2083 15.3317 17 15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Milk.displayName = "Milk";

Milk.metadata = {
  name: "Milk",
  category: "stroke/foodBeverage",
  tags: ["milk", "icon"],
  description: "Milk icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Milk;

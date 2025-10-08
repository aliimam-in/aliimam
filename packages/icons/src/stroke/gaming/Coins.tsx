import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Coins: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Coins(
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
          d="M8 14C11.314 14 14 11.314 14 8 14 4.686 11.314 2 8 2 4.686 2 2 4.686 2 8 2 11.314 4.686 14 8 14ZM18.09 10.37C19.035 10.722 19.877 11.308 20.536 12.071 21.195 12.835 21.651 13.752 21.862 14.739 22.072 15.726 22.031 16.75 21.741 17.716 21.451 18.682 20.922 19.56 20.204 20.268 19.485 20.975 18.599 21.491 17.628 21.765 16.657 22.04 15.633 22.066 14.65 21.84 13.667 21.613 12.756 21.143 12.003 20.472 11.25 19.801 10.678 18.951 10.34 18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 6H8V10M16.71 13.88 17.41 14.59 14.59 17.41"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Coins.displayName = "Coins";

Coins.metadata = {
  name: "Coins",
  category: "stroke/gaming",
  tags: ["coins", "icon"],
  description: "Coins icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Coins;

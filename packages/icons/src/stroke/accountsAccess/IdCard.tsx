import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const IdCard: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function IdCard(
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
          d="M16 10H18M16 14H18M6.17 15C6.376 14.414 6.759 13.907 7.266 13.547 7.773 13.188 8.379 12.996 9 12.996 9.621 12.996 10.227 13.188 10.734 13.547 11.241 13.907 11.624 14.414 11.83 15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 13C10.1046 13 11 12.1046 11 11C11 9.89543 10.1046 9 9 9C7.89543 9 7 9.89543 7 11C7 12.1046 7.89543 13 9 13Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 5H4C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

IdCard.displayName = "IdCard";

IdCard.metadata = {
  name: "IdCard",
  category: "stroke/accountsAccess",
  tags: ["id", "card", "icon"],
  description: "IdCard icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default IdCard;

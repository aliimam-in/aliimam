import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const UserRoundSearch: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function UserRoundSearch(
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
        d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 21C2 19.741 2.297 18.5 2.868 17.377 3.438 16.255 4.265 15.283 5.282 14.54 6.299 13.798 7.476 13.306 8.719 13.104 9.962 12.902 11.235 12.997 12.434 13.38M18 21C19.657 21 21 19.657 21 18 21 16.343 19.657 15 18 15 16.343 15 15 16.343 15 18 15 19.657 16.343 21 18 21ZM22 22 20.1 20.1"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

UserRoundSearch.displayName = "UserRoundSearch";

UserRoundSearch.metadata = {
  name: "UserRoundSearch",
  category: "stroke/accountsAccess",
  tags: ["user", "round", "search", "icon"],
  description: "UserRoundSearch icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UserRoundSearch;

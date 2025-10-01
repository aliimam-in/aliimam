import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const UserSearch: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function UserSearch(
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
        d="M10 11C12.209 11 14 9.209 14 7 14 4.791 12.209 3 10 3 7.791 3 6 4.791 6 7 6 9.209 7.791 11 10 11ZM10.3 15H7C5.939 15 4.922 15.421 4.172 16.172 3.421 16.922 3 17.939 3 19V21M17 20C18.657 20 20 18.657 20 17 20 15.343 18.657 14 17 14 15.343 14 14 15.343 14 17 14 18.657 15.343 20 17 20ZM21 21 19.1 19.1"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

UserSearch.displayName = "UserSearch";

UserSearch.metadata = {
  name: "UserSearch",
  category: "stroke/accountsAccess",
  tags: ["user", "search", "icon"],
  description: "UserSearch icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UserSearch;

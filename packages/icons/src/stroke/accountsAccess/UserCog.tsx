import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const UserCog: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function UserCog(
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
        d="M10 15H6C4.939 15 3.922 15.421 3.172 16.172 2.421 16.922 2 17.939 2 19V21M14.305 16.53 15.228 16.148M15.228 13.852 14.305 13.469M16.852 12.228 16.469 11.305M16.852 17.772 16.469 18.696M19.148 12.228 19.531 11.305M19.53 18.696 19.148 17.772M20.772 13.852 21.696 13.469M20.772 16.148 21.696 16.531M18 18C19.657 18 21 16.657 21 15 21 13.343 19.657 12 18 12 16.343 12 15 13.343 15 15 15 16.657 16.343 18 18 18ZM9 11C11.209 11 13 9.209 13 7 13 4.791 11.209 3 9 3 6.791 3 5 4.791 5 7 5 9.209 6.791 11 9 11Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

UserCog.displayName = "UserCog";

UserCog.metadata = {
  name: "UserCog",
  category: "stroke/accountsAccess",
  tags: ["user", "cog", "icon"],
  description: "UserCog icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UserCog;

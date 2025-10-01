import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const User: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function User(
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
          d="M19 21V19C19 17.939 18.579 16.922 17.828 16.172 17.078 15.421 16.061 15 15 15H9C7.939 15 6.922 15.421 6.172 16.172 5.421 16.922 5 17.939 5 19V21M12 11C14.209 11 16 9.209 16 7 16 4.791 14.209 3 12 3 9.791 3 8 4.791 8 7 8 9.209 9.791 11 12 11Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

User.displayName = "User";

User.metadata = {
  name: "User",
  category: "stroke/accountsAccess",
  tags: ["user", "icon"],
  description: "User icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default User;

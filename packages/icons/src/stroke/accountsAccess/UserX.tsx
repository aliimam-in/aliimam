import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const UserX: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function UserX(
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
          d="M16 21V19C16 17.939 15.579 16.922 14.828 16.172 14.078 15.421 13.061 15 12 15H6C4.939 15 3.922 15.421 3.172 16.172 2.421 16.922 2 17.939 2 19V21M9 11C11.209 11 13 9.209 13 7 13 4.791 11.209 3 9 3 6.791 3 5 4.791 5 7 5 9.209 6.791 11 9 11ZM17 8 22 13M22 8 17 13"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

UserX.displayName = "UserX";

UserX.metadata = {
  name: "UserX",
  category: "stroke/accountsAccess",
  tags: ["user", "icon"],
  description: "UserX icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UserX;

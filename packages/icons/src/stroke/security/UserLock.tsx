import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface UserLockProps extends IconProps {
  type?: "stroke";
}

export const UserLock: IconComponent<UserLockProps> = React.forwardRef<
  SVGSVGElement,
  UserLockProps
>(function UserLock(
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
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
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
          d="M10 11C12.209 11 14 9.209 14 7 14 4.791 12.209 3 10 3 7.791 3 6 4.791 6 7 6 9.209 7.791 11 10 11ZM10.3 15H7C5.939 15 4.922 15.421 4.172 16.172 3.421 16.922 3 17.939 3 19V21M15 15.5V14C15 13.47 15.211 12.961 15.586 12.586 15.961 12.211 16.47 12 17 12 17.53 12 18.039 12.211 18.414 12.586 18.789 12.961 19 13.47 19 14V15.5M20.101 16H13.899C13.403 16 13 16.403 13 16.899V20.101C13 20.598 13.403 21 13.899 21H20.101C20.598 21 21 20.598 21 20.101V16.899C21 16.403 20.598 16 20.101 16Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
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
          d="M10 11C12.209 11 14 9.209 14 7 14 4.791 12.209 3 10 3 7.791 3 6 4.791 6 7 6 9.209 7.791 11 10 11ZM10.3 15H7C5.939 15 4.922 15.421 4.172 16.172 3.421 16.922 3 17.939 3 19V21M15 15.5V14C15 13.47 15.211 12.961 15.586 12.586 15.961 12.211 16.47 12 17 12 17.53 12 18.039 12.211 18.414 12.586 18.789 12.961 19 13.47 19 14V15.5M20.101 16H13.899C13.403 16 13 16.403 13 16.899V20.101C13 20.598 13.403 21 13.899 21H20.101C20.598 21 21 20.598 21 20.101V16.899C21 16.403 20.598 16 20.101 16Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`UserLock doesn't support ${type}`);
  return null;
});

UserLock.displayName = "UserLock";

UserLock.metadata = {
  name: "UserLock",
  category: "stroke/security",
  tags: ["user", "lock", "icon"],
  description: "UserLock icon from stroke/security category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UserLock;

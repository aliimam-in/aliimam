import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const UserPen: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function UserPen(
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
        d="M11.5 15H7C5.939 15 4.922 15.421 4.172 16.172 3.421 16.922 3 17.939 3 19V21M21.378 16.626C21.776 16.228 22 15.687 22 15.124 22 14.561 21.776 14.02 21.378 13.622 20.98 13.224 20.439 13 19.876 13 19.313 13 18.772 13.224 18.374 13.622L14.364 17.634C14.126 17.872 13.952 18.165 13.858 18.488L13.021 21.358C12.996 21.444 12.994 21.535 13.017 21.622 13.039 21.709 13.084 21.788 13.147 21.852 13.211 21.915 13.29 21.96 13.377 21.982 13.464 22.005 13.555 22.003 13.641 21.978L16.511 21.141C16.834 21.047 17.127 20.873 17.365 20.635L21.378 16.626ZM10 11C12.209 11 14 9.209 14 7 14 4.791 12.209 3 10 3 7.791 3 6 4.791 6 7 6 9.209 7.791 11 10 11Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

UserPen.displayName = "UserPen";

UserPen.metadata = {
  name: "UserPen",
  category: "stroke/accountsAccess",
  tags: ["user", "pen", "icon"],
  description: "UserPen icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UserPen;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const UserRoundPen: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function UserRoundPen(
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
        d="M2 21C2 19.706 2.314 18.432 2.914 17.286 3.515 16.14 4.384 15.157 5.448 14.42 6.512 13.684 7.739 13.217 9.023 13.059 10.307 12.901 11.61 13.057 12.821 13.513M21.378 16.626C21.776 16.228 22 15.687 22 15.124 22 14.561 21.776 14.02 21.378 13.622 20.98 13.224 20.439 13 19.876 13 19.313 13 18.772 13.224 18.374 13.622L14.364 17.634C14.126 17.872 13.952 18.165 13.858 18.488L13.021 21.358C12.996 21.444 12.994 21.535 13.017 21.622 13.039 21.709 13.084 21.788 13.147 21.852 13.211 21.915 13.29 21.96 13.377 21.982 13.464 22.005 13.555 22.003 13.641 21.978L16.511 21.141C16.834 21.047 17.127 20.873 17.365 20.635L21.378 16.626Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

UserRoundPen.displayName = "UserRoundPen";

UserRoundPen.metadata = {
  name: "UserRoundPen",
  category: "stroke/accountsAccess",
  tags: ["user", "round", "pen", "icon"],
  description: "UserRoundPen icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UserRoundPen;

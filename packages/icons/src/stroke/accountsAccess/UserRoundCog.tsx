import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const UserRoundCog: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function UserRoundCog(
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
        d="M14.305 19.53 15.228 19.148M15.228 16.852 14.305 16.469M16.852 15.228 16.469 14.305M16.852 20.772 16.469 21.696M19.148 15.228 19.531 14.305M19.53 21.696 19.148 20.772M2 21C2 19.741 2.297 18.5 2.868 17.377 3.438 16.255 4.265 15.283 5.282 14.54 6.299 13.798 7.476 13.306 8.719 13.104 9.962 12.902 11.235 12.997 12.434 13.38M20.772 16.852 21.696 16.469M20.772 19.148 21.696 19.531"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13C12.761 13 15 10.761 15 8 15 5.239 12.761 3 10 3 7.239 3 5 5.239 5 8 5 10.761 7.239 13 10 13ZM18 21C19.657 21 21 19.657 21 18 21 16.343 19.657 15 18 15 16.343 15 15 16.343 15 18 15 19.657 16.343 21 18 21Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

UserRoundCog.displayName = "UserRoundCog";

UserRoundCog.metadata = {
  name: "UserRoundCog",
  category: "stroke/accountsAccess",
  tags: ["user", "round", "cog", "icon"],
  description: "UserRoundCog icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UserRoundCog;

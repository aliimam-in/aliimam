import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const UserRound: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function UserRound(
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
        d="M12 13C14.761 13 17 10.761 17 8 17 5.239 14.761 3 12 3 9.239 3 7 5.239 7 8 7 10.761 9.239 13 12 13ZM20 21C20 18.878 19.157 16.843 17.657 15.343 16.157 13.843 14.122 13 12 13 9.878 13 7.843 13.843 6.343 15.343 4.843 16.843 4 18.878 4 21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

UserRound.displayName = "UserRound";

UserRound.metadata = {
  name: "UserRound",
  category: "stroke/accountsAccess",
  tags: ["user", "round", "icon"],
  description: "UserRound icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UserRound;

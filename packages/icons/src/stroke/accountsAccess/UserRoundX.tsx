import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const UserRoundX: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function UserRoundX(
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
        d="M2 21C2 19.6081 2.36317 18.2402 3.05363 17.0316C3.74409 15.823 4.73794 14.8155 5.93699 14.1086C7.13604 13.4016 8.49879 13.0198 9.89059 13.0007C11.2824 12.9817 12.6551 13.3261 13.873 14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13C12.761 13 15 10.761 15 8 15 5.239 12.761 3 10 3 7.239 3 5 5.239 5 8 5 10.761 7.239 13 10 13ZM17 17 22 22M22 17 17 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

UserRoundX.displayName = "UserRoundX";

UserRoundX.metadata = {
  name: "UserRoundX",
  category: "stroke/accountsAccess",
  tags: ["user", "round", "icon"],
  description: "UserRoundX icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UserRoundX;

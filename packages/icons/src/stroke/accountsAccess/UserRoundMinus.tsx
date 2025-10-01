import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const UserRoundMinus: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function UserRoundMinus(
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
        d="M2 21C1.99992 19.4603 2.44413 17.9534 3.27935 16.6599C4.11456 15.3664 5.30527 14.3415 6.7086 13.708C8.11193 13.0746 9.66824 12.8595 11.1908 13.0887C12.7133 13.3179 14.1373 13.9815 15.292 15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13C12.761 13 15 10.761 15 8 15 5.239 12.761 3 10 3 7.239 3 5 5.239 5 8 5 10.761 7.239 13 10 13ZM22 19H16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

UserRoundMinus.displayName = "UserRoundMinus";

UserRoundMinus.metadata = {
  name: "UserRoundMinus",
  category: "stroke/accountsAccess",
  tags: ["user", "round", "minus", "icon"],
  description: "UserRoundMinus icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UserRoundMinus;

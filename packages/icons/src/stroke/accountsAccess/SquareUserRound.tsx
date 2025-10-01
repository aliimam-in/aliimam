import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SquareUserRound: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SquareUserRound(
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
        d="M18 21C18 19.409 17.368 17.883 16.243 16.757 15.117 15.632 13.591 15 12 15 10.409 15 8.883 15.632 7.757 16.757 6.632 17.883 6 19.409 6 21M12 15C14.209 15 16 13.209 16 11 16 8.791 14.209 7 12 7 9.791 7 8 8.791 8 11 8 13.209 9.791 15 12 15Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SquareUserRound.displayName = "SquareUserRound";

SquareUserRound.metadata = {
  name: "SquareUserRound",
  category: "stroke/accountsAccess",
  tags: ["square", "user", "round", "icon"],
  description: "SquareUserRound icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquareUserRound;

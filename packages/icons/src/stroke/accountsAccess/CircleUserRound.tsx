import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CircleUserRound: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CircleUserRound(
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
        d="M18 20C18 18.409 17.368 16.883 16.243 15.757 15.117 14.632 13.591 14 12 14 10.409 14 8.883 14.632 7.757 15.757 6.632 16.883 6 18.409 6 20M12 14C14.209 14 16 12.209 16 10 16 7.791 14.209 6 12 6 9.791 6 8 7.791 8 10 8 12.209 9.791 14 12 14Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CircleUserRound.displayName = "CircleUserRound";

CircleUserRound.metadata = {
  name: "CircleUserRound",
  category: "stroke/accountsAccess",
  tags: ["circle", "user", "round", "icon"],
  description: "CircleUserRound icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CircleUserRound;

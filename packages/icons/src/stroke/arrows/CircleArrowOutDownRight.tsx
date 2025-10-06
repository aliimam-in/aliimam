import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CircleArrowOutDownRight: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CircleArrowOutDownRight(
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
        d="M12 22C10.022 22 8.089 21.414 6.444 20.315 4.8 19.216 3.518 17.654 2.761 15.827 2.004 14 1.806 11.989 2.192 10.049 2.578 8.109 3.53 6.327 4.929 4.929 6.327 3.53 8.109 2.578 10.049 2.192 11.989 1.806 14 2.004 15.827 2.761 17.654 3.518 19.216 4.8 20.315 6.444 21.414 8.089 22 10.022 22 12M22 22 12 12M22 16V22H16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CircleArrowOutDownRight.displayName = "CircleArrowOutDownRight";

CircleArrowOutDownRight.metadata = {
  name: "CircleArrowOutDownRight",
  category: "stroke/arrows",
  tags: ["circle", "arrow", "out", "down", "right", "icon"],
  description: "CircleArrowOutDownRight icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CircleArrowOutDownRight;

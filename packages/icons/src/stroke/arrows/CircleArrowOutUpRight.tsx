import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CircleArrowOutUpRight: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CircleArrowOutUpRight(
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
        d="M22 12C22 13.978 21.414 15.911 20.315 17.556 19.216 19.2 17.654 20.482 15.827 21.239 14 21.996 11.989 22.194 10.049 21.808 8.109 21.422 6.327 20.47 4.929 19.071 3.53 17.673 2.578 15.891 2.192 13.951 1.806 12.011 2.004 10 2.761 8.173 3.518 6.346 4.8 4.784 6.444 3.685 8.089 2.586 10.022 2 12 2M22 2 12 12M16 2H22V8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CircleArrowOutUpRight.displayName = "CircleArrowOutUpRight";

CircleArrowOutUpRight.metadata = {
  name: "CircleArrowOutUpRight",
  category: "stroke/arrows",
  tags: ["circle", "arrow", "out", "up", "right", "icon"],
  description: "CircleArrowOutUpRight icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CircleArrowOutUpRight;

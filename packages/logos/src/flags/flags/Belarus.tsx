import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Belarus: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Belarus(
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
      viewBox="0 0 32 32"
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
        d="M1 8V21H31V8C31 5.791 29.209 4 27 4H5C2.791 4 1 5.791 1 8Z"
        fill="#be2d27"
      />
      <path
        d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z"
        fill="#367b37"
      />
      <path
        d="M4 13 5 16 4 19 3 16 4 13ZM2.5 8 3.5 11 2.5 14 1.5 11 2.5 8ZM5.5 8 6.5 11 5.5 14 4.5 11 5.5 8ZM2.5 18 3.5 21 2.5 24 1.5 21 2.5 18ZM5.5 18 6.5 21 5.5 24 4.5 21 5.5 18ZM1 13V19L2 16 1 13ZM7 13 6 16 7 19V13ZM5 6 4.355 4.065C4.085 4.109 3.825 4.178 3.576 4.273L3 6 4 9 5 6ZM1.853 5.558C1.327 6.235 1 7.076 1 8V9L2 6 1.853 5.558ZM6.667 4 6 6 7 9V4H6.667ZM5 26 4.355 27.935C4.085 27.891 3.825 27.822 3.576 27.727L3 26 4 23 5 26ZM1.853 26.442C1.327 25.765 1 24.924 1 24V23L2 26 1.853 26.442ZM6.667 28 6 26 7 23V28H6.667Z"
        fill="#fff"
      />
    </svg>
  );
});

Belarus.displayName = "Belarus";

Belarus.metadata = {
  name: "Belarus",
  category: "flags/flags",
  tags: ["belarus", "icon"],
  description: "Belarus icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Belarus;

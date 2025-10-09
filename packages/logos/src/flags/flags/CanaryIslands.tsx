import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CanaryIslands: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CanaryIslands(
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
      <path d="M22 4H10V28H22V4Z" fill="#0868a9" />
      <path
        d="M5 4H11V28H5C2.7923 28 1 26.2077 1 24V8C1 5.7923 2.7923 4 5 4Z"
        fill="#fff"
      />
      <path
        d="M27 28H21L21 4H27C29.2077 4 31 5.7923 31 8L31 24C31 26.2077 29.2077 28 27 28Z"
        fill="#ffcc01"
      />
    </svg>
  );
});

CanaryIslands.displayName = "CanaryIslands";

CanaryIslands.metadata = {
  name: "CanaryIslands",
  category: "flags/flags",
  tags: ["canary", "islands", "icon"],
  description: "CanaryIslands icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CanaryIslands;

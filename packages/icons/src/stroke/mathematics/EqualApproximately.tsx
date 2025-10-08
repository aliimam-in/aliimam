import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const EqualApproximately: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function EqualApproximately(
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
        d="M5 15C6.045 14.332 7.26 13.977 8.5 13.977 9.74 13.977 10.955 14.332 12 15 13.045 15.668 14.26 16.023 15.5 16.023 16.74 16.023 17.955 15.668 19 15M5 9C6.045 8.332 7.26 7.977 8.5 7.977 9.74 7.977 10.955 8.332 12 9 13.045 9.668 14.26 10.023 15.5 10.023 16.74 10.023 17.955 9.668 19 9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

EqualApproximately.displayName = "EqualApproximately";

EqualApproximately.metadata = {
  name: "EqualApproximately",
  category: "stroke/mathematics",
  tags: ["equal", "approximately", "icon"],
  description: "EqualApproximately icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default EqualApproximately;

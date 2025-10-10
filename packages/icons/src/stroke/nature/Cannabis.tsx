import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Cannabis: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Cannabis(
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
        d="M12 22V18M7 12C5.5 12 2.5 13.5 2 15 5.5 16.5 8 16 8 16 6.5 17.5 6 19.5 6 21 8.5 21 10.5 19.5 12 18 13.5 19.5 15.5 21 18 21 18 19.5 17.5 17.5 16 16 16 16 18.5 16.5 22 15 21.5 13.5 18.5 12 17 12 18.5 11 21 8 21 6 18.5 6 15.5 7.5 14 9 14 6.5 13.5 4 12 2 10.5 4 10 6.5 10 9 8.5 7.5 5.5 6 3 6 3 8 5.5 11 7 12Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Cannabis.displayName = "Cannabis";

Cannabis.metadata = {
  name: "Cannabis",
  category: "stroke/nature",
  tags: ["cannabis", "icon"],
  description: "Cannabis icon from stroke/nature category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Cannabis;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Ligature: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Ligature(
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
        d="M14 12H16V20M14 20H18M6 12H10M6 20H10M8 20V8C8 7.12 8.291 6.264 8.827 5.565 9.363 4.867 10.114 4.364 10.965 4.136 11.815 3.909 12.717 3.968 13.531 4.305 14.344 4.642 15.024 5.237 15.464 6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Ligature.displayName = "Ligature";

Ligature.metadata = {
  name: "Ligature",
  category: "stroke/textFormatting",
  tags: ["ligature", "icon"],
  description: "Ligature icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ligature;

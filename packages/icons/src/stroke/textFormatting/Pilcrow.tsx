import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Pilcrow: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Pilcrow(
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
        d="M13 4V20M17 4V20M19 4H9.5C8.307 4 7.162 4.474 6.318 5.318 5.474 6.162 5 7.307 5 8.5 5 9.693 5.474 10.838 6.318 11.682 7.162 12.526 8.307 13 9.5 13H13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Pilcrow.displayName = "Pilcrow";

Pilcrow.metadata = {
  name: "Pilcrow",
  category: "stroke/textFormatting",
  tags: ["pilcrow", "icon"],
  description: "Pilcrow icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Pilcrow;

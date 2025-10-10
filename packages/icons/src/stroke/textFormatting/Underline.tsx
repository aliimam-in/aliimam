import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Underline: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Underline(
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
        d="M6 4V10C6 11.591 6.632 13.117 7.757 14.243 8.883 15.368 10.409 16 12 16 13.591 16 15.117 15.368 16.243 14.243 17.368 13.117 18 11.591 18 10V4M4 20H20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Underline.displayName = "Underline";

Underline.metadata = {
  name: "Underline",
  category: "stroke/textFormatting",
  tags: ["underline", "icon"],
  description: "Underline icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Underline;

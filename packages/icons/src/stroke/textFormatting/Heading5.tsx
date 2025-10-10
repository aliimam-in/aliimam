import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Heading5: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Heading5(
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
        d="M4 12H12M4 18V6M12 18V6M17 13V10H21M17 17.7C17.4 17.9 17.8 18 18.3 18 19.8 18 21 16.9 21 15.5 21 14.1 19.8 13 18.3 13H17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Heading5.displayName = "Heading5";

Heading5.metadata = {
  name: "Heading5",
  category: "stroke/textFormatting",
  tags: ["heading", "icon"],
  description: "Heading5 icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Heading5;

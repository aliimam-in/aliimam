import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Heading1: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Heading1(
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
        d="M4 12H12M4 18V6M12 18V6M17 12 20 10V18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Heading1.displayName = "Heading1";

Heading1.metadata = {
  name: "Heading1",
  category: "stroke/textFormatting",
  tags: ["heading", "icon"],
  description: "Heading1 icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Heading1;

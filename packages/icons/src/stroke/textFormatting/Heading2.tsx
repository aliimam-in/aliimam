import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Heading2: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Heading2(
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
        d="M4 12H12M4 18V6M12 18V6M21 18H17C17 14 21 15 21 12 21 10.5 19 9.5 17 11"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Heading2.displayName = "Heading2";

Heading2.metadata = {
  name: "Heading2",
  category: "stroke/textFormatting",
  tags: ["heading", "icon"],
  description: "Heading2 icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Heading2;

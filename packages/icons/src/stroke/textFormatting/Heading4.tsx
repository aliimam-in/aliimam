import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Heading4: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Heading4(
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
        d="M12 18V6M17 10V13C17 13.265 17.105 13.52 17.293 13.707 17.48 13.895 17.735 14 18 14H21M21 10V18M4 12H12M4 18V6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Heading4.displayName = "Heading4";

Heading4.metadata = {
  name: "Heading4",
  category: "stroke/textFormatting",
  tags: ["heading", "icon"],
  description: "Heading4 icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Heading4;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Languages: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Languages(
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
        d="M5 8 11 14M4 14 10 8 12 5M2 5H14M7 2H8M22 22 17 12 12 22M14 18H20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Languages.displayName = "Languages";

Languages.metadata = {
  name: "Languages",
  category: "stroke/textFormatting",
  tags: ["languages", "icon"],
  description: "Languages icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Languages;

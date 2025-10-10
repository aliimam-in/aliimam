import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const RemoveFormatting: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function RemoveFormatting(
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
        d="M4 7V4H20V7M5 20H11M13 4 8 20M15 15 20 20M20 15 15 20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

RemoveFormatting.displayName = "RemoveFormatting";

RemoveFormatting.metadata = {
  name: "RemoveFormatting",
  category: "stroke/textFormatting",
  tags: ["remove", "formatting", "icon"],
  description: "RemoveFormatting icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default RemoveFormatting;

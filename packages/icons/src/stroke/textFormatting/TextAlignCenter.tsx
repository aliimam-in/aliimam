import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TextAlignCenter: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TextAlignCenter(
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
        d="M21 5H3M17 12H7M19 19H5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TextAlignCenter.displayName = "TextAlignCenter";

TextAlignCenter.metadata = {
  name: "TextAlignCenter",
  category: "stroke/textFormatting",
  tags: ["text", "align", "center", "icon"],
  description: "TextAlignCenter icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TextAlignCenter;

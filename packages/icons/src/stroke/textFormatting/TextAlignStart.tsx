import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TextAlignStart: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TextAlignStart(
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
        d="M21 5H3M15 12H3M17 19H3"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TextAlignStart.displayName = "TextAlignStart";

TextAlignStart.metadata = {
  name: "TextAlignStart",
  category: "stroke/textFormatting",
  tags: ["text", "align", "start", "icon"],
  description: "TextAlignStart icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TextAlignStart;

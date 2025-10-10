import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TextAlignJustify: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TextAlignJustify(
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
        d="M3 5H21M3 12H21M3 19H21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TextAlignJustify.displayName = "TextAlignJustify";

TextAlignJustify.metadata = {
  name: "TextAlignJustify",
  category: "stroke/textFormatting",
  tags: ["text", "align", "justify", "icon"],
  description: "TextAlignJustify icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TextAlignJustify;

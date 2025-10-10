import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TextAlignEnd: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TextAlignEnd(
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
        d="M21 5H3M21 12H9M21 19H7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TextAlignEnd.displayName = "TextAlignEnd";

TextAlignEnd.metadata = {
  name: "TextAlignEnd",
  category: "stroke/textFormatting",
  tags: ["text", "align", "end", "icon"],
  description: "TextAlignEnd icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TextAlignEnd;

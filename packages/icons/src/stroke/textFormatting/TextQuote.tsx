import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TextQuote: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TextQuote(
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
        d="M17 5H3M21 12H8M21 19H8M3 12V19"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TextQuote.displayName = "TextQuote";

TextQuote.metadata = {
  name: "TextQuote",
  category: "stroke/textFormatting",
  tags: ["text", "quote", "icon"],
  description: "TextQuote icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TextQuote;

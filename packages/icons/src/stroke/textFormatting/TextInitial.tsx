import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TextInitial: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TextInitial(
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
        d="M15 5H21M15 12H21M3 19H21M3 12 6.553 4.276C6.595 4.193 6.658 4.123 6.737 4.075 6.816 4.026 6.907 4 7 4 7.093 4 7.184 4.026 7.263 4.075 7.342 4.123 7.405 4.193 7.447 4.276L11 12M3.92 10H10.08"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TextInitial.displayName = "TextInitial";

TextInitial.metadata = {
  name: "TextInitial",
  category: "stroke/textFormatting",
  tags: ["text", "initial", "icon"],
  description: "TextInitial icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TextInitial;

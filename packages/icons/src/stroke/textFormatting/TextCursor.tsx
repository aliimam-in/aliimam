import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TextCursor: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TextCursor(
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
        d="M17 22H16C14.939 22 13.922 21.579 13.172 20.828 12.421 20.078 12 19.061 12 18V6C12 4.939 12.421 3.922 13.172 3.172 13.922 2.421 14.939 2 16 2H17M7 22H8C9.061 22 10.078 21.579 10.828 20.828 11.579 20.078 12 19.061 12 18V17M7 2H8C9.061 2 10.078 2.421 10.828 3.172 11.579 3.922 12 4.939 12 6V7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TextCursor.displayName = "TextCursor";

TextCursor.metadata = {
  name: "TextCursor",
  category: "stroke/textFormatting",
  tags: ["text", "cursor", "icon"],
  description: "TextCursor icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TextCursor;

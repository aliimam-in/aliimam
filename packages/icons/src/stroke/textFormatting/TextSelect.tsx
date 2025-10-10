import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TextSelect: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TextSelect(
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
        d="M14 21H15M14 3H15M19 3C19.53 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5M21 14V15M21 19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21M21 9V10M3 14V15M3 9V10M5 21C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19M5 3C4.47 3 3.961 3.211 3.586 3.586 3.211 3.961 3 4.47 3 5M7 12H17M7 16H13M7 8H15M9 21H10M9 3H10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TextSelect.displayName = "TextSelect";

TextSelect.metadata = {
  name: "TextSelect",
  category: "stroke/textFormatting",
  tags: ["text", "select", "icon"],
  description: "TextSelect icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TextSelect;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TextCursorInput: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TextCursorInput(
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
        d="M12 20H11C10.47 20 9.961 19.789 9.586 19.414 9.211 19.039 9 18.53 9 18 9 18.53 8.789 19.039 8.414 19.414 8.039 19.789 7.53 20 7 20H6M13 8H20C20.53 8 21.039 8.211 21.414 8.586 21.789 8.961 22 9.47 22 10V14C22 14.53 21.789 15.039 21.414 15.414 21.039 15.789 20.53 16 20 16H13M5 16H4C3.47 16 2.961 15.789 2.586 15.414 2.211 15.039 2 14.53 2 14V10C2 9.47 2.211 8.961 2.586 8.586 2.961 8.211 3.47 8 4 8H5M6 4H7C7.53 4 8.039 4.211 8.414 4.586 8.789 4.961 9 5.47 9 6 9 5.47 9.211 4.961 9.586 4.586 9.961 4.211 10.47 4 11 4H12M9 6V18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TextCursorInput.displayName = "TextCursorInput";

TextCursorInput.metadata = {
  name: "TextCursorInput",
  category: "stroke/layout",
  tags: ["text", "cursor", "input", "icon"],
  description: "TextCursorInput icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TextCursorInput;

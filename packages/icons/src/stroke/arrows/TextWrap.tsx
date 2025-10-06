import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TextWrap: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TextWrap(
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
        d="M16 16L13 19L16 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 12H17.5C18.428 12 19.319 12.369 19.975 13.025 20.631 13.682 21 14.572 21 15.5 21 16.428 20.631 17.319 19.975 17.975 19.319 18.631 18.428 19 17.5 19H13M3 19H9M3 5H21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TextWrap.displayName = "TextWrap";

TextWrap.metadata = {
  name: "TextWrap",
  category: "stroke/arrows",
  tags: ["text", "wrap", "icon"],
  description: "TextWrap icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TextWrap;

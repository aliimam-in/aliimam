import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SquarePi: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SquarePi(
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
        d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM7 7H17M10 7V17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 17C15.4696 17 14.9609 16.7893 14.5858 16.4142C14.2107 16.0391 14 15.5304 14 15V7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SquarePi.displayName = "SquarePi";

SquarePi.metadata = {
  name: "SquarePi",
  category: "stroke/codingDevelopment",
  tags: ["square", "pi", "icon"],
  description: "SquarePi icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquarePi;

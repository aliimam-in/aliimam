import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Rectangle2: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Rectangle2(
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
      <g clipPath="url(#undefined-clip0_2068_686)">
        <rect width={size} height={size} rx="12" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_686">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Rectangle2.displayName = "Rectangle2";

Rectangle2.metadata = {
  name: "Rectangle2",
  category: "shapes/rectangle",
  tags: ["rectangle", "icon"],
  description: "Rectangle2 icon from shapes/rectangle category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Rectangle2;

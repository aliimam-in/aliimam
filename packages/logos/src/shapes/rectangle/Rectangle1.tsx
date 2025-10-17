import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Rectangle1: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Rectangle1(
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
      <g clipPath="url(#undefined-clip0_2068_687)">
        <path fill="currentColor" d="M0 0H24V24H0z" />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_687">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Rectangle1.displayName = "Rectangle1";

Rectangle1.metadata = {
  name: "Rectangle1",
  category: "shapes/rectangle",
  tags: ["rectangle", "icon"],
  description: "Rectangle1 icon from shapes/rectangle category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Rectangle1;

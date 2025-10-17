import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Triangle10: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Triangle10(
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
      <g clipPath="url(#undefined-clip0_2068_221)">
        <path d="M12 24L24 0H0L12 24Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_221">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Triangle10.displayName = "Triangle10";

Triangle10.metadata = {
  name: "Triangle10",
  category: "shapes/triangle",
  tags: ["triangle", "10", "icon"],
  description: "Triangle10 icon from shapes/triangle category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Triangle10;

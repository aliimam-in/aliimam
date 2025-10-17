import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Triangle6: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Triangle6(
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
      <g fill="currentColor" clipPath="url(#undefined-clip0_2068_224)">
        <path d="M24 0 24 24 0 0 24 0ZM12 12 12 24 0 12 12 12Z" />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_224">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Triangle6.displayName = "Triangle6";

Triangle6.metadata = {
  name: "Triangle6",
  category: "shapes/triangle",
  tags: ["triangle", "icon"],
  description: "Triangle6 icon from shapes/triangle category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Triangle6;

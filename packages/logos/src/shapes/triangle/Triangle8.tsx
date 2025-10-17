import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Triangle8: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Triangle8(
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
      <g clipPath="url(#undefined-clip0_2068_222)">
        <path
          d="M24.0005 12.0003L12 0L-0.000457764 12.0003H11.9999L-0.000457764 24.0005H24.0005L11.9999 12.0003H24.0005Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_222">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Triangle8.displayName = "Triangle8";

Triangle8.metadata = {
  name: "Triangle8",
  category: "shapes/triangle",
  tags: ["triangle", "icon"],
  description: "Triangle8 icon from shapes/triangle category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Triangle8;

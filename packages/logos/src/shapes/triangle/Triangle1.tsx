import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Triangle1: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Triangle1(
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
      <g clipPath="url(#undefined-clip0_2068_230)">
        <path
          d="M-0.0286255 0.00341797L11.9714 12.0006L11.9714 0.00341797L-0.0286255 0.00341797ZM11.9714 0.00341797L23.9714 12.0006L23.9714 0.00341797L11.9714 0.00341797ZM23.9714 12.0006L11.9714 12.0006L23.9714 23.997V12.0006ZM11.9714 12.0006L-0.0286255 12.0006L11.9714 23.997L11.9714 12.0006Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_230">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Triangle1.displayName = "Triangle1";

Triangle1.metadata = {
  name: "Triangle1",
  category: "shapes/triangle",
  tags: ["triangle", "icon"],
  description: "Triangle1 icon from shapes/triangle category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Triangle1;

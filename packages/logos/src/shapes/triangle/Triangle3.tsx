import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Triangle3: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Triangle3(
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
      <g clipPath="url(#undefined-clip0_2068_225)">
        <path
          d="M0 0L0 12L11.9981 12L0 0ZM11.9981 12L24 0L11.9981 0L11.9981 12ZM11.9981 12L24 24V12L11.9981 12ZM11.9981 12L0 24L11.9981 24L11.9981 12Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_225">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Triangle3.displayName = "Triangle3";

Triangle3.metadata = {
  name: "Triangle3",
  category: "shapes/triangle",
  tags: ["triangle", "icon"],
  description: "Triangle3 icon from shapes/triangle category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Triangle3;

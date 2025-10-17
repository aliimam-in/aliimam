import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Triangle7: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Triangle7(
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
      <g clipPath="url(#undefined-clip0_2068_223)">
        <path
          d="M-0.000373094 0L12.0002 12.0002L-0.000427246 24.0004H24.0009L12.0002 12.0002L24.0009 2.09819e-06L-0.000373094 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_223">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Triangle7.displayName = "Triangle7";

Triangle7.metadata = {
  name: "Triangle7",
  category: "shapes/triangle",
  tags: ["triangle", "icon"],
  description: "Triangle7 icon from shapes/triangle category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Triangle7;

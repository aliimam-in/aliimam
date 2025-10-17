import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Rectangle3: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Rectangle3(
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
      <g clipPath="url(#undefined-clip0_2068_684)">
        <path
          d="M12 0L24.0004 12.0005L12 24.0009L-0.000488281 12.0005L12 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_684">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Rectangle3.displayName = "Rectangle3";

Rectangle3.metadata = {
  name: "Rectangle3",
  category: "shapes/rectangle",
  tags: ["rectangle", "icon"],
  description: "Rectangle3 icon from shapes/rectangle category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Rectangle3;

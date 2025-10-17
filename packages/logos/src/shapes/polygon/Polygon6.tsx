import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Polygon6: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Polygon6(
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
      <g clipPath="url(#undefined-clip0_2068_488)">
        <path
          d="M12 0L24 9.16718L19.4164 24H4.58359L0 9.16718L12 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_488">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Polygon6.displayName = "Polygon6";

Polygon6.metadata = {
  name: "Polygon6",
  category: "shapes/polygon",
  tags: ["polygon", "icon"],
  description: "Polygon6 icon from shapes/polygon category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Polygon6;

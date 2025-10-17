import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Star2: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Star2(
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
        <g clipPath="url(#undefined-clip0_2068_128)">
          <path
            d="M12 0L15.2632 8.5443L24 9.16718L17.28 15.0707L19.4164 24L12 19.1043L4.58359 24L6.72 15.0707L0 9.16718L8.73678 8.5443L12 0Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_128">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Star2.displayName = "Star2";

Star2.metadata = {
  name: "Star2",
  category: "shapes/star",
  tags: ["star", "icon"],
  description: "Star2 icon from shapes/star category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Star2;

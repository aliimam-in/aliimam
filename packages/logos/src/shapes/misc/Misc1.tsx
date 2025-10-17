import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Misc1: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Misc1(
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
        <g clipPath="url(#undefined-clip0_2068_660)">
          <path
            d="M6.00001 12C9.31372 12 12 9.31368 12 5.99997C12 9.3129 14.685 11.9987 17.9977 12C14.685 12.0012 12 14.6871 12 18C12 14.6863 9.31372 12 6.00001 12C2.68629 12 4.07115e-07 14.6863 2.62268e-07 18L0 24L6.00001 24C9.31372 24 12 21.3137 12 18C12 21.3137 14.6863 24 18 24L24 24L24 18C24 14.6871 21.315 12.0013 18.0024 12C21.315 11.9987 24 9.3129 24 5.99997L24 -3.53814e-05L18 -3.51191e-05C14.6863 -3.68816e-05 12 2.68626 12 5.99997C12 2.68626 9.31372 -3.66467e-05 6.00001 -3.65019e-05L2.09815e-06 -3.8147e-05L1.31134e-06 5.99997C8.76802e-07 9.31368 2.68629 12 6.00001 12Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_660">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Misc1.displayName = "Misc1";

Misc1.metadata = {
  name: "Misc1",
  category: "shapes/misc",
  tags: ["misc", "icon"],
  description: "Misc1 icon from shapes/misc category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Misc1;

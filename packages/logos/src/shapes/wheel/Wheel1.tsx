import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Wheel1: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Wheel1(
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
        <g clipPath="url(#undefined-clip0_2068_826)">
          <path
            d="M14.04 0H9.96L11.4562 10.6872L4.95721 2.07222L2.07221 4.95721L10.6871 11.4562L0 9.96V14.04L10.6872 12.5438L2.07223 19.0428L4.95722 21.9278L11.4562 13.3129L9.96 24H14.04L12.5438 13.3129L19.0428 21.9278L21.9278 19.0428L13.3128 12.5438L24 14.04V9.96L13.3129 11.4562L21.9278 4.95721L19.0428 2.07222L12.5438 10.6872L14.04 0Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_826">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Wheel1.displayName = "Wheel1";

Wheel1.metadata = {
  name: "Wheel1",
  category: "shapes/wheel",
  tags: ["wheel", "icon"],
  description: "Wheel1 icon from shapes/wheel category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Wheel1;

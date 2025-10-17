import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Wheel3: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Wheel3(
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
        <g clipPath="url(#undefined-clip0_2068_823)">
          <path
            d="M13.2 0H10.8L11.5668 10.9541L4.36325 2.66619L2.66619 4.36325L10.9541 11.5668L3.14722e-07 10.8L0 13.2L10.9541 12.4332L2.66619 19.6368L4.36325 21.3338L11.5668 13.0459L10.8 24H13.2L12.4332 13.0459L19.6368 21.3338L21.3338 19.6368L13.0459 12.4332L24 13.2V10.8L13.0459 11.5668L21.3338 4.36325L19.6368 2.66619L12.4332 10.9541L13.2 0Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_823">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Wheel3.displayName = "Wheel3";

Wheel3.metadata = {
  name: "Wheel3",
  category: "shapes/wheel",
  tags: ["wheel", "icon"],
  description: "Wheel3 icon from shapes/wheel category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Wheel3;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Wheel2: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Wheel2(
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
        <g clipPath="url(#undefined-clip0_2068_824)">
          <path
            d="M12 0C11.3513 0 10.8385 0.549919 10.8838 1.19707L11.5668 10.9541L5.15045 3.5719C4.72488 3.08226 3.97344 3.05599 3.51472 3.51472C3.05599 3.97344 3.08226 4.72488 3.5719 5.15045L10.9541 11.5668L1.19707 10.8838C0.549919 10.8385 2.42432e-07 11.3513 0 12C0 12.6487 0.549919 13.1615 1.19707 13.1162L10.9541 12.4332L3.5719 18.8495C3.08226 19.2751 3.05599 20.0266 3.51472 20.4853C3.97344 20.944 4.72488 20.9177 5.15045 20.4281L11.5668 13.0459L10.8838 22.8029C10.8385 23.4501 11.3513 24 12 24C12.6487 24 13.1615 23.4501 13.1162 22.8029L12.4332 13.0459L18.8495 20.4281C19.2751 20.9177 20.0266 20.944 20.4853 20.4853C20.944 20.0266 20.9177 19.2751 20.4281 18.8495L13.0459 12.4332L22.8029 13.1162C23.4501 13.1615 24 12.6487 24 12C24 11.3513 23.4501 10.8385 22.8029 10.8838L13.0459 11.5668L20.4281 5.15045C20.9177 4.72488 20.944 3.97344 20.4853 3.51472C20.0266 3.05599 19.2751 3.08226 18.8495 3.5719L12.4332 10.9541L13.1162 1.19707C13.1615 0.549919 12.6487 0 12 0Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_824">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Wheel2.displayName = "Wheel2";

Wheel2.metadata = {
  name: "Wheel2",
  category: "shapes/wheel",
  tags: ["wheel", "icon"],
  description: "Wheel2 icon from shapes/wheel category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Wheel2;

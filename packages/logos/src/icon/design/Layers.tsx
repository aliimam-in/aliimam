import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Layers: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Layers(
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
        viewBox="0 0 23 24"
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
        <g fill="currentColor" clipPath="url(#undefined-clip0_2039_308)">
          <path
            d="M7.48447e-05 13.6945L0.0575748 4.96865C0.0676373 3.38902 1.15942 2.03484 2.66664 1.73302L10.9948 0.0624719C12.9958 -0.338983 14.853 1.24574 14.8401 3.34247L14.7826 12.0697C14.7718 13.6487 13.68 15.0021 12.1728 15.3047L3.84467 16.9752C1.84367 17.3767 -0.0135814 15.7919 7.48447e-05 13.6945Z"
            fillOpacity=".2"
          />
          <path
            d="M4.08034 17.1759L4.13784 8.44867C4.14718 6.87049 5.23968 5.51703 6.7469 5.21449L15.0751 3.54467C17.0761 3.14322 18.9333 4.72722 18.9196 6.82467L18.8621 15.5519C18.8521 17.1309 17.7603 18.4843 16.2531 18.7869L7.92493 20.4574C5.92393 20.8581 4.06668 19.2741 4.08034 17.1774V17.1759Z"
            fillOpacity=".5"
          />
          <path
            d="M8.1607 20.6575L8.2182 11.9302C8.22826 10.3506 9.32004 8.99784 10.8273 8.6953L19.1554 7.02475C21.1564 6.6233 23.0137 8.20802 23 10.3048L22.9425 19.032C22.9324 20.6117 21.8407 21.9651 20.3334 22.2669L12.0053 23.9375C10.0043 24.3389 8.14704 22.7542 8.15998 20.6575H8.1607Z"
            fillOpacity=".8"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2039_308">
            <path fill="#fff" d="M0 0H23V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Layers.displayName = "Layers";

Layers.metadata = {
  name: "Layers",
  category: "icon/design",
  tags: ["layers", "icon"],
  description: "Layers icon from icon/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Layers;

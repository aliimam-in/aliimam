import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Star1: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Star1(
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
        <g clipPath="url(#undefined-clip0_2068_129)">
          <path
            d="M24.0001 12C24.0001 5.37258 18.6275 -8.44363e-06 12.0001 -8.15393e-06C5.37265 -7.86424e-06 6.78529e-05 5.37258 6.814e-05 12C6.84323e-05 18.6274 5.37265 24 12.0001 24C18.6275 24 24.0001 18.6274 24.0001 12ZM13.7757 10.2243C14.7621 11.2106 16.2599 11.4203 19.2554 11.8397L20.4001 12L19.2554 12.1602C16.2599 12.5796 14.7621 12.7893 13.7757 13.7756C12.7894 14.762 12.5797 16.2598 12.1603 19.2553L12.0001 20.4L11.8398 19.2553C11.4204 16.2598 11.2107 14.762 10.2244 13.7756C9.23804 12.7893 7.74027 12.5796 4.74472 12.1602L3.60007 12L4.74473 11.8397C7.74028 11.4203 9.23805 11.2106 10.2244 10.2243C11.2108 9.23794 11.4204 7.74017 11.8398 4.74462L12.0001 3.59999L12.1603 4.74461C12.5797 7.74016 12.7894 9.23794 13.7757 10.2243Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_129">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Star1.displayName = "Star1";

Star1.metadata = {
  name: "Star1",
  category: "shapes/star",
  tags: ["star", "icon"],
  description: "Star1 icon from shapes/star category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Star1;

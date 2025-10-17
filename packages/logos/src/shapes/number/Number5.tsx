import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Number5: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Number5(
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
      <g clipPath="url(#undefined-clip0_2068_914)">
        <path
          d="M16 24C20.4183 24 24 20.7764 24 16.8V15.6C24 11.6245 20.4201 8.40162 16.0033 8.4H24V0H0L3.8147e-07 8.4C3.8147e-07 12.375 3.57918 15.5977 7.99529 15.6H0C2.54313e-07 20.2392 4.17868 24 9.33333 24L16 24Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_914">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Number5.displayName = "Number5";

Number5.metadata = {
  name: "Number5",
  category: "shapes/number",
  tags: ["number", "icon"],
  description: "Number5 icon from shapes/number category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Number5;

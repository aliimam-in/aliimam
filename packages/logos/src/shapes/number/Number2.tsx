import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Number2: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Number2(
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
      <g clipPath="url(#undefined-clip0_2068_919)">
        <path
          d="M16 2.91409e-07C20.4183 6.411e-07 24 3.22355 24 7.2V8.4C24 12.3755 20.4201 15.5984 16.0033 15.6H24V24H0L3.8147e-07 15.6C3.8147e-07 11.625 3.57918 8.40229 7.99529 8.4H0C2.54313e-07 3.76081 4.17868 -2.25317e-07 9.33333 0L16 2.91409e-07Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_919">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Number2.displayName = "Number2";

Number2.metadata = {
  name: "Number2",
  category: "shapes/number",
  tags: ["number", "icon"],
  description: "Number2 icon from shapes/number category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Number2;

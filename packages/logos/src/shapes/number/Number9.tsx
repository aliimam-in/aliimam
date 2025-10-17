import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Number9: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Number9(
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
      <g clipPath="url(#undefined-clip0_2068_911)">
        <path
          d="M24 13.2C24 19.1647 18.6274 24 12 24L12 13.2L7.33334 13.2C3.28325 13.2 -1.90735e-06 10.2451 -1.90735e-06 6.6C-1.90735e-06 2.95492 3.28325 0 7.33333 0H12C18.6274 0 24 4.83533 24 10.8V13.2Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_911">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Number9.displayName = "Number9";

Number9.metadata = {
  name: "Number9",
  category: "shapes/number",
  tags: ["number", "icon"],
  description: "Number9 icon from shapes/number category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Number9;

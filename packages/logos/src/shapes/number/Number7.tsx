import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Number7: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Number7(
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
      <g clipPath="url(#undefined-clip0_2068_913)">
        <path
          d="M0 10.8H12V24H24L24 10.8C24 4.83533 18.6274 4.96929e-07 12 4.96929e-07L5.08626e-07 0L0 10.8Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_913">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Number7.displayName = "Number7";

Number7.metadata = {
  name: "Number7",
  category: "shapes/number",
  tags: ["number", "icon"],
  description: "Number7 icon from shapes/number category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Number7;

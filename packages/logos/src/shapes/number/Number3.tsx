import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Number3: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Number3(
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
      <g clipPath="url(#undefined-clip0_2068_918)">
        <path
          d="M3.8147e-07 0L0 8.4L3.33333 8.4L3.33333 15.6H3.8147e-07L0 24H16.6667C20.7168 24 24 21.0451 24 17.4C24 15.1678 22.7687 13.1944 20.8841 12C22.7687 10.8056 24 8.83219 24 6.6C24 2.95492 20.7168 6.79137e-07 16.6667 3.75458e-07L3.8147e-07 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_918">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Number3.displayName = "Number3";

Number3.metadata = {
  name: "Number3",
  category: "shapes/number",
  tags: ["number", "icon"],
  description: "Number3 icon from shapes/number category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Number3;

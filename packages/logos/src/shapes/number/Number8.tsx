import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Number8: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Number8(
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
      <g clipPath="url(#undefined-clip0_2068_912)">
        <path
          d="M24 6.6C24 2.95492 20.7168 6.9018e-07 16.6667 3.86501e-07L7.33333 0C3.28325 -1.67717e-07 1.27157e-07 2.95492 0 6.6C0 8.83219 1.23126 10.8056 3.11589 12C1.23126 13.1944 0 15.1678 0 17.4C-2.54313e-07 21.0451 3.28325 24 7.33333 24H16.6667C20.7168 24 24 21.0451 24 17.4C24 15.1678 22.7687 13.1944 20.8841 12C22.7687 10.8056 24 8.83219 24 6.6Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_912">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Number8.displayName = "Number8";

Number8.metadata = {
  name: "Number8",
  category: "shapes/number",
  tags: ["number", "icon"],
  description: "Number8 icon from shapes/number category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Number8;

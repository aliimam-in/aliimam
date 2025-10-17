import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Number0: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Number0(
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
      <g clipPath="url(#undefined-clip0_2068_920)">
        <path
          d="M12 13.2C12.6627 13.2 13.2 12.6627 13.2 12C13.2 11.3373 12.6627 10.8 12 10.8C11.3373 10.8 10.8 11.3373 10.8 12C10.8 12.6627 11.3373 13.2 12 13.2ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_920">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Number0.displayName = "Number0";

Number0.metadata = {
  name: "Number0",
  category: "shapes/number",
  tags: ["number", "icon"],
  description: "Number0 icon from shapes/number category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Number0;

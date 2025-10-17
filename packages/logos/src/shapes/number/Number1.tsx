import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Number1: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Number1(
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
      <g clipPath="url(#undefined-clip0_2068_915)">
        <path d="M0 10.8H12V24H24V0H12L0 10.8Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_915">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Number1.displayName = "Number1";

Number1.metadata = {
  name: "Number1",
  category: "shapes/number",
  tags: ["number", "icon"],
  description: "Number1 icon from shapes/number category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Number1;

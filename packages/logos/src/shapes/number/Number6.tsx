import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Number6: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Number6(
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
      <g clipPath="url(#undefined-clip0_2068_917)">
        <path
          d="M0 10.8C-3.8147e-07 4.83533 5.37258 3.97544e-07 12 0L12 10.8L16.6667 10.8C20.7168 10.8 24 13.7549 24 17.4C24 21.0451 20.7168 24 16.6667 24H12C5.37258 24 -3.8147e-07 19.1647 0 13.2V10.8Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_917">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Number6.displayName = "Number6";

Number6.metadata = {
  name: "Number6",
  category: "shapes/number",
  tags: ["number", "icon"],
  description: "Number6 icon from shapes/number category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Number6;

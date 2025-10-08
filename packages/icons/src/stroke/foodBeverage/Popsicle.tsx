import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Popsicle: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Popsicle(
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
      <path
        d="M18.6 14.4C19.4 13.6 19.4 12.4 18.6 11.6L10.5 3.5C9.559 2.558 8.282 2.03 6.95 2.03 5.619 2.03 4.342 2.558 3.4 3.5 2.459 4.442 1.93 5.718 1.93 7.05 1.93 8.382 2.459 9.658 3.4 10.6L11.5 18.7C12.4 19.4 13.6 19.4 14.4 18.6L18.6 14.4ZM22 22 16.5 16.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Popsicle.displayName = "Popsicle";

Popsicle.metadata = {
  name: "Popsicle",
  category: "stroke/foodBeverage",
  tags: ["popsicle", "icon"],
  description: "Popsicle icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Popsicle;

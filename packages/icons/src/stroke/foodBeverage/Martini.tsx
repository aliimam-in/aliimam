import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Martini: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Martini(
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
        d="M8 22H16M12 11V22M19 3 12 11 5 3H19Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Martini.displayName = "Martini";

Martini.metadata = {
  name: "Martini",
  category: "stroke/foodBeverage",
  tags: ["martini", "icon"],
  description: "Martini icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Martini;

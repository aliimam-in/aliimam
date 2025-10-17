import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Flower15: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Flower15(
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
        d="M23.2177 3.15556C24.83 6.15778 23.8705 9.98998 21.0714 11.7273L20.8887 11.8407C19.0111 13.0061 17.8554 15.1531 17.8554 17.4758V17.7341C17.8554 21.1947 15.234 24 12.0002 24C8.76644 24 6.14495 21.1947 6.14495 17.7341V17.4763C6.14495 15.1534 4.9892 13.0063 3.11154 11.8409L2.92856 11.7273C0.129507 9.99002 -0.830026 6.15781 0.782312 3.15559C2.40372 0.136491 6.00932 -0.897375 8.82411 0.849699L8.96868 0.939431C10.8433 2.10296 13.1567 2.10296 15.0313 0.93943L15.1759 0.849666C17.9907 -0.897407 21.5963 0.136458 23.2177 3.15556Z"
        fill="currentColor"
      />
    </svg>
  );
});

Flower15.displayName = "Flower15";

Flower15.metadata = {
  name: "Flower15",
  category: "shapes/flower",
  tags: ["flower", "15", "icon"],
  description: "Flower15 icon from shapes/flower category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Flower15;

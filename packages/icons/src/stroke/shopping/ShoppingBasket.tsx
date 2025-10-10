import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ShoppingBasket: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ShoppingBasket(
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
        d="M15 11 14 20M19 11 15 4M2 11H22M3.5 11 5.1 18.4C5.194 18.859 5.445 19.27 5.81 19.562 6.176 19.855 6.632 20.009 7.1 20H16.9C17.368 20.009 17.824 19.855 18.19 19.562 18.555 19.27 18.807 18.859 18.9 18.4L20.6 11M4.5 15.5H19.5M5 11 9 4M9 11 10 20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ShoppingBasket.displayName = "ShoppingBasket";

ShoppingBasket.metadata = {
  name: "ShoppingBasket",
  category: "stroke/shopping",
  tags: ["shopping", "basket", "icon"],
  description: "ShoppingBasket icon from stroke/shopping category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ShoppingBasket;

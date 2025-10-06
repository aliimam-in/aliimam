import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Construction: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Construction(
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
        d="M21 6H3C2.448 6 2 6.448 2 7V13C2 13.552 2.448 14 3 14H21C21.552 14 22 13.552 22 13V7C22 6.448 21.552 6 21 6ZM17 14V21M7 14V21M17 3V6M7 3V6M10 14 2.3 6.3M14 6 21.7 13.7M8 6 16 14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Construction.displayName = "Construction";

Construction.metadata = {
  name: "Construction",
  category: "stroke/codingDevelopment",
  tags: ["construction", "icon"],
  description: "Construction icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Construction;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MarshallIslands: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MarshallIslands(
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
      viewBox="0 0 32 32"
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
        d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
        fill="#13348f"
      />
      <path
        d="M29.684 5.05298L2.31599 26.947C2.37499 27.001 2.43799 27.049 2.50099 27.099L31 9.99998V7.99998C31 6.82798 30.487 5.78398 29.684 5.05298Z"
        fill="#d07b2c"
      />
      <path
        d="M2.745 27.302 31 16V10L2.5 27.1C2.582 27.167 2.657 27.242 2.745 27.302ZM10 8 10.206 11.433 10.926 9.541 10.604 11.539 11.79 9.898 10.962 11.745 12.532 10.467 11.255 12.037 13.101 11.209 11.46 12.394 13.459 12.072 11.567 12.793 15 12.999 11.567 13.205 13.459 13.925 11.46 13.603 13.101 14.789 11.255 13.961 12.532 15.531 10.962 14.254 11.79 16.1 10.604 14.459 10.926 16.458 10.206 14.566 10 17.999 9.794 14.566 9.073 16.458 9.395 14.459 8.21 16.1 9.038 14.254 7.468 15.531 8.746 13.961 6.899 14.789 8.54 13.603 6.542 13.925 8.434 13.205 5.001 12.999 8.434 12.793 6.542 12.072 8.54 12.394 6.899 11.209 8.746 12.037 7.468 10.467 9.038 11.745 8.21 9.898 9.395 11.539 9.073 9.541 9.794 11.433 10 8Z"
        fill="#fff"
      />
    </svg>
  );
});

MarshallIslands.displayName = "MarshallIslands";

MarshallIslands.metadata = {
  name: "MarshallIslands",
  category: "flags/flags",
  tags: ["marshall", "islands", "icon"],
  description: "MarshallIslands icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MarshallIslands;

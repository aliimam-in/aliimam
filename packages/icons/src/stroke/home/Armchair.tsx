import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Armchair: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Armchair(
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
        d="M19 9V6C19 5.47 18.789 4.961 18.414 4.586 18.039 4.211 17.53 4 17 4H7C6.47 4 5.961 4.211 5.586 4.586 5.211 4.961 5 5.47 5 6V9M3 16C3 16.53 3.211 17.039 3.586 17.414 3.961 17.789 4.47 18 5 18H19C19.53 18 20.039 17.789 20.414 17.414 20.789 17.039 21 16.53 21 16V11C21 10.47 20.789 9.961 20.414 9.586 20.039 9.211 19.53 9 19 9 18.47 9 17.961 9.211 17.586 9.586 17.211 9.961 17 10.47 17 11V12.5C17 12.633 16.947 12.76 16.854 12.854 16.76 12.947 16.633 13 16.5 13H7.5C7.367 13 7.24 12.947 7.146 12.854 7.053 12.76 7 12.633 7 12.5V11C7 10.47 6.789 9.961 6.414 9.586 6.039 9.211 5.53 9 5 9 4.47 9 3.961 9.211 3.586 9.586 3.211 9.961 3 10.47 3 11V16ZM5 18V20M19 18V20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Armchair.displayName = "Armchair";

Armchair.metadata = {
  name: "Armchair",
  category: "stroke/home",
  tags: ["armchair", "icon"],
  description: "Armchair icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Armchair;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Shrimp: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Shrimp(
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
          d="M11 12H11.01M13 22C13.5 21.5 14.12 21 15.5 21 14.12 21 13.5 20.5 13 20M14 2C13.705 2.589 13.239 3.076 12.664 3.396 12.088 3.717 11.429 3.857 10.773 3.798L4.603 3.237C4.281 3.206 3.956 3.241 3.648 3.339 3.339 3.438 3.054 3.598 2.81 3.81 2.565 4.022 2.367 4.282 2.226 4.573 2.085 4.865 2.005 5.182 1.99 5.505 1.975 5.828 2.026 6.151 2.14 6.454 2.255 6.757 2.429 7.033 2.653 7.267 2.877 7.5 3.147 7.685 3.445 7.812 3.743 7.938 4.063 8.002 4.387 8H15.5C17.224 8 18.877 8.685 20.096 9.904 21.315 11.123 22 12.776 22 14.5 22 16.224 21.315 17.877 20.096 19.096 18.877 20.315 17.224 21 15.5 21 16.163 21 16.799 20.737 17.268 20.268 17.737 19.799 18 19.163 18 18.5 18 17.837 17.737 17.201 17.268 16.732 16.799 16.263 16.163 16 15.5 16H12C10.144 16 8.363 15.263 7.05 13.95 5.738 12.637 5 10.857 5 9V8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 8C14.657 9.231 15 10.605 15 12 15 13.395 14.657 14.769 14 16M16 16C18 16 20.5 12 20 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Shrimp.displayName = "Shrimp";

Shrimp.metadata = {
  name: "Shrimp",
  category: "stroke/animals",
  tags: ["shrimp", "icon"],
  description: "Shrimp icon from stroke/animals category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Shrimp;

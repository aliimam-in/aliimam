import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Wheel6: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Wheel6(
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
          d="M9.10356 13.2H0V10.8H9.10239L4.30264 6L5.99965 4.30291L10.8 9.10349V0H13.2V9.10336L18.0002 4.3029L19.6972 6L14.8975 10.8H24V13.2H14.8963L19.6972 18.0012L18.0002 19.6983L13.2 14.8978V24H10.8V14.8977L5.99965 19.6983L4.30263 18.0012L9.10356 13.2Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

Wheel6.displayName = "Wheel6";

Wheel6.metadata = {
  name: "Wheel6",
  category: "shapes/wheel",
  tags: ["wheel", "icon"],
  description: "Wheel6 icon from shapes/wheel category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Wheel6;

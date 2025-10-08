import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const LaptopMinimal: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function LaptopMinimal(
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
        d="M19 4H5C3.895 4 3 4.895 3 6V14C3 15.105 3.895 16 5 16H19C20.105 16 21 15.105 21 14V6C21 4.895 20.105 4 19 4ZM2 20H22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

LaptopMinimal.displayName = "LaptopMinimal";

LaptopMinimal.metadata = {
  name: "LaptopMinimal",
  category: "stroke/devices",
  tags: ["laptop", "minimal", "icon"],
  description: "LaptopMinimal icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default LaptopMinimal;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Barcode: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Barcode(
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
        d="M3 5V19M8 5V19M12 5V19M17 5V19M21 5V19"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Barcode.displayName = "Barcode";

Barcode.metadata = {
  name: "Barcode",
  category: "stroke/shopping",
  tags: ["barcode", "icon"],
  description: "Barcode icon from stroke/shopping category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Barcode;

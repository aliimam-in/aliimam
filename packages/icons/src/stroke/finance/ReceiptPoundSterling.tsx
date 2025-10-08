import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ReceiptPoundSterling: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ReceiptPoundSterling(
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
        d="M4 2V22L6 21 8 22 10 21 12 22 14 21 16 22 18 21 20 22V2L18 3 16 2 14 3 12 2 10 3 8 2 6 3 4 2ZM8 13H13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 17V9.5C10 8.837 10.263 8.201 10.732 7.732 11.201 7.263 11.837 7 12.5 7 13.163 7 13.799 7.263 14.268 7.732 14.737 8.201 15 8.837 15 9.5M8 17H15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ReceiptPoundSterling.displayName = "ReceiptPoundSterling";

ReceiptPoundSterling.metadata = {
  name: "ReceiptPoundSterling",
  category: "stroke/finance",
  tags: ["receipt", "pound", "sterling", "icon"],
  description: "ReceiptPoundSterling icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ReceiptPoundSterling;

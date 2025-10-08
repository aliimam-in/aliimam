import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ReceiptSwissFranc: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ReceiptSwissFranc(
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
        d="M4 2V22L6 21L8 22L10 21L12 22L14 21L16 22L18 21L20 22V2L18 3L16 2L14 3L12 2L10 3L8 2L6 3L4 2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 17V7H15M10 11H14M8 15H13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ReceiptSwissFranc.displayName = "ReceiptSwissFranc";

ReceiptSwissFranc.metadata = {
  name: "ReceiptSwissFranc",
  category: "stroke/finance",
  tags: ["receipt", "swiss", "franc", "icon"],
  description: "ReceiptSwissFranc icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ReceiptSwissFranc;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ReceiptTurkishLira: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ReceiptTurkishLira(
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
        d="M10 6.5V17.5C11.459 17.5 12.858 16.921 13.889 15.889 14.921 14.858 15.5 13.459 15.5 12M14 8 8 11"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 2V22L6 21L8 22L10 21L12 22L14 21L16 22L18 21L20 22V2L18 3L16 2L14 3L12 2L10 3L8 2L6 3L4 2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ReceiptTurkishLira.displayName = "ReceiptTurkishLira";

ReceiptTurkishLira.metadata = {
  name: "ReceiptTurkishLira",
  category: "stroke/finance",
  tags: ["receipt", "turkish", "lira", "icon"],
  description: "ReceiptTurkishLira icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ReceiptTurkishLira;

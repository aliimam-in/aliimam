import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ReceiptRussianRuble: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ReceiptRussianRuble(
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
        d="M4 2V22L6 21 8 22 10 21 12 22 14 21 16 22 18 21 20 22V2L18 3 16 2 14 3 12 2 10 3 8 2 6 3 4 2ZM8 15H13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 11H13C13.5304 11 14.0391 10.7893 14.4142 10.4142C14.7893 10.0391 15 9.53043 15 9C15 8.46957 14.7893 7.96086 14.4142 7.58579C14.0391 7.21071 13.5304 7 13 7H10V17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ReceiptRussianRuble.displayName = "ReceiptRussianRuble";

ReceiptRussianRuble.metadata = {
  name: "ReceiptRussianRuble",
  category: "stroke/finance",
  tags: ["receipt", "russian", "ruble", "icon"],
  description: "ReceiptRussianRuble icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ReceiptRussianRuble;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ReceiptJapaneseYen: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ReceiptJapaneseYen(
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
        d="M4 2V22L6 21 8 22 10 21 12 22 14 21 16 22 18 21 20 22V2L18 3 16 2 14 3 12 2 10 3 8 2 6 3 4 2ZM12 10 15 7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 7 12 10V17.5M9 11H15M9 15H15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ReceiptJapaneseYen.displayName = "ReceiptJapaneseYen";

ReceiptJapaneseYen.metadata = {
  name: "ReceiptJapaneseYen",
  category: "stroke/finance",
  tags: ["receipt", "japanese", "yen", "icon"],
  description: "ReceiptJapaneseYen icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ReceiptJapaneseYen;

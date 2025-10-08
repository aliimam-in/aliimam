import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ReceiptIndianRupee: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ReceiptIndianRupee(
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
        d="M4 2V22L6 21 8 22 10 21 12 22 14 21 16 22 18 21 20 22V2L18 3 16 2 14 3 12 2 10 3 8 2 6 3 4 2ZM8 7H16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17.5 8 15H9C10.061 15 11.078 14.579 11.828 13.828 12.579 13.078 13 12.061 13 11 13 9.939 12.579 8.922 11.828 8.172 11.078 7.421 10.061 7 9 7M8 11H16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ReceiptIndianRupee.displayName = "ReceiptIndianRupee";

ReceiptIndianRupee.metadata = {
  name: "ReceiptIndianRupee",
  category: "stroke/finance",
  tags: ["receipt", "indian", "rupee", "icon"],
  description: "ReceiptIndianRupee icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ReceiptIndianRupee;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ReceiptEuro: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ReceiptEuro(
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
        d="M4 2V22L6 21 8 22 10 21 12 22 14 21 16 22 18 21 20 22V2L18 3 16 2 14 3 12 2 10 3 8 2 6 3 4 2ZM8 12H13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 9.50001C15.4685 8.87864 14.7594 8.43508 13.9681 8.22906C13.1769 8.02304 12.3414 8.06446 11.5744 8.34774C10.8074 8.63103 10.1456 9.14256 9.67825 9.81345C9.21084 10.4843 8.96027 11.2824 8.96027 12.1C8.96027 12.9177 9.21084 13.7157 9.67825 14.3866C10.1456 15.0575 10.8074 15.569 11.5744 15.8523C12.3414 16.1356 13.1769 16.177 13.9681 15.971C14.7594 15.7649 15.4685 15.3214 16 14.7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ReceiptEuro.displayName = "ReceiptEuro";

ReceiptEuro.metadata = {
  name: "ReceiptEuro",
  category: "stroke/finance",
  tags: ["receipt", "euro", "icon"],
  description: "ReceiptEuro icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ReceiptEuro;

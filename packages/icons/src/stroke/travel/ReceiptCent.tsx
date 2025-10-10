import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ReceiptCentProps extends IconProps {
  type?: "stroke";
}

export const ReceiptCent: IconComponent<ReceiptCentProps> = React.forwardRef<
  SVGSVGElement,
  ReceiptCentProps
>(function ReceiptCent(
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
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
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
          d="M4 2V22L6 21 8 22 10 21 12 22 14 21 16 22 18 21 20 22V2L18 3 16 2 14 3 12 2 10 3 8 2 6 3 4 2ZM12 6.5V17.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.0002 9.4C14.4687 8.77864 13.7596 8.33507 12.9683 8.12905C12.177 7.92303 11.3416 7.96446 10.5746 8.24774C9.80761 8.53102 9.14583 9.04256 8.67843 9.71344C8.21103 10.3843 7.96045 11.1823 7.96045 12C7.96045 12.8177 8.21103 13.6157 8.67843 14.2866C9.14583 14.9574 9.80761 15.469 10.5746 15.7523C11.3416 16.0355 12.177 16.077 12.9683 15.8709C13.7596 15.6649 14.4687 15.2214 15.0002 14.6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
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
          d="M4 2V22L6 21 8 22 10 21 12 22 14 21 16 22 18 21 20 22V2L18 3 16 2 14 3 12 2 10 3 8 2 6 3 4 2ZM12 6.5V17.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 9.4C14.4685 8.77864 13.7594 8.33507 12.9681 8.12905C12.1769 7.92303 11.3414 7.96446 10.5744 8.24774C9.80742 8.53102 9.14565 9.04256 8.67825 9.71344C8.21084 10.3843 7.96027 11.1823 7.96027 12C7.96027 12.8177 8.21084 13.6157 8.67825 14.2866C9.14565 14.9574 9.80742 15.469 10.5744 15.7523C11.3414 16.0355 12.1769 16.077 12.9681 15.8709C13.7594 15.6649 14.4685 15.2214 15 14.6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ReceiptCent doesn't support ${type}`);
  return null;
});

ReceiptCent.displayName = "ReceiptCent";

ReceiptCent.metadata = {
  name: "ReceiptCent",
  category: "stroke/travel",
  tags: ["receipt", "cent", "icon"],
  description: "ReceiptCent icon from stroke/travel category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ReceiptCent;

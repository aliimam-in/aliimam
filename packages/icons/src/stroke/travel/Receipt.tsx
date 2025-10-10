import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ReceiptProps extends IconProps {
  type?: "stroke";
}

export const Receipt: IconComponent<ReceiptProps> = React.forwardRef<
  SVGSVGElement,
  ReceiptProps
>(function Receipt(
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
          d="M4 2V22L6 21L8 22L10 21L12 22L14 21L16 22L18 21L20 22V2L18 3L16 2L14 3L12 2L10 3L8 2L6 3L4 2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 8H10C9.47 8 8.961 8.211 8.586 8.586 8.211 8.961 8 9.47 8 10 8 10.53 8.211 11.039 8.586 11.414 8.961 11.789 9.47 12 10 12H14C14.53 12 15.039 12.211 15.414 12.586 15.789 12.961 16 13.47 16 14 16 14.53 15.789 15.039 15.414 15.414 15.039 15.789 14.53 16 14 16H8M12 17.5V6.5"
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
          d="M4 2V22L6 21L8 22L10 21L12 22L14 21L16 22L18 21L20 22V2L18 3L16 2L14 3L12 2L10 3L8 2L6 3L4 2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 8H10C9.47 8 8.961 8.211 8.586 8.586 8.211 8.961 8 9.47 8 10 8 10.53 8.211 11.039 8.586 11.414 8.961 11.789 9.47 12 10 12H14C14.53 12 15.039 12.211 15.414 12.586 15.789 12.961 16 13.47 16 14 16 14.53 15.789 15.039 15.414 15.414 15.039 15.789 14.53 16 14 16H8M12 17.5V6.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Receipt doesn't support ${type}`);
  return null;
});

Receipt.displayName = "Receipt";

Receipt.metadata = {
  name: "Receipt",
  category: "stroke/travel",
  tags: ["receipt", "icon"],
  description: "Receipt icon from stroke/travel category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Receipt;

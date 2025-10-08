import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ScanQrCodeProps extends IconProps {
  type?: "stroke";
}

export const ScanQrCode: IconComponent<ScanQrCodeProps> = React.forwardRef<
  SVGSVGElement,
  ScanQrCodeProps
>(function ScanQrCode(
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
          d="M17 12V16C17 16.265 16.895 16.52 16.707 16.707 16.52 16.895 16.265 17 16 17H12M17 3H19C19.53 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5V7M17 8V7M21 17V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H17M3 7V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H7M7 17H7.01M7 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V17M11 7H8C7.448 7 7 7.448 7 8V11C7 11.552 7.448 12 8 12H11C11.552 12 12 11.552 12 11V8C12 7.448 11.552 7 11 7Z"
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
          d="M17 12V16C17 16.265 16.895 16.52 16.707 16.707 16.52 16.895 16.265 17 16 17H12M17 3H19C19.53 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5V7M17 8V7M21 17V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H17M3 7V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H7M7 17H7.01M7 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V17M11 7H8C7.448 7 7 7.448 7 8V11C7 11.552 7.448 12 8 12H11C11.552 12 12 11.552 12 11V8C12 7.448 11.552 7 11 7Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ScanQrCode doesn't support ${type}`);
  return null;
});

ScanQrCode.displayName = "ScanQrCode";

ScanQrCode.metadata = {
  name: "ScanQrCode",
  category: "stroke/devices",
  tags: ["scan", "qr", "code", "icon"],
  description: "ScanQrCode icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ScanQrCode;

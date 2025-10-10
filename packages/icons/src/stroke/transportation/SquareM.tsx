import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SquareMProps extends IconProps {
  type?: "stroke";
}

export const SquareM: IconComponent<SquareMProps> = React.forwardRef<
  SVGSVGElement,
  SquareMProps
>(function SquareM(
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
          d="M8 16V8.50002C8 8.39508 8.03302 8.2928 8.09438 8.20767C8.15574 8.12254 8.24233 8.05887 8.34189 8.02568C8.44144 7.9925 8.54892 7.99148 8.64908 8.02277C8.74925 8.05406 8.83703 8.11607 8.9 8.20002L11.6 11.799C11.6466 11.8611 11.707 11.9115 11.7764 11.9462C11.8458 11.981 11.9224 11.999 12 11.999C12.0776 11.999 12.1542 11.981 12.2236 11.9462C12.293 11.9115 12.3534 11.8611 12.4 11.799L15.1 8.19902C15.163 8.11507 15.2507 8.05306 15.3509 8.02177C15.4511 7.99048 15.5586 7.9915 15.6581 8.02468C15.7577 8.05787 15.8443 8.12154 15.9056 8.20667C15.967 8.2918 16 8.39408 16 8.49902V16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
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
          d="M8 16V8.49999C8 8.39505 8.03302 8.29277 8.09438 8.20764C8.15574 8.1225 8.24233 8.05884 8.34189 8.02565C8.44144 7.99247 8.54892 7.99145 8.64908 8.02274C8.74925 8.05403 8.83703 8.11604 8.9 8.19999L11.6 11.799C11.6466 11.8611 11.707 11.9115 11.7764 11.9462C11.8458 11.9809 11.9224 11.999 12 11.999C12.0776 11.999 12.1542 11.9809 12.2236 11.9462C12.293 11.9115 12.3534 11.8611 12.4 11.799L15.1 8.19899C15.163 8.11504 15.2507 8.05303 15.3509 8.02174C15.4511 7.99045 15.5586 7.99147 15.6581 8.02465C15.7577 8.05784 15.8443 8.12151 15.9056 8.20664C15.967 8.29177 16 8.39405 16 8.49899V16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`SquareM doesn't support ${type}`);
  return null;
});

SquareM.displayName = "SquareM";

SquareM.metadata = {
  name: "SquareM",
  category: "stroke/transportation",
  tags: ["square", "icon"],
  description: "SquareM icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquareM;

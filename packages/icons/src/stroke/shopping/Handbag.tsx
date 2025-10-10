import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface HandbagProps extends IconProps {
  type?: "stroke";
}

export const Handbag: IconComponent<HandbagProps> = React.forwardRef<
  SVGSVGElement,
  HandbagProps
>(function Handbag(
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
          d="M2.04815 18.566C1.98316 18.8583 1.98465 19.1615 2.05252 19.4532C2.12039 19.7449 2.25289 20.0176 2.44025 20.2513C2.62762 20.4849 2.86505 20.6735 3.13504 20.8031C3.40503 20.9326 3.70067 20.9999 4.00015 21H20.0001C20.2996 20.9999 20.5953 20.9326 20.8653 20.8031C21.1352 20.6735 21.3727 20.4849 21.56 20.2513C21.7474 20.0176 21.8799 19.7449 21.9478 19.4532C22.0156 19.1615 22.0171 18.8583 21.9521 18.566L19.9521 9.566C19.8534 9.12187 19.6062 8.72468 19.2513 8.43998C18.8965 8.15528 18.4551 8.00008 18.0001 8H6.00014C5.54518 8.00008 5.10383 8.15528 4.74896 8.43998C4.39408 8.72468 4.14687 9.12187 4.04814 9.566L2.04815 18.566Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 11V6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6V11"
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
          d="M2.04815 18.566C1.98316 18.8583 1.98465 19.1615 2.05252 19.4532C2.12039 19.7449 2.25289 20.0176 2.44025 20.2513C2.62762 20.4849 2.86505 20.6735 3.13504 20.8031C3.40503 20.9326 3.70067 20.9999 4.00015 21H20.0001C20.2996 20.9999 20.5953 20.9326 20.8653 20.8031C21.1352 20.6735 21.3727 20.4849 21.56 20.2513C21.7474 20.0176 21.8799 19.7449 21.9478 19.4532C22.0156 19.1615 22.0171 18.8583 21.9521 18.566L19.9521 9.566C19.8534 9.12187 19.6062 8.72468 19.2513 8.43998C18.8965 8.15528 18.4551 8.00008 18.0001 8H6.00014C5.54518 8.00008 5.10383 8.15528 4.74896 8.43998C4.39408 8.72468 4.14687 9.12187 4.04814 9.566L2.04815 18.566Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 11V6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6V11"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Handbag doesn't support ${type}`);
  return null;
});

Handbag.displayName = "Handbag";

Handbag.metadata = {
  name: "Handbag",
  category: "stroke/shopping",
  tags: ["handbag", "icon"],
  description: "Handbag icon from stroke/shopping category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Handbag;

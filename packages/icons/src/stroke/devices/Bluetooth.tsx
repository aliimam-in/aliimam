import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BluetoothProps extends IconProps {
  type?: "stroke";
}

export const Bluetooth: IconComponent<BluetoothProps> = React.forwardRef<
  SVGSVGElement,
  BluetoothProps
>(function Bluetooth(
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
          d="M7 7L17 17L12 22V2L17 7L7 17"
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
          d="M7 7L17 17L12 22V2L17 7L7 17"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Bluetooth doesn't support ${type}`);
  return null;
});

Bluetooth.displayName = "Bluetooth";

Bluetooth.metadata = {
  name: "Bluetooth",
  category: "stroke/devices",
  tags: ["bluetooth", "icon"],
  description: "Bluetooth icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Bluetooth;

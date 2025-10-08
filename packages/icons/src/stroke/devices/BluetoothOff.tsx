import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BluetoothOffProps extends IconProps {
  type?: "stroke";
}

export const BluetoothOff: IconComponent<BluetoothOffProps> = React.forwardRef<
  SVGSVGElement,
  BluetoothOffProps
>(function BluetoothOff(
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
          d="M17 17 12 22V12L7 17M2 2 22 22M14.5 9.5 17 7 12 2V6.5"
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
          d="M17 17 12 22V12L7 17M2 2 22 22M14.5 9.5 17 7 12 2V6.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`BluetoothOff doesn't support ${type}`);
  return null;
});

BluetoothOff.displayName = "BluetoothOff";

BluetoothOff.metadata = {
  name: "BluetoothOff",
  category: "stroke/devices",
  tags: ["bluetooth", "off", "icon"],
  description: "BluetoothOff icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BluetoothOff;

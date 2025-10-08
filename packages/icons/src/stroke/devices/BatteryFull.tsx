import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BatteryFullProps extends IconProps {
  type?: "stroke";
}

export const BatteryFull: IconComponent<BatteryFullProps> = React.forwardRef<
  SVGSVGElement,
  BatteryFullProps
>(function BatteryFull(
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
          d="M10 10V14M14 10V14M22 14V10M6 10V14M16 6H4C2.895 6 2 6.895 2 8V16C2 17.105 2.895 18 4 18H16C17.105 18 18 17.105 18 16V8C18 6.895 17.105 6 16 6Z"
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
          d="M10 10V14M14 10V14M22 14V10M6 10V14M16 6H4C2.895 6 2 6.895 2 8V16C2 17.105 2.895 18 4 18H16C17.105 18 18 17.105 18 16V8C18 6.895 17.105 6 16 6Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`BatteryFull doesn't support ${type}`);
  return null;
});

BatteryFull.displayName = "BatteryFull";

BatteryFull.metadata = {
  name: "BatteryFull",
  category: "stroke/devices",
  tags: ["battery", "full", "icon"],
  description: "BatteryFull icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BatteryFull;

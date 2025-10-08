import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BatteryProps extends IconProps {
  type?: "stroke";
}

export const Battery: IconComponent<BatteryProps> = React.forwardRef<
  SVGSVGElement,
  BatteryProps
>(function Battery(
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
          d="M22 14V10M16 6H4C2.895 6 2 6.895 2 8V16C2 17.105 2.895 18 4 18H16C17.105 18 18 17.105 18 16V8C18 6.895 17.105 6 16 6Z"
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
          d="M22 14V10M16 6H4C2.895 6 2 6.895 2 8V16C2 17.105 2.895 18 4 18H16C17.105 18 18 17.105 18 16V8C18 6.895 17.105 6 16 6Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Battery doesn't support ${type}`);
  return null;
});

Battery.displayName = "Battery";

Battery.metadata = {
  name: "Battery",
  category: "stroke/devices",
  tags: ["battery", "icon"],
  description: "Battery icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Battery;

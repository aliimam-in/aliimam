import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BatteryWarningProps extends IconProps {
  type?: "stroke";
}

export const BatteryWarning: IconComponent<BatteryWarningProps> =
  React.forwardRef<SVGSVGElement, BatteryWarningProps>(function BatteryWarning(
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
            d="M10 17H10.01M10 7V13M14 6H16C16.53 6 17.039 6.211 17.414 6.586 17.789 6.961 18 7.47 18 8V16C18 16.53 17.789 17.039 17.414 17.414 17.039 17.789 16.53 18 16 18H14M22 14V10M6 18H4C3.47 18 2.961 17.789 2.586 17.414 2.211 17.039 2 16.53 2 16V8C2 7.47 2.211 6.961 2.586 6.586 2.961 6.211 3.47 6 4 6H6"
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
            d="M10 17H10.01M10 7V13M14 6H16C16.53 6 17.039 6.211 17.414 6.586 17.789 6.961 18 7.47 18 8V16C18 16.53 17.789 17.039 17.414 17.414 17.039 17.789 16.53 18 16 18H14M22 14V10M6 18H4C3.47 18 2.961 17.789 2.586 17.414 2.211 17.039 2 16.53 2 16V8C2 7.47 2.211 6.961 2.586 6.586 2.961 6.211 3.47 6 4 6H6"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`BatteryWarning doesn't support ${type}`);
    return null;
  });

BatteryWarning.displayName = "BatteryWarning";

BatteryWarning.metadata = {
  name: "BatteryWarning",
  category: "stroke/devices",
  tags: ["battery", "warning", "icon"],
  description: "BatteryWarning icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BatteryWarning;

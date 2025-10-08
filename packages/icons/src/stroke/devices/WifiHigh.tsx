import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface WifiHighProps extends IconProps {
  type?: "stroke";
}

export const WifiHigh: IconComponent<WifiHighProps> = React.forwardRef<
  SVGSVGElement,
  WifiHighProps
>(function WifiHigh(
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
          d="M12 20H12.01M5 12.859C6.869 11.027 9.382 10.001 12 10.001 14.618 10.001 17.131 11.027 19 12.859M8.5 16.429C9.435 15.513 10.691 15 12 15 13.309 15 14.565 15.513 15.5 16.429"
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
          d="M12 20H12.01M5 12.859C6.869 11.027 9.382 10.001 12 10.001 14.618 10.001 17.131 11.027 19 12.859M8.5 16.429C9.435 15.513 10.691 15 12 15 13.309 15 14.565 15.513 15.5 16.429"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`WifiHigh doesn't support ${type}`);
  return null;
});

WifiHigh.displayName = "WifiHigh";

WifiHigh.metadata = {
  name: "WifiHigh",
  category: "stroke/devices",
  tags: ["wifi", "high", "icon"],
  description: "WifiHigh icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default WifiHigh;

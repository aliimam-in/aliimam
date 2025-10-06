import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const WifiOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function WifiOff(
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
    ...props
  },
  forwardedRef,
) {
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
        d="M12 20H12.01M8.5 16.429C9.435 15.513 10.691 15 12 15 13.309 15 14.565 15.513 15.5 16.429M5 12.859C6.418 11.469 8.218 10.533 10.17 10.169M19 12.859C18.398 12.269 17.724 11.757 16.993 11.336M2 8.82C3.237 7.714 4.648 6.821 6.177 6.177M22 8.82C20.475 7.456 18.686 6.418 16.745 5.771 14.804 5.124 12.751 4.88 10.712 5.056M2 2 22 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

WifiOff.displayName = "WifiOff";

WifiOff.metadata = {
  name: "WifiOff",
  category: "stroke/connectivity",
  tags: ["wifi", "off", "icon"],
  description: "WifiOff icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default WifiOff;

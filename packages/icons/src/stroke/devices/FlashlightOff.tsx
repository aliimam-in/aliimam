import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FlashlightOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FlashlightOff(
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
        d="M16 16V20C16 20.53 15.789 21.039 15.414 21.414 15.039 21.789 14.53 22 14 22H10C9.47 22 8.961 21.789 8.586 21.414 8.211 21.039 8 20.53 8 20V10C8 8 6 8 6 6M7 2H18V6C18 8 16 8 16 10V11M11 6H18M2 2 22 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FlashlightOff.displayName = "FlashlightOff";

FlashlightOff.metadata = {
  name: "FlashlightOff",
  category: "stroke/devices",
  tags: ["flashlight", "off", "icon"],
  description: "FlashlightOff icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FlashlightOff;

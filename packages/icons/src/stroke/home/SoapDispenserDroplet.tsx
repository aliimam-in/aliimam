import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SoapDispenserDroplet: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SoapDispenserDroplet(
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
        d="M10.5 2V6M14 2H7C6.47 2 5.961 2.211 5.586 2.586 5.211 2.961 5 3.47 5 4M19.29 14.76C18.123 13.802 17.316 12.476 17 11 16.69 12.479 15.881 13.806 14.71 14.76 13.56 15.68 13 16.8 13 17.95 13 20.17 14.8 22 17 22 19.2 22 21 20.17 21 17.95 21 16.79 20.43 15.69 19.29 14.76ZM9.607 21H6C5.47 21 4.961 20.789 4.586 20.414 4.211 20.039 4 19.53 4 19V12C4 11.47 4.211 10.961 4.586 10.586 4.961 10.211 5.47 10 6 10H13V7C13 6.735 12.895 6.48 12.707 6.293 12.52 6.105 12.265 6 12 6H9C8.735 6 8.48 6.105 8.293 6.293 8.105 6.48 8 6.735 8 7V10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SoapDispenserDroplet.displayName = "SoapDispenserDroplet";

SoapDispenserDroplet.metadata = {
  name: "SoapDispenserDroplet",
  category: "stroke/home",
  tags: ["soap", "dispenser", "droplet", "icon"],
  description: "SoapDispenserDroplet icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SoapDispenserDroplet;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Microchip: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Microchip(
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
        d="M18 12H20M18 16H20M18 20H20M18 4H20M18 8H20M4 12H6M4 16H6M4 20H6M4 4H6M4 8H6M8 2C7.47 2 6.961 2.211 6.586 2.586 6.211 2.961 6 3.47 6 4V20C6 20.53 6.211 21.039 6.586 21.414 6.961 21.789 7.47 22 8 22H16C16.53 22 17.039 21.789 17.414 21.414 17.789 21.039 18 20.53 18 20V4C18 3.47 17.789 2.961 17.414 2.586 17.039 2.211 16.53 2 16 2H14.5C14.224 2 14.006 2.227 13.938 2.495 13.828 2.926 13.578 3.307 13.227 3.58 12.876 3.853 12.444 4.001 12 4.001 11.556 4.001 11.124 3.853 10.773 3.58 10.422 3.307 10.172 2.926 10.062 2.495 9.994 2.227 9.776 2 9.5 2H8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Microchip.displayName = "Microchip";

Microchip.metadata = {
  name: "Microchip",
  category: "stroke/devices",
  tags: ["microchip", "icon"],
  description: "Microchip icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Microchip;

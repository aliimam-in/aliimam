import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Nfc: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Nfc(
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
          d="M6 8.32C6.639 9.441 6.975 10.71 6.975 12 6.975 13.291 6.639 14.559 6 15.68M9.46 6.21C10.459 7.976 10.984 9.971 10.984 12 10.984 14.029 10.459 16.024 9.46 17.79M12.91 4.1C14.288 6.505 15.013 9.227 15.015 11.999 15.017 14.77 14.295 17.494 12.92 19.9M16.37 2C18.11 5.046 19.025 8.492 19.025 12 19.025 15.508 18.11 18.954 16.37 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Nfc.displayName = "Nfc";

Nfc.metadata = {
  name: "Nfc",
  category: "stroke/communication",
  tags: ["nfc", "icon"],
  description: "Nfc icon from stroke/communication category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Nfc;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SmartphoneNfc: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SmartphoneNfc(
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
        d="M8 6H3C2.448 6 2 6.448 2 7V17C2 17.552 2.448 18 3 18H8C8.552 18 9 17.552 9 17V7C9 6.448 8.552 6 8 6ZM13 8.32C13.639 9.441 13.975 10.709 13.975 12 13.975 13.291 13.639 14.559 13 15.68M16.46 6.21C17.459 7.976 17.984 9.971 17.984 12 17.984 14.029 17.459 16.024 16.46 17.79M19.91 4.1C21.288 6.505 22.013 9.227 22.015 11.999 22.017 14.77 21.294 17.494 19.92 19.9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SmartphoneNfc.displayName = "SmartphoneNfc";

SmartphoneNfc.metadata = {
  name: "SmartphoneNfc",
  category: "stroke/communication",
  tags: ["smartphone", "nfc", "icon"],
  description: "SmartphoneNfc icon from stroke/communication category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SmartphoneNfc;

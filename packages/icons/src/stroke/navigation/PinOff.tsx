import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const PinOff: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function PinOff(
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
          d="M12 17V22M15 9.34V7C15 6.735 15.105 6.48 15.293 6.293 15.48 6.105 15.735 6 16 6 16.53 6 17.039 5.789 17.414 5.414 17.789 5.039 18 4.53 18 4 18 3.47 17.789 2.961 17.414 2.586 17.039 2.211 16.53 2 16 2H7.89M2 2 22 22M9 9V10.76C9 11.132 8.896 11.497 8.7 11.813 8.504 12.129 8.223 12.384 7.89 12.55L6.11 13.45C5.777 13.616 5.496 13.871 5.3 14.187 5.104 14.503 5 14.868 5 15.24V16C5 16.265 5.105 16.52 5.293 16.707 5.48 16.895 5.735 17 6 17H17"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

PinOff.displayName = "PinOff";

PinOff.metadata = {
  name: "PinOff",
  category: "stroke/navigation",
  tags: ["pin", "off", "icon"],
  description: "PinOff icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PinOff;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TouchpadOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TouchpadOff(
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
        d="M12 20V14M19.656 14H22M2 14H14M2 2 22 22M20 20H4C3.47 20 2.961 19.789 2.586 19.414 2.211 19.039 2 18.53 2 18V6C2 5.47 2.211 4.961 2.586 4.586 2.961 4.211 3.47 4 4 4M9.656 4H20C20.53 4 21.039 4.211 21.414 4.586 21.789 4.961 22 5.47 22 6V16.344"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TouchpadOff.displayName = "TouchpadOff";

TouchpadOff.metadata = {
  name: "TouchpadOff",
  category: "stroke/devices",
  tags: ["touchpad", "off", "icon"],
  description: "TouchpadOff icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TouchpadOff;

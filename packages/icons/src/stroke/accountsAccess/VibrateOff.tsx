import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const VibrateOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function VibrateOff(
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
        d="M2 8 4 10 2 12 4 14 2 16M22 8 20 10 22 12 20 14 22 16M8 8V18C8 18.55 8.45 19 9 19H15C15.55 19 16 18.55 16 18V16M16 10.34V6C16 5.45 15.55 5 15 5H10.66M2 2 22 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

VibrateOff.displayName = "VibrateOff";

VibrateOff.metadata = {
  name: "VibrateOff",
  category: "stroke/accountsAccess",
  tags: ["vibrate", "off", "icon"],
  description: "VibrateOff icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default VibrateOff;

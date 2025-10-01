import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const RotateCcwKey: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function RotateCcwKey(
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
        d="M14.5 9.5 15.5 10.5M15.5 8.5 11.5 12.5M3 12C3 13.78 3.528 15.52 4.517 17 5.506 18.48 6.911 19.634 8.556 20.315 10.2 20.996 12.01 21.174 13.756 20.827 15.502 20.48 17.105 19.623 18.364 18.364 19.623 17.105 20.48 15.502 20.827 13.756 21.174 12.01 20.996 10.2 20.315 8.556 19.634 6.911 18.48 5.506 17 4.517 15.52 3.528 13.78 3 12 3 9.484 3.008 7.068 3.99 5.26 5.74L3 8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 3V8H8M10 16C11.105 16 12 15.105 12 14 12 12.895 11.105 12 10 12 8.895 12 8 12.895 8 14 8 15.105 8.895 16 10 16Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

RotateCcwKey.displayName = "RotateCcwKey";

RotateCcwKey.metadata = {
  name: "RotateCcwKey",
  category: "stroke/accountsAccess",
  tags: ["rotate", "ccw", "key", "icon"],
  description: "RotateCcwKey icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default RotateCcwKey;

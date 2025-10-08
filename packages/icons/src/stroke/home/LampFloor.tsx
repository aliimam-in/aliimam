import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const LampFloor: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function LampFloor(
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
        d="M12 10V22M17.929 7.629C17.99 7.781 18.012 7.945 17.995 8.108 17.977 8.27 17.92 8.426 17.828 8.561 17.737 8.696 17.613 8.807 17.469 8.884 17.324 8.96 17.163 9 17 9H7C6.837 9 6.676 8.96 6.532 8.883 6.387 8.807 6.264 8.696 6.172 8.561 6.081 8.425 6.024 8.27 6.006 8.107 5.989 7.945 6.011 7.781 6.072 7.629L8.072 2.629C8.146 2.443 8.274 2.284 8.44 2.172 8.605 2.06 8.8 2 9 2H15C15.2 2 15.395 2.06 15.56 2.172 15.726 2.284 15.854 2.443 15.928 2.629L17.929 7.629ZM9 22H15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

LampFloor.displayName = "LampFloor";

LampFloor.metadata = {
  name: "LampFloor",
  category: "stroke/home",
  tags: ["lamp", "floor", "icon"],
  description: "LampFloor icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default LampFloor;

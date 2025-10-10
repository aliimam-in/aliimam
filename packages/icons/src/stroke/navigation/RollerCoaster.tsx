import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const RollerCoaster: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function RollerCoaster(
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
        d="M6 19V5M10 19V6.8M14 19V11.2M18 5V9M18 19V13M22 19V9M2 19V9C2 7.939 2.421 6.922 3.172 6.172 3.922 5.421 4.939 5 6 5 8 5 10 6.33 12 9 14 11.67 16 13 18 13 18.668 12.999 19.325 12.832 19.912 12.512 20.498 12.192 20.995 11.73 21.357 11.169 21.72 10.607 21.935 9.964 21.985 9.298 22.035 8.632 21.917 7.964 21.642 7.355 21.368 6.746 20.945 6.216 20.413 5.812 19.88 5.409 19.255 5.145 18.595 5.045 17.934 4.945 17.259 5.012 16.631 5.24 16.003 5.468 15.443 5.85 15 6.35"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

RollerCoaster.displayName = "RollerCoaster";

RollerCoaster.metadata = {
  name: "RollerCoaster",
  category: "stroke/navigation",
  tags: ["roller", "coaster", "icon"],
  description: "RollerCoaster icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default RollerCoaster;

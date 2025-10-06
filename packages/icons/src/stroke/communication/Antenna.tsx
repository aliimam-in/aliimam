import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Antenna: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Antenna(
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
        d="M2 12 7 2M7 12 12 2M12 12 17 2M17 12 22 2M4.5 7H19.5M12 16V22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Antenna.displayName = "Antenna";

Antenna.metadata = {
  name: "Antenna",
  category: "stroke/communication",
  tags: ["antenna", "icon"],
  description: "Antenna icon from stroke/communication category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Antenna;

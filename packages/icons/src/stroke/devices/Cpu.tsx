import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Cpu: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Cpu(
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
          d="M12 20V22M12 2V4M17 20V22M17 2V4M2 12H4M2 17H4M2 7H4M20 12H22M20 17H22M20 7H22M7 20V22M7 2V4M18 4H6C4.895 4 4 4.895 4 6V18C4 19.105 4.895 20 6 20H18C19.105 20 20 19.105 20 18V6C20 4.895 19.105 4 18 4Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 8H9C8.44772 8 8 8.44772 8 9V15C8 15.5523 8.44772 16 9 16H15C15.5523 16 16 15.5523 16 15V9C16 8.44772 15.5523 8 15 8Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Cpu.displayName = "Cpu";

Cpu.metadata = {
  name: "Cpu",
  category: "stroke/devices",
  tags: ["cpu", "icon"],
  description: "Cpu icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Cpu;

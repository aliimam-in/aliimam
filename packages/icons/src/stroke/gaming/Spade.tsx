import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Spade: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Spade(
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
          d="M12 18V22M2 14.499C2 15.612 2.338 16.698 2.969 17.615 3.599 18.532 4.493 19.236 5.532 19.634 6.571 20.032 7.707 20.106 8.788 19.845 9.87 19.584 10.847 19.002 11.591 18.174 11.702 18.071 11.848 18.013 12 18.014 12.152 18.014 12.298 18.071 12.409 18.175 13.153 19.003 14.13 19.585 15.212 19.846 16.294 20.107 17.429 20.033 18.468 19.635 19.507 19.237 20.401 18.533 21.031 17.616 21.662 16.699 22 15.613 22 14.5 22 12.21 20.5 10.5 19 9L13.508 3.688C13.322 3.474 13.092 3.302 12.834 3.183 12.576 3.065 12.296 3.003 12.013 3.001 11.729 2.999 11.448 3.057 11.189 3.172 10.929 3.288 10.697 3.456 10.508 3.668L5 8.999C3.5 10.499 2 12.199 2 14.499Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Spade.displayName = "Spade";

Spade.metadata = {
  name: "Spade",
  category: "stroke/gaming",
  tags: ["spade", "icon"],
  description: "Spade icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Spade;

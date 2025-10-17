import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Wheel7: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Wheel7(
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
          d="M10.2105 24V13.9359L1.10674 17.0461L0 13.4646L9.10324 10.3545L3.47745 2.21259L6.37371 0L12 8.1426L17.6263 1.08349e-05L20.5225 2.2126L14.8967 10.3545L24 13.4646L22.8933 17.0462L13.7895 13.9359V24H10.2105Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

Wheel7.displayName = "Wheel7";

Wheel7.metadata = {
  name: "Wheel7",
  category: "shapes/wheel",
  tags: ["wheel", "icon"],
  description: "Wheel7 icon from shapes/wheel category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Wheel7;

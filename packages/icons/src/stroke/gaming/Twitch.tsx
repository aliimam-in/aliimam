import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Twitch: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Twitch(
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
          d="M11 11V7M16 11V7M21 2H3V18H8V22L12 18H17L21 14V2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Twitch.displayName = "Twitch";

Twitch.metadata = {
  name: "Twitch",
  category: "stroke/gaming",
  tags: ["twitch", "icon"],
  description: "Twitch icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Twitch;

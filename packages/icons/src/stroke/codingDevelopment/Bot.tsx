import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Bot: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Bot(
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
          d="M12 8V4H8M18 8H6C4.895 8 4 8.895 4 10V18C4 19.105 4.895 20 6 20H18C19.105 20 20 19.105 20 18V10C20 8.895 19.105 8 18 8ZM2 14H4M20 14H22M15 13V15M9 13V15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Bot.displayName = "Bot";

Bot.metadata = {
  name: "Bot",
  category: "stroke/codingDevelopment",
  tags: ["bot", "icon"],
  description: "Bot icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Bot;

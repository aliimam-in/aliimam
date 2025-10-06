import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const BotOff: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function BotOff(
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
          d="M13.67 8H18C18.53 8 19.039 8.211 19.414 8.586 19.789 8.961 20 9.47 20 10V14.33M2 14H4M20 14H22M22 22 2 2M8 8H6C5.47 8 4.961 8.211 4.586 8.586 4.211 8.961 4 9.47 4 10V18C4 18.53 4.211 19.039 4.586 19.414 4.961 19.789 5.47 20 6 20H18C18.53 20 19.039 19.789 19.414 19.414M9 13V15M9.67 4H12V6.33"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

BotOff.displayName = "BotOff";

BotOff.metadata = {
  name: "BotOff",
  category: "stroke/codingDevelopment",
  tags: ["bot", "off", "icon"],
  description: "BotOff icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BotOff;

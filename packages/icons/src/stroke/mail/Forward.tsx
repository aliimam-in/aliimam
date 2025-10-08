import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Forward: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Forward(
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
        d="M15 17L20 12L15 7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 18V16C4 14.9391 4.42143 13.9217 5.17157 13.1716C5.92172 12.4214 6.93913 12 8 12H20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Forward.displayName = "Forward";

Forward.metadata = {
  name: "Forward",
  category: "stroke/mail",
  tags: ["forward", "icon"],
  description: "Forward icon from stroke/mail category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Forward;

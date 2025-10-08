import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const RadioReceiver: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function RadioReceiver(
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
        d="M5 16V18M19 16V18M20 8H4C2.895 8 2 8.895 2 10V14C2 15.105 2.895 16 4 16H20C21.105 16 22 15.105 22 14V10C22 8.895 21.105 8 20 8ZM18 12H18.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

RadioReceiver.displayName = "RadioReceiver";

RadioReceiver.metadata = {
  name: "RadioReceiver",
  category: "stroke/devices",
  tags: ["radio", "receiver", "icon"],
  description: "RadioReceiver icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default RadioReceiver;

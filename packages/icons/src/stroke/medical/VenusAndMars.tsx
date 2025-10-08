import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const VenusAndMars: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function VenusAndMars(
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
        d="M10 20H14M12 16V22M17 2H21V6M21 2 15.54 7.46M12 16C14.761 16 17 13.761 17 11 17 8.239 14.761 6 12 6 9.239 6 7 8.239 7 11 7 13.761 9.239 16 12 16Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

VenusAndMars.displayName = "VenusAndMars";

VenusAndMars.metadata = {
  name: "VenusAndMars",
  category: "stroke/medical",
  tags: ["venus", "and", "mars", "icon"],
  description: "VenusAndMars icon from stroke/medical category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default VenusAndMars;

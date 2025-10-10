import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TramFront: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TramFront(
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
        d="M18 3H6C4.895 3 4 3.895 4 5V17C4 18.105 4.895 19 6 19H18C19.105 19 20 18.105 20 17V5C20 3.895 19.105 3 18 3ZM4 11H20M12 3V11M8 19 6 22M18 22 16 19M8 15H8.01M16 15H16.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TramFront.displayName = "TramFront";

TramFront.metadata = {
  name: "TramFront",
  category: "stroke/transportation",
  tags: ["tram", "front", "icon"],
  description: "TramFront icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TramFront;

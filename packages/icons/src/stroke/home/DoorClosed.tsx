import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const DoorClosed: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function DoorClosed(
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
        d="M10 12H10.01M18 20V6C18 5.47 17.789 4.961 17.414 4.586 17.039 4.211 16.53 4 16 4H8C7.47 4 6.961 4.211 6.586 4.586 6.211 4.961 6 5.47 6 6V20M2 20H22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

DoorClosed.displayName = "DoorClosed";

DoorClosed.metadata = {
  name: "DoorClosed",
  category: "stroke/home",
  tags: ["door", "closed", "icon"],
  description: "DoorClosed icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default DoorClosed;

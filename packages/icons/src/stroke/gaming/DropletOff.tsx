import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const DropletOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function DropletOff(
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
        d="M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5 14 7.9 12.5 5.5 12 3 11.817 3.896 11.52 4.765 11.116 5.586M2 2 22 22M8.795 8.797C8.541 9.044 8.276 9.279 8 9.5 6 11.1 5 13 5 15 5 16.57 5.527 18.094 6.497 19.328 7.468 20.561 8.824 21.433 10.35 21.803 11.875 22.173 13.48 22.02 14.908 21.368 16.336 20.716 17.503 19.603 18.222 18.208"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

DropletOff.displayName = "DropletOff";

DropletOff.metadata = {
  name: "DropletOff",
  category: "stroke/gaming",
  tags: ["droplet", "off", "icon"],
  description: "DropletOff icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default DropletOff;

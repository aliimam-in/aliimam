import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MountainSnow: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MountainSnow(
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
        d="M8 3L12 11L17 6L22 21H2L8 3Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.13989 15.08C6.75989 13.51 9.37989 13.65 11.9999 15.5C14.7399 17.44 17.4899 17.5 20.2299 15.69"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MountainSnow.displayName = "MountainSnow";

MountainSnow.metadata = {
  name: "MountainSnow",
  category: "stroke/nature",
  tags: ["mountain", "snow", "icon"],
  description: "MountainSnow icon from stroke/nature category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MountainSnow;

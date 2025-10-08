import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const LampWallDown: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function LampWallDown(
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
        d="M19.929 18.629C19.99 18.781 20.012 18.945 19.995 19.108 19.977 19.27 19.92 19.426 19.828 19.561 19.737 19.696 19.613 19.807 19.469 19.884 19.324 19.96 19.163 20 19 20H9C8.837 20 8.676 19.96 8.532 19.883 8.387 19.807 8.264 19.696 8.172 19.561 8.081 19.425 8.024 19.27 8.006 19.107 7.989 18.945 8.011 18.781 8.072 18.629L10.072 13.629C10.146 13.443 10.274 13.284 10.44 13.172 10.605 13.06 10.8 13 11 13H17C17.2 13 17.395 13.06 17.56 13.172 17.726 13.284 17.854 13.443 17.928 13.629L19.929 18.629ZM6 3C6.53 3 7.039 3.211 7.414 3.586 7.789 3.961 8 4.47 8 5V7C8 7.53 7.789 8.039 7.414 8.414 7.039 8.789 6.53 9 6 9H5C4.735 9 4.48 8.895 4.293 8.707 4.105 8.52 4 8.265 4 8V4C4 3.735 4.105 3.48 4.293 3.293 4.48 3.105 4.735 3 5 3H6ZM8 6H12C12.53 6 13.039 6.211 13.414 6.586 13.789 6.961 14 7.47 14 8V13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

LampWallDown.displayName = "LampWallDown";

LampWallDown.metadata = {
  name: "LampWallDown",
  category: "stroke/home",
  tags: ["lamp", "wall", "down", "icon"],
  description: "LampWallDown icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default LampWallDown;

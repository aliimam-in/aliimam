import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Scale3D: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Scale3D(
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
        d="M5 7V18C5 18.265 5.105 18.52 5.293 18.707 5.48 18.895 5.735 19 6 19H17M5.293 18.707 11 13M19 21C20.105 21 21 20.105 21 19 21 17.895 20.105 17 19 17 17.895 17 17 17.895 17 19 17 20.105 17.895 21 19 21ZM5 7C6.105 7 7 6.105 7 5 7 3.895 6.105 3 5 3 3.895 3 3 3.895 3 5 3 6.105 3.895 7 5 7Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Scale3D.displayName = "Scale3D";

Scale3D.metadata = {
  name: "Scale3D",
  category: "stroke/design",
  tags: ["scale", "icon"],
  description: "Scale3D icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Scale3D;

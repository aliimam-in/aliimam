import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Rotate3D: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Rotate3D(
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
        d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12 7 17.523 9.239 22 12 22 12.342 22 12.677 21.931 13 21.8M15.194 13.707 19.008 15.567 17.148 19.381"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 15.57C17.196 16.455 14.726 17 12 17C6.477 17 2 14.761 2 12C2 9.239 6.477 7 12 7C16.838 7 20.873 8.718 21.8 11"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Rotate3D.displayName = "Rotate3D";

Rotate3D.metadata = {
  name: "Rotate3D",
  category: "stroke/design",
  tags: ["rotate", "icon"],
  description: "Rotate3D icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Rotate3D;

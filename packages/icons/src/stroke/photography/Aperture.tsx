import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Aperture: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Aperture(
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
        d="M12 22C17.523 22 22 17.523 22 12 22 6.477 17.523 2 12 2 6.477 2 2 6.477 2 12 2 17.523 6.477 22 12 22ZM14.31 8 20.05 17.94M9.69 8H21.17M7.38 12 13.12 2.06M9.69 16 3.95 6.06M14.31 16H2.83M16.62 12 10.88 21.94"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Aperture.displayName = "Aperture";

Aperture.metadata = {
  name: "Aperture",
  category: "stroke/photography",
  tags: ["aperture", "icon"],
  description: "Aperture icon from stroke/photography category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Aperture;

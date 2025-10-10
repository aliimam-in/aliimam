import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Motorbike: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Motorbike(
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
        d="M18 14 17 11M3 9 9 11C9 10.47 9.211 9.961 9.586 9.586 9.961 9.211 10.47 9 11 9H13C13.497 9 13.977 9.186 14.345 9.52 14.713 9.855 14.943 10.315 14.99 10.81"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 17H11C11.265 17 11.52 16.895 11.707 16.707 11.895 16.52 12 16.265 12 16 12 14.409 12.632 12.883 13.757 11.757 14.883 10.632 16.409 10 18 10 18.265 10 18.52 9.895 18.707 9.707 18.895 9.52 19 9.265 19 9V8.25C18.789 6.945 18.07 5.776 17 5M19 20C20.657 20 22 18.657 22 17 22 15.343 20.657 14 19 14 17.343 14 16 15.343 16 17 16 18.657 17.343 20 19 20ZM5 20C6.657 20 8 18.657 8 17 8 15.343 6.657 14 5 14 3.343 14 2 15.343 2 17 2 18.657 3.343 20 5 20Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Motorbike.displayName = "Motorbike";

Motorbike.metadata = {
  name: "Motorbike",
  category: "stroke/transportation",
  tags: ["motorbike", "icon"],
  description: "Motorbike icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Motorbike;

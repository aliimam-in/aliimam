import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Stethoscope: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Stethoscope(
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
        d="M11 2V4M5 2V4M5 3H4C3.47 3 2.961 3.211 2.586 3.586 2.211 3.961 2 4.47 2 5V9C2 10.591 2.632 12.117 3.757 13.243 4.883 14.368 6.409 15 8 15 9.591 15 11.117 14.368 12.243 13.243 13.368 12.117 14 10.591 14 9V5C14 4.47 13.789 3.961 13.414 3.586 13.039 3.211 12.53 3 12 3H11"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 15C8 16.591 8.632 18.117 9.757 19.243 10.883 20.368 12.409 21 14 21 15.591 21 17.117 20.368 18.243 19.243 19.368 18.117 20 16.591 20 15V12M20 12C21.105 12 22 11.105 22 10 22 8.895 21.105 8 20 8 18.895 8 18 8.895 18 10 18 11.105 18.895 12 20 12Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Stethoscope.displayName = "Stethoscope";

Stethoscope.metadata = {
  name: "Stethoscope",
  category: "stroke/medical",
  tags: ["stethoscope", "icon"],
  description: "Stethoscope icon from stroke/medical category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Stethoscope;

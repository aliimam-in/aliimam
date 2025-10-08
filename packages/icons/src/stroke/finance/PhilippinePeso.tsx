import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const PhilippinePeso: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function PhilippinePeso(
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
        d="M20 11H4M20 7H4M7 21V4C7 3.735 7.105 3.48 7.293 3.293 7.48 3.105 7.735 3 8 3H12C13.591 3 15.117 3.632 16.243 4.757 17.368 5.883 18 7.409 18 9 18 10.591 17.368 12.117 16.243 13.243 15.117 14.368 13.591 15 12 15H7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

PhilippinePeso.displayName = "PhilippinePeso";

PhilippinePeso.metadata = {
  name: "PhilippinePeso",
  category: "stroke/finance",
  tags: ["philippine", "peso", "icon"],
  description: "PhilippinePeso icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PhilippinePeso;

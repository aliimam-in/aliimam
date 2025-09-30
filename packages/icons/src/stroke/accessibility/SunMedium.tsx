import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SunMedium: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SunMedium(
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
        d="M12 16C14.209 16 16 14.209 16 12 16 9.791 14.209 8 12 8 9.791 8 8 9.791 8 12 8 14.209 9.791 16 12 16ZM12 3V4M12 20V21M3 12H4M20 12H21M18.364 5.636 17.657 6.343M6.343 17.657 5.636 18.364M5.636 5.636 6.343 6.343M17.657 17.657 18.364 18.364"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SunMedium.displayName = "SunMedium";

SunMedium.metadata = {
  name: "SunMedium",
  category: "stroke/accessibility",
  tags: ["sun", "medium", "icon"],
  description: "SunMedium icon from stroke/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SunMedium;

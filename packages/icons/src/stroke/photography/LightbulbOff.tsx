import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const LightbulbOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function LightbulbOff(
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
        d="M16.8 11.2C17.6 10.3 18 9.2 18 8 17.998 6.918 17.703 5.856 17.147 4.928 16.591 4 15.794 3.239 14.841 2.726 13.888 2.214 12.814 1.969 11.733 2.017 10.652 2.065 9.604 2.405 8.7 3M2 2 22 22M6.3 6.3C5.945 7.186 5.869 8.159 6.084 9.088 6.298 10.018 6.793 10.86 7.5 11.5 8.2 12.2 8.8 13 9 14M9 18H15M10 22H14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

LightbulbOff.displayName = "LightbulbOff";

LightbulbOff.metadata = {
  name: "LightbulbOff",
  category: "stroke/photography",
  tags: ["lightbulb", "off", "icon"],
  description: "LightbulbOff icon from stroke/photography category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default LightbulbOff;

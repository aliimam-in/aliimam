import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ScissorsLineDashed: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ScissorsLineDashed(
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
        d="M5.42 9.42 8 12M4 10C5.105 10 6 9.105 6 8 6 6.895 5.105 6 4 6 2.895 6 2 6.895 2 8 2 9.105 2.895 10 4 10ZM14 6 5.42 14.58M4 18C5.105 18 6 17.105 6 16 6 14.895 5.105 14 4 14 2.895 14 2 14.895 2 16 2 17.105 2.895 18 4 18ZM10.8 14.8 14 18M16 12H14M22 12H20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ScissorsLineDashed.displayName = "ScissorsLineDashed";

ScissorsLineDashed.metadata = {
  name: "ScissorsLineDashed",
  category: "stroke/design",
  tags: ["scissors", "line", "dashed", "icon"],
  description: "ScissorsLineDashed icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ScissorsLineDashed;

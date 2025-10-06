import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const PaintBrushVertical: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function PaintBrushVertical(
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
        d="M10 2V4M14 2V6M17 2C17.265 2 17.52 2.105 17.707 2.293 17.895 2.48 18 2.735 18 3V12H6V3C6 2.735 6.105 2.48 6.293 2.293 6.48 2.105 6.735 2 7 2H17ZM6 12C5.735 12 5.48 12.105 5.293 12.293 5.105 12.48 5 12.735 5 13V14C5 14.53 5.211 15.039 5.586 15.414 5.961 15.789 6.47 16 7 16H9C9.265 16 9.52 16.105 9.707 16.293 9.895 16.48 10 16.735 10 17V19.9C10 20.43 10.211 20.939 10.586 21.314 10.961 21.689 11.47 21.9 12 21.9 12.53 21.9 13.039 21.689 13.414 21.314 13.789 20.939 14 20.43 14 19.9V17C14 16.735 14.105 16.48 14.293 16.293 14.48 16.105 14.735 16 15 16H17C17.53 16 18.039 15.789 18.414 15.414 18.789 15.039 19 14.53 19 14V13C19 12.735 18.895 12.48 18.707 12.293 18.52 12.105 18.265 12 18 12"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

PaintBrushVertical.displayName = "PaintBrushVertical";

PaintBrushVertical.metadata = {
  name: "PaintBrushVertical",
  category: "stroke/design",
  tags: ["paint", "brush", "vertical", "icon"],
  description: "PaintBrushVertical icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PaintBrushVertical;

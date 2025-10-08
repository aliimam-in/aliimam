import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const AlignStartHorizontal: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function AlignStartHorizontal(
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
        d="M8 6H6C4.895 6 4 6.895 4 8V20C4 21.105 4.895 22 6 22H8C9.105 22 10 21.105 10 20V8C10 6.895 9.105 6 8 6ZM18 6H16C14.895 6 14 6.895 14 8V13C14 14.105 14.895 15 16 15H18C19.105 15 20 14.105 20 13V8C20 6.895 19.105 6 18 6ZM22 2H2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

AlignStartHorizontal.displayName = "AlignStartHorizontal";

AlignStartHorizontal.metadata = {
  name: "AlignStartHorizontal",
  category: "stroke/layout",
  tags: ["align", "start", "horizontal", "icon"],
  description: "AlignStartHorizontal icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AlignStartHorizontal;

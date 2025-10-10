import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const PilcrowLeft: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function PilcrowLeft(
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
        d="M14 3V14M14 9H11C10.204 9 9.441 8.684 8.879 8.121 8.316 7.559 8 6.796 8 6 8 5.204 8.316 4.441 8.879 3.879 9.441 3.316 10.204 3 11 3H20M18 3V14M22 18H2L6 14M6 22 2 18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

PilcrowLeft.displayName = "PilcrowLeft";

PilcrowLeft.metadata = {
  name: "PilcrowLeft",
  category: "stroke/textFormatting",
  tags: ["pilcrow", "left", "icon"],
  description: "PilcrowLeft icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PilcrowLeft;

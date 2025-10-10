import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const PilcrowRight: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function PilcrowRight(
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
        d="M10 3V14M10 9H7C6.204 9 5.441 8.684 4.879 8.121 4.316 7.559 4 6.796 4 6 4 5.204 4.316 4.441 4.879 3.879 5.441 3.316 6.204 3 7 3H15M14 3V14M18 14 22 18H2M22 18 18 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

PilcrowRight.displayName = "PilcrowRight";

PilcrowRight.metadata = {
  name: "PilcrowRight",
  category: "stroke/textFormatting",
  tags: ["pilcrow", "right", "icon"],
  description: "PilcrowRight icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PilcrowRight;

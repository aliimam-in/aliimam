import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const AlignEndHorizontal: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function AlignEndHorizontal(
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
        d="M8 2H6C4.895 2 4 2.895 4 4V16C4 17.105 4.895 18 6 18H8C9.105 18 10 17.105 10 16V4C10 2.895 9.105 2 8 2ZM18 9H16C14.895 9 14 9.895 14 11V16C14 17.105 14.895 18 16 18H18C19.105 18 20 17.105 20 16V11C20 9.895 19.105 9 18 9ZM22 22H2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

AlignEndHorizontal.displayName = "AlignEndHorizontal";

AlignEndHorizontal.metadata = {
  name: "AlignEndHorizontal",
  category: "stroke/layout",
  tags: ["align", "end", "horizontal", "icon"],
  description: "AlignEndHorizontal icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AlignEndHorizontal;

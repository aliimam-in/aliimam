import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const AlignVerticalJustifyEnd: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function AlignVerticalJustifyEnd(
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
        d="M17 12H7C5.895 12 5 12.895 5 14V16C5 17.105 5.895 18 7 18H17C18.105 18 19 17.105 19 16V14C19 12.895 18.105 12 17 12ZM15 2H9C7.895 2 7 2.895 7 4V6C7 7.105 7.895 8 9 8H15C16.105 8 17 7.105 17 6V4C17 2.895 16.105 2 15 2ZM2 22H22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

AlignVerticalJustifyEnd.displayName = "AlignVerticalJustifyEnd";

AlignVerticalJustifyEnd.metadata = {
  name: "AlignVerticalJustifyEnd",
  category: "stroke/layout",
  tags: ["align", "vertical", "justify", "end", "icon"],
  description: "AlignVerticalJustifyEnd icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AlignVerticalJustifyEnd;

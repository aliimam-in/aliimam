import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const AlignVerticalJustifyStart: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function AlignVerticalJustifyStart(
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
        d="M17 16H7C5.895 16 5 16.895 5 18V20C5 21.105 5.895 22 7 22H17C18.105 22 19 21.105 19 20V18C19 16.895 18.105 16 17 16ZM15 6H9C7.895 6 7 6.895 7 8V10C7 11.105 7.895 12 9 12H15C16.105 12 17 11.105 17 10V8C17 6.895 16.105 6 15 6ZM2 2H22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

AlignVerticalJustifyStart.displayName = "AlignVerticalJustifyStart";

AlignVerticalJustifyStart.metadata = {
  name: "AlignVerticalJustifyStart",
  category: "stroke/layout",
  tags: ["align", "vertical", "justify", "start", "icon"],
  description: "AlignVerticalJustifyStart icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AlignVerticalJustifyStart;

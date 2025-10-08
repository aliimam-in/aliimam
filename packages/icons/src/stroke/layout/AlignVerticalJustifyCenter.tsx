import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const AlignVerticalJustifyCenter: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function AlignVerticalJustifyCenter(
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
        d="M17 16H7C5.895 16 5 16.895 5 18V20C5 21.105 5.895 22 7 22H17C18.105 22 19 21.105 19 20V18C19 16.895 18.105 16 17 16ZM15 2H9C7.895 2 7 2.895 7 4V6C7 7.105 7.895 8 9 8H15C16.105 8 17 7.105 17 6V4C17 2.895 16.105 2 15 2ZM2 12H22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

AlignVerticalJustifyCenter.displayName = "AlignVerticalJustifyCenter";

AlignVerticalJustifyCenter.metadata = {
  name: "AlignVerticalJustifyCenter",
  category: "stroke/layout",
  tags: ["align", "vertical", "justify", "center", "icon"],
  description: "AlignVerticalJustifyCenter icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AlignVerticalJustifyCenter;

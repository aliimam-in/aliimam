import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const AlignVerticalSpaceBetween: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function AlignVerticalSpaceBetween(
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
        d="M17 15H7C5.895 15 5 15.895 5 17V19C5 20.105 5.895 21 7 21H17C18.105 21 19 20.105 19 19V17C19 15.895 18.105 15 17 15ZM15 3H9C7.895 3 7 3.895 7 5V7C7 8.105 7.895 9 9 9H15C16.105 9 17 8.105 17 7V5C17 3.895 16.105 3 15 3ZM2 21H22M2 3H22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

AlignVerticalSpaceBetween.displayName = "AlignVerticalSpaceBetween";

AlignVerticalSpaceBetween.metadata = {
  name: "AlignVerticalSpaceBetween",
  category: "stroke/layout",
  tags: ["align", "vertical", "space", "between", "icon"],
  description: "AlignVerticalSpaceBetween icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AlignVerticalSpaceBetween;

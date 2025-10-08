import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const AlignHorizontalSpaceBetween: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function AlignHorizontalSpaceBetween(
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
        d="M7 5H5C3.895 5 3 5.895 3 7V17C3 18.105 3.895 19 5 19H7C8.105 19 9 18.105 9 17V7C9 5.895 8.105 5 7 5ZM19 7H17C15.895 7 15 7.895 15 9V15C15 16.105 15.895 17 17 17H19C20.105 17 21 16.105 21 15V9C21 7.895 20.105 7 19 7ZM3 2V22M21 2V22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

AlignHorizontalSpaceBetween.displayName = "AlignHorizontalSpaceBetween";

AlignHorizontalSpaceBetween.metadata = {
  name: "AlignHorizontalSpaceBetween",
  category: "stroke/layout",
  tags: ["align", "horizontal", "space", "between", "icon"],
  description: "AlignHorizontalSpaceBetween icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AlignHorizontalSpaceBetween;

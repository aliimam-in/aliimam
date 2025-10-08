import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const AlignHorizontalSpaceAround: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function AlignHorizontalSpaceAround(
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
        d="M13 7H11C9.895 7 9 7.895 9 9V15C9 16.105 9.895 17 11 17H13C14.105 17 15 16.105 15 15V9C15 7.895 14.105 7 13 7ZM4 22V2M20 22V2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

AlignHorizontalSpaceAround.displayName = "AlignHorizontalSpaceAround";

AlignHorizontalSpaceAround.metadata = {
  name: "AlignHorizontalSpaceAround",
  category: "stroke/layout",
  tags: ["align", "horizontal", "space", "around", "icon"],
  description: "AlignHorizontalSpaceAround icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AlignHorizontalSpaceAround;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const AlignVerticalSpaceAround: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function AlignVerticalSpaceAround(
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
        d="M15 9H9C7.895 9 7 9.895 7 11V13C7 14.105 7.895 15 9 15H15C16.105 15 17 14.105 17 13V11C17 9.895 16.105 9 15 9ZM22 20H2M22 4H2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

AlignVerticalSpaceAround.displayName = "AlignVerticalSpaceAround";

AlignVerticalSpaceAround.metadata = {
  name: "AlignVerticalSpaceAround",
  category: "stroke/layout",
  tags: ["align", "vertical", "space", "around", "icon"],
  description: "AlignVerticalSpaceAround icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AlignVerticalSpaceAround;

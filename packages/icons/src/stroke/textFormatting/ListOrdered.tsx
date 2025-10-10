import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ListOrdered: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ListOrdered(
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
        d="M11 5H21M11 12H21M11 19H21M4 4H5V9M4 9H6M6.5 20H3.4C3.4 19 6 18.075 6 16.5 6 16.199 5.909 15.904 5.739 15.655 5.569 15.406 5.328 15.214 5.048 15.103 4.767 14.993 4.46 14.97 4.166 15.038 3.872 15.105 3.605 15.259 3.4 15.48"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ListOrdered.displayName = "ListOrdered";

ListOrdered.metadata = {
  name: "ListOrdered",
  category: "stroke/textFormatting",
  tags: ["list", "ordered", "icon"],
  description: "ListOrdered icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ListOrdered;

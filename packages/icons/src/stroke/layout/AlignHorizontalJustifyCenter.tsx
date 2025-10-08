import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const AlignHorizontalJustifyCenter: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function AlignHorizontalJustifyCenter(
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
        d="M6 5H4C2.895 5 2 5.895 2 7V17C2 18.105 2.895 19 4 19H6C7.105 19 8 18.105 8 17V7C8 5.895 7.105 5 6 5ZM20 7H18C16.895 7 16 7.895 16 9V15C16 16.105 16.895 17 18 17H20C21.105 17 22 16.105 22 15V9C22 7.895 21.105 7 20 7ZM12 2V22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

AlignHorizontalJustifyCenter.displayName = "AlignHorizontalJustifyCenter";

AlignHorizontalJustifyCenter.metadata = {
  name: "AlignHorizontalJustifyCenter",
  category: "stroke/layout",
  tags: ["align", "horizontal", "justify", "center", "icon"],
  description: "AlignHorizontalJustifyCenter icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AlignHorizontalJustifyCenter;

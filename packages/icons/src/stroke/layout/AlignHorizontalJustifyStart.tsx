import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const AlignHorizontalJustifyStart: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function AlignHorizontalJustifyStart(
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
        d="M10 5H8C6.895 5 6 5.895 6 7V17C6 18.105 6.895 19 8 19H10C11.105 19 12 18.105 12 17V7C12 5.895 11.105 5 10 5ZM20 7H18C16.895 7 16 7.895 16 9V15C16 16.105 16.895 17 18 17H20C21.105 17 22 16.105 22 15V9C22 7.895 21.105 7 20 7ZM2 2V22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

AlignHorizontalJustifyStart.displayName = "AlignHorizontalJustifyStart";

AlignHorizontalJustifyStart.metadata = {
  name: "AlignHorizontalJustifyStart",
  category: "stroke/layout",
  tags: ["align", "horizontal", "justify", "start", "icon"],
  description: "AlignHorizontalJustifyStart icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AlignHorizontalJustifyStart;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const AlignHorizontalDistributeCenter: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function AlignHorizontalDistributeCenter(
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
        d="M8 5H6C4.895 5 4 5.895 4 7V17C4 18.105 4.895 19 6 19H8C9.105 19 10 18.105 10 17V7C10 5.895 9.105 5 8 5ZM18 7H16C14.895 7 14 7.895 14 9V15C14 16.105 14.895 17 16 17H18C19.105 17 20 16.105 20 15V9C20 7.895 19.105 7 18 7ZM17 22V17M17 7V2M7 22V19M7 5V2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

AlignHorizontalDistributeCenter.displayName = "AlignHorizontalDistributeCenter";

AlignHorizontalDistributeCenter.metadata = {
  name: "AlignHorizontalDistributeCenter",
  category: "stroke/layout",
  tags: ["align", "horizontal", "distribute", "center", "icon"],
  description:
    "AlignHorizontalDistributeCenter icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AlignHorizontalDistributeCenter;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CloudOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CloudOff(
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
        d="M2 2 22 22M5.782 5.782C4.388 6.503 3.277 7.671 2.627 9.098 1.976 10.526 1.825 12.131 2.196 13.656 2.567 15.18 3.439 16.536 4.673 17.505 5.907 18.474 7.431 19.001 9 19H17.5C17.943 19 18.383 18.935 18.807 18.807M21.532 16.5C21.872 15.814 22.032 15.052 21.996 14.287 21.96 13.522 21.729 12.779 21.325 12.128 20.921 11.477 20.358 10.94 19.689 10.568 19.019 10.195 18.266 10 17.5 10H15.71C15.328 8.719 14.587 7.575 13.575 6.701 12.563 5.828 11.323 5.262 10 5.07"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CloudOff.displayName = "CloudOff";

CloudOff.metadata = {
  name: "CloudOff",
  category: "stroke/connectivity",
  tags: ["cloud", "off", "icon"],
  description: "CloudOff icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CloudOff;

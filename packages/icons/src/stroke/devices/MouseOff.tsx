import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MouseOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MouseOff(
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
        d="M12 6V6.343M18.218 18.218C17.497 19.612 16.329 20.723 14.902 21.373 13.474 22.024 11.869 22.175 10.344 21.804 8.82 21.433 7.464 20.561 6.495 19.327 5.526 18.093 4.999 16.569 5 15V9C5 7.88 5.268 6.777 5.782 5.782M19 13.343V9C19 7.777 18.68 6.575 18.071 5.514 17.463 4.454 16.587 3.571 15.531 2.954 14.475 2.337 13.275 2.008 12.052 1.999 10.829 1.989 9.625 2.301 8.56 2.902M22 22 2 2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MouseOff.displayName = "MouseOff";

MouseOff.metadata = {
  name: "MouseOff",
  category: "stroke/devices",
  tags: ["mouse", "off", "icon"],
  description: "MouseOff icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MouseOff;

import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const StretchHorizontal: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function StretchHorizontal(
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
        d="M20 4H4C2.895 4 2 4.895 2 6V8C2 9.105 2.895 10 4 10H20C21.105 10 22 9.105 22 8V6C22 4.895 21.105 4 20 4ZM20 14H4C2.895 14 2 14.895 2 16V18C2 19.105 2.895 20 4 20H20C21.105 20 22 19.105 22 18V16C22 14.895 21.105 14 20 14Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

StretchHorizontal.displayName = "StretchHorizontal";

StretchHorizontal.metadata = {
  name: "StretchHorizontal",
  category: "stroke/layout",
  tags: ["stretch", "horizontal", "icon"],
  description: "StretchHorizontal icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default StretchHorizontal;

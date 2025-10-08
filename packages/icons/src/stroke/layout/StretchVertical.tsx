import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const StretchVertical: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function StretchVertical(
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
        d="M8 2H6C4.895 2 4 2.895 4 4V20C4 21.105 4.895 22 6 22H8C9.105 22 10 21.105 10 20V4C10 2.895 9.105 2 8 2ZM18 2H16C14.895 2 14 2.895 14 4V20C14 21.105 14.895 22 16 22H18C19.105 22 20 21.105 20 20V4C20 2.895 19.105 2 18 2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

StretchVertical.displayName = "StretchVertical";

StretchVertical.metadata = {
  name: "StretchVertical",
  category: "stroke/layout",
  tags: ["stretch", "vertical", "icon"],
  description: "StretchVertical icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default StretchVertical;

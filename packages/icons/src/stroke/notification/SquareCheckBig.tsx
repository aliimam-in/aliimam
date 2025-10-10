import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SquareCheckBig: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SquareCheckBig(
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
        d="M21 10.656V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H17.344"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11L12 14L22 4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SquareCheckBig.displayName = "SquareCheckBig";

SquareCheckBig.metadata = {
  name: "SquareCheckBig",
  category: "stroke/notification",
  tags: ["square", "check", "big", "icon"],
  description: "SquareCheckBig icon from stroke/notification category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquareCheckBig;

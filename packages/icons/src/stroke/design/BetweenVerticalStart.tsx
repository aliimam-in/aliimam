import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const BetweenVerticalStart: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function BetweenVerticalStart(
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
        d="M9 8H4C3.448 8 3 8.448 3 9V20C3 20.552 3.448 21 4 21H9C9.552 21 10 20.552 10 20V9C10 8.448 9.552 8 9 8ZM15 2 12 5 9 2M20 8H15C14.448 8 14 8.448 14 9V20C14 20.552 14.448 21 15 21H20C20.552 21 21 20.552 21 20V9C21 8.448 20.552 8 20 8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

BetweenVerticalStart.displayName = "BetweenVerticalStart";

BetweenVerticalStart.metadata = {
  name: "BetweenVerticalStart",
  category: "stroke/design",
  tags: ["between", "vertical", "start", "icon"],
  description: "BetweenVerticalStart icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BetweenVerticalStart;

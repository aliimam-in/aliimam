import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ZoomOut: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ZoomOut(
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
        d="M11 19C15.418 19 19 15.418 19 11 19 6.582 15.418 3 11 3 6.582 3 3 6.582 3 11 3 15.418 6.582 19 11 19ZM21 21 16.65 16.65M8 11H14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ZoomOut.displayName = "ZoomOut";

ZoomOut.metadata = {
  name: "ZoomOut",
  category: "stroke/accessibility",
  tags: ["zoom", "out", "icon"],
  description: "ZoomOut icon from stroke/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ZoomOut;

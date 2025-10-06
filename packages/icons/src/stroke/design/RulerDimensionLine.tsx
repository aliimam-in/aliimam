import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const RulerDimensionLine: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function RulerDimensionLine(
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
        d="M12 15V11.986M16 15V11.986M20 6H4M20 8V4M4 8V4M8 15V11.986M20 12H4C3.448 12 3 12.448 3 13V18C3 18.552 3.448 19 4 19H20C20.552 19 21 18.552 21 18V13C21 12.448 20.552 12 20 12Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

RulerDimensionLine.displayName = "RulerDimensionLine";

RulerDimensionLine.metadata = {
  name: "RulerDimensionLine",
  category: "stroke/design",
  tags: ["ruler", "dimension", "line", "icon"],
  description: "RulerDimensionLine icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default RulerDimensionLine;

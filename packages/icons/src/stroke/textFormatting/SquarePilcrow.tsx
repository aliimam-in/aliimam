import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SquarePilcrow: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SquarePilcrow(
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
        d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12H9.5C8.837 12 8.201 11.737 7.732 11.268 7.263 10.799 7 10.163 7 9.5 7 8.837 7.263 8.201 7.732 7.732 8.201 7.263 8.837 7 9.5 7H17M12 7V17M16 7V17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SquarePilcrow.displayName = "SquarePilcrow";

SquarePilcrow.metadata = {
  name: "SquarePilcrow",
  category: "stroke/textFormatting",
  tags: ["square", "pilcrow", "icon"],
  description: "SquarePilcrow icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquarePilcrow;

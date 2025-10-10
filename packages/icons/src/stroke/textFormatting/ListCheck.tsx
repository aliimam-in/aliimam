import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ListCheck: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ListCheck(
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
        d="M16 5H3M16 12H3M11 19H3M15 18 17 20 21 16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ListCheck.displayName = "ListCheck";

ListCheck.metadata = {
  name: "ListCheck",
  category: "stroke/textFormatting",
  tags: ["list", "check", "icon"],
  description: "ListCheck icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ListCheck;

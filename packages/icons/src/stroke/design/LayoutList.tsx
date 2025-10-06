import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const LayoutList: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function LayoutList(
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
        d="M9 3H4C3.448 3 3 3.448 3 4V9C3 9.552 3.448 10 4 10H9C9.552 10 10 9.552 10 9V4C10 3.448 9.552 3 9 3ZM9 14H4C3.448 14 3 14.448 3 15V20C3 20.552 3.448 21 4 21H9C9.552 21 10 20.552 10 20V15C10 14.448 9.552 14 9 14ZM14 4H21M14 9H21M14 15H21M14 20H21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

LayoutList.displayName = "LayoutList";

LayoutList.metadata = {
  name: "LayoutList",
  category: "stroke/design",
  tags: ["layout", "list", "icon"],
  description: "LayoutList icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default LayoutList;

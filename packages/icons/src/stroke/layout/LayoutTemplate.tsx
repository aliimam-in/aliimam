import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const LayoutTemplate: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function LayoutTemplate(
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
        d="M20 3H4C3.448 3 3 3.448 3 4V9C3 9.552 3.448 10 4 10H20C20.552 10 21 9.552 21 9V4C21 3.448 20.552 3 20 3ZM11 14H4C3.448 14 3 14.448 3 15V20C3 20.552 3.448 21 4 21H11C11.552 21 12 20.552 12 20V15C12 14.448 11.552 14 11 14ZM20 14H17C16.448 14 16 14.448 16 15V20C16 20.552 16.448 21 17 21H20C20.552 21 21 20.552 21 20V15C21 14.448 20.552 14 20 14Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

LayoutTemplate.displayName = "LayoutTemplate";

LayoutTemplate.metadata = {
  name: "LayoutTemplate",
  category: "stroke/layout",
  tags: ["layout", "template", "icon"],
  description: "LayoutTemplate icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default LayoutTemplate;

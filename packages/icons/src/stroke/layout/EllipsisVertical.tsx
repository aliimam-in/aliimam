import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const EllipsisVertical: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function EllipsisVertical(
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
        d="M12 13C12.552 13 13 12.552 13 12 13 11.448 12.552 11 12 11 11.448 11 11 11.448 11 12 11 12.552 11.448 13 12 13ZM12 6C12.552 6 13 5.552 13 5 13 4.448 12.552 4 12 4 11.448 4 11 4.448 11 5 11 5.552 11.448 6 12 6ZM12 20C12.552 20 13 19.552 13 19 13 18.448 12.552 18 12 18 11.448 18 11 18.448 11 19 11 19.552 11.448 20 12 20Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

EllipsisVertical.displayName = "EllipsisVertical";

EllipsisVertical.metadata = {
  name: "EllipsisVertical",
  category: "stroke/layout",
  tags: ["ellipsis", "vertical", "icon"],
  description: "EllipsisVertical icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default EllipsisVertical;

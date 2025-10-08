import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Ungroup: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Ungroup(
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
        d="M12 4H6C5.448 4 5 4.448 5 5V9C5 9.552 5.448 10 6 10H12C12.552 10 13 9.552 13 9V5C13 4.448 12.552 4 12 4ZM18 14H12C11.448 14 11 14.448 11 15V19C11 19.552 11.448 20 12 20H18C18.552 20 19 19.552 19 19V15C19 14.448 18.552 14 18 14Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Ungroup.displayName = "Ungroup";

Ungroup.metadata = {
  name: "Ungroup",
  category: "stroke/files",
  tags: ["ungroup", "icon"],
  description: "Ungroup icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ungroup;

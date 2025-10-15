import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Bangladesh: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Bangladesh(
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
      viewBox="0 0 32 32"
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
        d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
        fill="#2d694f"
      />
      <path
        d="M16 23C19.866 23 23 19.866 23 16C23 12.134 19.866 9 16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23Z"
        fill="#e13e47"
      />
    </svg>
  );
});

Bangladesh.displayName = "Bangladesh";

Bangladesh.metadata = {
  name: "Bangladesh",
  category: "symbols/flags",
  tags: ["bangladesh", "icon"],
  description: "Bangladesh icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Bangladesh;

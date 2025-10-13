import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Maldives: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Maldives(
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
        fill="#c22b38"
      />
      <path d="M6 9H26V23H6V9Z" fill="#377d40" />
      <path
        d="M15.217 15.9999C15.217 14.2529 16.469 12.7989 18.125 12.4849C17.908 12.4439 17.683 12.4209 17.454 12.4209C15.477 12.4209 13.875 14.0229 13.875 15.9999C13.875 17.9769 15.477 19.5789 17.454 19.5789C17.683 19.5789 17.908 19.5569 18.125 19.5149C16.469 19.2009 15.217 17.7469 15.217 15.9999Z"
        fill="#fff"
      />
    </svg>
  );
});

Maldives.displayName = "Maldives";

Maldives.metadata = {
  name: "Maldives",
  category: "flags/flags",
  tags: ["maldives", "icon"],
  description: "Maldives icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Maldives;

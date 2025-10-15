import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Greenland: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Greenland(
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
        d="M31 8C31 5.7908 29.2092 4 27 4H5C2.7908 4 1 5.7908 1 8V17H31V8Z"
        fill="#fff"
      />
      <path
        d="M5 28H27C29.2092 28 31 26.2092 31 24V16H1V24C1 26.2092 2.7908 28 5 28Z"
        fill="#ca0a2b"
      />
      <path
        d="M11 22C14.3137 22 17 19.3137 17 16C17 12.6863 14.3137 10 11 10C7.68629 10 5 12.6863 5 16C5 19.3137 7.68629 22 11 22Z"
        fill="#fff"
      />
      <path
        d="M11 10C7.6863 10 5 12.6863 5 16H17C17 12.6863 14.3137 10 11 10Z"
        fill="#ca0a2b"
      />
    </svg>
  );
});

Greenland.displayName = "Greenland";

Greenland.metadata = {
  name: "Greenland",
  category: "symbols/flags",
  tags: ["greenland", "icon"],
  description: "Greenland icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Greenland;

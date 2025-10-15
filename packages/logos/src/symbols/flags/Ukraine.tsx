import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Ukraine: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Ukraine(
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
        d="M31 8C31 5.791 29.209 4 27 4H5C2.791 4 1 5.791 1 8V17H31V8Z"
        fill="#2455b2"
      />
      <path
        d="M5 28H27C29.209 28 31 26.209 31 24V16H1V24C1 26.209 2.791 28 5 28Z"
        fill="#f9da49"
      />
    </svg>
  );
});

Ukraine.displayName = "Ukraine";

Ukraine.metadata = {
  name: "Ukraine",
  category: "symbols/flags",
  tags: ["ukraine", "icon"],
  description: "Ukraine icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ukraine;

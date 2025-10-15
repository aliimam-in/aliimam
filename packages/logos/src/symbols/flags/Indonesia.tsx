import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Indonesia: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Indonesia(
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
        fill="#ea3323"
      />
      <path
        d="M5 28H27C29.209 28 31 26.209 31 24V16H1V24C1 26.209 2.791 28 5 28Z"
        fill="#fff"
      />
    </svg>
  );
});

Indonesia.displayName = "Indonesia";

Indonesia.metadata = {
  name: "Indonesia",
  category: "symbols/flags",
  tags: ["indonesia", "icon"],
  description: "Indonesia icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Indonesia;

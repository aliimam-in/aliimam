import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Nigeria: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Nigeria(
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
      <path d="M10 4H22V28H10V4Z" fill="#fff" />
      <path
        d="M5 4H11V28H5C2.792 28 1 26.208 1 24V8C1 5.792 2.792 4 5 4ZM27 28H21L21 4H27C29.208 4 31 5.792 31 8L31 24C31 26.208 29.208 28 27 28Z"
        fill="#3b8655"
      />
    </svg>
  );
});

Nigeria.displayName = "Nigeria";

Nigeria.metadata = {
  name: "Nigeria",
  category: "symbols/flags",
  tags: ["nigeria", "icon"],
  description: "Nigeria icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Nigeria;

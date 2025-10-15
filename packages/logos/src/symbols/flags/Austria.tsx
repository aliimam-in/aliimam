import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Austria: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Austria(
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
      <path d="M1 11H31V21H1V11Z" fill="#fff" />
      <path
        d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4ZM27 28 5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z"
        fill="#b92932"
      />
    </svg>
  );
});

Austria.displayName = "Austria";

Austria.metadata = {
  name: "Austria",
  category: "symbols/flags",
  tags: ["austria", "icon"],
  description: "Austria icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Austria;

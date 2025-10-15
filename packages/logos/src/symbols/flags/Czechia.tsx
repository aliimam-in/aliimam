import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Czechia: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Czechia(
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
        d="M1 24C1 26.209 2.791 28 5 28H27C29.209 28 31 26.209 31 24V15H1V24Z"
        fill="#c62d25"
      />
      <path
        d="M27 4H5C2.791 4 1 5.791 1 8V16H31V8C31 5.791 29.209 4 27 4Z"
        fill="#fff"
      />
      <path
        d="M2.316 26.947L16 16L2.316 5.05298C1.513 5.78498 1 6.82898 1 7.99998V24C1 25.172 1.513 26.216 2.316 26.947Z"
        fill="#1e427b"
      />
    </svg>
  );
});

Czechia.displayName = "Czechia";

Czechia.metadata = {
  name: "Czechia",
  category: "symbols/flags",
  tags: ["czechia", "icon"],
  description: "Czechia icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Czechia;

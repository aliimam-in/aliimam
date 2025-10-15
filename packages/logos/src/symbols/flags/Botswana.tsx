import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Botswana: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Botswana(
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
      <path d="M1 13H31V19H1V13Z" fill="currentColor" />
      <path
        d="M5 4H27C29.208 4 31 5.792 31 8V14H1V8C1 5.792 2.792 4 5 4ZM27 28 5 28C2.792 28 1 26.208 1 24V18L31 18V24C31 26.208 29.208 28 27 28Z"
        fill="#7ba9d0"
      />
      <path d="M1 12H31V14H1V12ZM1 18H31V20H1V18Z" fill="#fff" />
    </svg>
  );
});

Botswana.displayName = "Botswana";

Botswana.metadata = {
  name: "Botswana",
  category: "symbols/flags",
  tags: ["botswana", "icon"],
  description: "Botswana icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Botswana;

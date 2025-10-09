import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CostaRica: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CostaRica(
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
        d="M5 4H27C29.208 4 31 5.792 31 8V9H1V8C1 5.792 2.792 4 5 4ZM27 28 5 28C2.792 28 1 26.208 1 24V23L31 23V24C31 26.208 29.208 28 27 28Z"
        fill="#030a85"
      />
      <path d="M1 8H31V13H1V8ZM1 19H31V24H1V19Z" fill="#fff" />
      <path d="M1 12H31V20H1V12Z" fill="#c93927" />
    </svg>
  );
});

CostaRica.displayName = "CostaRica";

CostaRica.metadata = {
  name: "CostaRica",
  category: "flags/flags",
  tags: ["costa", "rica", "icon"],
  description: "CostaRica icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CostaRica;

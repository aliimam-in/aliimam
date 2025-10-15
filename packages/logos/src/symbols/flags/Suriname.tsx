import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Suriname: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Suriname(
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
      <path d="M1 8H31V24H1V8Z" fill="#a6222f" />
      <path
        d="M5 4H27C29.208 4 31 5.792 31 8V9H1V8C1 5.792 2.792 4 5 4ZM27 28 5 28C2.792 28 1 26.208 1 24V23L31 23V24C31 26.208 29.208 28 27 28Z"
        fill="#497e44"
      />
      <path d="M1 9H31V10H1V9ZM1 22H31V23H1V22Z" fill="#fff" />
      <path
        d="M18.008 17.18L21.257 14.82H17.241L16 11L14.759 14.82H10.743L13.992 17.18L12.751 21L16 18.639L19.249 21L18.008 17.18Z"
        fill="#e7cb48"
      />
    </svg>
  );
});

Suriname.displayName = "Suriname";

Suriname.metadata = {
  name: "Suriname",
  category: "symbols/flags",
  tags: ["suriname", "icon"],
  description: "Suriname icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Suriname;

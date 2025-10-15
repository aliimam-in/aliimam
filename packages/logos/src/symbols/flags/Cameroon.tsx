import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Cameroon: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Cameroon(
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
      <path d="M10 4H22V28H10V4Z" fill="#be2a2c" />
      <path
        d="M5 4H11V28H5C2.792 28 1 26.208 1 24V8C1 5.792 2.792 4 5 4Z"
        fill="#357960"
      />
      <path
        d="M27 28H21L21 4H27C29.208 4 31 5.792 31 8L31 24C31 26.208 29.208 28 27 28ZM17.516 16.391 19.969 14.609H16.937L16 11.725 15.063 14.609H12.031L14.484 16.391 13.547 19.275 16 17.492 18.453 19.275 17.516 16.391Z"
        fill="#f6d44a"
      />
    </svg>
  );
});

Cameroon.displayName = "Cameroon";

Cameroon.metadata = {
  name: "Cameroon",
  category: "symbols/flags",
  tags: ["cameroon", "icon"],
  description: "Cameroon icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Cameroon;

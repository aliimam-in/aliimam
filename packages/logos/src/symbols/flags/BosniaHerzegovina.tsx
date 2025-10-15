import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const BosniaHerzegovina: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function BosniaHerzegovina(
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
        d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
        fill="#091c91"
      />
      <path
        d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
        fill="#091c91"
      />
      <path d="M24 28L8 4H24V28Z" fill="#f6ce46" />
      <path
        d="M5 4C4.458 4 3.942 4.11 3.471 4.306L3.913 4.627 3.386 6.25 4.767 5.247 6.148 6.25 5.621 4.627 6.483 4H5ZM8.713 9.377 10.094 8.373H8.387L7.859 6.75 7.332 8.373H5.625L7.006 9.377 6.478 11 7.859 9.997 9.24 11 8.713 9.377ZM11.807 14.127 13.187 13.123H11.481L10.953 11.5 10.426 13.123H8.719L10.1 14.127 9.572 15.75 10.953 14.747 12.334 15.75 11.807 14.127ZM14.9 18.877 16.281 17.873H14.574L14.047 16.25 13.519 17.873H11.813L13.193 18.877 12.666 20.5 14.047 19.497 15.428 20.5 14.9 18.877ZM17.994 23.627 19.375 22.623H17.668L17.141 21 16.613 22.623H14.906L16.287 23.627 15.76 25.25 17.141 24.247 18.522 25.25 17.994 23.627ZM21.606 28 22.469 27.373H20.762L20.234 25.75 19.707 27.373H18L18.862 28H21.606Z"
        fill="#fff"
      />
    </svg>
  );
});

BosniaHerzegovina.displayName = "BosniaHerzegovina";

BosniaHerzegovina.metadata = {
  name: "BosniaHerzegovina",
  category: "symbols/flags",
  tags: ["bosnia", "herzegovina", "icon"],
  description: "BosniaHerzegovina icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BosniaHerzegovina;

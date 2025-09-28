import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Algeria: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Algeria(
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
        d="M27 28L15 28L15 4L27 4C29.208 4 31 5.792 31 8L31 24C31 26.208 29.208 28 27 28Z"
        fill="#fff"
      />
      <path
        d="M5 4H16V28H5C2.792 28 1 26.208 1 24V8C1 5.792 2.792 4 5 4Z"
        fill="#2b6536"
      />
      <path
        d="M19.091 17.4269L20.769 19.7369V16.8819L23.483 15.9999L20.769 15.1179V12.2629L19.091 14.5729L16.376 13.6909L18.054 15.9999L16.376 18.3089L19.091 17.4269Z"
        fill="#c22b38"
      />
      <path
        d="M14.345 20.907C11.635 18.737 11.197 14.781 13.367 12.071C15.537 9.36095 19.493 8.92295 22.203 11.093C22.564 11.382 22.892 11.71 23.181 12.071C21.011 8.31295 16.205 7.02495 12.447 9.19495C8.68899 11.365 7.40099 16.171 9.57099 19.929C11.741 23.687 16.547 24.975 20.305 22.805C21.5 22.115 22.492 21.123 23.181 19.929C21.011 22.639 17.055 23.077 14.345 20.907Z"
        fill="#c22b38"
      />
    </svg>
  );
});

Algeria.displayName = "Algeria";

Algeria.metadata = {
  name: "Algeria",
  category: "flags/flags",
  tags: ["algeria", "icon"],
  description: "Algeria icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Algeria;
